# Ecocan Content Sitemap

High-level sitemap of the Next.js App Router structure based on the `app/` directory.

> This file can be kept in sync automatically by a small Node script that scans `app/` for `page.tsx` files and rewrites this markdown before each commit or via CI on `main`.

## Top-level routes

- `/` – Landing page (`app/page.tsx`)
- `/about-us` – About Ecocan (`app/about-us/page.tsx`)
- `/contact` – Contact form and info (`app/contact/page.tsx`)
- `/download` – App download page (`app/download/page.tsx`)
- `/eco-friendly-cans` – Eco-friendly cans explainer (`app/eco-friendly-cans/page.tsx`)
- `/ecocan-market` – Ecocan marketplace (`app/ecocan-market/page.tsx`)
- `/news` – News and blog (`app/news/page.tsx`)
- `/solutions` – Solutions hub (`app/solutions/page.tsx`)

## Dynamic routes

- `/solutions/[section]` – Solutions by section slug (`app/solutions/[section]/page.tsx`)

## Notable content sections

- Solutions sections in `app/solutions/sections/*` map to logical subpages/sections.
- Content verticals in `components/contents/*` drive specific personas and journeys.

For SEO XML sitemaps, use Next.js `app/sitemap.ts` or `app/sitemap.xml/route.ts` and mirror this structure.
