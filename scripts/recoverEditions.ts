import { execFileSync } from "node:child_process";
import { readFile, appendFile } from "node:fs/promises";
import matter from "gray-matter";
import { originalEditionDate, recoveryDecision, type PublicationRun } from "./recoveryPolicy";
import { createLogger } from "./logger";

const repository = process.env.GITHUB_REPOSITORY!;
const logger = createLogger("info");
function github(argumentsList: string[]): string {
    return execFileSync("gh", argumentsList, { encoding: "utf8", maxBuffer: 10_000_000 });
}
async function summary(message: string) {
    logger("info", message);
    if (process.env.GITHUB_STEP_SUMMARY)
        await appendFile(process.env.GITHUB_STEP_SUMMARY, message + "\n");
}
function workflowRuns(workflow: string): PublicationRun[] {
    const since = new Date(Date.now() - 35 * 86_400_000).toISOString().slice(0, 10);
    const pages = JSON.parse(
        github([
            "api",
            "--paginate",
            "--slurp",
            `repos/${repository}/actions/workflows/${workflow}/runs?branch=main&created=%3E%3D${since}&per_page=100`,
        ]),
    );
    return pages.flatMap((page: { workflow_runs: PublicationRun[] }) => page.workflow_runs);
}
function notify(title: string, body: string) {
    if (process.env.RECOVERY_DRY_RUN === "true") {
        logger("info", `Would notify: ${title}`);
        return;
    }
    const pages = JSON.parse(
        github([
            "api",
            "--paginate",
            "--slurp",
            `repos/${repository}/issues?state=all&per_page=100`,
        ]),
    );
    if (pages.flat().some((issue: { title: string }) => issue.title === title)) return;
    // Body is passed as an argument, never evaluated as shell code.
    github([
        "issue",
        "create",
        "--repo",
        repository,
        "--title",
        title,
        "--body",
        body,
        "--assignee",
        process.env.RECOVERY_NOTIFY_USER || "timurbazhirov",
    ]);
}

try {
    const weeklyRuns = workflowRuns("weekly.yml");
    const deploymentRuns = workflowRuns("deploy.yml");
    const dates = [...new Set(weeklyRuns.map(originalEditionDate))].sort();
    const site = (process.env.SITE_URL || "https://camsai.github.io").replace(/\/$/, "");
    const base = (process.env.SITE_BASE_PATH || "/news-digest").replace(/\/$/, "");
    for (const date of dates) {
        const runs = [
            ...weeklyRuns.filter((run) => originalEditionDate(run) === date),
            ...deploymentRuns.filter((run) =>
                run.display_title.startsWith(`Deploy edition: ${date} | recovery:`),
            ),
        ];
        let published = false;
        try {
            published =
                matter(await readFile(`src/content/articles/${date}-weekly-digest.md`, "utf8")).data
                    .status === "published";
        } catch (error) {
            if (!(error instanceof Error && "code" in error && error.code === "ENOENT"))
                throw error;
        }
        const response = await fetch(`${site}${base}/articles/${date}-weekly-digest/`, {
            signal: AbortSignal.timeout(30_000),
        });
        // A 404 is an absent edition; other HTTP errors need intervention, not paid regeneration.
        if (response.status !== 404 && !response.ok)
            throw new Error(`Site check failed: HTTP ${response.status}`);
        const live =
            response.ok && (await response.text()).includes("Not independently human fact-checked");
        const decision = recoveryDecision(
            runs,
            published,
            live,
            deploymentRuns.some((run) => run.status !== "completed"),
        );
        await summary(`${date}: ${decision}`);
        if (decision === "wait" || decision === "complete") continue;
        if (decision === "notify") {
            notify(
                `Publication needs attention: ${date}`,
                `@${process.env.RECOVERY_NOTIFY_USER || "timurbazhirov"} The ${date} edition is still not live after two automatic recovery attempts. No more automatic retries will be made for this edition.\n\nRuns:\n${runs.map((run) => `- ${run.html_url} (${run.conclusion ?? run.status})`).join("\n")}\n\nFix the failure and dispatch Publish weekly edition with edition_date=${date}, or retry Pages if the article is already merged.`,
            );
            continue;
        }
        const attempt =
            runs.filter((run) => /\| recovery:[12]$/.test(run.display_title)).length + 1;
        if (process.env.RECOVERY_DRY_RUN === "true") {
            await summary(`Would dispatch recovery ${attempt} for ${date}`);
            break;
        }
        github([
            "workflow",
            "run",
            decision === "retry-generation" ? "weekly.yml" : "deploy.yml",
            "--repo",
            repository,
            "--ref",
            "main",
            "-f",
            `edition_date=${date}`,
            "-f",
            `recovery_attempt=${attempt}`,
        ]);
        // Serialize older backfills so newer editions can exclude their sources.
        await summary(
            `Dispatched recovery ${attempt} for ${date}. Later editions will be checked next hour.`,
        );
        break;
    }
} catch (error) {
    logger("error", error instanceof Error ? error.message : "Recovery failed");
    notify(
        "Publication recovery monitor needs attention",
        `@${process.env.RECOVERY_NOTIFY_USER || "timurbazhirov"} The recovery monitor could not complete its checks. Inspect https://github.com/${repository}/actions/runs/${process.env.GITHUB_RUN_ID}.`,
    );
    process.exitCode = 1;
}
