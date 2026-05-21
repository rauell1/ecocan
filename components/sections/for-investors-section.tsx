"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const metrics = [
  { value: "KES 8M", label: "paid to collectors" },
  { value: "50K+", label: "active users" },
  { value: "3", label: "markets live" },
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

      const bgImg = sectionRef.current?.querySelector(".section-bg-img") as HTMLElement | null
      if (bgImg) {
        gsap.fromTo(
          bgImg,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        )
      }
    }, sectionRef)
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      id="investors"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050705] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/investors_hero.png"
          alt="Futuristic financial growth chart"
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover opacity-50"
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: "linear-gradient(to bottom, rgba(5,7,5,0.7) 0%, rgba(5,7,5,0.92) 100%)" 
          }} 
        />
      </div>

      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)] max-w-5xl mx-auto">
        <h2
          className="ec-reveal mb-12 font-bold text-[#f5f5f5]"
          style={{ 
            fontSize: "clamp(2.5rem,5vw,4.5rem)", 
            lineHeight: 1.04, 
            letterSpacing: "-0.03em",
            textShadow: "0 0 45px rgba(16,185,129,0.15)"
          }}
        >
          Build circular <br className="hidden md:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent">infrastructure with us.</span>
        </h2>

        <div className="ec-reveal grid gap-6 md:grid-cols-3 my-12">
          {metrics.map(({ value, label }) => (
            <SpotlightCard 
              key={label} 
              className="p-8 shadow-xl"
            >
              <p className="text-4xl font-extrabold text-[#f5f5f5] group-hover:text-emerald-400 transition-colors duration-300" style={{ letterSpacing: "-0.02em" }}>{value}</p>
              <p className="mt-2 text-xs font-semibold text-white/50 uppercase tracking-wider">{label}</p>
            </SpotlightCard>
          ))}
        </div>

        <div className="ec-reveal mt-10">
          <Link
            href="/investors"
            className="rounded-full bg-[#f5f5f5] px-8 py-3.5 text-sm font-semibold text-black hover:bg-emerald-400 hover:text-black hover:shadow-lg hover:shadow-emerald-500/20 shadow-xl transition-all duration-300"
          >
            Download Pitch Deck
          </Link>
        </div>
      </div>
    </section>
  )
}
