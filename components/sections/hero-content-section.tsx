"use client"

import Link from "next/link"
import { Smartphone, Handshake, Leaf, MapPin, ShieldCheck } from "lucide-react"

const badges = [
  { icon: Leaf, label: "EARLY-STAGE\nFUNDED" },
  { icon: MapPin, label: "OPERATIONAL\nIN KENYA" },
  { icon: ShieldCheck, label: "GDPR\nCOMPLIANT" },
]

export default function HeroContentSection() {
  return (
    <section
      className="w-full px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12"
      style={{ background: "#0C0E0C" }}
    >
      <div className="mx-auto max-w-lg md:max-w-2xl">
        {/* ── Headline ──────────────────────────────────────── */}
        <h1
          className="mb-3 font-bold leading-tight tracking-tight text-white"
          style={{ fontSize: "clamp(2.4rem, 7vw, 4.2rem)", letterSpacing: "-0.02em" }}
        >
          Return. Recycle. <span style={{ color: "#4ade80" }}>Make a difference.</span>
        </h1>

        {/* ── Subtitle + green rule ────────────────────────── */}
        <p
          className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Africa&rsquo;s circular bottle ecosystem.
        </p>
        <div className="mb-8 h-[2px] w-10 rounded-full" style={{ background: "#4ade80" }} />

        {/* ── CTA buttons ──────────────────────────────────── */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          {/* Primary */}
          <Link
            href="/download"
            className="flex flex-1 items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            style={{ background: "#4ade80" }}
          >
            <Smartphone size={22} strokeWidth={1.8} className="shrink-0 text-black" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/60">
                Download App
              </p>
              <p className="text-[15px] font-bold leading-tight text-black">
                Start Making a Difference
              </p>
            </div>
            <span className="ml-auto text-xl text-black/70">→</span>
          </Link>

          {/* Secondary */}
          <Link
            href="/contact"
            className="flex flex-1 items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200 hover:border-white/30 hover:bg-white/5 active:scale-[0.98]"
            style={{
              border: "1.5px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <Handshake size={22} strokeWidth={1.8} className="shrink-0 text-white/70" />
            <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-white">
              Partner with ECOCAN
            </p>
            <span className="ml-auto text-xl text-white/40">→</span>
          </Link>
        </div>

        {/* ── Trust badges ─────────────────────────────────── */}
        <div
          className="flex overflow-hidden rounded-2xl"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          {badges.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="flex flex-1 flex-col items-center justify-center gap-2 px-3 py-5"
              style={i > 0 ? { borderLeft: "1px solid rgba(255,255,255,0.08)" } : undefined}
            >
              <Icon size={18} strokeWidth={1.5} style={{ color: "#4ade80" }} />
              <p
                className="text-center text-[9px] font-bold uppercase leading-tight tracking-[0.12em]"
                style={{ color: "rgba(255,255,255,0.55)", whiteSpace: "pre-line" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
