"use client"

import { useRef, useEffect } from "react"
import { Store, Factory, Bike } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const modelColumns = [
  {
    title: "Retailers",
    sub: "Supermarket checkout like Jaza",
    desc: "Collection points. More foot traffic. Happier customers.",
    icon: Store,
    badge: "50+ Stations",
  },
  {
    title: "Producers",
    sub: "Factory conveyor belt",
    desc: "Packaging recovered. Counterfeits stopped. Brand protected.",
    icon: Factory,
    badge: "Closed-loop Recovery",
  },
  {
    title: "Logistics",
    sub: "Electric bike fleet - Roam Air",
    desc: "Last-mile collection. Lower costs. (Just one step in the loop)",
    icon: Bike,
    badge: "Zero Emission",
  },
]

export default function EcocanModelSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const targets = sectionRef.current!.querySelectorAll(".ec-reveal")
      if (targets.length === 0) return
      gsap.fromTo(
        targets,
        { opacity: 0, y: 36, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="ecocan-model"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-t border-white/5 bg-[#0c100c]/30 py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="ec-reveal section-overline mb-3 justify-center text-emerald-400">
            THE ECOCAN MODEL
          </p>
          <h2
            className="ec-reveal font-serif-luxury text-luxury-gradient"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            We don&apos;t do this alone. That&apos;s the point.
          </h2>
        </div>

        <div className="relative z-10 mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {modelColumns.map((col) => (
            <div key={col.title} className="ec-reveal">
              <SpotlightCard className="flex h-full flex-col justify-between rounded-3xl border-white/5 bg-[#050705]/40 p-8 transition-all duration-300 hover:border-emerald-500/20">
                <div>
                  <div className="mb-6 flex items-start justify-between">
                    <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-3 text-emerald-400">
                      <col.icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="rounded-full border border-emerald-500/10 bg-emerald-500/5 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-emerald-400">
                      {col.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury mb-1 text-2xl font-normal tracking-tight text-white">
                    {col.title}
                  </h3>
                  <p className="mb-4 text-xs font-semibold tracking-wide text-emerald-400/80">
                    {col.sub}
                  </p>
                  <p className="text-[13px] font-normal leading-relaxed text-white/55">
                    {col.desc}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Small text below all three columns */}
        <div className="ec-reveal mt-12 text-center">
          <p className="font-mono text-xs tracking-wide text-white/45">
            ECOCAN integrates into existing supply chains.
          </p>
        </div>
      </div>
    </section>
  )
}
