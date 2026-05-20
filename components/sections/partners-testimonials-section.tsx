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
        { opacity: 0, y: 28, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="ec-reveal bg-white/5 px-[clamp(1.25rem,4vw,3rem)] py-8">
        <div className="flex flex-wrap items-center gap-8 md:gap-12">
          {partnerLogos.map((logo) => (
            <span
              key={logo}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      <div className="ec-reveal px-[clamp(1.25rem,4vw,3rem)] pt-12">
        <blockquote className="max-w-[26ch] text-2xl italic text-[#f5f5f5] md:text-4xl">
          “ECOCAN made returns profitable for every street collector.”
        </blockquote>
        <p className="mt-3 text-sm text-white/50">Grace M., Retail Operations Lead</p>
      </div>
    </section>
  )
}
