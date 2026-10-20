import assert from "node:assert/strict";
import { test } from "node:test";
import {
    originalEditionDate,
    recoveryDecision,
    type PublicationRun,
} from "../../scripts/recoveryPolicy";
const now = Date.parse("2026-10-20T12:00:00Z");
function run(
    title = "Weekly edition: scheduled | recovery:0",
    overrides: Partial<PublicationRun> = {},
): PublicationRun {
    return {
        id: 1,
        display_title: title,
        created_at: "2026-10-12T03:00:00Z",
        updated_at: "2026-10-12T03:10:00Z",
        status: "completed",
        conclusion: "failure",
        html_url: "https://github.com/example/run/1",
        ...overrides,
    };
}
test("recovery preserves original scheduled and explicit backfill dates across weeks", () => {
    assert.equal(originalEditionDate(run()), "2026-10-12");
    assert.equal(
        originalEditionDate(
            run("Weekly edition: 2026-10-12 | recovery:1", { created_at: "2026-10-20T00:00:00Z" }),
        ),
        "2026-10-12",
    );
    assert.throws(
        () => originalEditionDate(run("Weekly edition: 2026-10-13 | recovery:1")),
        /Monday/,
    );
});
test("retry decisions distinguish generation and deployment without regenerating merged content", () => {
    assert.equal(recoveryDecision([run()], false, false, false, now), "retry-generation");
    assert.equal(recoveryDecision([run()], true, false, false, now), "retry-deployment");
    assert.equal(recoveryDecision([run()], true, true, false, now), "complete");
});
test("two recovery attempts trigger notification, including deployment failures", () => {
    const first = run("Weekly edition: 2026-10-12 | recovery:1");
    const second = run("Deploy edition: 2026-10-12 | recovery:2");
    assert.equal(recoveryDecision([run(), first], false, false, false, now), "retry-generation");
    assert.equal(recoveryDecision([run(), first, second], true, false, false, now), "notify");
    assert.equal(recoveryDecision([run(), first, second], true, true, false, now), "complete");
});
test("active work and deployment propagation do not trigger duplicate retries", () => {
    assert.equal(
        recoveryDecision([run(undefined, { status: "in_progress" })], false, false, false, now),
        "wait",
    );
    assert.equal(recoveryDecision([run()], true, false, true, now), "wait");
    assert.equal(
        recoveryDecision(
            [run(undefined, { updated_at: "2026-10-20T11:50:00Z" })],
            true,
            false,
            false,
            now,
        ),
        "wait",
    );
});
