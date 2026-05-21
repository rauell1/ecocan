"use client"

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HomeNavbar from "@/components/sections/home-navbar"
import SolutionsHome from "./solutions-home/solutions-home"

export default function SolutionsContent() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const els = heroRef.current?.querySelectorAll(".hero-animate")
      if (els && els.length > 0) {
        gsap.fromTo(
          els,
          { opacity: 0, y: 36, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.95,
            stagger: 0.14,
            delay: 0.2,
            ease: "power3.out",
          }
        )
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#050705" }}>
      <HomeNavbar onMenuToggle={() => {}} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="relative flex min-h-[32rem] flex-col items-center justify-center overflow-hidden bg-cover bg-center lg:h-[48rem]"
        style={{ backgroundImage: "url('/assets/images/solutions/solution-hero.svg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,7,5,0.55) 0%, rgba(5,7,5,0.9) 100%)" }} />

        {/* Ambient emerald glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(34,197,94,0.08) 0%, transparent 60%)" }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-[clamp(1.25rem,4vw,3rem)] text-center">
          <p className="hero-animate section-overline text-emerald-400 mb-6 justify-center">Our offering</p>
          <h1
            className="hero-animate font-serif-luxury text-luxury-gradient text-luxury-glow mb-6"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.03em" }}
          >
            Smart Sustainable Solutions.
          </h1>
          <p className="hero-animate mx-auto max-w-[560px] text-[16px] leading-relaxed text-white/60">
            We seamlessly connect the physical and digital worlds in a manner that is most sustainable to our planet, and to the life it nurtures.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to bottom, transparent, #050705)" }} />
      </div>

      <div style={{ background: "#050705" }}>
        <SolutionsHome />
      </div>
    </div>
  )
}

