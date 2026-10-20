# Failed-edition recovery and notifications

**Created:** 2026-10-20
**Updated:** 2026-10-20
**Tracking:** [Issue #1](https://github.com/camsai/news-digest/issues/1)

## Status

Implemented with passing offline policy tests and a read-only check against real history.
Live recovery-monitor validation is pending.

An independent hourly Actions workflow checks the last 35 days of weekly runs and the live
site. Original scheduled dates derive from the original run creation timestamp; explicit
backfill dates are preserved in run titles. Two separately dispatched recovery runs per
edition are allowed, counted across generation and deployment. Already merged content is
redeployed rather than regenerated. Active runs and a 30-minute propagation window suppress
retries. Older editions are dispatched first. Running on an independent schedule avoids
workflow-run recursion and leaves sufficient trigger depth for generation and Pages.

Persistent failures create a deduplicated GitHub issue assigned to and mentioning
timurbazhirov. The notification includes run links, never secrets or raw model output.
Success is quiet. Email/push routing follows the user's GitHub notification preferences.
No synthetic production failures or test notifications are sent during validation.
