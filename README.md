# Wenjing Tian | Data Science · Applied AI · Data Analytics

A dependency-free portfolio in HTML, CSS, and JavaScript. It presents four featured projects and a library of technical, research, and product work. The same project records drive every listing and case-study page.

## Local preview and build

```sh
# English: Check syntax, mirror the static site, and serve the source.
# 中文：检查脚本语法、生成静态镜像并启动本地预览。
for script in *.js scripts/*.mjs; do node --check "$script" || exit 1; done
node scripts/build.mjs
python3 -m http.server 4173
```

Open http://localhost:4173/. Use http://localhost:4173/dist/ to preview the mirrored build. Node.js 20+ is sufficient. The website itself has no runtime package dependencies.

## Content maintenance

| File | Edit here |
| --- | --- |
| `projects.js` | Case-study facts, role, methods, results, evidence, links, and project order. Set `featured` on the four projects highlighted on the home page. Keep existing `id` values stable to preserve case-study URLs. |
| `site-data.js` | Project categories, skill groups, contact links, experience and resume options. Set a resume's `pdf` to an approved public file under `assets/` when available. |
| `index.html` | Positioning, overview, section order, education, and the home page's search metadata. |
| `project.html`, `detail.js` | Shared case-study shell and rendering. Fields such as `example`, `evidenceTable`, and `cover` are optional. |
| `styles.css`, `project.css` | Shared design tokens, responsive components, and case-study layouts. |
| `scripts/build.mjs` | Static build manifest. Rebuild `dist/` after editing source instead of editing the mirror. |

Use a public resource link only after confirming that an unauthenticated visitor can access it. Label recreated examples or conceptual diagrams in their captions.

## GitHub Pages

The existing GitHub Actions workflow publishes the repository root after a push to `main`. The source is set to **GitHub Actions** under **Settings → Pages**. Check **Actions → Deploy portfolio to GitHub Pages** for the deployment result. Relative links keep the site and assets working under `/wenjing-ai-systems-portfolio/`; case studies retain the `project.html?id=…` route.

The repository also tracks a `dist/` mirror for its existing static hosting configuration. Regenerate it before committing source changes.
