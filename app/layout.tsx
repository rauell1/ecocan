import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

/*
 * Font loading migrated from manual @font-face TTF declarations to next/font.
 *
 * Why this matters for performance:
 * - next/font automatically serves WOFF2 (2-3x smaller than TTF)
 * - Fonts are preloaded at build time — no late discovery after CSS parse
 * - Zero FOUT: next/font inlines the font-display strategy and size-adjust
 *   to prevent layout shift during font swap
 * - Self-hosted from Vercel edge — no third-party DNS lookup to Google Fonts
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
});

export const metadata: Metadata = {
  title: "ECOCAN",
  description:
    "We seamlessly connect the physical and digital worlds in a manner that is most sustainable to our planet, and to the life it nurtures",
  authors: [{ name: "ECOCAN" }],
  openGraph: {
    title: "ECOCAN",
    description:
      "We seamlessly connect the physical and digital worlds in a manner that is most sustainable to our planet, and to the life it nurtures",
    url: "https://ecocan.africa",
    siteName: "ECOCAN",
    images: [
      {
        url: "/ecocan-curve.png",
        width: 1200,
        height: 630,
        alt: "ECOCAN",
      },
    ],
    type: "website",
  },
  other: {
    "author": "ECOCAN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-background px-4 py-2 rounded"
        >
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
