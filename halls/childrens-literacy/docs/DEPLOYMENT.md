# Deployment Guide

## GitHub Pages

The Reading & Literacy Hall is a standalone static application.

No build command is required.

## Upload

Upload these files to the target repository so `index.html` is at the repository root.

Recommended repository root:

```text
index.html
README.md
VALIDATION.md
CHANGELOG.md
SECURITY.md
RIGHTS_NOTICE.md
.nojekyll
docs/
assets/
```

## Publish

1. Commit the files.
2. Open repository **Settings**.
3. Open **Pages**.
4. Select deployment from the `main` branch / repository root.
5. Save.
6. Wait for GitHub Pages deployment.
7. Open the published URL.

## Test

Check:

- navigation tabs;
- all four literacy pathways;
- all eleven skill controls;
- literature filters;
- dossier modals;
- local notes;
- module progress;
- Story Studio generators;
- source links;
- reading-level guide;
- NAIB copy action;
- JSON downloads;
- mobile layout.

## Shared Academy Routing

Where Khaemenes family continuity is required, prefer the shared `vervenveda.com` routing pattern used elsewhere in the Academy ecosystem.

## No Secrets

Do not place:

- API secrets;
- authentication tokens;
- private student records;
- email credentials;
- database passwords

inside the static `index.html`.
