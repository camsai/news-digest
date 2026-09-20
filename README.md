# Material Intelligence

A weekly, entirely AI-generated publication about AI for materials science, with links to
original sources. Articles are not independently human fact-checked. Publication approval
does not change their AI authorship or establish scientific accuracy.

- **Repository:** https://github.com/camsai/news-digest
- **Website:** https://camsai.github.io/news-digest/
- **Plan:** [AI for materials publication](plan/upcoming/2026-09-12-ai-materials-news-outlet.md)
- **Tracking:** [Issue #1](https://github.com/camsai/news-digest/issues/1)
- **Custom domain:** [Deploy at digest.example.com](docs/hosting.md)
- **GitHub-native generation:** [Copilot generation implementation](plan/review/2026-09-12-github-native-generation.md)

## Current state

The repository is public and GitHub Pages is live at
https://camsai.github.io/news-digest/. The launch field note is retrospective background.

Copilot generation uses the organization Actions secret `TB_COPILOT_TOKEN_01`. It authenticates
as the token owner and uses that person’s Copilot seat and policies. GitHub repository operations
continue to use the separate built-in workflow token. The Copilot access check has passed.

Workflow-created PRs are not enabled: GitHub combines PR creation and review approval in
one setting, and automatic approval review rejected enabling that broader permission without
explicit user approval. The weekly workflow retains its validated draft as a downloadable
Actions artifact before attempting PR creation.

## Local development

Use Node.js 24 and npm. Dependencies are locked in `package-lock.json`.

```sh
npm ci
ASTRO_TELEMETRY_DISABLED=1 npm run dev
```

Open http://localhost:4321/news-digest/. Run validation before a PR:

```sh
npm run format:check
ASTRO_TELEMETRY_DISABLED=1 npm run check
npm test
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

The pre-commit configuration uses the local Prettier installation. If you use Python pre-commit,
select Python with pyenv and install it in `agents/workdir/venv`; do not install globally.

## Publishing setup

1. GitHub Pages is enabled with **GitHub Actions** as its build source.
2. Keep `TB_COPILOT_TOKEN_01` available to this repository and renew it before expiration.
3. The Publish workflow validates and deploys the static `dist/` artifact on pushes to main.
   This includes the published launch article, “From predicting crystals to designing them,”
   on the homepage, article page and RSS. It does not wait for Copilot or a weekly draft.
4. With explicit approval, enable **Allow GitHub Actions to create and approve pull requests**
   in Settings → Actions → General. This is a combined GitHub permission; the supplied workflow
   creates draft PRs and contains no step that approves reviews or merges them.
5. Confirm the token owner’s Copilot CLI policy and usage allowance. Optionally set repository
   variable `COPILOT_MODEL`; otherwise Copilot selects `auto`. No OpenAI API key is used.
6. Enable workflow failure notifications in your GitHub notification settings. Manually run
   **Draft weekly edition** once and check its PR, evidence, and usage before relying on the schedule.

The weekly schedule is Monday 13:17 UTC (06:17 PDT / 05:17 PST). GitHub schedules can be
delayed or dropped and need the workflow on the default branch. A Monday date identifies each
edition even when a manual run happens later that week; the coverage window ends on that Monday.
Existing edition branches are preserved rather than overwritten or regenerated at additional cost.

## Research and review

The generator uses the pinned GitHub Copilot CLI. Authentication and billing stay with GitHub, through the token owner’s Copilot seat.
[GitHub documents this Actions authentication route](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli-in-actions).
This removes separate AI/search provider accounts and keys; it does not make model usage free.

`config/research.json` configures a 14-day lookback, source endpoints, editorial topics, and
a maximum of 60 candidate records. Public arXiv Atom queries retrieve up to 100 papers in the
date window; GitHub release endpoints retrieve up to 30 releases per project. These public
HTTP endpoints require no API key. This is curated discovery, not unrestricted web search.
Unavailable feeds, omitted candidates, and unsupported submissions are recorded as gaps.

Copilot receives the collected excerpts and a JSON schema in one bounded CLI invocation.
There is no automatic retry. A four-minute timeout and output-size limit bound execution,
not monetary cost. Copilot cannot run shell commands, read files, write files, or browse;
its only exposed tool is web_fetch, with URL access explicitly denied. Built-in MCP servers
and custom instructions are disabled, and configuration is isolated under the agents workdir.
Generation has read-only repository permissions. A separate job creates the draft PR.

The intended live entry point is **Draft weekly edition** in Actions after merging. For local
experiments, supply a Copilot-compatible token through `COPILOT_GITHUB_TOKEN` securely; a
normal classic GitHub PAT is not a substitute. The workflow reads its stored token from the organization secret.

```sh
npm run digest -- --log-level info
```

The command produces a draft Markdown article and a dated evidence record under `data/research/`.
Tests use synthetic fixtures inside the ignored agents workdir, without API calls.

Source collection is deterministic; the model only receives the collected evidence and approved submissions.
All fetched text and issue bodies are untrusted data. Generated prose is escaped; raw Markdown
HTML is disabled. Runtime validation checks dates, schema, source provenance, duplicate URLs,
and approved submission IDs. It does **not** independently prove that a source supports every
claim, nor detect all semantic duplicates. AI-authorship and non-verification disclosures remain
visible even when a maintainer approves a publication PR.

Review the originating Actions run and `evidence.json`, including coverage gaps and usage. Check
facts, novelty, affiliations, caveats, and citations. Change `status: draft` to `status: published`
and remove the editorial draft notice only after review. Drafts and future-dated articles are
excluded from the site, archive, topic pages, and RSS. Failed validation leaves the old site intact.

Copilot billing and feature access follow the token owner’s seat and its managing organization. The evidence records
the requested model and invocation count; token usage is not captured in the evidence record.
Collectors have been checked against live endpoints, and the pinned CLI flags have been checked.
Authenticated Copilot generation passed in [run 35496396445](https://github.com/camsai/news-digest/actions/runs/35496396445).
The September 14 edition was reviewed by AI against its collected abstracts for publication.
Automatic draft PR creation remains blocked by the repository permission setting.

## Community submissions

Use the story issue form or [submit a JSON file by PR](submissions/README.md). Maintainers create
and use the labels `editorial:approved`, `editorial:featured`, and `editorial:published`.
Approved issue bodies are read only by trusted scheduled/manual runs. PR submissions are queued
after merge. A submitted URL must match a retrieved source before Copilot can cover it;
otherwise the evidence record flags it for a new curated source or manual research. The publication records consumed submission identifiers and source URLs to avoid
repeat coverage. After successful deployment, mark covered issues published and close them manually.

The initial release does not auto-publish, close issues automatically, send newsletters, or run
an independent freshness monitor. The plan tracks those follow-ups and the reviewed pilot.
