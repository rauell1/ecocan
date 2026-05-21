"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const stats = [
  { value: "< 5%", label: "recycled today" },
  { value: "KES 2", label: "paid per can" },
  { value: "100%", label: "traceable" },
]

export default function SustainabilityImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const targets = sectionRef.current!.querySelectorAll(".ec-reveal")
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

      if (statRef.current) {
        gsap.fromTo(
          statRef.current,
          { scale: 0.92, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          }
        )
      }

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
      id="impact"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050705] py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/sustainability_hero.png"
          alt="Green plant growing out of recycled aluminum"
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover opacity-50"
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: "linear-gradient(to bottom, rgba(5,7,5,0.6) 0%, rgba(5,7,5,0.92) 100%)" 
          }} 
        />
      </div>
      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)]">
        <p
          ref={statRef}
          className="ec-reveal text-center font-extrabold text-[#f5f5f5]"
          style={{
            fontSize: "clamp(4.5rem,16vw,12rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            textShadow: "0 0 60px rgba(16,185,129,0.35)",
          }}
        >
          12 billion
        </p>
        <p className="ec-reveal mt-5 text-center text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
          cans recycled annually in East Africa
        </p>

        <div className="ec-reveal mt-16 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {stats.map(({ value, label }) => (
            <SpotlightCard 
              key={label} 
              className="p-8 shadow-xl"
            >
              <p className="text-4xl font-extrabold text-[#f5f5f5] group-hover:text-emerald-400 transition-colors duration-300" style={{ letterSpacing: "-0.02em" }}>
                {value}
              </p>
              <p className="mt-2 text-xs font-semibold text-white/50 uppercase tracking-wider">{label}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
