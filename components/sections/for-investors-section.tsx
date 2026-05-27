"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ArrowRight, Download, PieChart } from "lucide-react"

const investorCards = [
  {
    icon: "📦",
    text: "Closed-loop system – Bottles → producers → bottles",
  },
  {
    icon: "🔋",
    text: "Electric logistics – Lower cost, scalable",
  },
  {
    icon: "🤝",
    text: "Strategic partnerships – Supermarkets, distributors, brands",
  },
  {
    icon: "🌍",
    text: "Regional scaling – Kenya first, then East Africa",
  },
]

export default function ForInvestorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const els = sectionRef.current!.querySelectorAll(".ec-reveal")
      gsap.fromTo(
        els,
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
      id="investors"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-white/5 bg-transparent py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/investors_hero.png"
          alt="Futuristic financial growth chart"
          aria-hidden="true"
          className="section-bg-img img-smooth-load h-full w-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "var(--c-bg)",
            opacity: 0.92,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mb-12 max-w-3xl">
          <p className="ec-reveal section-overline mb-3 text-emerald-400">FOR INVESTORS</p>
          <h2
            className="ec-reveal font-serif-luxury text-luxury-gradient"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            Invest in Africa’s First Bottle Ecosystem
          </h2>
        </div>

        {/* Four Cards with one line each */}
        <div className="ec-reveal my-10 grid gap-4 md:grid-cols-2">
          {investorCards.map((card, idx) => (
            <SpotlightCard
              key={idx}
              className="flex items-center gap-4 rounded-2xl border-white/5 bg-[#050705]/60 p-6 transition-all duration-300 hover:border-emerald-500/20"
              spotlightColor="rgba(16,185,129,0.05)"
            >
              <span className="flex-shrink-0 select-none text-3xl saturate-100 filter">
                {card.icon}
              </span>
              <p className="font-sans text-sm font-medium leading-relaxed text-white/80">
                {card.text}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* Funding Status and Call to Action */}
        <div className="ec-reveal mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-6 rounded-3xl border border-emerald-500/10 bg-emerald-500/5 p-8 shadow-[0_0_50px_rgba(16,185,129,0.03)] backdrop-blur-md md:flex-row">
          <div className="text-left">
            <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              Current Round status
            </span>
            <p className="font-serif-luxury text-lg font-light text-[#f5f5f5] md:text-xl">
              Early-stage funding secured. Operations live.{" "}
              <span className="font-sans font-semibold text-emerald-400">Ready for Series A.</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <Download size={14} />
              <span>Investor deck</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <PieChart size={14} />
              <span>Financials overview</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
