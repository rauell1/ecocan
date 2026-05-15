"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Leaf, Recycle, MapPin } from "lucide-react"
import SectionBadge from "@/components/shared/section-badge"

const stats = [
  {
    value: 50000,
    suffix: "+",
    label: "Bottles Recovered",
    sublabel: "every single month",
    color: "#4ade80",
    icon: Recycle,
    desc: "Every bottle scanned and returned funds the local collector — a living wage, not charity.",
  },
  {
    value: 120,
    suffix: "",
    label: "Tons CO₂ Saved",
    sublabel: "and still counting",
    color: "#facc15",
    icon: Leaf,
    desc: "Fewer trucks, fewer furnaces. Each return trip on an electric bike cuts carbon twice over.",
  },
  {
    value: 150,
    suffix: "+",
    label: "ECO-Stations",
    sublabel: "active collection points",
    color: "#60a5fa",
    icon: MapPin,
    desc: "From corner shops to supermarkets — a growing network that pays you where you already shop.",
  },
]

export default function SustainabilityImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const countersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Heading block
      const headingEls = sectionRef.current?.querySelectorAll(".si-heading")
      if (headingEls && headingEls.length > 0) {
        gsap.fromTo(
          headingEls,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
          }
        )
      }

      if (!countersRef.current) return

      // Stat cards stagger up
      const cards = countersRef.current.querySelectorAll(".stat-card")
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 64, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.72,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: countersRef.current, start: "top 80%", once: true },
          }
        )
      }

      // Counter roll-up
      const counterEls = countersRef.current.querySelectorAll(".counter-value")
      counterEls.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") ?? "0", 10)
        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: target,
            duration: 2.4,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        )
      })

      // Subtle parallax on the background
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current.querySelector(".si-bg"),
          { backgroundPositionY: "-10%" },
          {
            backgroundPositionY: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-[120px] md:py-[160px]"
      style={{ background: "#0a1a0f" }} /* fallback if image fails */
    >
      {/* Parallax background image */}
      <div
        className="si-bg absolute inset-0"
        style={{
          backgroundImage: "url(/images/recycling-hub.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Multi-layer overlay: gradient for depth + solid for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85" />
      {/* Green tint layer for brand consistency */}
      <div className="absolute inset-0" style={{ background: "rgba(5,40,20,0.45)" }} />

      {/* Subtle ambient glow behind numbers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 65%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Badge + heading */}
        <div className="mb-4">
          <SectionBadge number="05" />
        </div>
        <p className="section-overline si-heading mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
          Impact
        </p>
        <h2
          className="si-heading mb-5 font-bold text-white"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Measurable.{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #4ade80, #22c55e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Transparent.
          </span>{" "}
          Real.
        </h2>
        <p
          className="si-heading mb-16 max-w-[520px] text-[17px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Every scan, every return, every peso — tracked, verified, and publicly shared. No
          greenwashing. Just proof.
        </p>

        {/* Stat cards */}
        <div ref={countersRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="stat-card group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Colored top accent */}
                <div
                  className="absolute inset-x-0 top-0 h-[3px] transition-all duration-300 group-hover:h-[4px]"
                  style={{ background: stat.color }}
                />

                {/* Hover glow layer */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at top, ${stat.color}12 0%, transparent 60%)`,
                  }}
                />

                <div className="relative px-8 py-10">
                  {/* Icon */}
                  <div
                    className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: stat.color + "20" }}
                  >
                    <Icon size={22} style={{ color: stat.color }} strokeWidth={1.8} />
                  </div>

                  {/* Number */}
                  <div
                    className="mb-1 font-extrabold tabular-nums leading-none"
                    style={{ fontSize: "clamp(52px, 7vw, 88px)", color: stat.color }}
                  >
                    <span className="counter-value" data-target={stat.value}>
                      0
                    </span>
                    <span>{stat.suffix}</span>
                  </div>

                  {/* Divider */}
                  <div className="my-4 h-px w-12" style={{ background: stat.color + "40" }} />

                  {/* Label */}
                  <p className="text-lg font-bold text-white">{stat.label}</p>
                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {stat.sublabel}
                  </p>

                  {/* Description */}
                  <p
                    className="mt-3 text-[13px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.40)" }}
                  >
                    {stat.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom footnote */}
        <p
          className="si-heading mt-10 text-center text-xs"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Figures updated monthly · Independently audited · Data available on request
        </p>
      </div>
    </section>
  )
}
