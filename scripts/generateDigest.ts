import { access, appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { parseArgs } from "node:util";
import matter from "gray-matter";
import { z } from "zod";
import { articleSchema, dateSchema } from "../src/lib/editorial";
import { readArticles, readSubmissions } from "./content";
import { createLogger } from "./logger";
import {
    editionDate,
    CopilotResearchProvider,
    validateResearch,
    type ResearchRequest,
    type ResearchResult,
    type Submission,
} from "./research";

const { values } = parseArgs({
    options: {
        date: { type: "string" },
        fixture: { type: "string" },
        "log-level": { type: "string", default: "error" },
    },
});
const logger = createLogger(values["log-level"]);

function plainMarkdown(value: string): string {
    return value.replace(/[\\`*_{}[\]<>#!|]/g, "\\$&").replace(/\n/g, " ");
}

async function approvedIssues(date: string): Promise<Submission[]> {
    if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_REPOSITORY) return [];
    const submissions: Submission[] = [];
    for (let page = 1; page <= 5; page += 1) {
        const response = await fetch(
            `https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/issues?state=open&labels=editorial%3Aapproved&per_page=100&page=${page}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    Accept: "application/vnd.github+json",
                },
                signal: AbortSignal.timeout(30_000),
            },
        );
        if (!response.ok) throw new Error(`Cannot load approved issues: HTTP ${response.status}`);
        const issues = z
            .array(
                z.object({
                    number: z.number(),
                    title: z.string(),
                    body: z.string().nullable(),
                    pull_request: z.unknown().optional(),
                    labels: z.array(z.object({ name: z.string() })),
                }),
            )
            .parse(await response.json());
        for (const issue of issues) {
            if (
                issue.pull_request ||
                issue.labels.some((label) => label.name === "editorial:published")
            )
                continue;
            const target = issue.body?.match(
                /### Target edition \(optional\)\s+(\d{4}-\d{2}-\d{2})/,
            )?.[1];
            if (target && target !== date) continue;
            submissions.push({
                id: `issue:${issue.number}`,
                title: issue.title,
                url: issue.body?.match(/### Primary source URL\s+(https:\/\/\S+)/)?.[1],
                affiliation: issue.body?.match(
                    /### Affiliation or relationship to the work\s+([^\n]+)/,
                )?.[1],
                relevance: (issue.body ?? "").slice(0, 6000),
                treatment: issue.labels.some((label) => label.name === "editorial:featured")
                    ? "feature"
                    : "mention",
            });
        }
        if (issues.length < 100) return submissions;
    }
    throw new Error("Too many approved issues; narrow the editorial queue before running");
}

try {
    const date = dateSchema.parse(values.date ?? editionDate());
    if (new Date(date).getUTCDay() !== 1) throw new Error("Edition date must be a Monday");
    if (date > new Date().toISOString().slice(0, 10))
        throw new Error("Cannot research a future edition");
    const outputPath = `src/content/articles/${date}-weekly-digest.md`;
    try {
        await access(outputPath);
        throw new Error(
            `Edition already exists: ${outputPath}. Preserve editorial changes and edit it manually.`,
        );
    } catch (error) {
        if (!(error instanceof Error && "code" in error && error.code === "ENOENT")) throw error;
    }
    const settings = z
        .object({
            lookbackDays: z.number().int().min(7).max(30),
            maximumCandidates: z.number().int().min(1).max(100),
            sourceFeeds: z.array(z.url()).min(1).max(12),
            searchTopics: z.array(z.string()).max(10),
        })
        .parse(JSON.parse(await readFile("config/research.json", "utf8")));
    const articles = await readArticles();
    const published = articles.filter((article) => article.data.status === "published");
    const consumed = new Set(published.flatMap((article) => article.data.submissionIds));
    const submissions = (await readSubmissions()).filter(
        (submission) => !submission.targetEdition || submission.targetEdition === date,
    );
    const request: ResearchRequest = {
        editionDate: date,
        settings,
        submissions: [...submissions, ...(values.fixture ? [] : await approvedIssues(date))].filter(
            (submission) => !consumed.has(submission.id),
        ),
        previouslyPublishedUrls: published.flatMap((article) =>
            article.data.sources.map((source) => source.url),
        ),
    };
    if (request.submissions.length > 50)
        throw new Error("Limit the approved submission queue to 50 items per edition");
    let result: ResearchResult;
    if (values.fixture) {
        result = JSON.parse(await readFile(values.fixture, "utf8"));
    } else {
        result = await new CopilotResearchProvider().research(request);
    }
    const digest = validateResearch(result, request);
    const metadata = articleSchema.parse({
        title: digest.title,
        description: digest.description,
        date,
        kind: "Weekly digest",
        status: "draft",
        topics: [...new Set(digest.stories.map((story) => story.topic))],
        sources: digest.stories.flatMap((story) => story.sources),
        submissionIds: [...new Set(digest.stories.flatMap((story) => story.submissionIds))],
    });
    const body = [
        "> Entirely AI-generated draft. Not independently human fact-checked. Check every claim and date against the sources before changing status to published.",
        plainMarkdown(digest.overview),
        ...digest.stories.map((story) =>
            [
                `## ${story.featured ? "Featured: " : ""}${plainMarkdown(story.title)}`,
                plainMarkdown(story.summary),
                `**Why it matters:** ${plainMarkdown(story.whyItMatters)}`,
                `**Limitations:** ${plainMarkdown(story.limitation)}`,
                story.sources
                    .map(
                        (source) =>
                            `[${plainMarkdown(source.title)}](<${source.url}>) — ${source.type}; ${source.access}.`,
                    )
                    .join("\n\n"),
            ].join("\n\n"),
        ),
    ].join("\n\n");
    const evidenceDirectory = `data/research/${date}`;
    await mkdir(evidenceDirectory, { recursive: true });
    await writeFile(
        `${evidenceDirectory}/evidence.json`,
        JSON.stringify(
            {
                generatedAt: new Date().toISOString(),
                editionDate: date,
                fixture: Boolean(values.fixture),
                ...result,
            },
            null,
            4,
        ) + "\n",
    );
    await writeFile(outputPath, matter.stringify(body + "\n", metadata));
    if (process.env.GITHUB_STEP_SUMMARY) {
        await appendFile(
            process.env.GITHUB_STEP_SUMMARY,
            `## Editorial draft: ${date}\n\n${digest.stories.length} stories prepared. Evidence and usage are in ${evidenceDirectory}/evidence.json.\n\n${digest.coverageGaps.map((gap) => `- ${plainMarkdown(gap)}`).join("\n")}\n`,
        );
    }
    logger("info", `Created ${outputPath}; editorial review required`);
} catch (error) {
    logger("error", error instanceof Error ? error.message : "Digest generation failed");
    process.exitCode = 1;
}
