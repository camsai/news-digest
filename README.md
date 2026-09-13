# Material Intelligence

A weekly, entirely AI-generated publication about AI for materials science, with links to
original sources. Articles are not independently human fact-checked. Publication approval
does not change their AI authorship or establish scientific accuracy.

- **Repository:** https://github.com/camsai/news-digest
- **Intended website:** https://camsai.github.io/news-digest/
- **Plan:** [AI for materials publication](plan/upcoming/2026-09-12-ai-materials-news-outlet.md)
- **Tracking:** [Issue #1](https://github.com/camsai/news-digest/issues/1)
- **Custom domain:** [Deploy at digest.example.com](docs/hosting.md)
- **GitHub-native generation:** [Copilot migration proposal](plan/upcoming/2026-09-12-github-native-generation.md)

## Current state

The repository is private while the implementation is under review. No deployment is requested.

The repository was transferred to CAMSAI on 2026-09-13. Its default publication address is
https://camsai.github.io/news-digest/; no custom domain is configured.

Initial implementation lives on `feature/publication-foundation`. `main` deliberately contains
only an empty initial commit. The site and schedule are not live until reviewed code is merged.
The launch article is explicitly labeled retrospective background, not fresh weekly news.
GitHub Pages is configured for Actions deployment and the three editorial labels exist.
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
2. Pages is already configured with **GitHub Actions** as the build source.
3. The Publish workflow validates and deploys the static `dist/` artifact on pushes to main.
4. With explicit approval, enable **Allow GitHub Actions to create and approve pull requests**
   in Settings → Actions → General. This is a combined GitHub permission; the supplied workflow
   creates draft PRs and contains no step that approves reviews or merges them.
5. Set the Actions secret `OPENAI_API_KEY` and repository variable `OPENAI_MODEL` to a model
   available to your API project that supports Responses web search and structured outputs.
   There is deliberately no silently selected model or hard-coded API key.
6. Enable workflow failure notifications in your GitHub notification settings. Manually run
   **Draft weekly edition** once and check its PR, evidence, and usage before relying on the schedule.

The weekly schedule is Monday 13:17 UTC (06:17 PDT / 05:17 PST). GitHub schedules can be
delayed or dropped and need the workflow on the default branch. A Monday date identifies each
edition even when a manual run happens later that week; the coverage window ends on that Monday.
Existing edition branches are preserved rather than overwritten or regenerated at additional cost.

## Research and review

The current adapter uses OpenAI. Copilot CLI with the Actions `GITHUB_TOKEN` is the recommended
keyless migration, documented above; it is not implemented yet. GitHub Models' former inference
API has been retired, so its old authentication examples are not a viable replacement.

`config/research.json` controls seed sources, queries, a 14-day lookback, and per-request limits.
The initial provider uses web search seeded with those sources; direct RSS/arXiv adapters are
not implemented yet. There are at most two model requests per run and at most eight search-tool
calls by default. Automatic API retries are disabled to avoid duplicate paid research after an
ambiguous timeout. Re-run manually after investigating a failure.

```sh
# Set OPENAI_API_KEY and OPENAI_MODEL securely in your shell first.
npm run digest -- --log-level info
```

The command produces a draft Markdown article and a dated evidence record under `data/research/`.
Tests use synthetic fixtures inside the ignored agents workdir, without API calls.

The model can search the web but cannot access the shell, GitHub writes, or repository secrets.
All fetched text and issue bodies are untrusted data. Generated prose is escaped; raw Markdown
HTML is disabled. Runtime validation checks dates, schema, source provenance, duplicate URLs,
and approved submission IDs. It does **not** independently prove that a source supports every
claim, nor detect all semantic duplicates. AI-authorship and non-verification disclosures remain
visible even when a maintainer approves a publication PR.

Review the originating Actions run and `evidence.json`, including coverage gaps and usage. Check
facts, novelty, affiliations, caveats, and citations. Change `status: draft` to `status: published`
and remove the editorial draft notice only after review. Drafts and future-dated articles are
excluded from the site, archive, topic pages, and RSS. Failed validation leaves the old site intact.

The $20/month API target is a planning estimate, not a hard billing cap. Configure provider-side
budget controls and inspect actual usage during the four-edition pilot. No live API call has been
validated until credentials are supplied and the first live draft succeeds.

## Community submissions

Use the story issue form or [submit a JSON file by PR](submissions/README.md). Maintainers create
and use the labels `editorial:approved`, `editorial:featured`, and `editorial:published`.
Approved issue bodies are read only by trusted scheduled/manual runs. PR submissions are queued
after merge. The publication records consumed submission identifiers and source URLs to avoid
repeat coverage. After successful deployment, mark covered issues published and close them manually.

The initial release does not auto-publish, close issues automatically, send newsletters, or run
an independent freshness monitor. The plan tracks those follow-ups and the reviewed pilot.
