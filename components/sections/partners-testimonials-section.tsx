"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Handshake, Quote, ArrowRight } from "lucide-react"

const partnersData = {
  Retailers: ["Jaza", "Naivas", "Quickmart", "Carrefour"],
  Producers: ["KWAL", "EABL", "Coca-Cola"],
  Logistics: ["Roam", "BasiGo"],
  Investors: ["Antler", "Saviu"],
}

const testimonials = [
  {
    quote: "I don't think about the money. I think about my children drinking safe water.",
    author: "Mama Jane",
    role: "Consumer, Nairobi",
  },
  {
    quote: "My customers feel proud to recycle here. The foot traffic is a bonus.",
    author: "Supermarket Owner",
    role: "Retail partner",
  },
  {
    quote: "Putting a bottle in the bin feels wrong now. Returning it feels right.",
    author: "Consumer",
    role: "ECOnsumer",
  },
]

export default function PartnersTestimonialsSection() {
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
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-[var(--landing-divider)] bg-transparent py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.02),transparent_50%)]" />

      {/* ── PARTNERS & BACKING ── */}
      <div className="mx-auto mb-24 max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="ec-reveal section-overline mb-3 justify-center text-emerald-400">
            PARTNERS & BACKING
          </p>
          <h2
            className="ec-reveal font-serif-luxury text-luxury-gradient"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Trusted by leaders across the value chain.
          </h2>
        </div>

        {/* Partners Grid Columns representing 3-4 rows */}
        <div className="ec-reveal mx-auto mb-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(partnersData).map(([category, names]) => (
            <div
              key={category}
              className="flex flex-col gap-4 rounded-2xl border border-[var(--landing-glass-border)] bg-[var(--landing-glass-bg)] p-6"
            >
              <span className="border-b border-[var(--landing-divider)] pb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                {category}
              </span>
              <div className="flex flex-col gap-2">
                {names.map((name) => (
                  <span
                    key={name}
                    className="py-1 text-sm font-semibold text-[var(--c-text-subtle)] transition-colors duration-300 hover:text-[var(--c-text)]"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="ec-reveal flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--landing-pill-border)] bg-[var(--landing-pill-bg)] px-8 py-3 text-xs font-bold uppercase tracking-wider text-[var(--landing-pill-text)] backdrop-blur-md transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            <Handshake size={14} />
            <span>Become a partner</span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="ec-reveal mx-auto my-16 h-[1px] max-w-5xl bg-[var(--landing-divider)] px-[clamp(1.25rem,4vw,3rem)]" />

      {/* ── TESTIMONIALS (Three Voices) ── */}
      <div className="mx-auto max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="ec-reveal section-overline mb-3 justify-center text-emerald-400">
            TESTIMONIALS
          </p>
          <h2
            className="ec-reveal font-serif-luxury text-luxury-gradient"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Real impact. Real pride.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((test, idx) => (
            <div key={idx} className="ec-reveal">
              <SpotlightCard className="flex h-full flex-col justify-between rounded-3xl border-[var(--landing-glass-border)] bg-[var(--landing-glass-bg)] p-8 transition-all duration-300 hover:border-emerald-500/20">
                <div>
                  <Quote size={32} className="mb-6 shrink-0 text-emerald-500/10" strokeWidth={1} />
                  <blockquote className="font-serif-luxury mb-6 text-base font-light italic leading-relaxed tracking-tight text-[var(--c-text)] md:text-lg">
                    “{test.quote}”
                  </blockquote>
                </div>

                <div className="border-t border-[var(--landing-divider)] pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {test.author}
                  </p>
                  <p className="font-serif-luxury mt-1 text-[11px] italic text-[var(--c-text-muted)]">
                    {test.role}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
