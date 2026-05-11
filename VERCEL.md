# Ecocan Vercel Deployment Notes

This repository is built for deployment on Vercel using Next.js 14.

## Expected setup

- Connect this GitHub repo (`rauell1/ecocan`) to a Vercel project.
- Configure the framework preset as **Next.js**.
- Use `node` 18+ runtime and install via Vercel defaults.
- Build command: `next build` (default from `package.json`).
- Output: Next.js App Router (no custom `output` configured in `next.config.mjs`).

## Environment variables

- If forms or APIs rely on third-party services, declare variables in the Vercel project settings under **Environment Variables**.
- For per-environment config, use Vercel's `development`, `preview`, and `production` environments.

## Analytics

- The repo includes `@vercel/analytics`, so enabling Analytics in Vercel is recommended.

## Automatic updates

To keep this file auto-updated:

- Store deployment-related metadata (project ID, domains, last deployment URL) in a script that reads from the Vercel API.
- Run the script in CI on each deployment to append a line under **Deployment History**.

## Deployment History

> CI or a Vercel webhook handler can write here automatically.

- Initial setup: Project created and connected to `main`.
