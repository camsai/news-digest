# Material Intelligence

A weekly, entirely AI-generated publication about AI for materials science, with links to
original sources. Articles are not independently human fact-checked. Publication approval
does not change their AI authorship or establish scientific accuracy.

- **Repository:** https://github.com/camsai/news-digest
- **Intended website:** https://camsai.github.io/news-digest/
- **Plan:** [AI for materials publication](plan/upcoming/2026-09-12-ai-materials-news-outlet.md)
- **Tracking:** [Issue #1](https://github.com/camsai/news-digest/issues/1)
- **Custom domain:** [Deploy at digest.example.com](docs/hosting.md)
- **GitHub-native generation:** [Copilot generation implementation](plan/review/2026-09-12-github-native-generation.md)

## Current state

The repository is private while the implementation is under review. Merging this PR into main
is intended to publish the launch article automatically.

The repository was transferred to CAMSAI on 2026-09-13. Its default publication address is
https://camsai.github.io/news-digest/; no custom domain is configured.

Initial implementation lives on `feature/publication-foundation`. `main` deliberately contains
only an empty initial commit. The site and schedule are not live until reviewed code is merged.
The launch article is explicitly labeled retrospective background, not fresh weekly news.
The three editorial labels exist. Pages is currently unavailable: GitHub rejected setup with
HTTP 422 because CAMSAI’s current plan does not support Pages for this private repository.
Keep the repository private; enable a plan supporting private-repository Pages before merging
to launch. The deployment workflow configures Pages and deploys on pushes to main.
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

1. Review the implementation and merge it into `main` when ready to launch.
2. Resolve the private-repository Pages plan requirement. The workflow then enables Pages
   with **GitHub Actions** as the build source.
3. The Publish workflow validates and deploys the static `dist/` artifact on pushes to main.
   This includes the published launch article, “From predicting crystals to designing them,”
   on the homepage, article page and RSS. It does not wait for Copilot or a weekly draft.
4. With explicit approval, enable **Allow GitHub Actions to create and approve pull requests**
   in Settings → Actions → General. This is a combined GitHub permission; the supplied workflow
   creates draft PRs and contains no step that approves reviews or merges them.
5. Enable CAMSAI’s **Allow use of Copilot CLI billed to the organization** policy and confirm
   its Copilot usage budget. The workflow uses the ephemeral `GITHUB_TOKEN` with
   `copilot-requests: write`; no model-provider API key or personal access token is required.
   Optionally set repository variable `COPILOT_MODEL`; otherwise Copilot selects `auto`.
6. Enable workflow failure notifications in your GitHub notification settings. Manually run
   **Draft weekly edition** once and check its PR, evidence, and usage before relying on the schedule.

The weekly schedule is Monday 13:17 UTC (06:17 PDT / 05:17 PST). GitHub schedules can be
delayed or dropped and need the workflow on the default branch. A Monday date identifies each
edition even when a manual run happens later that week; the coverage window ends on that Monday.
Existing edition branches are preserved rather than overwritten or regenerated at additional cost.

## Research and review

The generator uses the pinned GitHub Copilot CLI. Authentication and billing stay with GitHub.
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
normal classic GitHub PAT is not a substitute. The deployment path does not need a stored token.

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

Copilot billing is controlled by CAMSAI’s organization policy and budget. The evidence records
the requested model and invocation count; silent CLI output does not report token usage.
Collectors have been checked against live endpoints, and the pinned CLI flags have been checked.
Authenticated Copilot generation and the publication pilot are still pending; no live model
result or deployment is claimed.

## Community submissions

Use the story issue form or [submit a JSON file by PR](submissions/README.md). Maintainers create
and use the labels `editorial:approved`, `editorial:featured`, and `editorial:published`.
Approved issue bodies are read only by trusted scheduled/manual runs. PR submissions are queued
after merge. A submitted URL must match a retrieved source before Copilot can cover it;
otherwise the evidence record flags it for a new curated source or manual research. The publication records consumed submission identifiers and source URLs to avoid
repeat coverage. After successful deployment, mark covered issues published and close them manually.

The initial release does not auto-publish, close issues automatically, send newsletters, or run
an independent freshness monitor. The plan tracks those follow-ups and the reviewed pilot.
