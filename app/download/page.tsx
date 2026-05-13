"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"

const STORE_URLS = {
  playStore: "https://play.google.com/store/apps/details?id=com.superapp.ecocanapp",
  appStore: "https://apps.apple.com/app/6502695438",
  fallback: "https://ecocan.africa/download",
}

export default function DownloadRedirect() {
  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(ua)) {
      window.location.href = STORE_URLS.appStore
      return
    }
    if (/android/.test(ua)) {
      window.location.href = STORE_URLS.playStore
      return
    }
    // Desktop: stay on page and show QR / links
  }, [])

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ background: "linear-gradient(135deg, #094C31 0%, #101010 100%)" }}
    >
      {/* Logo */}
      <Image
        src="/images/ecocan-logo.png"
        alt="ECOCAN"
        width={120}
        height={48}
        className="mb-10 opacity-90"
      />

      {/* Headline */}
      <p className="section-overline mb-4 text-white/60">Get the app</p>
      <h1
        className="mb-4 font-bold text-white"
        style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1 }}
      >
        Scan. Return. Get paid.
      </h1>
      <p className="mb-12 max-w-[520px] text-lg text-white/70">
        Download the ECOCAN app to verify drinks, find collection points, and collect your deposit
        reward - instantly.
      </p>

      {/* CTA buttons */}
      <div className="mb-14 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href={STORE_URLS.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn pill-btn-white gap-2"
        >
          <Download size={18} />
          App Store
        </Link>
        <Link
          href={STORE_URLS.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn pill-btn-outline !border-white/40 !text-white hover:!bg-white/10"
        >
          <Download size={18} />
          Google Play
        </Link>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-3">
        {["Early-stage funded", "Operational in Kenya", "GDPR Compliant"].map((badge) => (
          <span key={badge} className="glass-pill px-4 py-1.5 text-[13px] text-white/80">
            {badge}
          </span>
        ))}
      </div>

      {/* Back link */}
      <Link href="/" className="mt-10 text-sm text-white/40 transition-colors hover:text-white/80">
        ← Back to home
      </Link>
    </div>
  )
}
