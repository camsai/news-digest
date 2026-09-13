import assert from "node:assert/strict";
import { test } from "node:test";
import { cp, mkdir, mkdtemp, readFile, readdir, rm, symlink, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { promisify } from "node:util";
import { execFile } from "node:child_process";
import matter from "gray-matter";

const execute = promisify(execFile);

test("static publication excludes drafts and future articles, strips raw HTML, and resolves internal links", async () => {
    await mkdir("agents/workdir/tmp", { recursive: true });
    const directory = await mkdtemp(resolve("agents/workdir/tmp/publication-"));
    try {
        for (const path of ["src", "public", "astro.config.mjs", "tsconfig.json", "package.json"]) {
            await cp(path, `${directory}/${path}`, { recursive: true });
        }
        await symlink(resolve("node_modules"), `${directory}/node_modules`, "dir");
        const articlePath = "src/content/articles/2026-09-12-a-map-of-ai-for-materials.md";
        const article = matter(await readFile(articlePath, "utf8"));
        await writeFile(
            `${directory}/src/content/articles/unpublished-fixture.md`,
            matter.stringify("Private editorial draft", {
                ...article.data,
                title: "Unpublished fixture headline",
                status: "draft",
            }),
        );
        await writeFile(
            `${directory}/src/content/articles/future-fixture.md`,
            matter.stringify("Future editorial article", {
                ...article.data,
                title: "Future fixture headline",
                date: "2099-01-01",
            }),
        );
        await writeFile(
            `${directory}/${articlePath}`,
            matter.stringify(
                article.content + "\n<script>window.injectedFixture = true;</script>\n",
                article.data,
            ),
        );
        await execute(process.execPath, [resolve("node_modules/astro/bin/astro.mjs"), "build"], {
            cwd: directory,
            env: {
                ...process.env,
                ASTRO_TELEMETRY_DISABLED: "1",
                SITE_URL: "https://camsai.github.io",
                SITE_BASE_PATH: "/news-digest",
            },
            timeout: 60_000,
        });
        const filenames = await readdir(`${directory}/dist`, { recursive: true });
        for (const filename of filenames.filter((filename) => /\.(html|xml)$/.test(filename))) {
            const content = await readFile(`${directory}/dist/${filename}`, "utf8");
            assert.doesNotMatch(
                content,
                /Unpublished fixture headline|Future fixture headline|injectedFixture/,
            );
            for (const match of content.matchAll(/href="(\/news-digest\/[^"#?]*)"/g)) {
                const path = match[1].slice("/news-digest/".length);
                const expected = path.endsWith("/") || !path ? `${path}index.html` : path;
                assert.ok(
                    filenames.includes(expected),
                    `Broken internal link from ${filename}: ${match[1]}`,
                );
            }
        }
        const feed = await readFile(`${directory}/dist/rss.xml`, "utf8");
        assert.match(feed, /https:\/\/camsai.github.io\/news-digest\/articles\//);
        assert.doesNotMatch(filenames.join("\n"), /unpublished-fixture|future-fixture/);
    } finally {
        await rm(directory, { recursive: true, force: true });
    }
});
