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

![The Ecocan DRS cycle — purchase, return, collect, recycle](public/assets/images/brand/bottle-journey.jpg)

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

## 🛒 Ecocan in Action

![Eco-Station attendant scanning empty bottle for a consumer](public/assets/images/brand/return-counter.jpg)

_Eco-Station attendants use the Ecocan app to instantly verify and accept returned containers, triggering the consumer's deposit refund in real time._

---

## 🔐 Brand Protection & Verification

![Consumer scanning a QR code on a green bottle showing VERIFIED](public/assets/images/brand/scan-verify.jpg)

Every Ecocan-registered container carries a **unique serialised QR code**. Consumers scan it to:

- Verify product authenticity (FAKE vs. VERIFIED)
- Trigger deposit return on empty submission
- Access brand loyalty rewards

![FAKE vs VERIFIED brand protection split visual](public/assets/images/brand/counterfeit-alert.jpg)

---

## 🤝 Retail Partnerships

![Retail partnership handshake outside a Fresh Picks Collection Point](public/assets/images/brand/partner-retail.jpg)

Ecocan partners with supermarkets and retail chains to host **Collection Points** — no hardware required. Retail partners earn per-container handling fees and benefit from increased footfall.

![Kenya Fresh supermarket interior — beverages aisle](public/assets/images/brand/supermarket-interior.jpg)

---

## 🚲 The Courier Network

![Courier on electric cargo bike collecting empties outside FreshMarket](public/assets/images/brand/ebike-collection.jpg)

Couriers operate **electric cargo bikes** to collect sorted empties from Eco-Stations and deliver them to recycling hubs. The Ecocan platform manages routing, pickup scheduling, and earnings tracking for each courier.

---

## 🏭 Recycling Infrastructure

![Industrial recycling hub with sorted PET bales on conveyor belt](public/assets/images/brand/recycling-hub.jpg)

Recycling hubs receive sorted materials from the courier network. Ecocan's platform provides intake verification, material-grade logging, and compliance reporting for each hub.

---

## 🌆 The Network

![Aerial sunset cityscape with Ecocan green network connection overlay](public/assets/images/brand/investor-aerial.jpg)

Ecocan is designed to scale across African cities — linking every store, eco-station, courier, and recycling hub in a single real-time network.

---

## 🛠️ Tech Stack

