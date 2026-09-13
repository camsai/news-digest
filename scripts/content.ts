import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { articleSchema, canonicalUrl, submissionSchema } from "../src/lib/editorial";

export async function readArticles() {
    const filenames = (await readdir("src/content/articles")).filter((name) =>
        name.endsWith(".md"),
    );
    return Promise.all(
        filenames.map(async (filename) => {
            const article = matter(await readFile(`src/content/articles/${filename}`, "utf8"));
            return { filename, data: articleSchema.parse(article.data), content: article.content };
        }),
    );
}

export async function readSubmissions() {
    const filenames = (await readdir("submissions")).filter((name) => name.endsWith(".json"));
    return Promise.all(
        filenames.map(async (filename) => ({
            id: `file:${filename}`,
            ...submissionSchema.parse(
                JSON.parse(await readFile(`submissions/${filename}`, "utf8")),
            ),
        })),
    );
}

export async function validateContent() {
    const articles = await readArticles();
    const editionDates = new Set<string>();
    for (const article of articles) {
        if (!article.content.trim()) throw new Error(`${article.filename}: article body is empty`);
        if (article.data.kind === "Weekly digest") {
            if (editionDates.has(article.data.date))
                throw new Error(`Duplicate edition: ${article.data.date}`);
            editionDates.add(article.data.date);
        }
        const sourceUrls = article.data.sources.map((source) => canonicalUrl(source.url));
        if (new Set(sourceUrls).size !== sourceUrls.length)
            throw new Error(`${article.filename}: duplicate source`);
        for (const source of article.data.sources) {
            if (!article.content.includes(source.url))
                throw new Error(`${article.filename}: missing inline citation to ${source.url}`);
            if (source.publishedAt && source.publishedAt > article.data.date)
                throw new Error(`${article.filename}: source postdates edition`);
        }
    }
    await readSubmissions();
    return articles.length;
}
