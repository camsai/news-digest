import { getCollection } from "astro:content";

export const publicationName = "Material Intelligence";
export const repositoryUrl = "https://github.com/camsai/news-digest";
export const pathTo = (path = "") => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path}`;

export async function publishedArticles() {
    const today = new Date().toISOString().slice(0, 10);
    return (
        await getCollection(
            "articles",
            ({ data }) => data.status === "published" && data.date <= today,
        )
    ).sort((first, second) => second.data.date.localeCompare(first.data.date));
}
