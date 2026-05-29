"use client"

import { useRef, useEffect } from "react"
import { Bike, Shield, TrendingDown, ArrowRight } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export default function ElectricMobilitySection() {
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
      id="electric-mobility"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-transparent py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.02),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-[clamp(1.25rem,4vw,3rem)]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column: Bike image / visual card + Floating badges */}
          <div className="ec-reveal relative flex items-center justify-center p-6 lg:p-0">
            {/* Visual background wrapper */}
            <div className="group relative flex aspect-square w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-[32px] border border-[var(--c-border)] bg-[var(--c-surface)] p-8 backdrop-blur-md">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Bike Icon Container */}
              <div className="relative mb-6 rounded-full border border-emerald-500/10 bg-emerald-500/5 p-8 text-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.1)] transition-transform duration-500 group-hover:scale-105">
                <Bike size={64} strokeWidth={1} />
              </div>

              <p className="text-[var(--c-text-muted)]/70 max-w-[20ch] text-center text-xs uppercase tracking-[0.2em]">
                ECOCAN last-mile collection electric logistics
              </p>

              {/* Floating Stat Badge 1 */}
              <div
                className="absolute left-3 top-3 flex items-center gap-3 rounded-2xl border border-emerald-500/10 px-4 py-2.5 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 sm:left-6 md:-left-4"
                style={{ background: "var(--c-dark)" }}
              >
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                    0 emissions
                  </p>
                  <p className="text-[var(--c-text-muted)]/70 text-[9px]">per bottle collected</p>
                </div>
              </div>

              {/* Floating Stat Badge 2 */}
              <div
                className="absolute bottom-8 right-3 flex items-center gap-3 rounded-2xl border border-emerald-500/10 px-4 py-2.5 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 sm:right-0 md:-right-4"
                style={{ background: "var(--c-dark)" }}
              >
                <TrendingDown size={14} className="text-emerald-400" />
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                    60% lower cost
                  </p>
                  <p className="text-[var(--c-text-muted)]/70 text-[9px]">vs ICE vehicle</p>
                </div>
              </div>

              {/* Floating Stat Badge 3 */}
              <div
                className="absolute bottom-2 left-4 flex items-center gap-3 rounded-2xl border border-emerald-500/10 px-4 py-2.5 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 sm:left-10 md:-bottom-4"
                style={{ background: "var(--c-dark)" }}
              >
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                    500+ bikes
                  </p>
                  <p className="text-[var(--c-text-muted)]/70 text-[9px]">scaling by 2030</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text + Stats badges */}
          <div className="flex flex-col gap-6 text-left">
            <p className="ec-reveal section-overline text-emerald-400">LOGISTICS INTEGRATION</p>

            <h2
              className="ec-reveal font-serif-luxury text-luxury-gradient"
              style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", lineHeight: 1.05 }}
            >
              One step in the loop:
              <br />
              <span className="font-sans font-light text-emerald-400">electric bikes.</span>
            </h2>

            <p className="ec-reveal max-w-md text-[15px] leading-relaxed text-[var(--c-text-muted)]">
              We use electric bikes for last-mile collection. Lower cost. Zero emissions.
            </p>

            {/* Stat badges */}
            <div className="ec-reveal mt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/10 bg-emerald-500/5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <TrendingDown size={14} />
                <span>60% lower cost vs diesel</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/10 bg-emerald-500/5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <Shield size={14} />
                <span>Zero emissions</span>
              </div>
            </div>

            <div className="ec-reveal mt-6">
              <a
                href="#impact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--c-text)] transition-colors duration-300 hover:text-emerald-400"
              >
                <span>Our sustainability impact</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
