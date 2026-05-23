# Ecocan — Security Audit Report

**Date:** 2026-05-23  
**Scope:** Full static codebase review — `app/`, `components/`, `lib/`, `next.config.mjs`  
**Auditor:** Claude (automated security review)

---

## Access Control Matrix

Ecocan is a **fully public marketing and informational site**. There is no authentication system, no user accounts, no admin panel, no API routes, and no Server Actions. All pages are statically generated and publicly accessible.

| Role                          | Resource / Action          | Status                                        |
| ----------------------------- | -------------------------- | --------------------------------------------- |
| Any visitor (unauthenticated) | View all pages             | ✅ Explicitly public — correct                |
| Any visitor                   | Submit contact form        | ⚠️ Form is not wired up — see F-01            |
| Any visitor                   | Call API endpoints         | ✅ No `app/api/` directory exists             |
| Any visitor                   | Trigger Server Actions     | ✅ No `"use server"` directives exist         |
| Any visitor                   | Access environment secrets | ✅ Only `NEXT_PUBLIC_*` vars reach the client |
| Anyone                        | Perform admin operations   | ✅ No admin surface exists                    |

**Assessment:** The access control surface is minimal and correctly configured for the current phase. The primary risk window will open when the contact form is wired up to a backend.

---

## Findings — Prioritised

### 🔴 HIGH

#### F-01 · Contact form submission is a no-op (`app/contact/components/contact-form.tsx`)

```tsx
function onSubmit(_values: z.infer<typeof formSchema>) {
  // TODO: wire up form submission
}
```

The `onSubmit` handler does nothing. When this is implemented:

- **Server-side validation is mandatory.** Client-side Zod is UX-only; anyone can bypass it with a raw HTTP request.
- Implement a Next.js **Server Action** (or API route) that re-validates against the same Zod schema before processing.
- Add rate limiting (see F-03) before going live.
- Never log or store raw form payloads without sanitisation.

**Do before wiring up:**

1. Create `app/contact/actions.ts` with `"use server"` and re-validate with Zod
2. Add `CONTACT_FORM_RATE_LIMIT` environment variable for configurable throttle
3. Update `connect-src` in CSP if sending to a third-party email provider

---

#### F-02 · Missing `rel="noopener noreferrer"` on external links (tab-napping)

External links that open `target="_blank"` without `rel="noopener noreferrer"` allow the destination page to access `window.opener` and redirect the originating tab (tab-napping attack).

**Affected files:**

| File                                             | Line     | Link target            |
| ------------------------------------------------ | -------- | ---------------------- |
| `app/download/page.tsx`                          | 110, 119 | App Store / Play Store |
| `components/sections/app-showcase-section.tsx`   | 116      | App Store link         |
| `components/sections/call-to-action-section.tsx` | 88       | App Store link         |

**Fix:** Add `rel="noopener noreferrer"` to all four links.

---

### 🟡 MEDIUM

#### F-03 · No rate limiting on the contact form endpoint

Once F-01 is wired up, the endpoint will have no abuse protection. A bot could submit thousands of messages per minute.

**Recommended approach:**

- Add Vercel's built-in WAF rate limiting for the form endpoint — no code required, configured in the Vercel dashboard.
- Or implement token-bucket rate limiting inside the Server Action using an in-memory or edge KV store.

---

#### F-04 · `.gitignore` only excludes `.env*.local` — other env files are committable

```
# current .gitignore (env section)
.env*.local
```

`.env`, `.env.production`, `.env.staging`, `.env.development` are **not excluded**. A developer who creates a `.env` file with real credentials could accidentally commit it.

**Fix:** Update `.gitignore` to:

```
.env
.env.*
!.env.example
```

---

#### F-05 · Phone country code not included in form submission data

In `contact-form.tsx`, the country code `<Select>` is unconnected to the React Hook Form field:

```tsx
<Select>  {/* ← no `name` or `control` prop — not bound to form state */}
  <SelectValue placeholder="+254" />
```

The submitted `contact` value will be a bare number with no country code. This is a data quality issue that becomes a correctness bug when integrated with any telephony service.

---

### 🟢 LOW

#### F-06 · Deprecated `X-XSS-Protection` header

```js
{ key: "X-XSS-Protection", value: "1; mode=block" }
```

This header is deprecated and removed from modern browsers. In some legacy browsers, `mode=block` can introduce XSS side-channel attacks. The correct protection is a strong `Content-Security-Policy`. Remove this header.

---

#### F-07 · `unsafe-eval` in production CSP

```
script-src 'self' 'unsafe-eval' 'unsafe-inline' ...
```

`unsafe-eval` enables `eval()`, `Function()`, and `setTimeout(string)`. GSAP and Next.js dev mode require it, but it weakens CSP in production. Consider nonce-based CSP in a future iteration to eliminate both directives.

---

#### F-08 · No `.env.example` file

New contributors have no reference for required environment variables. Create `.env.example` with all variables in `lib/env.ts` documented (values redacted).

---

## What is already done correctly ✅

| Control                                                                                                   | Status                                       |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Security headers (CSP, X-Frame-Options DENY, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) | ✅ `next.config.mjs`                         |
| Zero hardcoded secrets or API keys                                                                        | ✅ Full grep scan clean                      |
| Zero `dangerouslySetInnerHTML` usage                                                                      | ✅ No XSS injection vectors                  |
| Zod-validated environment variables                                                                       | ✅ `lib/env.ts` fails-fast at startup        |
| No `app/api/` routes                                                                                      | ✅ Zero server-side attack surface today     |
| No Server Actions (`"use server"`)                                                                        | ✅ Zero server action attack surface today   |
| No localStorage / sessionStorage usage                                                                    | ✅ No client-side sensitive storage          |
| `remotePatterns: []` in image config                                                                      | ✅ External image domains blocked by default |
| ESLint enforced during build                                                                              | ✅ `ignoreDuringBuilds: false`               |
| Social links use `rel="noopener noreferrer"`                                                              | ✅ All footer links correct                  |
| `NEXT_PUBLIC_*` namespace discipline                                                                      | ✅ Only non-sensitive values are public      |

---

## Remediation Priority Order

1. **F-02** — Fix `rel` attributes (5-minute fix, ships today)
2. **F-04** — Harden `.gitignore` (1-minute fix, prevents future secret leaks)
3. **F-08** — Create `.env.example`
4. **F-01** — Server-side validation + rate limiting before wiring up the contact form
5. **F-05** — Fix country code binding when contact form is wired up
6. **F-03** — Rate limiting before contact form goes live
7. **F-06** — Remove deprecated `X-XSS-Protection` header
8. **F-07** — Move to nonce-based CSP when the stack is ready
