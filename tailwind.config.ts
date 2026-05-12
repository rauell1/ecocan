import type { Config } from "tailwindcss"

// =============================================================================
// LAYER 1 — Design Token Reconciliation
// Source of truth: Kimi_Agent_Ecocan-Africa-website/app/tailwind.config.js
// primary.* and eco.* are now HARDCODED HEX (not HSL CSS vars) as the spec
// explicitly overrides the previous variable-based indirection.
// Semantic shadcn tokens (border, input, ring, background, foreground, etc.)
// remain HSL-var-driven so Radix/shadcn components continue to work.
// =============================================================================

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // --- Shadcn/Radix semantic tokens (HSL vars — unchanged) ---
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // --- Primary brand palette (OVERRIDDEN — Kimi spec hardcoded hex) ---
        // #228B22  Forest Green   — primary action colour
        // #094C31  Deep Forest    — dark variant / hover state
        // #00A86B  Emerald        — accent / highlight
        primary: {
          DEFAULT: "#228B22",
          foreground: "#FFFFFF",
          dark: "#094C31",
          accent: "#00A86B",
        },

        // --- Ecocan surface palette (OVERRIDDEN — Kimi spec hardcoded hex) ---
        // #101010  Near-black      — dark backgrounds / dark section fills
        // #F7F7F7  Off-white       — light section fills
        // #E6E6E6  Light grey      — dividers, muted surfaces
        // #FFFFFF  Pure white      — cards, overlays
        // #1A2B3C  Navy            — footer background
        eco: {
          dark: "#101010",
          light: "#F7F7F7",
          grey: "#E6E6E6",
          white: "#FFFFFF",
          footer: "#1A2B3C",
        },
      },

      // --- Font family (OVERRIDDEN — Inter as primary, spec-aligned) ---
      // Inter is loaded via next/font or CDN. --font-sans var kept as fallback
      // so layout.tsx next/font injection still works.
      fontFamily: {
        sans: ['Inter', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },

      // --- Border radius (ALIGNED with Kimi spec — xs + xl added, smooth-* removed) ---
      borderRadius: {
        xs:  "calc(var(--radius) - 6px)",
        sm:  "calc(var(--radius) - 4px)",
        md:  "calc(var(--radius) - 2px)",
        lg:  "var(--radius)",
        xl:  "calc(var(--radius) + 4px)",
        '4xl': '24px',
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },

      // --- Box shadows (unchanged — identical in both configs) ---
      boxShadow: {
        xs:       "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card:     "0 4px 24px rgba(0,0,0,0.06)",
        elevated: "0 12px 48px rgba(0,0,0,0.12)",
        glow:     "0 0 30px rgba(34,139,34,0.3)",
      },

      // --- Keyframes (unchanged) ---
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%":     { opacity: "0" },
        },
        "pulse-dot": {
          "0%":   { boxShadow: "0 0 0 0 rgba(34,139,34,0.7)" },
          "70%":  { boxShadow: "0 0 0 10px rgba(34,139,34,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(34,139,34,0)" },
        },
      },

      // --- Animations (unchanged) ---
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "caret-blink":    "caret-blink 1.25s ease-out infinite",
        "pulse-dot":      "pulse-dot 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
