@AGENTS.md

# AeroFlow — Project Guide

## What this is
Single-page marketing website for AeroFlow, an AI automation agency. Built with Next.js 16.2.4, Tailwind CSS v4, and Framer Motion. Deployed on Vercel at **aeroflow.app**.

## Stack
- **Framework:** Next.js 16.2.4 (App Router)
- **Styling:** Tailwind CSS v4 — config is in `app/globals.css` using `@theme {}`, NOT a `tailwind.config.js`
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (body) + Space Grotesk (headings) via Google Fonts
- **Form backend:** Web3Forms (`NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local`)
- **Deployment:** Vercel CLI (`vercel deploy --prod`)

## Project structure
```
app/
  layout.tsx       # Root layout — <head> tags go here
  page.tsx         # Main page — imports all section components
  globals.css      # Tailwind v4 theme + all custom utilities
components/
  Navbar.tsx
  Hero.tsx
  Services.tsx
  Process.tsx
  Contact.tsx
  Footer.tsx
public/
  aeroflow-wing-white-512.png   # Main logo (white on transparent)
```

## Brand colors (defined in globals.css @theme)
| Token      | Value     | Usage                  |
|------------|-----------|------------------------|
| `navy`     | `#0C0C0C` | Background             |
| `cyan`     | `#F0F0F0` | Primary accent (white) |
| `blue`     | `#888888` | Secondary / mid-gray   |
| `slate`    | `#1A1A1A` | Card backgrounds       |
| `muted`    | `#707070` | Subtle text            |

## Owner info
- **WhatsApp:** +9647736360937 → `https://wa.me/9647736360937`
- **Contact email:** mohammed.abd21131a@coeng.uobaghdad.edu.iq (receives form submissions)
- **GitHub:** github.com/8r4b/aeroflow

## Common tasks

### Run locally
```bash
npm run dev
```

### Deploy to production
```bash
vercel deploy --prod
```

### Push + deploy
```bash
git add . && git commit -m "message" && git push && vercel deploy --prod
```

## Key conventions
- Tailwind v4: use `@theme {}` in `globals.css` for tokens, not a JS config file
- Custom utilities (glow, glass, gradient-text, orb, card-hover) are in `globals.css` under `@layer utilities`
- Logo: always use `/aeroflow-wing-white-512.png` — white on transparent, works on dark background
- All sections are in `components/` and imported directly in `app/page.tsx`
- No sub-pages — everything is on the single homepage
