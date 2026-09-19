# Suggest a story through a pull request

Add a descriptively named `.json` file here. Merging the PR signifies editorial approval
for consideration. Do not add a submission merely to test the workflow; use test fixtures.

```json
{
  "title": "The release or research result",
  "url": "https://example.org/original-source",
  "publishedAt": "2026-09-12",
  "relevance": "What changed and why a materials researcher would care.",
  "treatment": "mention",
  "affiliation": "None",
  "targetEdition": null
}
```

Use `feature` to request a feature, and an edition's Monday date to target it. A feature
request still needs sufficient evidence. Validation runs with `npm run check`. The filename
is the stable submission identifier; retain files after publication for provenance.

Alternatively use the GitHub story issue form. Maintainers apply `editorial:approved` and,
optionally, `editorial:featured`. Remove approval if the issue's contents change materially.
After a successful deployment, apply `editorial:published` and close the issue. Automated
publication bookkeeping is a later milestone.
