# Andre Preer — Residential Craftsmanship Website

Website for **Andre Preer** (`Andre M. Preer II`), serving Springfield and Central Illinois with kitchen backsplashes, tile flooring, bathroom & shower tile (tile and stone surfaces only — no plumbing), custom natural stonework, interior finish upgrades, and outdoor patios/landscaping.

## Local Development & Build

```bash
npm install
npm run dev      # Starts Express + Vite on http://localhost:3000
npm run lint     # TypeScript check
npm run build    # Production Vite build into dist/
npm start        # Runs production server (node server.ts)
```

## Pushing to a New GitHub Repository & Publishing Live

1. Create a new empty repository on GitHub (separate from any Lil King repositories).
2. Push this codebase from the project root:
   ```bash
   git init
   git add .
   git commit -m "Initial Andre Preer website transformation"
   git branch -M main
   git remote add origin https://github.com/<your-org-or-user>/<new-repo-name>.git
   git push -u origin main
   ```
3. Publish live to a temporary hosting URL (for example on Cloud Run, Render, Railway, or a connected Cloudflare setup) with `npm run build` and `npm start` on port `3000`.
4. Do not connect any Lil King domain or subdomain. Wait for explicit approval before registering `andrepreer.com`.
