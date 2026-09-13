# Hosting Material Intelligence on a custom domain

The site remains a static GitHub Pages publication. A custom domain changes its address,
not where the weekly research runs. GitHub Actions continues to generate and build the site.

The example below produces **https://digest.example.com/**. These instructions do not activate
that domain or change DNS. The current fallback is https://camsai.github.io/news-digest/.

## Configure GitHub before DNS

1. Verify ownership of `example.com` in your GitHub account's Pages settings using the TXT record
   GitHub supplies. Use its exact verification name and value; keep the record after verification.
2. In `camsai/news-digest` → Settings → Pages, keep **GitHub Actions** as the build source.
3. Set **Custom domain** to `digest.example.com` and save it before adding the DNS alias.

## Add the DNS record

At the DNS provider for `example.com`, add:

| Type  | Name / host | Target             | TTL                  |
| ----- | ----------- | ------------------ | -------------------- |
| CNAME | `digest`    | `camsai.github.io` | Auto or 3600 seconds |

The target has no `https://` prefix and no `/news-digest` path. Replace any conflicting record
at the **digest** hostname only; the apex domain and other subdomains do not need to change.
If the DNS provider offers HTTP proxying, use DNS-only mode while configuring Pages and HTTPS.

## Build for the domain root

Add repository **Actions variables** (not secrets):

| Variable         | Value                        |
| ---------------- | ---------------------------- |
| `SITE_URL`       | `https://digest.example.com` |
| `SITE_BASE_PATH` | `/`                          |

The Publish workflow passes these to Astro. Both are necessary: keeping `/news-digest` as the
base would break links and assets on the domain root. Canonical URLs, navigation, and RSS then
use the custom address. Without the variables, the existing GitHub Pages project URL is used.

For a local production build with this configuration:

```sh
SITE_URL=https://digest.example.com SITE_BASE_PATH=/ ASTRO_TELEMETRY_DISABLED=1 npm run build
```

Merge the reviewed implementation to main and run Publish. With an Actions-based Pages
deployment, the domain is configured in Pages settings; a repository `CNAME` file is not
required and is not the source of truth.

## Confirm the launch

Check `dig digest.example.com CNAME`, the Pages DNS check, and the successful Publish run.
Allow DNS propagation and certificate provisioning to finish, then enable **Enforce HTTPS**.
Verify the homepage, an article, CSS, canonical URL, and `/rss.xml` on the custom domain.
The public site cannot be live while main contains only the empty bootstrap commit.

To return to the default URL, remove the custom domain in Pages, remove the digest DNS alias,
clear both Actions variables, and redeploy. Keep the ownership-verification TXT record.

## References

- [GitHub: managing a custom Pages domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub: verifying a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [GitHub: domain and HTTPS troubleshooting](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)
