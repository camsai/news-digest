import assert from "node:assert/strict";
import { test } from "node:test";
import { zodTextFormat } from "openai/helpers/zod";
import { readFile } from "node:fs/promises";
import { canonicalUrl, dateSchema, publicUrlSchema } from "../../src/lib/editorial";
import {
    editionDate,
    digestSchema,
    validateResearch,
    type ResearchResult,
    type ResearchRequest,
} from "../../scripts/research";

const fixture = JSON.parse(
    await readFile(new URL("../fixtures/research.json", import.meta.url), "utf8"),
) as ResearchResult;
const request: ResearchRequest = {
    editionDate: "2026-09-07",
    settings: {
        lookbackDays: 14,
        maximumSearchCalls: 8,
        maximumOutputTokens: 9000,
        sourceSeeds: [],
        searchTopics: [],
    },
    submissions: [],
    previouslyPublishedUrls: [],
};

test("the API schema avoids unsupported URI formats while runtime validation checks URLs", () => {
    const format = zodTextFormat(digestSchema, "weekly_digest");
    assert.doesNotMatch(JSON.stringify(format.schema), /"format":"uri"/);
    const modified = structuredClone(fixture);
    modified.digest.stories[0].sources[0].url = "javascript:alert(1)";
    assert.throws(() => validateResearch(modified, request));
});

test("edition identifiers are stable Monday dates across year boundaries", () => {
    assert.equal(editionDate(new Date("2026-09-13T23:59:59Z")), "2026-09-07");
    assert.equal(editionDate(new Date("2026-09-14T00:00:00Z")), "2026-09-14");
    assert.equal(editionDate(new Date("2027-01-01T12:00:00Z")), "2026-12-28");
});
test("canonical URLs remove tracking and preserve meaningful parameters", () => {
    assert.equal(
        canonicalUrl("https://example.org/paper/?utm_source=feed&version=2#abstract"),
        "https://example.org/paper?version=2",
    );
});
test("dates and source URLs reject malformed or unsafe values", () => {
    assert.equal(dateSchema.safeParse("2026-02-30").success, false);
    assert.equal(publicUrlSchema.safeParse("javascript:alert(1)").success, false);
    assert.equal(publicUrlSchema.safeParse("https://user:password@example.org").success, false);
});
test("evidenced research passes", () => {
    assert.equal(validateResearch(fixture, request).stories.length, 1);
});
test("a model cannot cite URLs missing from returned search evidence", () => {
    assert.throws(
        () => validateResearch({ ...fixture, consultedUrls: [] }, request),
        /not returned/,
    );
});
test("already published sources are rejected even with tracking parameters", () => {
    assert.throws(
        () =>
            validateResearch(fixture, {
                ...request,
                previouslyPublishedUrls: ["https://example.org/materials-release?utm_source=feed"],
            }),
        /already published/,
    );
});
test("duplicate underlying source and fabricated submission IDs fail", () => {
    const duplicate = structuredClone(fixture);
    duplicate.digest.stories.push(structuredClone(duplicate.digest.stories[0]));
    assert.throws(() => validateResearch(duplicate, request), /Duplicate story/);
    const unapproved = structuredClone(fixture);
    unapproved.digest.stories[0].submissionIds = ["issue:999"];
    assert.throws(() => validateResearch(unapproved, request), /Unapproved/);
});
test("undated, stale, and future developments cannot fill a weekly edition", () => {
    for (const date of [null, "2026-01-01", "2026-09-08"]) {
        const modified = structuredClone(fixture);
        modified.digest.stories[0].sources[0].publishedAt = date;
        assert.throws(() => validateResearch(modified, request), /No dated development/);
    }
});
test("empty results fail rather than inventing a news edition", () => {
    const modified = structuredClone(fixture);
    modified.digest.stories = [];
    assert.throws(() => validateResearch(modified, request), /empty week/);
});
