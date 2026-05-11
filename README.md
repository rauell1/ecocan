<p align="center">
  <img src="https://www.ecocan.africa/logo.png" alt="Ecocan Logo" width="160" />
</p>

<h1 align="center">Ecocan</h1>

<p align="center">
  <strong>Re-imagining Sustainability in Africa</strong><br />
  A modern web platform for Ecocan's beverage-container recycling, brand-protection, and circular-economy solutions.
</p>

<p align="center">
  <a href="https://ecocan.africa"><img src="https://img.shields.io/badge/live-ecocan.africa-01696f?style=flat-square&logo=vercel" alt="Live Site" /></a>
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/deployed_on-Vercel-000?style=flat-square&logo=vercel" alt="Vercel" />
</p>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Auto-Updating Documentation](#auto-updating-documentation)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Rollback & Recovery](#rollback--recovery)
- [License](#license)

---

## About the Project

**Ecocan** is a sustainability-technology company building Africa's Deposit Return System (DRS) for beverage packaging. This repository is the public-facing marketing and platform website that serves multiple distinct audiences:

| Persona | What they do on the platform |
|---|---|
| **Consumer** | Learns about returning empties, scanning QR codes, and earning rewards |
| **Brand / Eco-Producer** | Registers to protect their brand, access analytics, and join the DRS |
| **Eco-Station** | Applies to become a collection point and manages returns |
| **Courier / Logistics** | Understands the reverse-logistics hustle opportunity |
| **Recycler** | Discovers how sorted materials flow from station to recycler |
| **Events** | Explores Ecocan activations, partnerships, and community events |

The platform also surfaces an **Ecocan Market** for eco-friendly products, a **News & Blog** section, a **Download** page for the mobile app, and a deep **Solutions** hub covering brand promotion, brand protection, packaging recycling, and online sales.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | [Next.js](https://nextjs.org/) App Router | 14.2.35 |
| Language | TypeScript | ^5 |
| UI Library | React | ^18 |
| Styling | Tailwind CSS + `tailwindcss-animate` | ^3.4.1 |
| Headless UI | Radix UI (Accordion, Alert Dialog, Dropdown, Label, Select, Slot, Switch, Tabs, Tooltip) | various |
| Animation | Framer Motion | ^11 |
| Carousel | Embla Carousel React | ^8 |
| Icons | Lucide React | ^0.403 |
| Forms | React Hook Form + Zod (schema validation) | ^7 / ^3 |
| Class utilities | clsx · tailwind-merge · class-variance-authority | — |
| Analytics | @vercel/analytics | ^2 |
| Deployment | Vercel | — |
| Linting | ESLint + eslint-config-next | ^8 / 14.2.4 |

---

## Project Structure

```
ecocan/
├── app/                        # Next.js 14 App Router
│   ├── layout.tsx              # Root layout — global <html>, <body>, nav, footer
│   ├── globals.css             # Global styles & Tailwind base
│   ├── page.tsx                # Home page  (/)
│   ├── about-us/               # About Us   (/about-us)
│   ├── contact/                # Contact    (/contact)
│   ├── download/               # Download   (/download)
│   ├── eco-friendly-cans/      # Eco-friendly Cans (/eco-friendly-cans)
│   ├── ecocan-market/          # Ecocan Market     (/ecocan-market)
│   ├── news/                   # News & Blog       (/news)
│   └── solutions/
│       ├── page.tsx            # Solutions hub     (/solutions)
│       ├── [section]/          # Dynamic solution  (/solutions/[section])
│       └── sections/           # Section content components
│           ├── brand-promotion/
│           ├── brand-protection/
│           ├── packaging-recycling/
│           ├── online-sales/
│           └── solutions-home/
│
├── components/
│   ├── ui/                     # Generic design-system primitives
│   │   └── (accordion, badge, button, card, carousel, form, input, …)
│   ├── shared/                 # Layout chrome & cross-cutting blocks
│   │   ├── navbar/             # Navigation bar & mega-menu
│   │   ├── footer/             # Site footer
│   │   ├── heros/              # Hero variants per persona
│   │   ├── hero-form/          # Lead-capture hero form
│   │   ├── cta-card/           # Call-to-action card
│   │   ├── download-app.tsx    # App store download block
│   │   ├── accordion.tsx       # Shared accordion wrapper
│   │   ├── faq.tsx             # FAQ section
│   │   └── (…more)
│   └── contents/               # Persona-specific content blocks
│       ├── consumer/
│       ├── courier/
│       ├── eco-producer/
│       ├── eco-station/
│       ├── events/
│       └── recycler/
│
├── lib/                        # Utilities & hooks
│   ├── utils.ts                # Class-name helpers and general utilities
│   ├── imageIndex.ts           # Centralised image asset index
│   ├── pdfViewer.ts            # PDF viewing utilities
│   ├── tabContent.tsx          # Shared tab content logic
│   ├── useLoadImages.ts        # Image pre-loading hook
│   ├── useMediaQuery.ts        # Responsive media-query hook
│   └── useScroll.ts            # Scroll-position / scroll-triggered hook
│
├── types/                      # TypeScript type definitions
│   ├── card-data.ts            # Card content shape (title, description, icon, link)
│   └── section.tsx             # Solution section shape (slug, label, component)
│
├── scripts/
│   └── update-docs.mjs         # Auto-doc generation script (ESM, no extra deps)
│
├── .github/
│   └── workflows/
│       └── docs-update.yml     # CI: regenerates docs on every push to main
│
├── SITEMAP.md                  # Auto-updated route sitemap
├── CODEBASE-MAP.md             # Auto-updated structural codebase map
├── ROLLBACK.md                 # Deployment log & rollback guide
├── VERCEL.md                   # Vercel deployment notes & history
├── CLAUDE.md                   # AI-assistant guidelines for this repo
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript compiler configuration
└── package.json                # Project metadata, scripts, dependencies
```

---

## Pages & Routes

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home — hero, key journeys, CTAs |
| `/about-us` | `app/about-us/page.tsx` | Carousels, vision, community, partners |
| `/contact` | `app/contact/page.tsx` | Contact hero + contact form |
| `/download` | `app/download/page.tsx` | App download landing |
| `/eco-friendly-cans` | `app/eco-friendly-cans/page.tsx` | Eco-can explainer — economic, operational, security |
| `/ecocan-market` | `app/ecocan-market/page.tsx` | Product marketplace + search |
| `/news` | `app/news/page.tsx` | Articles, news, blog, partnerships |
| `/solutions` | `app/solutions/page.tsx` | Solutions hub — overview of all solution areas |
| `/solutions/[section]` | `app/solutions/[section]/page.tsx` | Dynamic solution detail pages |

### Solution Sections (dynamic slugs)

| Slug | Content |
|---|---|
| `brand-promotion` | Consumer engagement, hero experience, eConsumers care |
| `brand-protection` | QR codes, security, waste/litter context, app capabilities |
| `packaging-recycling` | Aluminium, glass, plastics, fun facts, process, how it works |
| `online-sales` | Online sales solution |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 9 (the project uses `pnpm-lock.yaml`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/rauell1/ecocan.git
cd ecocan

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
pnpm start
```

---

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the Next.js development server with hot reload |
| `pnpm build` | Build the app for production |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint across the project |
| `npm run docs:update` | Regenerate `SITEMAP.md` and `CODEBASE-MAP.md`; append to `ROLLBACK.md` / `VERCEL.md` when env vars are present |

---

## Auto-Updating Documentation

Five documentation files live at the repo root and stay in sync automatically:

| File | Update trigger | What it tracks |
|---|---|---|
| `SITEMAP.md` | Every push to `main` | All routes derived from `app/**/page.tsx` |
| `CODEBASE-MAP.md` | Every push to `main` | Full directory tree, file counts per folder |
| `ROLLBACK.md` | Every push to `main` (when `GITHUB_SHA` present) | Deployment log — commit, branch, actor, timestamp |
| `VERCEL.md` | Every push to `main` (when `VERCEL_URL` present) | Deployment history — URL, environment, commit |
| `CLAUDE.md` | Manually maintained | AI-assistant guidelines and conventions |

The GitHub Actions workflow (`.github/workflows/docs-update.yml`) runs `npm run docs:update` on every push to `main`, commits changes back, and uses `[skip ci]` + `paths-ignore` to prevent infinite loops.

---

## Environment Variables

### Auto-injected — nothing to configure

| Variable | Source | Used for |
|---|---|---|
| `GITHUB_SHA` | GitHub Actions built-in | Commit hash in `ROLLBACK.md` |
| `GITHUB_REF_NAME` | GitHub Actions built-in | Branch name in `ROLLBACK.md` |
| `GITHUB_ACTOR` | GitHub Actions built-in | Pusher username in `ROLLBACK.md` |
| `GITHUB_TOKEN` | GitHub Actions built-in | Push doc commits back to `main` |
| `VERCEL_URL` | Vercel system variable | Deployment URL in `VERCEL.md` |
| `VERCEL_ENV` | Vercel system variable | Environment label (production / preview) |
| `VERCEL_GIT_COMMIT_SHA` | Vercel system variable | Commit SHA in `VERCEL.md` |

### Optional — set manually

| Variable | Where to set | Where to get the value |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Vercel → Settings → Environment Variables | Your production domain e.g. `https://ecocan.africa` |
| `VERCEL_TOKEN` | GitHub → Settings → Secrets → Actions | [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_TEAM_ID` | GitHub Secrets or Vercel env | Vercel → Settings → General → Team ID |

---

## Deployment

This project deploys to **Vercel** using the Next.js preset with zero additional configuration.

1. Go to [vercel.com](https://vercel.com) → **Add New → Project**
2. Import `rauell1/ecocan` from GitHub
3. Framework preset: **Next.js** (auto-detected)
4. Node version: **18 or above**
5. Build command: `next build` (default)
6. Click **Deploy**

Every pull request automatically receives an isolated **Preview Deployment** URL from Vercel before merging to production.

---

## Contributing

1. Fork the repository and create a feature branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Follow existing conventions:
   - New pages → `app/`
   - Reusable layout blocks → `components/shared/`
   - Persona-specific content → `components/contents/<persona>/`
   - Generic UI primitives → `components/ui/`
   - New hooks → `lib/`
3. Run checks before opening a PR:
   ```bash
   pnpm lint
   pnpm build
   ```
4. Open a PR against `main`. The docs-update workflow will automatically regenerate `SITEMAP.md` and `CODEBASE-MAP.md` once merged.

### Code conventions

- **TypeScript-first** — all new files in `.tsx` or `.ts`
- **Tailwind for all styling** — no inline styles unless absolutely necessary
- **Radix UI for accessible primitives** — use existing `components/ui/` wrappers before adding new dependencies
- **`react-hook-form` + `zod`** for all forms
- **Small, focused PRs** — one feature or fix per pull request

---

## Rollback & Recovery

If a deployment introduces a regression:

1. Check [`ROLLBACK.md`](./ROLLBACK.md) for the last stable commit hash
2. Create a revert branch:
   ```bash
   git checkout -b revert/rollback-to-<commit-sha>
   git revert <bad-commit-sha>..HEAD
   git push origin revert/rollback-to-<commit-sha>
   ```
3. Open a PR — Vercel will build a preview for you to verify before merging
4. Or use **Vercel dashboard → Deployments → Promote to Production** to instantly re-promote any previous successful build

---

## License

This project is **private** and proprietary to Ecocan. All rights reserved.

---

<p align="center">
  Built with ❤️ for a cleaner Africa · <a href="https://ecocan.africa">ecocan.africa</a>
</p>
