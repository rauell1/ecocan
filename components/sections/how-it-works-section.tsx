"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const steps = [
  { step: "01", label: "Scan" },
  { step: "02", label: "Verify" },
  { step: "03", label: "Earn" },
]

export default function HowItWorksSection() {
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

      const desktopLine = sectionRef.current?.querySelector(".steps-line-desktop")
      if (desktopLine) {
        gsap.fromTo(
          desktopLine,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          }
        )
      }

      const mobileLine = sectionRef.current?.querySelector(".steps-line-mobile")
      if (mobileLine) {
        gsap.fromTo(
          mobileLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
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
    <section id="how-it-works" ref={sectionRef} className="section-py relative w-full overflow-hidden bg-[#050705]">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/how_it_works_hero.png"
          alt="AR scanning of cans"
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
      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)]">
        <h2
          className="ec-reveal mb-12 font-bold text-[#f5f5f5]"
          style={{ 
            fontSize: "clamp(2.5rem,4vw,4rem)", 
            letterSpacing: "-0.02em",
            textShadow: "0 0 40px rgba(16,185,129,0.15)"
          }}
        >
          How it works
        </h2>

        <div className="relative">
          <div className="steps-line-mobile absolute left-3 top-0 z-0 h-full w-px origin-top bg-white/10 md:hidden" />
          <div className="steps-line-desktop absolute left-0 top-[3.75rem] z-0 hidden h-px w-full origin-left bg-white/10 md:block" />

          <div className="grid gap-8 pl-7 md:grid-cols-3 md:gap-6 md:pl-0 md:pt-14">
          {steps.map(({ step, label }, idx) => (
              <div 
                key={step} 
                className={`ec-reveal relative z-10 p-8 rounded-2xl border border-white/10 bg-[#0c100c]/50 backdrop-blur-md shadow-2xl hover:border-emerald-500/30 transition-all duration-300 group ${idx < steps.length - 1 ? "md:mb-0" : ""}`}
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p
                    className="leading-none text-emerald-500/20 group-hover:text-emerald-400/40 transition-colors duration-300"
                    style={{
                      fontSize: "clamp(3.5rem,8vw,6.5rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {step}
                  </p>
                  <p className="mt-4 text-xl font-bold text-[#f5f5f5] tracking-tight">{label}</p>
                </div>
              </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
