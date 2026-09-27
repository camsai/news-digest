import { readFile, writeFile } from "node:fs/promises";
import matter from "gray-matter";
import { articleSchema, dateSchema } from "../src/lib/editorial";
import { createLogger } from "./logger";

try {
    const date = dateSchema.parse(process.argv[2]);
    if (new Date(date).getUTCDay() !== 1 || date > new Date().toISOString().slice(0, 10))
        throw new Error("Publication requires a non-future Monday edition");
    const path = `src/content/articles/${date}-weekly-digest.md`;
    const article = matter(await readFile(path, "utf8"));
    const metadata = articleSchema.parse(article.data);
    const evidence = JSON.parse(await readFile(`data/research/${date}/evidence.json`, "utf8"));
    if (metadata.date !== date || evidence.editionDate !== date || evidence.fixture)
        throw new Error("Publication requires matching live evidence");
    const notice =
        "> Entirely AI-generated draft. Not independently human fact-checked. Check every claim and date against the sources before changing status to published.";
    if (metadata.status !== "draft" || !article.content.includes(notice))
        throw new Error("Expected an unchanged draft publication notice");
    await writeFile(
        path,
        matter.stringify(
            article.content.replace(
                notice,
                "> Entirely AI-generated and automatically published after automated validation. Not independently human fact-checked. Automated checks do not establish scientific accuracy.",
            ),
            { ...metadata, status: "published" },
        ),
    );
} catch (error) {
    createLogger()(
        "error",
        error instanceof Error ? error.message : "Publication preparation failed",
    );
    process.exitCode = 1;
}
