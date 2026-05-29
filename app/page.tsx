"use client"

import { useEffect, useCallback } from "react"

import HomeNavbar from "@/components/sections/home-navbar"
import HeroSection from "@/components/sections/hero-section"
import HeroContentSection from "@/components/sections/hero-content-section"
import ProblemSolutionSection from "@/components/sections/problem-solution-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import EcommunityRolesSection from "@/components/sections/ecommunity-roles-section"
import AntiCounterfeitSection from "@/components/sections/anti-counterfeit-section"
import AppShowcaseSection from "@/components/sections/app-showcase-section"
import ForInvestorsSection from "@/components/sections/for-investors-section"
import SustainabilityImpactSection from "@/components/sections/sustainability-impact-section"
import PartnersTestimonialsSection from "@/components/sections/partners-testimonials-section"
import CallToActionSection from "@/components/sections/call-to-action-section"
import FAQSection from "@/components/sections/faq-section"
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
    <div className="relative overflow-x-hidden" style={{ background: "var(--c-bg)" }}>
      <HomeNavbar onMenuToggle={() => {}} />

      {/* Clean full-bleed video — no text overlay */}
      <HeroSection onTransitionComplete={handleHeroComplete} />

      {/* Headline + CTAs + trust badges */}
      <HeroContentSection />

      <main className="relative z-20 flex flex-col gap-0">
        {/* 1. The problem */}
        <div id="problem">
          <ProblemSolutionSection />
        </div>

        {/* 2. How it works */}
        <div id="how-it-works">
          <HowItWorksSection />
        </div>

        {/* 3. Who benefits */}
        <div id="ecommunity">
          <EcommunityRolesSection />
        </div>

        {/* 4. Anti-counterfeit trust */}
        <div id="counterfeit">
          <AntiCounterfeitSection />
        </div>

        {/* 5. The app */}
        <div id="app">
          <AppShowcaseSection />
        </div>

        {/* 6. Impact numbers */}
        <div id="impact">
          <SustainabilityImpactSection />
        </div>

        {/* 7. Investors */}
        <div id="investors">
          <ForInvestorsSection />
        </div>

        {/* 8. Real stories + partners */}
        <div id="stories">
          <PartnersTestimonialsSection />
        </div>

        {/* 9. CTA */}
        <div id="cta">
          <CallToActionSection />
        </div>

        {/* 10. FAQ */}
        <div id="faq">
          <FAQSection />
        </div>
      </main>

      <HomeFooter />
    </div>
  )
}
