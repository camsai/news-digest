import { z } from "zod";

export const topics = [
    "Materials discovery",
    "Atomistic simulation",
    "Autonomous laboratories",
    "Data and software",
] as const;

export const dateSchema = z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .refine(
        (value) =>
            !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().startsWith(value),
        "Use a real calendar date in YYYY-MM-DD format",
    );
export const publicUrlSchema = z.url().refine((value) => {
    const address = new URL(value);
    return address.protocol === "https:" && !address.username && !address.password;
}, "Use an HTTPS URL without credentials");

export const sourceSchema = z.object({
    title: z.string().min(1).max(300),
    url: publicUrlSchema,
    publishedAt: dateSchema.nullable(),
    type: z.enum(["Peer-reviewed research", "Preprint", "Software release", "Announcement"]),
    access: z.enum(["Full text", "Abstract only"]),
    evidence: z.string().min(20).max(2000),
});

export const articleSchema = z.object({
    title: z.string().min(10).max(180),
    description: z.string().min(20).max(400),
    date: dateSchema,
    kind: z.enum(["Weekly digest", "Field notes"]),
    status: z.enum(["draft", "published"]),
    topics: z.array(z.enum(topics)).min(1),
    sources: z.array(sourceSchema).min(1),
    submissionIds: z.array(z.string()).default([]),
});

export const submissionSchema = z
    .object({
        title: z.string().min(5).max(200),
        url: publicUrlSchema,
        publishedAt: dateSchema,
        relevance: z.string().min(20).max(2000),
        treatment: z.enum(["mention", "feature"]),
        affiliation: z.string().min(1).max(500),
        targetEdition: dateSchema.nullable(),
    })
    .strict();

export function canonicalUrl(value: string): string {
    const address = new URL(value);
    address.hash = "";
    for (const key of [...address.searchParams.keys()]) {
        if (key.startsWith("utm_") || ["ref", "fbclid", "gclid"].includes(key)) {
            address.searchParams.delete(key);
        }
    }
    address.searchParams.sort();
    address.pathname = address.pathname.replace(/\/+$/, "") || "/";
    return address.toString();
}

export function topicSlug(topic: string): string {
    return topic.toLowerCase().replace(/\s+/g, "-");
}

export function formatDate(date: string): string {
    return new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(date));
}
