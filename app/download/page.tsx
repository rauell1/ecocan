"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { Download, Smartphone } from "lucide-react"

const STORE_URLS = {
  playStore: "https://play.google.com/store/apps/details?id=com.superapp.ecocanapp",
  appStore: "https://apps.apple.com/app/6502695438",
}

export default function DownloadRedirect() {
  const wrapRef = useRef<HTMLDivElement>(null)

  // Auto-redirect on mobile
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
  }, [])

  // Entry animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = wrapRef.current?.querySelectorAll(".dl-animate")
      if (els && els.length > 0) {
        gsap.fromTo(
          els,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, delay: 0.1, ease: "power3.out" }
        )
      }
    }, wrapRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{ background: "linear-gradient(150deg, #063d27 0%, #0d0d0d 60%, #101010 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }}
      />

      <div ref={wrapRef} className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <Image
          src="/images/ecocan-logo.png"
          alt="ECOCAN"
          width={120}
          height={48}
          className="dl-animate mb-12 opacity-90"
          priority
        />

        {/* App icon badge */}
        <div
          className="dl-animate mb-8 flex h-20 w-20 items-center justify-center rounded-[22px] shadow-2xl"
          style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
        >
          <Smartphone size={36} className="text-white" strokeWidth={1.5} />
        </div>

        {/* Copy */}
        <p className="dl-animate section-overline mb-3 text-white/60">Get the app</p>
        <h1
          className="dl-animate mb-4 font-bold text-white"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1 }}
        >
          Verify. Recycle. Get paid.
        </h1>
        <p className="dl-animate mb-10 max-w-[480px] text-lg text-white/65">
          Verify drinks, find nearby ECO-Stations across Kenya, and collect your recycling reward —
          instantly to M-PESA.
        </p>

        {/* Feature pills */}
        <div className="dl-animate mb-10 flex flex-wrap justify-center gap-3">
          {["✓  Free to download", "✓  Instant M-PESA cashout", "✓  Safe-drink verification"].map(
            (f) => (
              <span
                key={f}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-white/70"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {f}
              </span>
            )
          )}
        </div>

        {/* CTA buttons */}
        <div className="dl-animate mb-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href={STORE_URLS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-btn-white gap-2 !px-8 !py-4 text-base"
          >
            <Download size={18} />
            App Store
          </Link>
          <Link
            href={STORE_URLS.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn gap-2 !border-white/30 !px-8 !py-4 text-base !text-white hover:!bg-white/10"
            style={{ border: "2px solid rgba(255,255,255,0.3)" }}
          >
            <Download size={18} />
            Google Play
          </Link>
        </div>

        {/* Trust badges */}
        <div className="dl-animate flex flex-wrap justify-center gap-3">
          {["Built for Kenya", "Consumer-first recycling", "ECO-Station rewards"].map((badge) => (
            <span key={badge} className="glass-pill px-4 py-1.5 text-[13px] text-white/80">
              {badge}
            </span>
          ))}
        </div>

        {/* Back link */}
        <Link
          href="/"
          className="dl-animate mt-10 text-sm text-white/35 transition-colors hover:text-white/70"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
