/**
 * lib/env.ts
 * Validated environment variables using zod.
 * Import this file anywhere you need env vars — it fails fast at startup if required vars are missing.
 */
import { z } from "zod"

const envSchema = z.object({
  // Node environment
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  // App URL — required in production for absolute Open Graph / sitemap / canonical URLs.
  // Set this to your Vercel deployment URL or custom domain.
  NEXT_PUBLIC_APP_URL: z
    .string()
    .url()
    .optional()
    .refine(
      (val) =>
        process.env.NODE_ENV !== "production" || (val !== undefined && val.length > 0),
      { message: "NEXT_PUBLIC_APP_URL is required in production" }
    ),

  // Human-readable site name used in meta tags, OG cards, emails etc.
  NEXT_PUBLIC_SITE_NAME: z.string().default("ECOCAN"),

  // Analytics (set automatically by Vercel)
  NEXT_PUBLIC_VERCEL_ENV: z.string().optional(),
})

// Parse and validate — throws at module load time if invalid
const _parsed = envSchema.safeParse(process.env)

if (!_parsed.success) {
  console.error("❌ Invalid environment variables:\n", _parsed.error.flatten().fieldErrors)
  if (process.env.NODE_ENV !== "test") {
    throw new Error("Invalid environment variables. See errors above.")
  }
}

export const env = _parsed.success ? _parsed.data : envSchema.parse({ NODE_ENV: "development" })
