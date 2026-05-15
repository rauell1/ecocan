"use client"

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NavigationBar from "@/components/shared/navbar/navbar"
import { useScroll } from "@/lib/useScroll"
import SolutionsHome from "./solutions-home/solutions-home"

export default function SolutionsContent() {
  const isScrolled = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const els = heroRef.current?.querySelectorAll(".hero-animate")
      if (els && els.length > 0) {
        gsap.fromTo(
          els,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
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
    <>
      <NavigationBar
        logoSrc={
          isScrolled ? "/assets/images/ecocan-logo.svg" : "/assets/images/ecocan-logo-alt.svg"
        }
        className={isScrolled ? "bg-card" : "border-b-0 bg-transparent text-white"}
        linkColor={isScrolled ? "text-black" : "text-white"}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="relative flex min-h-[28rem] flex-col items-center justify-center bg-cover bg-center lg:h-[44rem]"
        style={{ backgroundImage: "url('/assets/images/solutions/solution-hero.svg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 text-center">
          <p className="hero-animate section-overline mb-6 text-white/70">Our offering</p>
          <h1
            className="hero-animate mb-6 font-bold text-white"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
          >
            Smart Sustainable Solutions
          </h1>
          <p className="hero-animate mx-auto max-w-[600px] text-lg leading-relaxed text-white/70 md:text-xl">
            We seamlessly connect the physical and digital worlds in a manner that is most
            sustainable to our planet, and to the life it nurtures.
          </p>
        </div>

        {/* Bottom fade into background colour */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="bg-background">
        <SolutionsHome />
      </div>
    </>
  )
}
