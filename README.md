# Wenjing Tian | Applied AI & Data Science

A dependency-free portfolio in HTML, CSS, and JavaScript. The home page has five highlights, five role views, and a full project library. The build generates a compact card index from the canonical case records.

## Local preview and build

```sh
# English: Check syntax, mirror the static site, and serve the source.
# 中文：检查脚本语法、生成静态镜像并启动本地预览。
for script in *.js scripts/*.mjs; do node --check "$script" || exit 1; done
node scripts/build.mjs
python3 -m http.server 4173
```

Open http://localhost:4173/. Use http://localhost:4173/dist/ to preview the mirrored build. Node.js 20+ is sufficient for the static build. The browser check uses Playwright with Chromium. The website itself has no runtime package dependencies.

## Content maintenance

| File | Edit here |
| --- | --- |
| `projects.js` | Case-study facts, role, methods, results, evidence, links, and project order. Keep existing `id` values stable to preserve case-study URLs. |
| `site-data.js` | Role selections, project categories, direct skills-to-project links, experience, and résumé contact. |
| `index.html` | Positioning, overview, section order, education, and the home page's search metadata. |
| `project.html`, `detail.js` | Shared case-study shell and rendering. Fields such as `example`, `evidenceTable`, and `cover` are optional. |
| `styles.css`, `project.css` | Shared design tokens, responsive components, and case-study layouts. |
| `assets/evidence/` | Public coursework evidence and portfolio SQL analysis. |
| `scripts/build.mjs` | Generates `project-index.js` and the `dist/` mirror. Rebuild after editing source. |

Use `?role=data-science#projects`, `?role=applied-ai#projects`, `?role=analytics-bi#projects`, `?role=data-governance#projects`, or `?role=ai-product#projects` to share a role view. Label public, private, and illustrative evidence in each case study.

## GitHub Pages

GitHub Actions rebuilds the portfolio, checks JavaScript syntax, and runs Chromium checks before publishing `dist/` from `main`. The source is set to **GitHub Actions** under **Settings → Pages**. Check **Actions → Deploy portfolio to GitHub Pages** for the deployment result. Relative links keep the site and assets working under `/wenjing-ai-systems-portfolio/`; case studies retain the `project.html?id=…` route.

The repository also tracks a `dist/` mirror for its existing static hosting configuration. Regenerate it before committing source changes.