| Technology                                       | Version | Role                           |
| ------------------------------------------------ | ------- | ------------------------------ |
| [Next.js](https://nextjs.org)                    | 14.2    | App Router, SSR/SSG, routing   |
| [React](https://react.dev)                       | 18      | UI rendering                   |
| [TypeScript](https://www.typescriptlang.org)     | 5       | Type safety                    |
| [Tailwind CSS](https://tailwindcss.com)          | 3.4     | Styling                        |
| [Radix UI](https://www.radix-ui.com)             | Latest  | Accessible headless components |
| [Framer Motion](https://www.framer.com/motion)   | Latest  | Animations                     |
| [React Hook Form](https://react-hook-form.com)   | Latest  | Form management                |
| [Zod](https://zod.dev)                           | Latest  | Schema validation              |
| [Lucide React](https://lucide.dev)               | Latest  | Icons                          |
| [Embla Carousel](https://www.embla-carousel.com) | Latest  | Carousel component             |
| [Vercel Analytics](https://vercel.com/analytics) | Latest  | Performance monitoring         |
| [ts-node](https://typestrong.org/ts-node)        | 10.9    | Doc-generation scripts         |

---

## 📁 Project Structure

```
ecocan/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx                # Root layout (nav, footer, globals)
│   ├── page.tsx                  # Homepage
│   ├── about-us/page.tsx
│   ├── contact/page.tsx
│   ├── download/page.tsx
│   ├── eco-friendly-cans/page.tsx
│   ├── ecocan-market/page.tsx
│   ├── news/page.tsx
│   └── solutions/
│       ├── page.tsx              # Solutions hub
│       ├── [section]/page.tsx    # Dynamic solution section
│       └── sections/             # Section content components
├── components/
│   ├── ui/                       # Radix + Tailwind primitives
│   ├── shared/                   # Nav, footer, forms, CTAs, heroes
│   └── contents/                 # Persona content blocks
│       ├── consumer/
│       ├── courier/
│       ├── eco-producer/
│       ├── eco-station/
│       ├── events/
│       └── recycler/
├── lib/
│   ├── imageIndex.ts             # All image path exports (legacy + brand)
│   ├── hooks/                    # useMediaQuery, useScroll, useLoadImages
│   └── utils.ts
├── types/
│   ├── card-data.ts
│   └── section.tsx
├── public/
│   └── assets/images/
│       ├── brand/                # Brand photography (9 hero images)
│       ├── solutions/
│       ├── consumer/
│       ├── eco-station/
│       └── blog/
├── scripts/
│   └── update-docs.ts            # Auto-doc regeneration script
├── .github/workflows/
│   └── docs-update.yml           # CI: auto-update docs on push to main
├── README.md                     # ← You are here
├── SITEMAP.md                    # Auto-regenerated route map
├── CODEBASE-MAP.md               # Auto-regenerated structure map
├── ROLLBACK.md                   # Deployment log + rollback guide
├── VERCEL.md                     # Vercel deployment notes
├── CLAUDE.md                     # AI assistant guidelines
└── BRAND-ASSETS.md               # Brand photography catalog
```

---

## 🗺️ Pages & Routes

| Route                  | Page              | Description                                                                   |
| ---------------------- | ----------------- | ----------------------------------------------------------------------------- |
| `/`                    | Homepage          | Hero + persona journeys                                                       |
| `/about-us`            | About             | Brand story, visionaries, community, partners                                 |
| `/contact`             | Contact           | Contact form + info                                                           |
| `/download`            | Download          | App download CTA                                                              |
| `/eco-friendly-cans`   | Eco-Friendly Cans | Accordion explainer — economic, operational, security                         |
| `/ecocan-market`       | Ecocan Market     | Product browser + search                                                      |
| `/news`                | News              | Articles, blog posts, partnership updates                                     |
| `/solutions`           | Solutions Hub     | Overview of all 4 solutions                                                   |
| `/solutions/[section]` | Solution Detail   | Dynamic: brand-promotion, brand-protection, packaging-recycling, online-sales |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 9 (or npm / yarn)

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

| Command            | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| `pnpm dev`         | Start development server (port 3000)                                          |
| `pnpm build`       | Build for production                                                          |
| `pnpm start`       | Start production server                                                       |
| `pnpm lint`        | Run ESLint                                                                    |
| `pnpm docs:update` | Regenerate SITEMAP.md, CODEBASE-MAP.md, and append to ROLLBACK.md / VERCEL.md |

---

## 📚 Auto-Updating Documentation

Five markdown files stay in sync automatically via `scripts/update-docs.ts` and the GitHub Actions workflow `.github/workflows/docs-update.yml`.

| Doc                                    | Trigger                | What It Tracks                                   |
| -------------------------------------- | ---------------------- | ------------------------------------------------ |
| [`SITEMAP.md`](./SITEMAP.md)           | Every push to `main`   | All routes derived from `app/**/page.tsx`        |
| [`CODEBASE-MAP.md`](./CODEBASE-MAP.md) | Every push to `main`   | Full directory tree and component inventory      |
| [`ROLLBACK.md`](./ROLLBACK.md)         | Deployment events      | Commit hash, branch, actor, timestamp per deploy |
| [`VERCEL.md`](./VERCEL.md)             | Deployment events      | Deployment URL, environment, commit per deploy   |
| [`BRAND-ASSETS.md`](./BRAND-ASSETS.md) | Manual / `docs:update` | Brand photography catalog and usage guide        |

---

## 🌐 Deployment

Ecocan is deployed on **Vercel** with zero-config Next.js support.

1. Connect `rauell1/ecocan` to your Vercel project
2. Framework preset: **Next.js**
3. Node.js version: **18.x or later**
4. Build command: `next build` (default)
5. Enable **Vercel Analytics** (the `@vercel/analytics` package is already installed)

See [`VERCEL.md`](./VERCEL.md) for full deployment history and environment variable reference.

---

## 🖼️ Brand Assets

All brand photography is catalogued in [`BRAND-ASSETS.md`](./BRAND-ASSETS.md) and exported from `lib/imageIndex.ts`.

```ts
import Image from 'next/image';
import { brandBottleJourney, brandScanVerify } from '@/lib/imageIndex';

<Image src={brandBottleJourney} alt="DRS cycle" width={1320} height={743} priority />
```

Images are served through Vercel's [Image Optimization API](https://vercel.com/docs/image-optimization), which auto-converts to WebP/AVIF and serves from the edge CDN with appropriate cache headers.

---

## 🤝 Contributing

1. Fork the repo and create a feature branch: `git checkout -b feat/your-feature`
2. Follow existing patterns — React + Tailwind, reuse `components/ui` and `components/shared`
3. Run `pnpm lint && pnpm build` before opening a PR
4. Keep PRs small and focused
5. All PRs target `main`

---

## 🔄 Rollback & Recovery

```bash
# List recent commits
git log --oneline -10

# Roll back to a specific commit
git checkout -b rollback/fix-<sha> <sha>

# Open a PR from rollback branch → main
# The docs-update workflow will auto-update ROLLBACK.md after merge
```

See [`ROLLBACK.md`](./ROLLBACK.md) for the full deployment log and recovery checklist.

---

<div align="center">

Built with 💚 for Africa · [ecocan.africa](https://ecocan.africa) · © 2024 Ecocan

</div>
