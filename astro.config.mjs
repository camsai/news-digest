import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";

export default defineConfig({
    site: process.env.SITE_URL || "https://camsai.github.io",
    base: process.env.SITE_BASE_PATH || "/news-digest",
    trailingSlash: "always",
    markdown: { processor: unified({ remarkRehype: { allowDangerousHtml: false } }) },
});
