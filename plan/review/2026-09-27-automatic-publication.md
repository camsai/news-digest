# Automatic weekly publication

**Created:** 2026-09-27
**Updated:** 2026-09-27
**Tracking:** [Issue #1](https://github.com/camsai/news-digest/issues/1)

## Status

Implemented; live workflow verification pending.

The user authorized publication without manual review. Monday 00:00 UTC generation now
prepares published metadata and an explicit AI-only automatic-publication disclosure,
then runs content checks, tests and build before creating a PR. The writer merges only
the PR head returned by the creation action and explicitly dispatches Pages because
pushes using GITHUB_TOKEN do not trigger another workflow. Branch protections remain
in effect; merge failures stop publication. Existing edition branches supply only their
article and evidence files, never workflow code, so a waiting edition can be recovered
without another paid generation. Existing main editions are preserved.

Automated checks do not establish scientific accuracy. No human review is claimed.
