# GitHub-native generation for Material Intelligence

**Created:** 2026-09-12

**Updated:** 2026-09-19

**Tracking:** [Project issue #1](https://github.com/camsai/news-digest/issues/1)

## Status

Implemented on the publication branch; authenticated Copilot generation in Actions and the
publication pilot remain unproven. Main remains the empty bootstrap and the repository remains
private. This change does not deploy or authorize publication.

## Implementation

- Replace the external model-provider SDK with pinned `@github/copilot` CLI.
- Use the ephemeral Actions token and `copilot-requests: write`. CAMSAI must allow organization
  billing for Copilot CLI and have an adequate usage budget. No separate provider keys or stored
  personal tokens are needed for deployment.
- Independently collect arXiv dated Atom results and GitHub published release records through
  public, keyless endpoints. Reject redirects, unapproved hosts, oversized responses and XML
  entity declarations. Record retrieval gaps and cap candidates.
- Give Copilot collected excerpts, approved submissions and the JSON schema. Only web_fetch is
  exposed, with URL access denied; shell/read/write are denied, built-in MCPs and custom
  instructions disabled. Use isolated CLI configuration, one invocation and a four-minute timeout.
- Require every cited URL, publication date, source type, access level and evidence excerpt to
  match a collected record. Submissions require matching URLs; unsupported nominations become
  explicit coverage gaps. Keep existing date, duplicate, schema and draft-publication checks.
- Preserve the evidence artifact before a separate job attempts a draft PR. Generation has no
  repository write token. PR creation does not approve or merge reviews.

## Deviations and limits

Direct CLI is used for this bounded drafting job instead of the proposed Agentic Workflows
wrapper. Deterministic collection and separate write authority enforce the relevant boundaries.
Discovery is curated, not general web search: arXiv is capped at 100 results and GitHub at 30
releases per repository. Only excerpts are provided, conservatively marked Abstract only.
Historical feed limits can miss stories. Semantic accuracy and novelty still need review.
CLI silent output reports no token count; evidence records requested model and invocation count.
Timeouts and size limits do not constitute a hard billing cap.

## Validation and remaining launch work

Live public arXiv and GitHub collection and the pinned CLI option set have been checked.
Tests exercise provenance, tampered source metadata, malformed output, unavailable feeds,
submission attribution, dates and existing draft/publication boundaries.

Still required: review and merge, confirm CAMSAI Copilot access/budget, run a real Actions draft,
inspect coverage and billing, and complete the publication pilot. The combined GitHub
create/approve-PR repository setting remains disabled; no permission change is included.
Generated artifacts remain downloadable if PR creation fails. See the parent publication plan
in `plan/upcoming/` for outstanding launch work.

## References

- [Copilot CLI in Actions](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli-in-actions)
- [CLI options and permissions](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
