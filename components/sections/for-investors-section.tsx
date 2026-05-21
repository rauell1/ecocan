"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const metrics = [
  { 
    value: "KES 8.2M", 
    label: "Distributed Liquidity", 
    desc: "Capital paid directly to informal collection partners, boosting local green economies." 
  },
  { 
    value: "54,200+", 
    label: "Verified Accounts", 
    desc: "Active consumers scanning, tracking, and completing the circular return loop." 
  },
  { 
    value: "3 States", 
    label: "Regional Markets", 
    desc: "Live, scalable circular logistics networks deploying across East Africa." 
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
          className="section-bg-img img-smooth-load h-full w-full object-cover opacity-50"
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
          className="ec-reveal mb-12 font-serif-luxury text-luxury-gradient"
          style={{ 
            fontSize: "clamp(2.5rem,5vw,4.5rem)", 
            lineHeight: "1.1", 
            letterSpacing: "-0.02em",
          }}
        >
          Build circular <br className="hidden md:inline" />
          <span className="font-sans font-light text-emerald-400">infrastructure with us.</span>
        </h2>

        <div className="ec-reveal grid gap-6 md:grid-cols-3 my-12">
          {metrics.map(({ value, label, desc }) => (
            <SpotlightCard 
              key={label} 
              className="bg-[#0c100c]/30 border-white/5 rounded-3xl p-8 hover:border-emerald-500/20 transition-all duration-300"
            >
              <p className="text-4xl font-light font-serif-luxury text-white group-hover:text-emerald-400 transition-colors duration-300" style={{ letterSpacing: "-0.02em" }}>{value}</p>
              <p className="mt-4 text-xs font-semibold text-emerald-400 uppercase tracking-[0.12em]">{label}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/50 font-normal">{desc}</p>
            </SpotlightCard>
          ))}
        </div>

        <div className="ec-reveal mt-12">
          <Link
            href="/investors"
            className="inline-flex rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/20"
          >
            Download Pitch Deck
          </Link>
        </div>
      </div>
    </section>
  )
}
