/**
 * lib/env.ts
 * Validated environment variables using zod.
 * Import this file anywhere you need env vars  -  it fails fast at startup if required vars are missing.
 */
import { z } from "zod"

const envSchema = z.object({
  // Node environment
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  // App URL (required in production for absolute Open Graph / sitemap URLs)
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),

  // Analytics (optional  -  used by @vercel/analytics automatically)
  NEXT_PUBLIC_VERCEL_ENV: z.string().optional(),
})

// Parse and validate  -  throws at module load time if invalid
const _parsed = envSchema.safeParse(process.env)

if (!_parsed.success) {
  console.error("❌ Invalid environment variables:\n", _parsed.error.flatten().fieldErrors)
  // Only throw in non-test environments to avoid breaking jest/vitest
  if (process.env.NODE_ENV !== "test") {
    throw new Error("Invalid environment variables. See errors above.")
  }
}

export const env = _parsed.success ? _parsed.data : envSchema.parse({ NODE_ENV: "development" })
