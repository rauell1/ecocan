"use client"

import Image from "next/image"
import Link from "next/link"
import { Smartphone, Handshake, Leaf, MapPin } from "lucide-react"

const trustBadges = [
  { icon: Leaf, label: "EARLY-STAGE\nFUNDED" },
  { icon: MapPin, label: "OPERATIONAL\nIN KENYA" },
]

const complianceBadges = [
  { src: "/assets/images/gdpr-badge.svg", alt: "GDPR Compliant", label: "GDPR Compliant" },
  { src: "/assets/images/odpc-badge.svg", alt: "ODPC Kenya Compliant", label: "ODPC Compliant" },
]

export default function HeroContentSection() {
  return (
    <section
      className="w-full px-5 pb-16 pt-8 text-[var(--c-text)] md:px-10 md:pb-24 md:pt-12"
      style={{ background: "var(--c-bg)" }}
    >
      <div className="mx-auto max-w-lg md:max-w-2xl">
        {/* ── Headline ──────────────────────────────────────── */}
        <h1
          className="mb-3 font-bold leading-tight tracking-tight text-[var(--c-text)]"
          style={{ fontSize: "clamp(2.4rem, 7vw, 4.2rem)", letterSpacing: "-0.02em" }}
        >
          Return. Recycle. <span style={{ color: "var(--c-green)" }}>Make a difference.</span>
        </h1>

        {/* ── Subtitle + green rule ────────────────────────── */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--c-text-muted)]">
          Africa&rsquo;s circular bottle ecosystem.
        </p>
        <div className="mb-8 h-[2px] w-10 rounded-full" style={{ background: "var(--c-green)" }} />

        {/* ── CTA buttons ──────────────────────────────────── */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          {/* Primary */}
          <Link
            href="/download"
            className="flex flex-1 items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            style={{ background: "var(--c-green)" }}
          >
            <Smartphone size={22} strokeWidth={1.8} className="shrink-0 text-white" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                Download App
              </p>
              <p className="text-[15px] font-bold leading-tight text-white">
                Start Making a Difference
              </p>
            </div>
            <span className="ml-auto text-xl text-white/70">→</span>
          </Link>

          {/* Secondary */}
          <Link
            href="/contact"
            className="hover:border-[var(--c-green)]/35 flex flex-1 items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200 hover:bg-[var(--c-green-dim)] active:scale-[0.98]"
            style={{
              border: "1.5px solid var(--c-border-dark)",
              background: "var(--c-surface)",
            }}
          >
            <Handshake
              size={22}
              strokeWidth={1.8}
              className="shrink-0 text-[var(--c-text-muted)]"
            />
            <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-[var(--c-text)]">
              Partner with ECOCAN
            </p>
            <span className="text-[var(--c-text-muted)]/50 ml-auto text-xl">→</span>
          </Link>
        </div>

        {/* ── Trust strip: operational badges ──────────────── */}
        <div
          className="mb-3 flex overflow-hidden rounded-2xl"
          style={{
            border: "1px solid var(--c-border)",
            background: "var(--c-surface)",
          }}
        >
          {trustBadges.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="flex flex-1 flex-col items-center justify-center gap-2 px-3 py-5"
              style={i > 0 ? { borderLeft: "1px solid var(--c-border)" } : undefined}
            >
              <Icon size={18} strokeWidth={1.5} style={{ color: "var(--c-green)" }} />
              <p
                className="text-center text-[9px] font-bold uppercase leading-tight tracking-[0.12em] text-[var(--c-text-muted)]"
                style={{ whiteSpace: "pre-line" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Compliance badge images ───────────────────────── */}
        <div className="flex gap-3">
          {complianceBadges.map(({ src, alt, label }) => (
            <div
              key={label}
              className="flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-2xl px-4 py-3"
              style={{
                border: "1px solid var(--c-border)",
                background: "var(--c-surface)",
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 object-contain"
              />
              <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.1em] text-[var(--c-text-muted)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
