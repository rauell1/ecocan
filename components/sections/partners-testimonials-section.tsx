"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const partnerLogos = ["NEMA", "KBL", "AMESA", "GREENPATH", "SAFARICOM"]

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
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050705] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/partners_hero.png"
          alt="High tech partnership network handshake"
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

      <div className="ec-reveal relative z-10 mx-[clamp(1.25rem,4vw,3rem)] rounded-2xl border border-white/10 bg-[#0c100c]/40 backdrop-blur-md px-8 py-6 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {partnerLogos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-extrabold uppercase tracking-[0.25em] text-emerald-400/60 hover:text-emerald-400 transition-colors duration-300"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      <div className="ec-reveal relative z-10 px-[clamp(1.25rem,4vw,3rem)] pt-14 max-w-4xl">
        <span className="text-6xl text-emerald-500/20 font-serif leading-none block select-none mb-2">“</span>
        <blockquote className="max-w-[32ch] text-2xl md:text-4xl font-semibold tracking-tight text-[#f5f5f5] leading-snug">
          ECOCAN made returns profitable for every street collector.
        </blockquote>
        <p className="mt-6 text-sm md:text-base font-semibold text-emerald-400">Grace M.</p>
        <p className="text-xs text-white/50">Retail Operations Lead</p>
      </div>
    </section>
  )
}
