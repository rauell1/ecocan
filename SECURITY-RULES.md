# Universal Security Directives — Ecocan

> This file governs how AI coding assistants and human developers should approach security in this repository.
> It is tailored to Ecocan's architecture: Next.js 14 App Router, static-first, no auth today, contact form pending.

---

## 1. Access Control Matrix

Ecocan has one user role today: **Public Visitor** (unauthenticated).

| Role                           | Allowed Actions                                               |
| ------------------------------ | ------------------------------------------------------------- |
| **Public Visitor**             | Read all pages, submit contact form (when live), download app |
| _(No authenticated roles yet)_ | —                                                             |

**Directive:** Before writing any data-fetching or mutation logic, confirm the operation belongs to a defined role above. If it introduces a new role or permission, update this matrix first.

When authentication is added in the future, enforce it at the **server boundary** (Server Action or API route), never rely on client-side guards alone.

---

## 2. Data Validation & Sanitisation

### Rules

- **Validate at the server boundary.** Client-side Zod/RHF is UX polish only — it can be bypassed. Every Server Action and API route must re-validate inputs against a Zod schema before processing.
- **Reject unexpected fields.** Use `z.object({...}).strict()` to disallow extra keys.
- **Sanitise before storage.** Strip or encode HTML entities if any input will be stored and later rendered.
- **Never trust URL params, query strings, or headers as authoritative data** without validation.

### Contact form (pending wiring)

When `app/contact/actions.ts` is created:

```ts
"use server"
import { z } from "zod"

const contactSchema = z
  .object({
    businessName: z.string().min(1).max(200).trim(),
    email: z.string().email(),
    contact: z.string().min(10).max(20).trim(),
    message: z.string().min(1).max(5000).trim(),
  })
  .strict() // reject extra fields

export async function submitContact(formData: FormData) {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { error: "Invalid input" }
  // ... send email / store lead
}
```

---

## 3. Secrets Management

### Rules

- **Never hardcode** API keys, passwords, tokens, or private URLs in source files.
- **Always read** sensitive config from environment variables via `lib/env.ts`.
- **Only `NEXT_PUBLIC_*` variables** are safe to expose to the client bundle. Anything else must stay server-only.
- **`.env` files** (except `.env.example`) are git-ignored. Do not commit them.

### Adding a new secret

1. Add the variable to `lib/env.ts` with a Zod schema entry
2. Add a redacted placeholder to `.env.example`
3. Set the real value in the Vercel dashboard under Environment Variables
4. Never log the value, even in development

### Current public variables (safe)

```
NEXT_PUBLIC_APP_URL     # Site canonical URL
NEXT_PUBLIC_SITE_NAME   # "ECOCAN"
NEXT_PUBLIC_VERCEL_ENV  # Set by Vercel automatically
```

---

## 4. Resiliency & Abuse Prevention

### Rate limiting (contact form — required before go-live)

- Use Vercel WAF rate limiting (dashboard — no code) **or** implement in the Server Action
- Target: max 5 submissions per IP per 10 minutes
- Return HTTP 429 with a user-friendly message, not a stack trace

### Error handling

- **Never leak stack traces or internal paths to the client** in production
- Use `process.env.NODE_ENV === "production"` guards around verbose error logging
- Return generic error messages to clients; log details server-side only

### External links

- All `target="_blank"` links **must** include `rel="noopener noreferrer"` to prevent tab-napping
- Use Next.js `<Link>` for internal navigation; use `<a rel="noopener noreferrer">` for external

---

## 5. HTTP Security Headers

Managed in `next.config.mjs`. Current posture:

| Header                    | Value                                        | Notes                                                                                                         |
| ------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `Content-Security-Policy` | See `next.config.mjs`                        | Includes `unsafe-eval`/`unsafe-inline` (needed for GSAP + Next.js). Remove when migrating to nonce-based CSP. |
| `X-Frame-Options`         | `DENY`                                       | ✅ Prevents clickjacking                                                                                      |
| `X-Content-Type-Options`  | `nosniff`                                    | ✅                                                                                                            |
| `Referrer-Policy`         | `strict-origin-when-cross-origin`            | ✅                                                                                                            |
| `Permissions-Policy`      | camera=(), microphone=(), geolocation=(self) | ✅                                                                                                            |
| `X-XSS-Protection`        | `1; mode=block`                              | ⚠️ Deprecated — remove in next header cleanup                                                                 |

**When adding a new external service** (analytics, email provider, CDN):

1. Add its domain to the correct CSP directive in `next.config.mjs`
2. Do not use `*` wildcards

---

## 6. Code Review Checklist

Before merging any PR that touches data handling, forms, or server code:

- [ ] Inputs validated server-side with Zod (not just client-side)
- [ ] No hardcoded secrets, tokens, or credentials
- [ ] External links have `rel="noopener noreferrer"`
- [ ] New env vars are in `lib/env.ts` and `.env.example`
- [ ] CSP updated if new external domains are required
- [ ] Error responses do not expose stack traces or file paths
- [ ] Rate limiting considered for any new public endpoint

---

## 7. Future Milestones — Security Gates

| Milestone                | Security requirement before shipping                                 |
| ------------------------ | -------------------------------------------------------------------- |
| Contact form go-live     | Server Action with Zod re-validation + rate limiting (F-01, F-03)    |
| User authentication      | Auth library (NextAuth / Clerk), session management, CSRF protection |
| Payment / financial data | PCI DSS scope assessment; never handle raw card data                 |
| Third-party integrations | Review CSP `connect-src`, verify webhook signature validation        |
| Admin panel              | Role-based access, auth middleware on all admin routes               |

---

_Last updated: 2026-05-23. Update this file whenever the architecture or access model changes._
