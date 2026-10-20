import { dateSchema } from "../src/lib/editorial";

export interface PublicationRun {
    id: number;
    display_title: string;
    created_at: string;
    updated_at: string;
    status: string;
    conclusion: string | null;
    html_url: string;
}

export function originalEditionDate(run: PublicationRun): string {
    const explicit = run.display_title.match(/edition: (\d{4}-\d{2}-\d{2})/i)?.[1];
    const started = new Date(run.created_at);
    started.setUTCDate(started.getUTCDate() - ((started.getUTCDay() + 6) % 7));
    const date = dateSchema.parse(explicit ?? started.toISOString().slice(0, 10));
    if (new Date(date).getUTCDay() !== 1) throw new Error("Recovery requires a Monday edition");
    return date;
}

export type RecoveryDecision =
    "wait" | "complete" | "retry-generation" | "retry-deployment" | "notify";

export function recoveryDecision(
    runs: PublicationRun[],
    published: boolean,
    live: boolean,
    deploymentActive: boolean,
    now = Date.now(),
): RecoveryDecision {
    if (live) return "complete";
    if (deploymentActive || runs.some((run) => run.status !== "completed")) return "wait";
    const latest = Math.max(...runs.map((run) => Date.parse(run.updated_at)));
    // Allow deployment and CDN propagation to complete before deciding recovery is needed.
    if (!runs.length || now - latest < 30 * 60_000) return "wait";
    const retries = runs.filter((run) => /\| recovery:[12]$/.test(run.display_title));
    if (retries.length >= 2) return "notify";
    return published ? "retry-deployment" : "retry-generation";
}
