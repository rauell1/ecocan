"use client"

import { useEffect, useState, useCallback, useMemo } from "react"

import HomeNavbar from "@/components/sections/home-navbar"
import HeroSection from "@/components/sections/hero-section"
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleHeroComplete = useCallback(() => {}, [])

  const sections = useMemo(() => [
    { id: "problem" },
    { id: "how-it-works" },
    { id: "ecommunity" },
    { id: "impact" },
    { id: "stories" },
    { id: "cta" },
    { id: "faq" },
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150
      sections.forEach((section) => {
        const el = document.getElementById(section.id)
        if (el && el.offsetTop <= scrollPos) {
          // active section tracking — extend if needed
        }
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#0C0E0C" }}>
      <HomeNavbar onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />

      <HeroSection onTransitionComplete={handleHeroComplete} />

      <main className="relative z-20 flex flex-col gap-0">

        {/* 1. The problem */}
        <div id="problem" className="ps-reveal">
          <ProblemSolutionSection />
        </div>

        {/* 2. How it works */}
        <div id="how-it-works" className="ps-reveal">
          <HowItWorksSection />
        </div>

        {/* 3. Who benefits */}
        <div id="ecommunity" className="ps-reveal">
          <EcommunityRolesSection />
        </div>

        {/* 4. Anti-counterfeit trust */}
        <div id="counterfeit" className="ps-reveal">
          <AntiCounterfeitSection />
        </div>

        {/* 5. The app */}
        <div id="app" className="ps-reveal">
          <AppShowcaseSection />
        </div>

        {/* 6. Impact numbers */}
        <div id="impact" className="ps-reveal">
          <SustainabilityImpactSection />
        </div>

        {/* 7. Investors */}
        <div id="investors" className="ps-reveal">
          <ForInvestorsSection />
        </div>

        {/* 8. Real stories + partners */}
        <div id="stories" className="ps-reveal">
          <PartnersTestimonialsSection />
        </div>

        {/* 9. CTA */}
        <div id="cta" className="ps-reveal">
          <CallToActionSection />
        </div>

        {/* 10. FAQ */}
        <div id="faq" className="ps-reveal">
          <FAQSection />
        </div>

      </main>

      <HomeFooter />
    </div>
  )
}
