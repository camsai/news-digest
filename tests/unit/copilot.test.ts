import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import {
    CopilotResearchProvider,
    type ResearchRequest,
    type ResearchResult,
} from "../../scripts/research";
import { parseFeed, fetchFeed, type FeedSource } from "../../scripts/sourceFeeds";
import { parseDigestResponse, validateCollectedSources } from "../../scripts/research";

const fixture: ResearchResult = JSON.parse(
    await readFile(new URL("../fixtures/research.json", import.meta.url), "utf8"),
);
const source = fixture.digest.stories[0].sources[0] as FeedSource;

const modelResponse = (digest: ResearchResult["digest"]) =>
    JSON.stringify({
        ...digest,
        stories: digest.stories.map((story) => ({
            ...story,
            sources: story.sources.map((source) => ({ url: source.url })),
        })),
    });

test("Copilot JSON extracts one code fence and rejects multiple candidate objects", () => {
    const json = modelResponse(fixture.digest);
    assert.deepEqual(parseDigestResponse("```json\n" + json + "\n```", [source]), fixture.digest);
    assert.deepEqual(
        parseDigestResponse("Explanation\n```json\n" + json + "\n```\nDone", [source]),
        fixture.digest,
    );
    assert.throws(
        () =>
            parseDigestResponse("```json\n" + json + "\n```\n```json\n" + json + "\n```", [source]),
        /valid digest/,
    );
});

test("model-supplied metadata is discarded and unknown citations fail", () => {
    const modified = structuredClone(fixture.digest);
    modified.stories[0].sources[0].publishedAt = "2099-01-01";
    assert.equal(
        parseDigestResponse(JSON.stringify(modified), [source]).stories[0].sources[0].publishedAt,
        source.publishedAt,
    );
    modified.stories[0].sources[0].url = "https://example.org/invented";
    assert.throws(
        () => parseDigestResponse(JSON.stringify(modified), [source]),
        /source URL not in collected/,
    );
});
const request: ResearchRequest = {
    editionDate: "2026-09-07",
    settings: {
        lookbackDays: 14,
        maximumCandidates: 60,
        sourceFeeds: ["https://api.github.com/repos/example/materials/releases"],
        searchTopics: [],
    },
    submissions: [],
    previouslyPublishedUrls: [],
};

test("Copilot gets independently collected evidence and preserves collection gaps", async () => {
    const provider = new CopilotResearchProvider(
        async () => [source],
        async (prompt) => {
            assert.ok(prompt.includes(source.evidence));
            return modelResponse(fixture.digest);
        },
    );
    const result = await provider.research(request);
    assert.deepEqual(result.consultedUrls, [source.url]);
    assert.deepEqual(result.digest.stories[0].sources[0], source);
    assert.match(result.digest.coverageGaps.join(" "), /Broader web coverage/);
});

test("no fresh evidence skips the paid model call", async () => {
    let called = false;
    const provider = new CopilotResearchProvider(
        async () => [source],
        async () => {
            called = true;
            return "";
        },
    );
    await assert.rejects(
        provider.research({ ...request, previouslyPublishedUrls: [source.url] }),
        /No fresh source/,
    );
    assert.equal(called, false);
});

test("feed failures fail closed without spending model usage", async () => {
    const provider = new CopilotResearchProvider(
        async () => {
            throw new Error("offline");
        },
        async () => {
            throw new Error("should not run");
        },
    );
    await assert.rejects(provider.research(request), /No fresh source/);
});

test("invented dates, evidence, and access levels are rejected", async () => {
    for (const change of [
        { publishedAt: "2026-09-06" },
        { evidence: "An invented piece of supporting evidence" },
        { access: source.access === "Abstract only" ? "Full text" : "Abstract only" },
    ]) {
        const digest = structuredClone(fixture.digest);
        Object.assign(digest.stories[0].sources[0], change);
        assert.throws(
            () => validateCollectedSources(digest, [source]),
            /differs from collected evidence/,
        );
    }
});

test("malformed model output and unsupported submission attribution are rejected", async () => {
    await assert.rejects(
        new CopilotResearchProvider(
            async () => [source],
            async () => "not JSON",
        ).research(request),
    );
    const digest = structuredClone(fixture.digest);
    digest.stories[0].submissionIds = ["issue:2"];
    await assert.rejects(
        new CopilotResearchProvider(
            async () => [source],
            async () => modelResponse(digest),
        ).research(request),
        /Submission lacks/,
    );
});

test("Atom uses original publication dates and strips markup from excerpts", () => {
    const records = parseFeed(
        `<feed><entry><title>New materials model</title><published>2026-09-05T00:00:00Z</published><updated>2026-09-08T00:00:00Z</updated><link href="http://arxiv.org/abs/2609.00001"/><summary>A sufficiently long &lt;b&gt;abstract&lt;/b&gt; about materials.</summary></entry></feed>`,
        "https://export.arxiv.org/api/query",
    );
    assert.equal(records[0].publishedAt, "2026-09-05");
    assert.equal(records[0].url, "https://arxiv.org/abs/2609.00001");
    assert.doesNotMatch(records[0].evidence, /<b>/);
    assert.equal(records[0].access, "Abstract only");
});

test("unsafe feeds and entity declarations are rejected", async () => {
    await assert.rejects(fetchFeed("https://127.0.0.1/feed"), /Unsupported/);
    assert.throws(
        () =>
            parseFeed(
                '<!DOCTYPE feed [<!ENTITY secret SYSTEM "file:///etc/passwd">]><feed/>',
                "https://export.arxiv.org/api/query",
            ),
        /forbidden/,
    );
});
