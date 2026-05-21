"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

export default function CallToActionSection() {
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
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050705] py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/cta_hero.png"
          alt="Futuristic forest canopy blending nature and technology"
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

      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)] text-center max-w-4xl mx-auto">
        <h2
          className="ec-reveal mb-8 font-bold text-[#f5f5f5]"
          style={{ 
            fontSize: "clamp(2.5rem,5vw,5rem)", 
            lineHeight: 1.02, 
            letterSpacing: "-0.03em",
            textShadow: "0 0 50px rgba(16,185,129,0.3)"
          }}
        >
          Start earning <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent">from empties.</span>
        </h2>
        <div className="ec-reveal flex justify-center mt-10">
          <Link
            href="https://apps.apple.com/app/6502695438"
            target="_blank"
            className="rounded-full bg-[#f5f5f5] px-10 py-4 text-base font-bold text-black hover:bg-emerald-400 hover:text-black hover:shadow-lg hover:shadow-emerald-500/20 shadow-xl transition-all duration-300"
          >
            Download App
          </Link>
        </div>
      </div>
    </section>
  )
}
