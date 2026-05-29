"use client"

import { useEffect, useCallback } from "react"

import HomeNavbar from "@/components/sections/home-navbar"
import HeroSection from "@/components/sections/hero-section"
import HeroContentSection from "@/components/sections/hero-content-section"
import HomeFooter from "@/components/sections/home-footer"

export default function Home() {
  const handleHeroComplete = useCallback(() => {}, [])

  /* ── Lenis smooth scroll ─────────────────────────────────── */
  useEffect(() => {
    let lenisInst: any = null
    import("lenis").then(({ default: Lenis }) => {
      lenisInst = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      })

      function raf(time: number) {
        if (lenisInst) {
          lenisInst.raf(time)
          requestAnimationFrame(raf)
        }
      }

      requestAnimationFrame(raf)
      ;(window as any).lenis = lenisInst
    })

    return () => {
      if (lenisInst) lenisInst.destroy()
    }
  }, [])

  return (
    <div className="relative overflow-x-hidden" style={{ background: "#0C0E0C" }}>
      <HomeNavbar onMenuToggle={() => {}} />

      {/* Clean full-bleed video — no text overlay */}
      <HeroSection onTransitionComplete={handleHeroComplete} />

      {/* Headline + CTAs + trust badges */}
      <HeroContentSection />

      <HomeFooter />
    </div>
  )
}
