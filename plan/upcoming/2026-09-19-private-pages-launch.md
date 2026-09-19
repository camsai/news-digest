# Private repository Pages launch

**Created:** 2026-09-19

**Updated:** 2026-09-19

**Tracking:** [Issue #1](https://github.com/camsai/news-digest/issues/1)

## Status

The user authorized automatic publication of the first article when the implementation PR merges.
The launch article is already published content, and the main push workflow configures Pages and
deploys it. Integration checks require its homepage listing, article page and RSS entry.

GitHub rejected Pages setup with HTTP 422: the current organization plan does not support Pages
for this private repository. Repository visibility must stay private. Resolve the plan requirement
before launch, then merge PR #2 and verify the Publish workflow and public article URL. No billing
or visibility changes were made. Copilot authentication and weekly draft pilot remain separate.
