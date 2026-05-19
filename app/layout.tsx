import type { Metadata } from "next"
import { Inter, Nunito_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "@/lib/env" // Validate environment variables at startup

/*
 * Font loading migrated from manual @font-face TTF declarations to next/font.
 *
 * Why this matters for performance:
 * - next/font automatically serves WOFF2 (2-3x smaller than TTF)
 * - Fonts are preloaded at build time  -  no late discovery after CSS parse
 * - Zero FOUT: next/font inlines the font-display strategy and size-adjust
 *   to prevent layout shift during font swap
 * - Self-hosted from Vercel edge  -  no third-party DNS lookup to Google Fonts
 * - Only the weights actually used are requested (300, 400, 500, 600, 700)
 *
 * Euclid Circular B is a commercial font not available on Google Fonts.
 * Inter is the closest open-source equivalent with the same geometric
 * proportions and x-height. If you have a valid Euclid Circular B license,
 * place the WOFF2 files in public/fonts/ and use next/font/local instead:
 *
 * import localFont from 'next/font/local';
 * const euclidCircularB = localFont({
 *   src: [
 *     { path: '../public/fonts/EuclidCircularB-Regular.woff2', weight: '400' },
 *     { path: '../public/fonts/EuclidCircularB-Medium.woff2',  weight: '500' },
 *     { path: '../public/fonts/EuclidCircularB-SemiBold.woff2', weight: '600' },
 *     { path: '../public/fonts/EuclidCircularB-Bold.woff2',    weight: '700' },
 *   ],
 *   display: 'swap',
 *   variable: '--font-sans',
 * });
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

const APP_URL = "https://ecocan.africa"

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "ECOCAN - Africa's Circular Bottle Ecosystem",
    template: "%s | ECOCAN",
  },
  description:
    "Return empty bottles, fight counterfeits, and earn rewards. ECOCAN is Africa's Deposit Return System connecting consumers, brands, and ECO-Stations across East Africa.",
  keywords: [
    "ECOCAN",
    "deposit return system",
    "DRS",
    "recycling Kenya",
    "bottle recycling",
    "circular economy Africa",
    "anti-counterfeit",
    "M-Pesa rewards",
    "ECO-Station",
  ],
  authors: [{ name: "ECOCAN", url: APP_URL }],
  creator: "ECOCAN",
  publisher: "ECOCAN",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "ECOCAN - Africa's Circular Bottle Ecosystem",
    description:
      "Return empty bottles at any ECO-Station. Earn M-Pesa rewards. Fight fake drinks. Join Africa's circular economy.",
    url: APP_URL,
    siteName: "ECOCAN",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ECOCAN - Return. Recycle. Earn.",
      },
    ],
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECOCAN - Africa's Circular Bottle Ecosystem",
    description: "Return bottles. Earn rewards. Stop counterfeits. Join ECOCAN.",
    images: ["/images/og-image.jpg"],
    site: "@ecocanapp",
  },
  alternates: {
    canonical: APP_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${nunitoSans.variable}`}>
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#080808" />
      </head>
      <body className="font-sans">
        {/* Skip navigation link for keyboard users */}
        <a
          href="#main-content"
          className="focus:bg-primary sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
