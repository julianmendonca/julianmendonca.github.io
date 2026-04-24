# Julian Mendonca — Portfolio

Personal presentation site built with Next.js 15, TypeScript, Tailwind CSS and Framer Motion. Contact form is wired to the Resend API.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY
npm run dev
```

The site will be at `http://localhost:3000`.

## Contact form

The form posts to `/api/contact`. Without `RESEND_API_KEY` set, submissions are logged to the server console instead of sent — handy for local development. For production, set:

- `RESEND_API_KEY` — from https://resend.com/api-keys
- `CONTACT_FROM_EMAIL` — a verified domain on your Resend account (falls back to `onboarding@resend.dev` for quick tests)
- `CONTACT_TO_EMAIL` — where messages are delivered (defaults to `julianmendon@gmail.com`)

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — Next.js lint
