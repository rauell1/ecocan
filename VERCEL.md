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
  | 2026-05-13T09:59:15.621Z | `866f671` | main | unknown | N/A |
  | 2026-05-13T11:29:32.790Z | `5661190` | main | unknown | N/A |
  | 2026-05-13T11:39:21.746Z | `79bb6aa` | main | unknown | N/A |
  | 2026-05-13T15:21:31.266Z | `2855994` | main | unknown | N/A |
  | 2026-05-13T15:27:23.618Z | `2cda781` | main | unknown | N/A |
  | 2026-05-13T15:34:43.338Z | `bf7facf` | main | unknown | N/A |
  | 2026-05-13T15:37:47.029Z | `09c5d1e` | main | unknown | N/A |
  | 2026-05-13T15:43:13.912Z | `2bd89c7` | main | unknown | N/A |
  | 2026-05-13T15:52:08.732Z | `b81ba3e` | main | unknown | N/A |
  | 2026-05-13T16:04:15.740Z | `90876dc` | main | unknown | N/A |
  | 2026-05-13T16:15:16.546Z | `0ec9aa1` | main | unknown | N/A |
  | 2026-05-13T16:26:59.968Z | `e5566fb` | main | unknown | N/A |
  | 2026-05-13T16:47:52.977Z | `b679102` | main | unknown | N/A |
  | 2026-05-13T16:57:27.001Z | `3c964e7` | main | unknown | N/A |
  | 2026-05-13T17:15:49.516Z | `b317f35` | main | unknown | N/A |
  | 2026-05-13T17:22:16.574Z | `e7821b2` | main | unknown | N/A |
  | 2026-05-14T06:28:31.310Z | `7c9b718` | main | unknown | N/A |
  | 2026-05-14T06:35:50.892Z | `843dec9` | main | unknown | N/A |
  | 2026-05-14T06:41:19.557Z | `5c96bce` | main | unknown | N/A |
  | 2026-05-14T16:57:24.867Z | `4d2a86e` | main | unknown | N/A |
  | 2026-05-14T17:03:07.839Z | `b6f4863` | main | unknown | N/A |
  | 2026-05-14T17:06:30.104Z | `eacd9bc` | main | unknown | N/A |
  | 2026-05-14T17:10:06.350Z | `4a7b286` | main | unknown | N/A |
| 2026-05-14T17:33:28.761Z | `e851968` | main | unknown | N/A |
| 2026-05-14T17:36:11.077Z | `b3cece2` | main | unknown | N/A |
| 2026-05-14T17:45:13.500Z | `f13f658` | main | unknown | N/A |
| 2026-05-14T17:47:25.447Z | `b099062` | main | unknown | N/A |
| 2026-05-14T18:13:18.483Z | `7dccaae` | main | unknown | N/A |
| 2026-05-14T18:15:35.017Z | `0ae9a4d` | main | unknown | N/A |
