# Ecocan Codebase Map

Structural overview of the Ecocan Next.js 14 codebase.

> This file can be regenerated automatically by a script that reads `find` output and groups files by feature. Today it is initialized manually.

## Stack overview

- Framework: Next.js 14 (`app/` router)
- Language: TypeScript + React 18
- Styling: Tailwind CSS (`tailwind.config.ts`, `app/globals.css`)
- UI primitives: Custom components under `components/ui` and `components/shared`
- Forms & validation: `react-hook-form`, `zod`, `@hookform/resolvers`
- Animations & motion: `framer-motion`

## Project layout

- `app/` – Route segments and pages
  - `page.tsx` – Home page
  - `about-us/` – About section and related components
  - `contact/` – Contact hero + form
  - `download/` – Download page
  - `eco-friendly-cans/` – Eco-friendly cans feature pages and accordions
  - `ecocan-market/` – Market/products listing
  - `news/` – News and blog layout
  - `solutions/` – Solutions hub and dynamic sections

- `components/` – Reusable UI and content blocks
  - `contents/` – Persona-specific content (consumer, courier, eco-producer, eco-station, events, recycler)
  - `shared/` – Shared components: nav, footer, cards, forms, CTA, timelines, etc.
  - `ui/` – Design system primitives (button, card, accordion, carousel, form inputs, etc.)

- `lib/` – Shared utilities and helpers (to be inspected and documented in detail).
- `types/` – Shared TypeScript types/interfaces.

## Data & content flow

- Pages in `app/` compose content components from `components/contents` and shared building blocks.
- Forms use `react-hook-form` and `zod` schemas to manage validation and submission.
- Navigation and layout are centralized in `app/layout.tsx` and `components/shared/navbar`.

## Automation idea

Create a `scripts/generate-codebase-map.ts` that:
- Scans `app/`, `components/`, `lib/`, and `types/`.
- Buckets files by route or feature.
- Writes a fresh `CODEBASE-MAP.md` on each invocation.

Wire it to run:
- As a pre-commit hook.
- Or in CI on pushes to `main`, committing the updated file.
