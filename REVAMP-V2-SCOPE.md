# Revamp v2 Scope & Clone Mapping

## Scope classification

- **Current classification:** Full redesign (design-token + visual-layout refresh), pending verification against Kimi source files.
- **Reason:** The implementation request is a full site revamp workflow, and current work has started at token and shared visual-layer level.
- **Blocker:** Kimi source and asset links are not reachable from this environment, so exact parity mapping cannot be finalized yet.

## Kimi → Ecocan route/component mapping (working baseline)

| Kimi source page/section | Ecocan route | Primary Ecocan entry file | Status |
|---|---|---|---|
| Homepage / landing | `/` | `app/page.tsx` + `components/hero-container.tsx` | In progress (visual tokens applied) |
| Solutions hub | `/solutions` | `app/solutions/page.tsx` + `app/solutions/sections/solutions-content.tsx` | In progress (visual tokens applied) |
| Solution detail pages | `/solutions/[section]` | `app/solutions/[section]/page.tsx` | In progress (surface updates applied) |
| About page | `/about-us` | `app/about-us/page.tsx` | In progress (surface updates applied) |
| Contact page | `/contact` | `app/contact/page.tsx` | Pending |
| Download page | `/download` | `app/download/page.tsx` | Pending |
| Eco-friendly cans | `/eco-friendly-cans` | `app/eco-friendly-cans/page.tsx` | Pending |
| Ecocan market | `/ecocan-market` | `app/ecocan-market/page.tsx` | Pending |
| News | `/news` | `app/news/page.tsx` | Pending |

## Shared dependency-order mapping

| Layer | Paths | Status |
|---|---|---|
| Design tokens | `tailwind.config.ts`, `app/globals.css` | Updated |
| UI primitives | `components/ui/*` | Partial (`button`, `tabs`) |
| Shared components | `components/shared/*` | Partial (`navbar`, `footer`) |
| Content modules | `components/contents/*` | Pending |
| Route files | `app/*` | Partial (priority routes started) |

## External input still required

1. Kimi source files in directly accessible format (repo or zip).
2. Final revamp asset pack (images/icons/fonts) with filenames.
3. Definitive route map if Kimi includes routes/personas not currently in Ecocan.
