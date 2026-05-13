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

This file is updated automatically by `scripts/update-docs.mjs` in `.github/workflows/docs-update.yml` on every push to `main`.

- A new row is appended under **Deployment History** whenever `GITHUB_SHA` is available.
- If `VERCEL_URL` is not available in the workflow environment, the URL column is recorded as `N/A`.
- If `VERCEL_URL` is available, the deployment URL is recorded.

## Deployment History

> Entries appended automatically on each push to `main`. If `VERCEL_URL` is unavailable, URL is recorded as `N/A`.

- Initial setup: Project created and connected to `main`.
| 2026-05-13T09:08:32.588Z | `886c996` | main | unknown | N/A |
| 2026-05-13T09:29:13.516Z | `ec172c0` | main | unknown | N/A |
| 2026-05-13T09:37:17.168Z | `4046f6a` | main | unknown | N/A |
| 2026-05-13T09:42:19.348Z | `888045e` | main | unknown | N/A |
| 2026-05-13T09:47:46.630Z | `04dcc09` | main | unknown | N/A |
| 2026-05-13T09:52:44.115Z | `64de346` | main | unknown | N/A |
