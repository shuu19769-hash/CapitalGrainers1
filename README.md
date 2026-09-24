# The Capital Gainers — Website

Premium Next.js marketing site for The Capital Gainers.

## Requirements

- Node.js **18.18+** or **20+** (recommended for Next.js 15)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production (local)

```bash
npm install
npm run build
npm run start
```

The app serves on [http://localhost:3000](http://localhost:3000) by default. Set `PORT` to change the port.

## Deploy (Vercel, VPS, etc.)

1. Connect the repo or upload this folder.
2. **Build command:** `npm run build`
3. **Output:** Next.js default (`.next`); **Start command:** `npm run start` (Node hosting) or use the platform’s Next.js preset (e.g. Vercel auto-detect).
4. Ensure `public/images/` is included in the deployment (static assets).

Optional environment variables: none required for the static marketing site. Add API keys later if you wire the contact form to a backend.

## Assets

Client logos, portfolio, team photos, and logo live under `public/images/`.
