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

  // Section IDs used for scroll-spy (internal only — navbar has its own links)
  const sections = useMemo(
    () => [
      { id: "problem" },
      { id: "how-it-works" },
      { id: "stories" },
      { id: "impact" },
      { id: "faq" },
    ],
    []
  )

  // Scroll-spy to track active section (could drive future nav highlighting)
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
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Navbar only accepts onMenuToggle */}
      <HomeNavbar onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />

      <HeroSection onTransitionComplete={handleHeroComplete} />

      <main className="relative z-20 flex flex-col gap-0">
        {/* 1. Why recycling matters */}
        <div id="problem">
          <ProblemSolutionSection />
        </div>

        {/* 2. How Ecocan works */}
        <div id="how-it-works">
          <HowItWorksSection />
        </div>

        {/* 3. Community roles */}
        <div id="ecommunity">
          <EcommunityRolesSection />
        </div>

        {/* 4. Trust — anti-counterfeit */}
        <div id="counterfeit">
          <AntiCounterfeitSection />
        </div>

        {/* 5. Rewards / app */}
        <div id="app">
          <AppShowcaseSection />
        </div>

        {/* 6. Impact + investors */}
        <div id="impact">
          <SustainabilityImpactSection />
          <ForInvestorsSection />
        </div>

        {/* 7. Real stories + partners */}
        <div id="stories">
          <PartnersTestimonialsSection />
        </div>

        {/* 8. CTA + FAQ */}
        <div id="cta">
          <CallToActionSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
      </main>

      <HomeFooter />
    </div>
  )
}
