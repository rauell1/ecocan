"use client"

import { useEffect, useState, useCallback, useMemo } from "react"

// Sections
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
  const [active, setActive] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleHeroComplete = useCallback(() => {}, [])

  // Customer journey-oriented sections (Roam-style)
  const sections = useMemo(
    () => [
      { id: "problem", label: "Why It Matters" },
      { id: "how-it-works", label: "How It Works" },
      { id: "stories", label: "Real Stories" },
      { id: "impact", label: "Impact" },
      { id: "faq", label: "FAQ" },
    ],
    []
  )

  // Scroll spy logic (kept, just aligned to new ids above)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150
      let current = ""
      sections.forEach((section) => {
        const el = document.getElementById(section.id)
        if (el && el.offsetTop <= scrollPos) {
          current = section.id
        }
      })
      setActive(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[--c-page] font-sans text-[--c-text]">
      <HomeNavbar
        activeSection={active}
        sections={sections}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Hero stays media-forward, but copy/CTAs are already tuned for consumers */}
      <HeroSection onTransitionComplete={handleHeroComplete} />

      <main className="relative z-20 flex flex-col gap-0 bg-[--c-page]">
        {/* 1. Why recycling matters (Roam-style value framing) */}
        <div id="problem">
          <ProblemSolutionSection />
        </div>

        {/* 2. How Ecocan works for everyday recyclers */}
        <div id="how-it-works">
          <HowItWorksSection />
        </div>

        {/* 3. Roles in the e-community (kept, but effectively deepens the customer story) */}
        <div id="ecommunity">
          <EcommunityRolesSection />
        </div>

        {/* 4. Anti-counterfeit (trust + product integrity, similar to Roam’s quality emphasis) */}
        <div id="counterfeit">
          <AntiCounterfeitSection />
        </div>

        {/* 5. Rewards / app experience, still important for consumer motivation */}
        <div id="app">
          <AppShowcaseSection />
        </div>

        {/* 6. Impact + investors (combined in the scroll, like Roam’s awards + press + scale story) */}
        <div id="impact">
          <SustainabilityImpactSection />
          <ForInvestorsSection />
        </div>

        {/* 7. Real stories + partner trust strip (Roam’s rider quotes + logos pattern) */}
        <div id="stories">
          <PartnersTestimonialsSection />
        </div>

        {/* 8. Simple CTA, then FAQ – echoing Roam’s clear "Explore / Learn more" ending */}
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
