"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Download, Handshake, TrendingUp, ArrowRight } from "lucide-react"
import SectionBadge from "@/components/shared/section-badge"

const paths = [
  {
    icon: Download,
    eyebrow: "For consumers",
    headline: "Download the app. Start making a difference.",
    body: "Return bottles. Earn rewards. Avoid fake drinks. The change starts with you.",
    cta: "Get the app",
    href: "/download",
    accent: "#4ade80",
    accentBg: "rgba(74,222,128,0.08)",
    accentBorder: "rgba(74,222,128,0.2)",
  },
  {
    icon: Handshake,
    eyebrow: "For partners",
    headline: "Join our network. Grow with us.",
    body: "More foot traffic. Loyal customers. Green credentials. Become an ECO-Station.",
    cta: "Partner with ECOCAN",
    href: "/contact",
    accent: "#38bdf8",
    accentBg: "rgba(56,189,248,0.08)",
    accentBorder: "rgba(56,189,248,0.2)",
  },
  {
    icon: TrendingUp,
    eyebrow: "For investors",
    headline: "Back Africa's circular infrastructure.",
    body: "Early-stage funding secured. Operations live. Series A ready.",
    cta: "Investor relations",
    href: "/contact",
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
    accentBorder: "rgba(167,139,250,0.2)",
  },
]

export default function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".cta-animate")
      if (els && els.length > 0) {
        gsap.fromTo(
          els,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: "#060a08" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[600px] -translate-x-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #22c55e, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="cta-animate mb-14 flex flex-col items-center text-center">
          <SectionBadge number="12" />
          <p className="section-overline mb-3" style={{ color: "#4ade80" }}>
            Join the Movement
          </p>
          <h2
            className="max-w-[560px] font-bold leading-tight text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Everyone has a role to play.
          </h2>
        </div>

        {/* Three-path cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {paths.map((path) => {
            const Icon = path.icon
            return (
              <div
                key={path.eyebrow}
                className="cta-animate group flex flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: path.accentBg,
                  border: `1px solid ${path.accentBorder}`,
                }}
              >
                {/* Icon */}
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${path.accent}18`,
                    border: `1px solid ${path.accentBorder}`,
                  }}
                >
                  <Icon size={20} style={{ color: path.accent }} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <p
                  className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: path.accent }}
                >
                  {path.eyebrow}
                </p>
                <h3 className="mb-3 text-[20px] font-bold leading-snug text-white">
                  {path.headline}
                </h3>
                <p
                  className="mb-7 flex-1 text-[14px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {path.body}
                </p>

                {/* CTA */}
                <Link
                  href={path.href}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-200 hover:gap-3"
                  style={{
                    background: `${path.accent}15`,
                    border: `1px solid ${path.accentBorder}`,
                    color: path.accent,
                  }}
                >
                  {path.cta} <ArrowRight size={14} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
