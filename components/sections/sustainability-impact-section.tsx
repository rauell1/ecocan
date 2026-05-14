"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionBadge from "@/components/shared/section-badge"

const stats = [
  {
    value: 50000,
    suffix: "+",
    label: "Bottles recovered",
    sublabel: "per month",
    color: "#4ade80",
  },
  {
    value: 120,
    suffix: "",
    label: "Tons CO₂ saved",
    sublabel: "and counting",
    color: "#facc15",
  },
  {
    value: 150,
    suffix: "+",
    label: "ECO-Stations",
    sublabel: "active collection points",
    color: "#60a5fa",
  },
]

export default function SustainabilityImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const countersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Heading slides up
      const headingEls = sectionRef.current?.querySelectorAll(".heading-animate")
      if (headingEls && headingEls.length > 0) {
        gsap.fromTo(
          headingEls,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          }
        )
      }

      if (!countersRef.current) return

      // Stat cards slide up with stagger
      const cards = countersRef.current.querySelectorAll(".stat-card")
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 56 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: { trigger: countersRef.current, start: "top 80%", once: true },
          }
        )
      }

      // Counter roll-up animation
      const counterEls = countersRef.current.querySelectorAll(".counter-value")
      counterEls.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") ?? "0", 10)
        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: target,
            duration: 2.2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-[120px] md:py-[160px]">
      {/* Parallax background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/recycling-hub.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark overlay — slightly heavier so cards pop */}
      <div className="absolute inset-0 bg-eco-dark/80" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <SectionBadge number="05" />
        <p className="section-overline heading-animate mb-4 text-white/60">Impact</p>
        <h2 className="section-headline heading-animate mb-16 text-white">
          Measurable. Transparent. Real.
        </h2>

        {/* Stat cards */}
        <div ref={countersRef} className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              {/* Coloured top accent */}
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: stat.color }}
              />

              {/* Number */}
              <div
                className="mb-1 font-extrabold tabular-nums leading-none"
                style={{ fontSize: "clamp(56px, 8vw, 96px)", color: stat.color }}
              >
                <span className="counter-value" data-target={stat.value}>
                  0
                </span>
                <span>{stat.suffix}</span>
              </div>

              {/* Divider */}
              <div className="my-4 h-px w-10 bg-white/20" />

              {/* Labels */}
              <p className="text-lg font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-sm text-white/45">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
