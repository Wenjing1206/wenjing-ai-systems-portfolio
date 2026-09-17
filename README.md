# Wenjing Tian — AI Product & Intelligent Systems Portfolio

A responsive, dependency-free portfolio for AI Product, Intelligent Systems, Data & Analytics, and UX/Engineering roles. The site is English-first and includes six featured projects, a filterable project library, experience, research, about, résumé, and reusable case-study pages.

## Project structure

```text
.
├── index.html              # Home, projects, experience, research, about, résumé
├── project.html            # Shared case-study template
├── projects.js             # Single content source for all project pages
├── script.js               # Navigation, filters, and home-page rendering
├── detail.js               # Case-study rendering
├── styles.css              # Shared responsive design system
├── project.css             # Case-study styles
├── assets/                 # Résumé, favicon, and project evidence images
└── .github/workflows/      # GitHub Pages deployment
```

## Local preview

No installation or build step is required.

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Edit project content

Update the objects in `projects.js`. Both the home-page cards and every `project.html?id=...` case study use that same data, so titles, roles, results, and links stay consistent.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. The included workflow deploys the static site after every push to `main`.

If this is a project repository rather than a username repository, relative asset and page links continue to work under the repository subpath.

## Content notes

- Shopping Copilot is explicitly presented as a team system, with conversation-state management identified as Wenjing's documented module focus.
- Research results distinguish recorded findings from interpretation.
- Projects without a verified public URL use a walkthrough contact link instead of a placeholder or invented link.

