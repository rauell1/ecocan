<div align="center">

# 🌿 Ecocan

**Africa's first digital Deposit Return System (DRS) — closing the beverage packaging loop through technology, incentives, and community.**

[![Live Site](https://img.shields.io/badge/Live-ecocan.africa-01696f?style=flat-square&logo=vercel)](https://ecocan.africa)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

</div>

---

> _Ecocan connects consumers, eco-stations, couriers, recyclers and brands in one seamless closed-loop system._

---

## 🌍 What is Ecocan?

Ecocan is a **Next.js 14** web platform for Africa's Deposit Return System. Consumers pay a small deposit on every beverage container at point of purchase. They earn that deposit back — in cash or rewards — when they return the empty to an Ecocan-registered collection point. The returned packaging is then picked up by couriers, processed at recycling hubs, and fed back into the supply chain.

Every step is tracked with **serialised QR codes**, **real-time verification**, and **brand-level analytics**.

---

## ♻️ The DRS Loop

```
 🏪 Purchase (Store)  →  📱 Scan & Return (Eco-Station)  →  🚲 Collect (Courier)  →  🏭 Recycle (Hub)
         ↑__________________________________________________↓
```

| Step        | Actor                  | What Happens                                      |
| ----------- | ---------------------- | ------------------------------------------------- |
| 1. Purchase | Consumer               | Buys beverage with embedded deposit fee           |
| 2. Return   | Consumer + Eco-Station | Scans QR code, receives deposit refund            |
| 3. Collect  | Courier                | Electric cargo bike picks up empties              |
| 4. Recycle  | Recycler / Hub         | Sorts, bales, and processes for reuse             |
| 5. Reward   | Brand + Consumer       | Brand analytics triggered; loyalty rewards issued |

---

## 🧑‍🤝‍🧑 User Personas

| Persona          | Role                             | Key Feature                                         |
| ---------------- | -------------------------------- | --------------------------------------------------- |
| **Consumer**     | Returns empties, earns deposits  | QR scan, reward wallet, Ecocan app                  |
| **Eco-Producer** | Brands & manufacturers           | Serialized packaging, DRS takeover, brand analytics |
| **Eco-Station**  | Retail collection points         | Registration portal, revenue share, ops dashboard   |
| **Courier**      | Empty-container logistics        | Route management, pickup tracking                   |
| **Recycler**     | Material processing hubs         | DRS intake, material sorting, compliance            |
| **Events**       | Activation & activation partners | Event recycling, community drives                   |

---

## 🛠️ Tech Stack

| Technology                                       | Version | Role                                             |
| ------------------------------------------------ | ------- | ------------------------------------------------ |
| [Next.js](https://nextjs.org)                    | 14.2    | App Router, SSR/SSG, routing, image optimisation |
| [React](https://react.dev)                       | 18      | UI rendering                                     |
| [TypeScript](https://www.typescriptlang.org)     | 5.9     | Type safety                                      |
| [Tailwind CSS](https://tailwindcss.com)          | 3.4     | Utility-first styling                            |
| [GSAP](https://gsap.com) + ScrollTrigger         | 3.15    | Scroll-driven animations & entrance effects      |
| [@gsap/react](https://gsap.com/react)            | 2.1     | GSAP React context helpers                       |
| [Lenis](https://lenis.darkroom.engineering)      | 1.3     | Smooth scrolling (connected to ScrollTrigger)    |
| [Radix UI](https://www.radix-ui.com)             | Latest  | Accessible headless components (Tabs, etc.)      |
| [React Hook Form](https://react-hook-form.com)   | 7.52    | Form management                                  |
| [Zod](https://zod.dev)                           | 3.23    | Schema validation                                |
| [Lucide React](https://lucide.dev)               | 0.403   | Icons                                            |
| [Vercel Analytics](https://vercel.com/analytics) | 2.0     | Performance & usage monitoring                   |

> **Note on animations:** This project uses **GSAP + ScrollTrigger** for all scroll-driven animations and **Lenis** for smooth scrolling. Framer Motion and Embla Carousel are **not** used and should not be added.

---

## 🎨 Design System

The site uses a dark luxury aesthetic built on CSS custom properties defined in `app/design-tokens.css`.

| Token / Class           | Value / Behaviour                                          |
| ----------------------- | ---------------------------------------------------------- |
| `bg-[#050705]`          | Near-black section background                              |
| `.font-serif-luxury`    | Playfair Display — headings                                |
| `.text-luxury-gradient` | Emerald-to-white gradient text                             |
| `.text-luxury-glow`     | Text shadow glow for hero headings                         |
| `.section-py`           | `py-[clamp(6rem,12vw,10rem)]` — consistent section spacing |
| `.ec-reveal`            | Class for GSAP scroll entrance targets                     |
| `.section-bg-img`       | Parallax background image (GSAP `yPercent` scrub)          |

> **`text-eco-green` / `border-eco-green` are broken** — `--eco-green` is not defined in the design token file. Always use explicit Tailwind colours (`text-emerald-400`, `border-emerald-500`) or inline `style={{ color: "#4ade80" }}`.

---

## 📁 Project Structure

```
ecocan/
├── app/                              # Next.js 14 App Router
│   ├── design-tokens.css             # CSS custom properties (colours, fonts, radii)
│   ├── globals.css                   # Tailwind base + global utilities
│   ├── layout.tsx                    # Root layout (navbar, footer, Lenis init)
│   ├── template.tsx                  # Page transition wrapper
│   ├── page.tsx                      # Homepage (assembles all sections)
│   ├── sitemap.ts                    # Auto-generates /sitemap.xml at build time
│   ├── robots.ts                     # Auto-generates /robots.txt at build time
│   ├── about-us/page.tsx
│   ├── contact/page.tsx
│   ├── download/page.tsx
│   ├── eco-friendly-cans/page.tsx
│   ├── ecocan-market/page.tsx
│   ├── investors/page.tsx
│   ├── news/page.tsx
│   └── solutions/
│       ├── page.tsx                  # Solutions hub
│       ├── [section]/page.tsx        # Dynamic solution section
│       └── consumer/page.tsx
├── components/
│   ├── sections/                     # Full-page homepage sections
│   │   ├── hero-section.tsx          # Full-bleed video hero, GSAP scroll-out
│   │   ├── problem-solution-section.tsx
│   │   ├── how-it-works-section.tsx  # 3-step (Scan / Verify / Earn)
│   │   ├── anti-counterfeit-section.tsx
│   │   ├── app-showcase-section.tsx
│   │   ├── ecocan-model-section.tsx
│   │   ├── ecommunity-roles-section.tsx
│   │   ├── electric-mobility-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── for-investors-section.tsx
│   │   ├── partners-testimonials-section.tsx
│   │   ├── sustainability-impact-section.tsx
│   │   ├── call-to-action-section.tsx
│   │   ├── home-navbar.tsx           # Fixed nav with active-section tracking
│   │   ├── home-mobile-menu.tsx
│   │   └── home-footer.tsx
│   ├── ui/                           # Radix + Tailwind primitives (Button, Card, etc.)
│   ├── shared/                       # Reusable blocks (heroes, CTAs, forms)
│   └── contents/                     # Persona content blocks
│       ├── consumer/
│       ├── courier/
│       ├── eco-producer/
│       ├── eco-station/
│       ├── events/
│       └── recycler/
├── lib/
│   ├── imageIndex.ts                 # All image path exports
│   ├── ec-reveal.ts                  # GSAP scroll-reveal helper
│   ├── use-ec-reveal.ts              # React hook for ec-reveal
│   ├── motion.ts                     # Shared GSAP animation presets
│   ├── site-contract.ts              # Site-wide constants
│   ├── env.ts                        # Environment variable helpers
│   └── utils.ts
├── public/
│   ├── images/hero/                  # Section background images (parallax)
│   ├── videos/hero-loop.mp4          # Hero autoplay video
│   └── assets/images/
│       ├── brand/                    # Brand photography
│       ├── blog/                     # Blog / news images
│       └── ecocan-logo-alt.svg
├── docs/
│   ├── codebase-map.md               # Auto-updated on every commit (Husky hook)
│   └── codebase-map.json             # Machine-readable version of above
├── scripts/
│   ├── generate-codebase-map.mjs     # Incremental codebase map generator
│   └── update-docs.ts                # Manual doc regeneration (SITEMAP, ROLLBACK)
├── .husky/
│   └── post-commit                   # Runs codebase-map update after every commit
├── README.md                         # ← You are here
├── SITEMAP.md                        # Route map (run `pnpm docs:update` to refresh)
├── CODEBASE-MAP.md                   # Structure map (run `pnpm docs:update` to refresh)
├── ROLLBACK.md                       # Deployment log + rollback guide
├── VERCEL.md                         # Vercel deployment notes
├── CLAUDE.md                         # AI assistant guidelines
└── BRAND-ASSETS.md                   # Brand photography catalog
```

---

## 🗺️ Pages & Routes

| Route                  | Page              | Description                                                                         |
| ---------------------- | ----------------- | ----------------------------------------------------------------------------------- |
| `/`                    | Homepage          | Full-page sections — hero, problem, how it works, impact, community, investors, CTA |
| `/about-us`            | About             | Brand story, visionaries, community, partners                                       |
| `/contact`             | Contact           | Contact form + info                                                                 |
| `/download`            | Download          | App download CTA                                                                    |
| `/eco-friendly-cans`   | Eco-Friendly Cans | Accordion explainer — economic, operational, security                               |
| `/ecocan-market`       | Ecocan Market     | Product browser + search                                                            |
| `/investors`           | Investors         | Investor pitch page                                                                 |
| `/news`                | News              | Articles, blog posts, partnership updates                                           |
| `/solutions`           | Solutions Hub     | Overview of all solutions                                                           |
| `/solutions/[section]` | Solution Detail   | Dynamic: brand-promotion, brand-protection, packaging-recycling, online-sales       |
| `/sitemap.xml`         | —                 | Auto-generated at build time from `app/sitemap.ts`                                  |
| `/robots.txt`          | —                 | Auto-generated at build time from `app/robots.ts`                                   |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 9

### Install & Run

```bash
# 1. Clone the repo
git clone https://github.com/rauell1/ecocan.git
cd ecocan

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev
# → http://localhost:3000
```

### Production Build

```bash
pnpm build
pnpm start
```

---

## 📜 Scripts

| Command            | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `pnpm dev`         | Start development server (port 3000)                                       |
| `pnpm build`       | Build for production                                                       |
| `pnpm start`       | Start production server                                                    |
| `pnpm lint`        | Run ESLint                                                                 |
| `pnpm docs:update` | Manually regenerate SITEMAP.md, CODEBASE-MAP.md, and append to ROLLBACK.md |

---

## 📚 Auto-Updating Documentation

Two systems keep documentation in sync — one automatic, one manual.

### Automatic (every commit)

`docs/codebase-map.md` and `docs/codebase-map.json` are regenerated by the Husky **post-commit** hook after every local commit. No action needed.

> ⚠️ GitHub Copilot also commits these files remotely, causing frequent conflicts on push.
> **Resolution:** `git checkout --theirs docs/ && git add docs/ && git commit && git push`

### Manual (`pnpm docs:update`)

Run this command to refresh the following:

| Doc                                    | What It Tracks                                     |
| -------------------------------------- | -------------------------------------------------- |
| [`SITEMAP.md`](./SITEMAP.md)           | All routes derived from `app/**/page.tsx`          |
| [`CODEBASE-MAP.md`](./CODEBASE-MAP.md) | Full directory tree and component inventory        |
| [`ROLLBACK.md`](./ROLLBACK.md)         | Deployment log with commit hash, branch, timestamp |

### Build-time (automatic on `pnpm build`)

| URL            | Source file      | Notes                        |
| -------------- | ---------------- | ---------------------------- |
| `/sitemap.xml` | `app/sitemap.ts` | Route map for search engines |
| `/robots.txt`  | `app/robots.ts`  | Crawl instructions           |

---

## 🌐 Deployment

Ecocan is deployed on **Vercel** with zero-config Next.js support.

1. Connect `rauell1/ecocan` to your Vercel project
2. Framework preset: **Next.js**
3. Node.js version: **18.x or later**
4. Build command: `next build` (default)
5. Enable **Vercel Analytics** (already installed via `@vercel/analytics`)

See [`VERCEL.md`](./VERCEL.md) for full deployment history and environment variable reference.

---

## 🔄 Rollback & Recovery

```bash
# List recent commits
git log --oneline -10

# Restore codebase to a specific commit (forward commit, no force push)
git checkout <sha> -- .
git add -A
git commit -m "revert: restore to <sha>"
git push origin main
```

See [`ROLLBACK.md`](./ROLLBACK.md) for the full deployment log and recovery checklist.

---

## 🤝 Contributing

1. Fork the repo and create a feature branch: `git checkout -b feat/your-feature`
2. Follow existing patterns — GSAP for animations, `components/sections/` for new homepage sections
3. Use `components/ui` and `components/shared` primitives wherever possible
4. Run `pnpm lint && pnpm build` before opening a PR
5. Keep PRs small and focused — all PRs target `main`

---

<div align="center">

Built with 💚 for Africa · [ecocan.africa](https://ecocan.africa) · © 2026 Ecocan

</div>
