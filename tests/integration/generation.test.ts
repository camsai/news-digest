import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdir, mkdtemp, copyFile, readFile, rm, access } from "node:fs/promises";
import { resolve } from "node:path";
import { promisify } from "node:util";
import { execFile } from "node:child_process";
import matter from "gray-matter";

const execute = promisify(execFile);
const root = process.cwd();

test("offline generation creates an unpublished draft and evidence, then refuses overwrite", async () => {
    await mkdir("agents/workdir/tmp", { recursive: true });
    const directory = await mkdtemp(resolve("agents/workdir/tmp/generation-"));
    try {
        for (const path of ["config", "submissions", "src/content/articles"])
            await mkdir(`${directory}/${path}`, { recursive: true });
        await copyFile("config/research.json", `${directory}/config/research.json`);
        const argumentsList = [
            "--import",
            resolve("node_modules/tsx/dist/loader.mjs"),
            resolve("scripts/generateDigest.ts"),
            "--date",
            "2026-09-07",
            "--fixture",
            resolve("tests/fixtures/research.json"),
        ];
        const environment = {
            ...process.env,
            GITHUB_STEP_SUMMARY: "",
            GITHUB_TOKEN: "",
            COPILOT_GITHUB_TOKEN: "",
        };
        await execute(process.execPath, argumentsList, { cwd: directory, env: environment });
        const article = matter(
            await readFile(`${directory}/src/content/articles/2026-09-07-weekly-digest.md`, "utf8"),
        );
        assert.equal(article.data.status, "draft");
        assert.match(article.content, /https:\/\/example.org\/materials-release/);
        await access(`${directory}/data/research/2026-09-07/evidence.json`);
        await assert.rejects(
            execute(process.execPath, argumentsList, { cwd: directory, env: environment }),
            /Edition already exists/,
        );
    } finally {
        await rm(directory, { recursive: true, force: true });
    }
    assert.equal(process.cwd(), root);
});
