# GitHub-native generation for Material Intelligence

**Created:** 2026-09-12  
**Updated:** 2026-09-13  
**Tracking:** [Project issue #1](https://github.com/camsai/news-digest/issues/1)

## Status

Researched migration proposal following the request to avoid separate OpenAI keys. Not yet
implemented or live-tested. The existing TypeScript provider and weekly workflow still use
OpenAI Responses. Website branding and AI disclosure have been updated independently.

## Recommended direction

Use Copilot CLI in GitHub Actions, authenticated with the ephemeral `GITHUB_TOKEN`. GitHub
documents `copilot-requests: write` for this use. The publication now lives in the
`camsai/news-digest` organization repository. Usage is billed to CAMSAI and requires the
organization's Copilot CLI billing policy to be enabled. No separate
OpenAI API key or stored personal access token is needed for this route; access and usage
still depend on the applicable Copilot plan and policies.

Do not migrate to the old GitHub Models inference API or `models: read` examples. GitHub
Models retired on July 30, 2026. The current `actions/ai-inference` repository is Copilot-only.

GitHub recommends Agentic Workflows for guarded unattended automation. Prefer that wrapper
for the production migration; direct Copilot CLI is suitable for the first bounded smoke test.

## Separate discovery from generation

Copilot model access does not replace the current Responses web-search tool automatically.
The CLI documents `web_fetch`, but no equivalent general `web_search` built-in in its current
tool list. Do not relabel model recollection as fresh web research.

1. Add deterministic collectors for public arXiv queries, RSS/Atom feeds, and GitHub releases.
   These can run on Actions without separate model/search provider keys.
2. Keep approved issue and merged PR submissions in the discovery queue. Fetch their primary
   sources with bounded requests and record unavailable or unsupported sources as coverage gaps.
3. Store actual retrieved URLs, publication dates, excerpts, and access level before inference.
4. Supply those records to Copilot to rank, group, and write a structured edition. Restrict model
   tools to what the task needs; keep shell and repository writes out of the research step.
5. Reuse the existing schemas, prior-coverage checks, citation provenance checks, and Markdown
   renderer. Derive consulted URLs from retrieval records, never from a model-generated list.
6. Add broad web discovery later if coverage requires it. Public feeds reduce key management,
   but their coverage is narrower than a general web-search service; measure missed stories.

## Authentication smoke test

The following is a reference snippet, not an installed workflow. Run once after the branch
and permissions are reviewed. Install a tested Copilot CLI version in the eventual lockfile.

```yaml
name: Copilot access check
on: workflow_dispatch
permissions:
  contents: read
  copilot-requests: write
jobs:
  check:
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: 24
      - run: npm install -g @github/copilot
      - name: Verify native model access
        env:
          GITHUB_TOKEN: ${{ github.token }}
        run: copilot -p "Reply only with OK. Do not use tools." -s --no-ask-user --disable-builtin-mcps
```

This spends Copilot usage, not OpenAI API credits. Do not assume the owner's entitlement has
been verified until this run succeeds. Pin the model for reproducibility after confirming
which models the account can use. Record usage and enforce a workflow timeout; application
limits are not a guarantee of a hard billing cap.

## Keep publication authority separate

AI authorship is independent of deployment approval. The site says articles are entirely
AI-generated and are not independently human fact-checked. Retain the pilot's PR publication
gate until automatic publication is explicitly chosen; merging a PR does not establish that
the scientific claims were checked by a human.

The model generation job needs read access and `copilot-requests: write`. A separate job can
create the draft PR after validation. Do not give Copilot review-approval or merge authority.
GitHub's repository-wide combined create/approve-PR setting is still disabled after automatic
approval review rejected it in the setup turn. Do not change it without explicit authorization.

## Acceptance criteria

- One manual Actions run authenticates with GITHUB_TOKEN and no provider API secrets.
- Every cited source exists in the independent retrieval record.
- A fixture and a live edition pass schema/date/deduplication validation.
- Copilot output cannot execute shell code, change workflows, or publish directly.
- Generated artifacts survive PR-creation failure; repeated runs preserve existing drafts.
- Usage and discovery gaps are recorded; the owner confirms acceptable coverage and cost.
- Remove the OpenAI key requirement from the normal workflow only after this path passes.

## Official references

- [Copilot CLI authentication and billing in Actions](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/copilot-cli-in-github-actions)
- [Using GITHUB_TOKEN with Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli-in-actions)
- [GitHub's automation recommendation](https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/automate-with-actions)
- [CLI options and available tools](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [GitHub Models retirement](https://github.blog/changelog/2026-07-01-github-models-is-being-fully-retired-on-july-30-2026/)
