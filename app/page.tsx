"use client"

import { useCallback } from "react"
import dynamic from "next/dynamic"

// Components
import HomeNavbar from "@/components/sections/home-navbar"
import HeroSection from "@/components/sections/hero-section"

const ProblemSolutionSection = dynamic(
  () => import("@/components/sections/problem-solution-section"),
  { loading: () => null, ssr: false }
)
const HowItWorksSection = dynamic(() => import("@/components/sections/how-it-works-section"), {
  loading: () => null,
  ssr: false,
})
const EcommunityRolesSection = dynamic(
  () => import("@/components/sections/ecommunity-roles-section"),
  { loading: () => null, ssr: false }
)
const AntiCounterfeitSection = dynamic(
  () => import("@/components/sections/anti-counterfeit-section"),
  { loading: () => null, ssr: false }
)
const AppShowcaseSection = dynamic(() => import("@/components/sections/app-showcase-section"), {
  loading: () => null,
  ssr: false,
})
const ForInvestorsSection = dynamic(() => import("@/components/sections/for-investors-section"), {
  loading: () => null,
  ssr: false,
})
const SustainabilityImpactSection = dynamic(
  () => import("@/components/sections/sustainability-impact-section"),
  { loading: () => null, ssr: false }
)
const PartnersTestimonialsSection = dynamic(
  () => import("@/components/sections/partners-testimonials-section"),
  { loading: () => null, ssr: false }
)
const CallToActionSection = dynamic(() => import("@/components/sections/call-to-action-section"), {
  loading: () => null,
  ssr: false,
})
const FAQSection = dynamic(() => import("@/components/sections/faq-section"), {
  loading: () => null,
  ssr: false,
})
const HomeFooter = dynamic(() => import("@/components/sections/home-footer"), {
  loading: () => null,
  ssr: false,
})

export default function Home() {
  const handleHeroComplete = useCallback(() => {}, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FBFBFD] font-sans text-gray-900">
      {/* Navbar correctly placed here */}
      <HomeNavbar />

      <HeroSection onTransitionComplete={handleHeroComplete} />

      {/* Main Container - standardized */}
      <main className="relative z-20 flex flex-col gap-0 bg-[#FBFBFD]">
        <div id="problem">
          <ProblemSolutionSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="ecommunity">
          <EcommunityRolesSection />
        </div>
        <div id="counterfeit">
          <AntiCounterfeitSection />
        </div>
        <div id="app">
          <AppShowcaseSection />
        </div>
        <div id="investors">
          <ForInvestorsSection />
        </div>
        <div id="impact">
          <SustainabilityImpactSection />
        </div>
        <div id="partners">
          <PartnersTestimonialsSection />
        </div>
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
