# AI for materials weekly publication

**Created:** 2026-09-12

**Updated:** 2026-09-19

**Tracking:** [Project issue #1](https://github.com/camsai/news-digest/issues/1)

## Status

Current product name: **Material Intelligence**. The user requested a dark theme and explicit
purely AI-generated authorship. These are implemented locally. The site does not claim human
fact-checking. Publication approval remains separate from authorship.

The [GitHub-native generation implementation](../review/2026-09-12-github-native-generation.md) documents the
keyless Copilot route, now implemented on the branch with curated source collection. Authenticated Actions testing remains pending.
[Custom-domain instructions](../../docs/hosting.md) cover `digest.example.com`; DNS is unchanged.

Agreed direction. Repository and empty `main` created; initial implementation is local on
`feature/publication-foundation`. See the [implementation review record](../review/2026-09-12-publication-foundation.md).
This overall plan remains upcoming until the complete
research and reviewed publication pilot is proven. Completed implementation milestones
receive their own record in `plan/review/` before deployment.

Pages is configured and editorial labels exist. Live research, CI, deployment, and the reviewed
pilot remain pending. Automatic approval review rejected GitHub's combined workflow permission
to create and approve PRs; that repository setting remains disabled pending explicit approval.

## Publication

Audience: materials researchers and engineers. Publish a weekly overview with five to eight
substantive developments, primary-source links, practical implications, and an optional
featured capability, paper, or release. Quiet weeks may contain fewer stories. Distinguish
preprints, peer-reviewed research, software releases, and vendor announcements. Disclose
AI assistance, contributor affiliations, and corrections.

Coverage includes materials discovery, interatomic potentials, property prediction,
autonomous laboratories, simulation workflows, datasets, and relevant software.

## Architecture and hosting

- Private repository (during development): https://github.com/camsai/news-digest
- Intended production URL: https://camsai.github.io/news-digest/
- Astro static website, Markdown articles, TypeScript research application.
- GitHub Actions: validation, weekly research, and Pages deployment on merge to main.
- Copilot uses the ephemeral Actions token; no external AI/search API credentials are needed.
- No database or always-running server initially. Git stores articles and evidence records.
- Homepage, article pages, archive, topic pages, RSS, and editorial policy.
- Optional custom domain later. Set an organization Copilot budget; measure actual usage during the pilot.

## Research pipeline

1. Collect candidates from configured primary sources, broad web searches, and approved submissions.
2. Search a rolling 14-day window to accommodate indexing delays; retain actual event dates.
3. Deduplicate canonical URLs and group coverage of the same underlying result. Compare past editions.
4. Rank by materials relevance, novelty, evidence quality, and practical usefulness.
5. Extract source title, URL, publication/discovery dates, source type, evidence, and limitations.
6. Draft grounded summaries with claim-level citations. Label abstract-only evidence.
7. Validate schema, source provenance, dates, links, and prior coverage; surface gaps for review.
8. Open or update one editorial draft PR per edition. Never auto-merge during the pilot.
9. An editor reviews facts and changes publication status; merge builds and deploys the site.

Current integration: Copilot CLI authenticated by the Actions token, with independent arXiv
and GitHub release collection. Broader search coverage and authenticated pilot runs remain open.
The current collectors use configured public endpoints, with broader coverage deferred.
Schema and provenance checks are not independent factual verification: an editor must check
claims against the underlying sources before publication.

## Issue and PR submissions

Issue form: primary URL, date, what changed, materials relevance, mention/feature preference,
affiliation, and optional edition. Maintainer label `editorial:approved` queues consideration;
`editorial:featured` requests a feature, subject to evidence. Only approved, unpublished issues
are read by the scheduled job. Public submissions never trigger a secret-bearing job.

PRs can add validated JSON files under `submissions/`. Merging signifies editorial approval;
the next run consumes them through the same queue. Published source URLs and submission IDs
prevent repeat inclusion. Record originating submissions alongside stories. Mark issues published
only after deployment succeeds. Website functionality uses a separate issue template.

## Reliability and permissions

- Weekly Monday 13:17 UTC schedule and manual trigger; default-branch workflows only.
- GitHub schedules are best-effort and may be delayed/dropped; public workflows can disable
  after 60 days without repository activity. An independent freshness monitor is a later addition.
- Stable edition identifiers, workflow concurrency, timeouts, bounded requests, and useful failures.
- Keep human edits on an existing editorial branch: refuse automatic overwrite and ask for review.
- Least-privilege job tokens; no untrusted PR code runs with API secrets.
- Source text is untrusted data. The model has web search only, no shell or GitHub write access.
- Generated content is plain Markdown with raw HTML disabled. Publication is explicitly gated.
- A failed run or build preserves the previous deployment.
- Report usage per run. The spending target is not a hard billing cap; configure provider limits too.

## Delivery stages and acceptance

### 1. Publication foundation

Site, schemas, archive, topics, RSS, contribution forms, CI, Pages workflow, and a clearly
labeled source-backed retrospective sample. Verify desktop/mobile layout and internal links.
Keep main empty until the implementation has been reviewed and explicitly merged.

### 2. Automated research

Implement search, evidence provenance, drafting, submission ingestion, validation, and weekly
draft PR creation. Use deterministic fixtures to test the pipeline without spending API credits.
Acceptance: a configured live run creates one reviewable edition with source records and usage.

### 3. Reviewed pilot

Publish four reviewed weekly editions. Measure unsupported claims, missing stories, duplicates,
editor time, and cost. Only then decide whether to enable automatic publication. Add direct
feeds, stronger semantic deduplication, automated submission closure, and independent monitoring
based on observed needs. Newsletter delivery, sponsorship, and custom domain are later choices.

## Reference documentation

- [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub scheduled workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows)
- [GitHub Actions billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions)
- [Responses web search](https://developers.openai.com/api/docs/guides/tools-web-search)
- [Structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs)
