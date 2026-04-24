# Julian Mendonca — Portfolio

Personal presentation site built with Next.js 15, TypeScript, Tailwind CSS and Framer Motion. Static site, no backend — deployed to GitHub Pages.

## Getting started

```bash
npm install
npm run dev
```

The site will be at `http://localhost:3000`.

## How contact works

No form, no backend, no third-party service. The Contact section shows the email address as a primary call-to-action: clicking it opens the visitor's default mail client via `mailto:`, and a Copy button lets them grab the address to use anywhere else.

To change the destination address or LinkedIn URL, edit the constants at the top of `components/Contact.tsx`.

## Deployment (GitHub Pages)

Pushes to `main` trigger `.github/workflows/deploy.yml`, which runs `npm run build` and publishes the exported `out/` directory to GitHub Pages.

One-time setup in the GitHub repo:

1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**

Because this repo is named `julianmendonca/julianmendonca` (a user site), the published URL will be `https://julianmendonca.github.io/`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — produce the static `out/` bundle
