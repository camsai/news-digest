# Publication foundation and initial research workflow

**Created:** 2026-09-12

**Updated:** 2026-09-19

**Tracking:** [Project issue #1](https://github.com/camsai/news-digest/issues/1)

## Status

Follow-up changes: renamed to **Material Intelligence**, applied a dark palette, and disclosed
entirely AI-generated articles without independent human fact-checking. Added custom-domain
build variables and documentation for `digest.example.com`. Copilot migration is researched in
`plan/review/2026-09-12-github-native-generation.md`; the generator now uses Copilot; authenticated Actions testing remains pending.

Implementation is being submitted for PR review on `feature/publication-foundation` following
the explicit commit/PR request on 2026-09-13. The repository is now private. `main` remains at
empty bootstrap commit `a70ba15`; no merge or deployment is authorized in this step.

## Implemented

- Astro publication with home, archive, article, topic, policy, 404, and RSS routes.
- Retrospective launch field note with primary-source links; no fabricated weekly edition.
- Shared article/submission schemas, unpublished/future article filtering, Markdown HTML stripping.
- Issue forms for stories, functionality, and corrections; structured PR submissions.
- TypeScript research provider using Responses web search followed by structured drafting.
- URL provenance, date-window, duplicate-source, and approved-submission validation.
- Weekly Monday 13:17 UTC draft workflow with stable edition branches and overwrite prevention.
- Validation and Pages deployment workflows; generated draft artifact retained before PR creation.
- Formatting and local pre-commit configuration.
- Repository created, Pages set to Actions, editorial labels created, main kept empty.

## Validation

- Type and Astro checks: zero errors, warnings, or hints.
- Twelve tests pass, covering offline generation, overwrite protection, source validation,
  API output schema compatibility, dates, deduplication, and approved submission IDs.
- An isolated static-build test verifies unpublished/future content is absent from pages and RSS,
  raw script HTML is removed, and all generated internal links resolve.
- Production build succeeds: nine HTML pages plus RSS.
- Browser review at desktop size and 390px mobile width: homepage and article layout readable;
  article navigation verified. Temporary viewport override reset.
- No live paid API request, GitHub CI run, or production deployment has been performed.

## Divergences and remaining work

- The initial provider uses seed-guided web search rather than direct feed adapters.
- Duplicate URLs are enforced; semantic grouping depends on the model and editor.
- Existing editorial branches are preserved instead of regenerated, preventing loss of human edits.
- Publication bookkeeping for originating issues remains manual after successful deployment.
- No independent scheduler monitor, hard application billing cap, or automatic publishing yet.
- Need an API key and an explicitly chosen available model for the first live run.
- GitHub combines workflow PR creation and review approval in one repository permission.
  Automatic approval review rejected enabling it because it broadens workflow approval authority.
  The setting is unchanged (`can_approve_pull_request_reviews: false`). Request explicit user
  approval before enabling it; the supplied workflow itself never approves or merges PRs.
- Complete PR review and merge only when instructed; deployment remains pending.
- Complete four reviewed weekly editions and evaluate quality/cost before expanding automation.

The overarching roadmap remains in `plan/upcoming/2026-09-12-ai-materials-news-outlet.md`.
