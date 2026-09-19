import { XMLParser } from "fast-xml-parser";
import { canonicalUrl, publicUrlSchema } from "../src/lib/editorial";

export interface FeedSource {
    title: string;
    url: string;
    publishedAt: string;
    type: "Preprint" | "Software release";
    access: "Abstract only";
    evidence: string;
}

const list = <Value>(value: Value | Value[] | undefined): Value[] =>
    value === undefined ? [] : Array.isArray(value) ? value : [value];

export function parseFeed(xml: string, feedUrl: string): FeedSource[] {
    if (/<!DOCTYPE|<!ENTITY/i.test(xml)) throw new Error("Feed entity declarations are forbidden");
    const parsed = new XMLParser({ ignoreAttributes: false, parseTagValue: false }).parse(xml);
    const entries = parsed.feed?.entry ?? parsed.rss?.channel?.item;
    if (entries === undefined) throw new Error("Feed has no entries");
    return list(entries).flatMap((entry): FeedSource[] => {
        const link =
            typeof entry.link === "string"
                ? entry.link
                : list(entry.link).find(
                      (link: any) => !link["@_rel"] || link["@_rel"] === "alternate",
                  )?.["@_href"];
        const url =
            typeof link === "string"
                ? link.replace(/^http:\/\/arxiv.org\//, "https://arxiv.org/")
                : "";
        const timestamp = Date.parse(entry.published ?? entry.pubDate ?? "");
        const content = entry.summary ?? entry.description ?? entry.content;
        const evidence = String(
            typeof content === "object" ? (content["#text"] ?? "") : (content ?? ""),
        )
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 2000);
        if (
            !publicUrlSchema.safeParse(url).success ||
            !Number.isFinite(timestamp) ||
            evidence.length < 20
        )
            return [];
        return [
            {
                title: String(entry.title).slice(0, 300),
                url: canonicalUrl(url),
                publishedAt: new Date(timestamp).toISOString().slice(0, 10),
                type: new URL(feedUrl).hostname === "github.com" ? "Software release" : "Preprint",
                access: "Abstract only",
                evidence,
            },
        ];
    });
}

export async function fetchFeed(
    feedUrl: string,
    editionDate?: string,
    lookbackDays = 14,
): Promise<FeedSource[]> {
    const url = new URL(feedUrl);
    // Only curated public feed endpoints are fetched; submission URLs are never fetched.
    if (
        url.protocol !== "https:" ||
        url.username ||
        url.password ||
        url.port ||
        !["rss.arxiv.org", "export.arxiv.org", "api.github.com"].includes(url.hostname)
    )
        throw new Error("Unsupported feed host");
    if (url.hostname === "export.arxiv.org" && editionDate) {
        const earliest = new Date(editionDate);
        earliest.setUTCDate(earliest.getUTCDate() - lookbackDays);
        const start = earliest.toISOString().slice(0, 10).replaceAll("-", "");
        const end = editionDate.replaceAll("-", "");
        url.searchParams.set(
            "search_query",
            `cat:cond-mat.mtrl-sci AND submittedDate:[${start}0000 TO ${end}2359]`,
        );
        url.searchParams.set("sortBy", "submittedDate");
        url.searchParams.set("sortOrder", "descending");
        url.searchParams.set("max_results", "100");
    }
    const response = await fetch(url, { redirect: "error", signal: AbortSignal.timeout(30_000) });
    if (!response.ok || !response.body) throw new Error(`Feed HTTP ${response.status}`);
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    for await (const chunk of response.body) {
        bytes += chunk.length;
        if (bytes > 2_000_000) throw new Error("Feed exceeds two megabytes");
        chunks.push(chunk);
    }
    const text = Buffer.concat(chunks).toString("utf8");
    if (url.hostname === "api.github.com") {
        const releases = JSON.parse(text);
        if (!Array.isArray(releases)) throw new Error("Invalid release feed");
        return releases.flatMap((release): FeedSource[] => {
            const date = Date.parse(release.published_at);
            const evidence = String(release.body ?? "").slice(0, 2000);
            if (
                release.draft ||
                release.prerelease ||
                !Number.isFinite(date) ||
                evidence.length < 20 ||
                !publicUrlSchema.safeParse(release.html_url).success
            )
                return [];
            return [
                {
                    title: String(release.name || release.tag_name).slice(0, 300),
                    url: canonicalUrl(release.html_url),
                    publishedAt: new Date(date).toISOString().slice(0, 10),
                    type: "Software release",
                    access: "Abstract only",
                    evidence,
                },
            ];
        });
    }
    return parseFeed(text, feedUrl);
}
