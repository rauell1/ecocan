# 🔄 Ecocan Rollback Guide

> **Auto-updating:** The [Deployment Log](#deployment-log) section is appended automatically on every merge to `main` by the [docs-update CI workflow](.github/workflows/docs-update.yml). The rest of this document is maintained manually.

---

## Table of Contents

1. [How This File Updates](#how-this-file-updates)
2. [Deployment Log](#deployment-log)
3. [How to Roll Back](#how-to-roll-back)
4. [Rollback Decision Criteria](#rollback-decision-criteria)
5. [Page Validation Checklist](#page-validation-checklist)
6. [Incident Response](#incident-response)
7. [Contacts](#contacts)

---

## How This File Updates

The **Deployment Log** section is updated automatically by `scripts/update-docs.mjs` via the GitHub Actions workflow `.github/workflows/docs-update.yml`.

**Trigger:** Every push to `main` (excluding pushes that only modify this file itself, to prevent infinite loops).

**What gets appended:** A new row in the Deployment Log table containing:
- Short commit SHA (linked to GitHub)
- Commit message summary
- Author
- Date/time (UTC)
- Branch

**To run locally (simulating a deployment entry):**

```bash
GITHUB_SHA=abc1234def GITHUB_REF_NAME=main GITHUB_ACTOR=yourname GITHUB_COMMIT_MESSAGE="your message" node scripts/update-docs.mjs
```

---

## Deployment Log

> ⚙️ **CI-managed section.** One row is appended per merge to `main`. Do not edit rows manually — add incident notes in the [Incident Response](#incident-response) section instead and cross-reference by commit SHA.

| # | Commit | Message | Author | Date (UTC) | Branch |
|---|--------|---------|--------|------------|--------|
| 1 | [`a6ae370`](https://github.com/rauell1/ecocan/commit/a6ae37020178d40cd4e5c0ef4cecae5bfbe13639) | wip: ui fixes – initial scaffold | benten95-web | 2025-01-27 11:15 | main |
| 2 | [`d386df7`](https://github.com/rauell1/ecocan/commit/d386df7849fa98e29b5c348d292be107778a1606) | wip: ui fixes | benten95-web | 2025-01-30 10:35 | main |
| 3 | [`5d57fda`](https://github.com/rauell1/ecocan/commit/5d57fda58ea2426b3a11d494c0e1918921e3ef3e) | ui fixes | benten95-web | 2026-01-02 12:34 | main |
| 4 | [`bcc1c46`](https://github.com/rauell1/ecocan/commit/bcc1c469369737830073a1794e03e1e28e32d656) | added open graph metadata | benten95-web | 2026-02-03 23:10 | main |
| 5 | [`fe11932`](https://github.com/rauell1/ecocan/commit/fe11932fd4a746396bdc34f14d07a12aee8ef790) | modified open graph metadata | benten95-web | 2026-02-03 23:45 | main |
| 6 | [`39ed1cf`](https://github.com/rauell1/ecocan/commit/39ed1cffeed9511d491ca13a31b43e8fe7aa2c36) | minor fix | benten95-web | 2026-02-04 09:05 | main |
| 7 | [`99cc318`](https://github.com/rauell1/ecocan/commit/99cc3188db23d99383a03db76d6fcab5d0743847) | minor fix | benten95-web | 2026-02-04 09:08 | main |
| 8 | [`5c07e3a`](https://github.com/rauell1/ecocan/commit/5c07e3aa0b57e476ee68b7ddfadbb6ef5635ac5a) | minor fix | benten95-web | 2026-02-04 09:15 | main |
| 9 | [`bec72a4`](https://github.com/rauell1/ecocan/commit/bec72a450213b83fd1546e64ecdb7d769e42c09d) | minor fix | benten95-web | 2026-02-04 09:21 | main |
| 10 | [`e3cc28c`](https://github.com/rauell1/ecocan/commit/e3cc28c35b9d916fcd64846f541321bb423ad4da) | Fix React Server Components CVE – patched next, react-server-dom-* | vercel[bot] | 2026-02-17 15:01 | main |
| 11 | [`280a878`](https://github.com/rauell1/ecocan/commit/280a8785c3e5ed75d05f23786488088846105055) | Merge PR #81: Fix React Server Components CVE vulnerabilities | boypaida12 | 2026-02-18 21:21 | main |
| 12 | [`3946b1b`](https://github.com/rauell1/ecocan/commit/3946b1bd9883761affd888bd7ec8654ab7a68acd) | Install Vercel Web Analytics (`@vercel/analytics@2.0.1`) | vercel[bot] | 2026-05-11 12:58 | main |
| 13 | [`a3829e9`](https://github.com/rauell1/ecocan/commit/a3829e9402345f7477c1b9577ec6c9ab2ae3f5d5) | Merge PR #1: Install Vercel Web Analytics | rauell1 | 2026-05-11 13:01 | main |
| 14 | [`ce05475`](https://github.com/rauell1/ecocan/commit/ce054757e606e36c02906dd849a31c2c202f5d19) | chore(docs): add repo maps and auto-update stubs | rauell1 | 2026-05-11 13:21 | main |
| 15 | [`6e74442`](https://github.com/rauell1/ecocan/commit/6e74442a2083eead0b02130f873aa57638e27ee8) | feat: full auto-updating docs – script, CI workflow, ts-node dep | rauell1 | 2026-05-11 13:46 | main |
| 16 | [`d73e3cf`](https://github.com/rauell1/ecocan/commit/d73e3cf3310d02ffbc5e95c481b429b6c9934a5b) | fix: remove ts-node, use plain ESM script – fixes Vercel pnpm frozen-lockfile error | rauell1 | 2026-05-11 13:51 | main |
| 17 | [`68612b9`](https://github.com/rauell1/ecocan/commit/68612b965bb53e177be5328e8decfba125dc6be0) | docs: proper README with full project documentation | rauell1 | 2026-05-11 19:05 | main |
| 18 | [`8a5a8ac`](https://github.com/rauell1/ecocan/commit/8a5a8ac) | Revamp v2 foundation: port Kimi design tokens into Ecocan's existing theme system | copilot-swe-agent[bot] | 2026-05-12 12:49 | copilot/revamp-v2 |
| 19 | [`2008b3b`](https://github.com/rauell1/ecocan/commit/2008b3b672fa3cf725b99be5b421abbd7002cc76) | Merge pull request #7: Revamp v2 foundation | rauell1 | 2026-05-12 16:11 | main |
| 20 | [`964d20d`](https://github.com/rauell1/ecocan/commit/964d20d8c7f9b8a95ea19fb77ea72471fd0a7e29) | perf: performance revamp v3 — fix globals.css + layout.tsx (#8) | rauell1 | 2026-05-12 16:20 | main |

---

## How to Roll Back

### Option A — Vercel Instant Rollback (Fastest, ≤ 2 min) ✅ Recommended

Use this when you need to restore production immediately without touching the codebase.

1. Open the [Vercel Dashboard](https://vercel.com/dashboard) → select the **ecocan** project.
2. Go to **Deployments** and find the last known-good deployment.
3. Click the **⋯** menu next to that deployment → **Promote to Production**.
4. Verify production at `https://ecocan.vercel.app` (or your custom domain).
5. Record the incident in the [Incident Response](#incident-response) section below.

> ⚠️ This does **not** revert the code in `main`. Follow up with Option B or C to keep the repo in sync.

---

### Option B — Git Revert (Safe, Non-Destructive) ✅ Preferred for code fixes

Use this when you want to undo a specific commit while keeping full history.

```bash
# 1. Identify the bad commit SHA from the Deployment Log above
# 2. Create a revert branch
git checkout main
git pull origin main
git checkout -b revert/rollback-<short-sha>

# 3. Revert the offending commit (creates a new commit that undoes it)
git revert <bad-commit-sha>

# 4. Push and open a PR
git push origin revert/rollback-<short-sha>
```

Then open a PR titled: **`Rollback: revert <short-sha> — <reason>`**

- Verify the Vercel preview deployment on the PR.
- Merge to `main` once confirmed healthy.

---

### Option C — Hard Reset (Destructive — use with caution) ⚠️

Use only when multiple commits need to be undone and a revert is too messy.

```bash
# 1. Identify the last known-good commit SHA
git checkout main
git pull origin main

# 2. Reset locally to the known-good commit
git reset --hard <known-good-sha>

# 3. Force-push (requires branch protection bypass)
git push origin main --force-with-lease
```

> ⚠️ **Force-pushing rewrites history.** All team members must run `git fetch --all && git reset --hard origin/main` after this.

---

### Option D — Emergency Hotfix Branch

Use when you need to apply a targeted fix on top of a known-good commit.

```bash
git checkout <known-good-sha> -b hotfix/description
# Make your fix
git push origin hotfix/description
# Open PR → merge → Vercel auto-deploys
```

---

## Rollback Decision Criteria

Use this table to decide which action to take:

| Scenario | Recommended Action | Time to Resolution |
|----------|-------------------|--------------------|
| Build passed but production is broken | Option A (Vercel promote) | ~2 min |
| One bad commit introduced a regression | Option B (git revert) | ~15 min |
| Multiple bad commits, messy history | Option C (hard reset) | ~30 min |
| Need a quick targeted patch | Option D (hotfix branch) | ~20 min |
| Build is failing on Vercel | Fix forward or Option B | ~30 min |

---

## Page Validation Checklist

After any rollback, verify the following pages are rendering correctly before closing the incident:

### Core Pages
- [ ] `/` — Homepage loads, hero visible, CTAs functional
- [ ] `/about-us` — Carousels render, partner logos visible
- [ ] `/contact` — Contact form submits without errors
- [ ] `/download` — App store links present and correct
- [ ] `/eco-friendly-cans` — Accordion sections open/close
- [ ] `/ecocan-market` — Product listings visible, search bar functional
- [ ] `/news` — Articles and blog hero render
- [ ] `/solutions` — Solution cards visible, links work

### Dynamic Routes
- [ ] `/solutions/brand-promotion` — Full page renders
- [ ] `/solutions/brand-protection` — Full page renders
- [ ] `/solutions/packaging-recycling` — Full page renders
- [ ] `/solutions/online-sales` — Full page renders

### Global
- [ ] Navbar links all resolve correctly
- [ ] Footer renders without errors
- [ ] Mobile layout (375px) — no horizontal overflow
- [ ] Dark/light visual integrity on hero sections
- [ ] Vercel Analytics script loads (check browser Network tab)

---

## Incident Response

Record post-mortems and rollback incidents here. Reference commit SHAs from the Deployment Log.

### Template

```
### INC-XXX — YYYY-MM-DD

**Severity:** Critical / High / Medium / Low
**Affected commits:** `<sha>`
**Detected by:** [who/what found it]
**Impact:** [what broke, how many users affected]
**Root cause:** [brief description]
**Resolution:** [what was done — Option A/B/C/D]
**Follow-up:** [what to prevent recurrence]
```

---

### INC-001 — 2026-02-18

**Severity:** High  
**Affected commits:** [`e3cc28c`](https://github.com/rauell1/ecocan/commit/e3cc28c35b9d916fcd64846f541321bb423ad4da)  
**Detected by:** Vercel automated security scan  
**Impact:** React Server Components CVE vulnerabilities in `next`, `react-server-dom-webpack`, `react-server-dom-parcel`, `react-server-dom-turbopack`  
**Root cause:** Outdated dependency versions with known CVEs  
**Resolution:** Vercel bot auto-patched via PR #81 — merged by boypaida12 on 2026-02-18  
**Follow-up:** Enable Dependabot or Renovate for automated dependency updates

---

## Contacts

| Role | Name | GitHub |
|------|------|--------|
| Repo Owner | Roy Otieno | [@rauell1](https://github.com/rauell1) |
| Previous Maintainer | Bernard Addy-Sackey | [@boypaida12](https://github.com/boypaida12) |
| Previous Contributor | Bernard | [@benten95-web](https://github.com/benten95-web) |

For urgent production incidents, open a [GitHub Issue](https://github.com/rauell1/ecocan/issues/new) with the label `incident` and tag `@rauell1`.

---

*Last manually updated: 2026-05-12 | Auto-updated by CI on every push to `main`*
