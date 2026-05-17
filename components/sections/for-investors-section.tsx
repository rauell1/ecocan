"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TrendingUp, Globe, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react"
import SectionBadge from "@/components/shared/section-badge"

const highlights = [
  {
    icon: TrendingUp,
    label: "Market Opportunity",
    value: "$4.5B+",
    note: "African beverage recycling market by 2030",
    color: "#16a34a",
    accent: "rgba(22,163,74,0.08)",
    detail:
      "East Africa alone generates 2B+ plastic bottles a year with <10% formal recycling rate.",
  },
  {
    icon: Globe,
    label: "Countries Targeted",
    value: "12",
    note: "East & West African markets in 5-year roadmap",
    color: "#0891b2",
    accent: "rgba(8,145,178,0.08)",
    detail: "Starting with Kenya, scaling to Tanzania, Uganda, Rwanda and beyond within 36 months.",
  },
  {
    icon: ShieldCheck,
    label: "Anti-Counterfeit TAM",
    value: "$820M",
    note: "Annual losses to fake beverages across SSA",
    color: "#7c3aed",
    accent: "rgba(124,58,237,0.08)",
    detail:
      "ECOCAN's QR security layer is the first verifiable on-pack authentication at scale in Africa.",
  },
]

export default function ForInvestorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Heading block fades up
      const headingEls = sectionRef.current?.querySelectorAll(".inv-heading")
      if (headingEls && headingEls.length > 0) {
        gsap.fromTo(
          headingEls,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          }
        )
      }

      // Stat cards stagger up
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".inv-card")
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 52, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.14,
              ease: "power3.out",
              scrollTrigger: { trigger: cardsRef.current, start: "top 82%", once: true },
            }
          )
        }
      }

      // CTA row slides up last
      const ctaRow = sectionRef.current?.querySelector(".inv-cta")
      if (ctaRow) {
        gsap.fromTo(
          ctaRow,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: { trigger: ctaRow, start: "top 88%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="investors"
      className="relative overflow-hidden px-6 py-28 md:py-36"
      style={{ background: "#f5f5f0" }}
    >
      {/* Decorative green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(22,163,74,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 max-w-[600px]">
          <div className="inv-heading">
            <SectionBadge number="04" />
          </div>
          <p className="section-overline inv-heading mb-3">For Investors</p>
          <h2 className="section-headline inv-heading mb-4 text-eco-dark">
            This is not a recycling project.
            <br />
            This is logistics infrastructure.
          </h2>
          <p className="section-body inv-heading text-eco-dark/60">
            Early-stage funding secured. Operations live. ECOCAN is building the deposit-return
            backbone across Africa — ready for Series A.
          </p>
        </div>

        {/* Stats */}
        <div ref={cardsRef} className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {highlights.map((h, i) => {
            const Icon = h.icon
            const isActive = activeCard === i
            return (
              <div
                key={h.label}
                className="inv-card group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300"
                style={{
                  background: isActive ? h.accent : "white",
                  borderColor: isActive ? h.color + "50" : "rgba(0,0,0,0.07)",
                  transform: isActive ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: isActive ? `0 20px 48px ${h.color}18` : "0 1px 6px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Top bar */}
                <div
                  className="absolute inset-x-0 top-0 transition-all duration-300"
                  style={{
                    height: isActive ? "4px" : "3px",
                    background: h.color,
                    opacity: isActive ? 1 : 0.5,
                  }}
                />

                {/* Inner glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${h.color}10 0%, transparent 60%)`,
                  }}
                />

                <div className="relative p-7">
                  {/* Icon */}
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300"
                    style={{
                      background: isActive ? h.color : h.color + "15",
                    }}
                  >
                    <Icon
                      size={22}
                      style={{ color: isActive ? "white" : h.color }}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Label */}
                  <p
                    className="mb-1 text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200"
                    style={{ color: isActive ? h.color : "rgba(0,0,0,0.35)" }}
                  >
                    {h.label}
                  </p>

                  {/* Value */}
                  <p
                    className="mb-2 font-extrabold leading-none transition-colors duration-200"
                    style={{
                      fontSize: "clamp(36px, 4vw, 48px)",
                      color: isActive ? h.color : "#111",
                    }}
                  >
                    {h.value}
                  </p>

                  {/* Note */}
                  <p className="mb-4 text-[13.5px] leading-snug text-eco-dark/55">{h.note}</p>

                  {/* Detail — revealed on hover */}
                  <p
                    className="text-[12.5px] leading-relaxed transition-all duration-300"
                    style={{ color: isActive ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.28)" }}
                  >
                    {h.detail}
                  </p>

                  {/* Pulse dot */}
                  {!isActive && (
                    <div
                      className="absolute bottom-4 right-4 h-2 w-2 animate-pulse-dot rounded-full"
                      style={{ background: h.color, opacity: 0.35 }}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA row */}
        <div className="inv-cta flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="pill-btn pill-btn-filled !px-9 !py-4 text-base transition-all hover:shadow-lg active:scale-95"
          >
            Request Investor Deck
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/about-us"
            className="flex items-center gap-2 text-[15px] font-semibold text-eco-dark/55 transition-colors hover:text-eco-dark"
          >
            Meet the Team <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
