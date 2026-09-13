import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { pathTo, publicationName, publishedArticles } from "../lib/publication";

export async function GET(context: APIContext) {
    return rss({
        title: publicationName,
        description:
            "Research, tools, and evidence at the intersection of AI and materials science.",
        site: new URL(pathTo(), context.site!),
        items: (await publishedArticles()).map((article) => ({
            title: article.data.title,
            description: article.data.description,
            pubDate: new Date(article.data.date),
            link: pathTo(`articles/${article.id}/`),
        })),
        customData: "<language>en</language>",
    });
}
