<div align="center">

# 🌿 ECOCAN

**Africa's first digital Deposit Return System (DRS) — closing the beverage packaging loop through technology, incentives, and community.**

[![Live Site](https://img.shields.io/badge/Live-ecocan.africa-01696f?style=flat-square&logo=vercel)](https://ecocan.africa)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

</div>

---

> _ECOCAN connects consumers, ECO-Stations, couriers, recyclers and brands in one seamless closed-loop system. Scan to verify. Return to earn. Every bottle traceable._

---

## 🌍 What is ECOCAN?

ECOCAN is a **Next.js 14** marketing and information platform for Africa's first digital Deposit Return System (DRS). Consumers pay a small deposit on every beverage container at point of purchase, then earn it back — in cash to M-PESA or bank — when they return the empty to any ECO-Station counter. The packaging is picked up by couriers on electric bikes, processed at recycling hubs, and fed back into the supply chain.

Every bottle in the system carries a **unique, tamper-evident QR code** that:

- Verifies authenticity (genuine vs. counterfeit) in 3 seconds
- Triggers the deposit refund on return
- Gives brands real-time traceability from factory to return

---

## ♻️ The Closed Loop

```
Factory → Bottle (QR code applied)
  → Supermarket shelf
    → Consumer buys + scans (VERIFIED ✅)
      → Consumer drinks
        → Consumer returns empty to ECO-Station counter
          → Electric bike courier collects
            → Recycling hub processes
              → New bottle made → Factory ↺
```

---

## 🛠️ Tech Stack

| Technology                                       | Version | Role                                             |
| ------------------------------------------------ | ------- | ------------------------------------------------ |
| [Next.js](https://nextjs.org)                    | 14.2    | App Router, SSG/SSR, Image Optimization, Sitemap |
| [React](https://react.dev)                       | 18      | UI rendering                                     |
| [TypeScript](https://www.typescriptlang.org)     | 5       | Type safety                                      |
| [Tailwind CSS](https://tailwindcss.com)          | 3.4     | Styling, responsive utilities                    |
| [GSAP](https://gsap.com) + ScrollTrigger         | 3.15    | Scroll animations, pinned hero, stagger reveals  |
| [Lenis](https://lenis.darkroom.engineering)      | 1.3     | Smooth scroll connected to ScrollTrigger         |
| [Radix UI](https://www.radix-ui.com)             | Latest  | Accessible headless components (Tabs, Accordion) |
| [Lucide React](https://lucide.dev)               | Latest  | Icon system                                      |
| [React Hook Form](https://react-hook-form.com)   | Latest  | Contact form                                     |
| [Zod](https://zod.dev)                           | Latest  | Form schema validation                           |
| [Vercel Analytics](https://vercel.com/analytics) | Latest  | Performance monitoring                           |

---

## 📁 Project Structure

```
ecocan/
├── app/                              # Next.js 14 App Router
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Homepage (all landing sections)
│   ├── globals.css                   # Global styles, CSS variables, animations
│   ├── sitemap.ts                    # Auto-generated /sitemap.xml
│   ├── robots.ts                     # /robots.txt
│   ├── about-us/page.tsx
│   ├── contact/page.tsx
│   ├── download/page.tsx
│   ├── news/
│   │   ├── page.tsx                  # News hub (dark editorial theme)
│   │   └── components/               # Articles, heroes, tab switcher
│   └── solutions/
│       ├── page.tsx
│       └── [section]/page.tsx        # Dynamic solution sections
│
├── components/
│   ├── ui/                           # Radix + Tailwind primitives
│   ├── shared/                       # SectionBadge, Navbar, Footer, PrimaryButton
│   └── sections/                     # Homepage sections (in page order)
│       ├── home-navbar.tsx           # Always-dark fixed nav
│       ├── home-mobile-menu.tsx      # Slide-in mobile drawer
│       ├── hero-section.tsx          # Fullscreen video hero, scroll-out animation
│       ├── problem-solution-section.tsx  # Stats + closed-loop body copy
│       ├── how-it-works-section.tsx  # 5-step flow (carousel on mobile, grid on desktop)
│       ├── ecocan-model-section.tsx  # Retailers · Producers · Logistics
│       ├── anti-counterfeit-section.tsx
│       ├── app-showcase-section.tsx  # Phone mockup + app store links
│       ├── electric-mobility-section.tsx
│       ├── for-investors-section.tsx
│       ├── sustainability-impact-section.tsx
│       ├── ecommunity-roles-section.tsx
│       ├── partners-testimonials-section.tsx
│       ├── faq-section.tsx           # 6-question accordion
│       ├── call-to-action-section.tsx  # 3-path cards (Consumer · Partner · Investor)
│       └── home-footer.tsx
│
├── lib/
│   ├── imageIndex.ts                 # Centralised image path exports
│   ├── useScroll.ts                  # Scroll-position hook
│   └── utils.ts
│
├── public/
│   ├── assets/images/               # All static images
│   │   ├── blog/                    # News article images
│   │   ├── consumer/                # App mockup screenshots
│   │   └── icons/
│   ├── images/                      # Section photography
│   └── videos/
│       └── hero-loop.mp4            # Hero background video
│
├── docs/
│   ├── codebase-map.md              # ← Auto-regenerated on every commit (post-commit hook)
│   └── codebase-map.json            # ← Machine-readable version of above
│
├── scripts/
│   ├── generate-codebase-map.mjs    # Post-commit codebase scanner
│   └── update-docs.ts               # Manual: regenerates SITEMAP.md, ROLLBACK.md etc.
│
├── SITEMAP.md                       # Route map — run `pnpm docs:update` to refresh
├── CODEBASE-MAP.md                  # Directory tree — run `pnpm docs:update` to refresh
├── ROLLBACK.md                      # Deployment log — run `pnpm docs:update` to refresh
├── VERCEL.md                        # Vercel deployment notes
├── CLAUDE.md                        # AI assistant coding guidelines
└── README.md                        # ← You are here
```

---

## 🗺️ Pages & Routes

| Route                  | Description                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| `/`                    | Homepage — hero, how it works, anti-counterfeit, investors, FAQ, CTA          |
| `/about-us`            | Brand story, team, values (SISU), partners                                    |
| `/contact`             | Contact form + department emails + offices                                    |
| `/download`            | App download CTAs (App Store + Google Play)                                   |
| `/news`                | Dark editorial news hub — Sustainability & Partnership tabs                   |
| `/solutions`           | Solutions overview                                                            |
| `/solutions/[section]` | Dynamic: brand-protection, brand-promotion, packaging-recycling, online-sales |
| `/sitemap.xml`         | Auto-generated by `app/sitemap.ts`                                            |
| `/robots.txt`          | Auto-generated by `app/robots.ts`                                             |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 9 (or npm)

### Install & Run

```bash
# Clone
git clone https://github.com/rauell1/ecocan.git
cd ecocan

# Install
pnpm install

# Dev server → http://localhost:3000
pnpm dev
```

### Production Build

```bash
pnpm build
pnpm start
```

---

## 📜 Scripts

| Command            | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| `pnpm dev`         | Start development server (port 3000)                             |
| `pnpm build`       | Production build (runs type-check + lint)                        |
| `pnpm start`       | Start production server                                          |
| `pnpm lint`        | ESLint across the codebase                                       |
| `pnpm docs:update` | **Manually** regenerate SITEMAP.md, CODEBASE-MAP.md, ROLLBACK.md |

---

## 📚 Auto-Updating Documentation

### What updates automatically

| File                     | When                 | How                                                             |
| ------------------------ | -------------------- | --------------------------------------------------------------- |
| `docs/codebase-map.md`   | **Every git commit** | Post-commit Husky hook runs `scripts/generate-codebase-map.mjs` |
| `docs/codebase-map.json` | Every git commit     | Same hook                                                       |
| `/sitemap.xml`           | Every Vercel deploy  | `app/sitemap.ts` — Next.js generates it at build time           |
| `/robots.txt`            | Every Vercel deploy  | `app/robots.ts` — same                                          |

### What requires a manual trigger

| File              | How to update                  |
| ----------------- | ------------------------------ |
| `SITEMAP.md`      | Run `pnpm docs:update` locally |
| `CODEBASE-MAP.md` | Run `pnpm docs:update` locally |
| `ROLLBACK.md`     | Run `pnpm docs:update` locally |

> **Why does `docs/codebase-map` sometimes conflict?**
> The post-commit hook stages the updated map files after each commit. If a second committer (GitHub Copilot, CI bot, etc.) pushes to `main` between your commit and your push, a merge conflict occurs on those files. Resolution: `git checkout --theirs docs/codebase-map.json docs/codebase-map.md && git add docs/ && git commit`.

---

## 🎨 Design System

| Token        | Value                         | Usage                                               |
| ------------ | ----------------------------- | --------------------------------------------------- |
| `--primary`  | Deep green `hsl(156 61% 28%)` | Buttons, links, accents                             |
| `--eco-dark` | Near-black green `#0a1a0f`    | Text on light backgrounds                           |
| `#4ade80`    | Bright green                  | Dark-section accents (explicit inline, not CSS var) |
| `#060a08`    | Hero / CTA background         |                                                     |
| `#101010`    | Problem section background    |                                                     |
| `#f5f5f0`    | How It Works background       | Warm off-white                                      |

> **Note:** Tailwind's `text-eco-green` / `border-eco-green` reference an undefined CSS variable and render invisible on dark backgrounds. Always use explicit inline `style={{ color: "#4ade80" }}` for bright green on dark sections.

---

## 🌐 Deployment

ECOCAN deploys to **Vercel** on every push to `main`.

1. Connect `rauell1/ecocan` to your Vercel project
2. Framework preset: **Next.js**
3. Node.js: **18.x+**
4. Build command: `next build` (default)
5. No environment variables required for the marketing site

### Rollback

```bash
# Find a good commit
git log --oneline -10

# Create rollback branch
git checkout -b rollback/fix-<short-sha> <sha>

# Push and promote in Vercel dashboard, or merge to main
git push origin rollback/fix-<short-sha>
```

---

## 🤝 Contributing

1. Branch from `main`: `git checkout -b feat/your-feature`
2. Follow existing patterns — sections live in `components/sections/`, use inline `style={{}}` for dark-section colours
3. `pnpm lint && pnpm build` must pass before opening a PR
4. Keep PRs small and focused — one section or concern per PR

---

<div align="center">

Built with 💚 for Africa · [ecocan.africa](https://ecocan.africa) · © 2026 ECOCAN

</div>
