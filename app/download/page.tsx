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
      style={{ background: "var(--c-bg)" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)" }}
      />

      {/* Grid Pattern Ambient Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(13,18,13,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,18,13,0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px, 48px 48px",
        }}
      />

      <div ref={wrapRef} className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="dl-animate mb-12 flex items-center">
          <span className="font-serif-luxury text-2xl font-bold tracking-widest text-[var(--c-text)]">
            ECOCAN
          </span>
        </Link>

        {/* App icon badge */}
        <div
          className="dl-animate mb-8 flex h-20 w-20 items-center justify-center rounded-[22px] shadow-2xl transition-transform duration-300 hover:scale-105"
          style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
        >
          <Smartphone size={36} className="text-white" strokeWidth={1.5} />
        </div>

        {/* Copy */}
        <p className="dl-animate section-overline mb-3 text-[var(--c-green)]">Get the app</p>
        <h1
          className="dl-animate font-serif-luxury text-luxury-gradient text-luxury-glow mb-4"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1 }}
        >
          Verify. Recycle. Get paid.
        </h1>
        <p className="dl-animate mb-10 max-w-[480px] text-lg font-normal leading-relaxed text-[var(--c-text-muted)]">
          Verify drinks, find nearby ECO-Stations across Kenya, and collect your recycling reward —
          instantly to M-PESA.
        </p>

        {/* Feature pills */}
        <div className="dl-animate mb-10 flex flex-wrap justify-center gap-3">
          {["✓  Free to download", "✓  Instant M-PESA cashout", "✓  Safe-drink verification"].map(
            (f) => (
              <span
                key={f}
                className="rounded-full px-4 py-1.5 text-sm font-semibold text-[var(--c-text-muted)]"
                style={{
                  background: "var(--c-surface)",
                  border: "1px solid var(--c-border)",
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
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            style={{ background: "var(--c-green)" }}
          >
            <Download size={18} />
            App Store
          </Link>
          <Link
            href={STORE_URLS.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold uppercase tracking-wider text-[var(--c-text)] transition-all duration-300 hover:bg-[var(--c-green-dim)] active:scale-[0.98]"
            style={{
              border: "1.5px solid var(--c-border-dark)",
              background: "var(--c-surface)",
            }}
          >
            <Download size={18} />
            Google Play
          </Link>
        </div>

        {/* Trust badges */}
        <div className="dl-animate flex flex-wrap justify-center gap-3">
          {["Built for Kenya", "Consumer-first recycling", "ECO-Station rewards"].map((badge) => (
            <span
              key={badge}
              className="rounded-full px-4 py-1.5 text-[13px] font-semibold text-[var(--c-green)]"
              style={{
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.12)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Back link */}
        <Link
          href="/"
          className="dl-animate text-[var(--c-text-muted)]/50 mt-10 text-sm transition-colors hover:text-[var(--c-text)]"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
