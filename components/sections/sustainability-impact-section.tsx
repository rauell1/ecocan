"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Leaf, Recycle, MapPin } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

const stats = [
  { value: 50000, suffix: "+", label: "Bottles Recovered", sublabel: "every single month",       color: "#4ade80", icon: Recycle, desc: "Every bottle scanned and returned funds the local collector — a living wage, not charity." },
  { value: 120,   suffix: "",  label: "Tons CO₂ Saved",    sublabel: "and still counting",       color: "#facc15", icon: Leaf,    desc: "Fewer trucks, fewer furnaces. Each return trip on an electric bike cuts carbon twice over." },
  { value: 150,   suffix: "+", label: "ECO-Stations",      sublabel: "active collection points", color: "#60a5fa", icon: MapPin,  desc: "From corner shops to supermarkets — a growing network that pays you where you already shop." },
]

export default function SustainabilityImpactSection() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const countersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      /* Heading */
      const headEls = sectionRef.current?.querySelectorAll(".ec-reveal")
      if (headEls?.length) {
        gsap.to(headEls, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true } })
      }
      /* Cards stagger */
      if (countersRef.current) {
        gsap.fromTo(countersRef.current.querySelectorAll(".stat-card"),
          { opacity: 0, y: 56, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.72, stagger: 0.14, ease: "power3.out",
            scrollTrigger: { trigger: countersRef.current, start: "top 78%", once: true } })
        /* Counter roll-up */
        countersRef.current.querySelectorAll(".counter-value").forEach(el => {
          const target = parseInt(el.getAttribute("data-target") ?? "0", 10)
          gsap.fromTo(el, { textContent: "0" },
            { textContent: target, duration: 2.2, ease: "power2.out", snap: { textContent: 1 },
              scrollTrigger: { trigger: el, start: "top 83%", once: true } })
        })
      }
      /* Subtle parallax on bg image — guard against null querySelector result */
      const bgEl = sectionRef.current?.querySelector<HTMLElement>(".si-bg")
      if (bgEl) {
        gsap.fromTo(bgEl,
          { backgroundPositionY: "-8%" },
          { backgroundPositionY: "8%", ease: "none",
            scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true } })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full section-py overflow-hidden" style={{ background: "#0a1a0f" }}>
      {/* Parallax bg */}
      <div className="si-bg absolute inset-0" style={{ backgroundImage: "url(/images/recycling-hub.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/68 via-black/73 to-black/84" />
      <div className="absolute inset-0" style={{ background: "rgba(5,40,20,0.42)" }} />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-12 blur-3xl" style={{ background: "radial-gradient(circle,#22c55e 0%,transparent 65%)" }} />

      <div className="site-container relative z-10">
        <SectionOverline inv>Impact</SectionOverline>
        <h2 className="ec-reveal section-heading section-heading-inv mb-4">
          Measurable.{" "}
          <span style={{ background: "linear-gradient(90deg,#4ade80,#22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Transparent.</span>{" "}Real.
        </h2>
        <p className="ec-reveal mb-14 max-w-[500px] text-base leading-relaxed text-white/60">
          Every scan, every return, every peso — tracked, verified, and publicly shared. No greenwashing. Just proof.
        </p>

        <div ref={countersRef} className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {stats.map(stat => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="stat-card ec-card-dark group relative overflow-hidden rounded-[--radius-card] transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-x-0 top-0 h-[3px] transition-all duration-300 group-hover:h-[4px]" style={{ background: stat.color }} />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(ellipse at top,${stat.color}10 0%,transparent 60%)` }} />
                <div className="relative px-8 py-9">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: stat.color + "1a" }}>
                    <Icon size={20} style={{ color: stat.color }} strokeWidth={1.8} />
                  </div>
                  <div className="mb-1 font-extrabold tabular-nums leading-none" style={{ fontSize: "clamp(48px,6.5vw,80px)", color: stat.color }}>
                    <span className="counter-value" data-target={stat.value}>0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="my-3 h-px w-10" style={{ background: stat.color + "38" }} />
                  <p className="text-base font-bold text-white">{stat.label}</p>
                  <p className="mt-1 text-sm font-medium text-white/52">{stat.sublabel}</p>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/38">{stat.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="ec-reveal mt-9 text-center text-xs text-white/28">
          Figures updated monthly · Independently audited · Data available on request
        </p>
      </div>
    </section>
  )
}
