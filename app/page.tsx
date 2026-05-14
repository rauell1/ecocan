"use client"

import { useRef, useState, useCallback, useEffect } from "react"

import HomeNavbar from "@/components/sections/home-navbar"
import HomeMobileMenu from "@/components/sections/home-mobile-menu"
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
  const [menuOpen, setMenuOpen] = useState(false)

  const gsapRef = useRef<(typeof import("gsap"))["gsap"] | null>(null)
  const lenisRef = useRef<import("lenis").default | null>(null)
  const lenisRafRef = useRef<((time: number) => void) | null>(null)

  const destroyLenis = useCallback(() => {
    if (gsapRef.current && lenisRafRef.current) {
      gsapRef.current.ticker.remove(lenisRafRef.current)
      lenisRafRef.current = null
    }
    if (lenisRef.current) {
      lenisRef.current.destroy()
      lenisRef.current = null
    }
  }, [])

  const handleTransitionComplete = useCallback(async () => {
    const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("lenis"),
    ])

    gsapRef.current = gsap

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gsap.registerPlugin(ScrollTrigger)
        destroyLenis()

        const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })

        lenis.on("scroll", () => {
          ScrollTrigger.update()
        })

        lenisRafRef.current = (time: number) => {
          lenis.raf(time * 1000)
        }
        gsap.ticker.add(lenisRafRef.current)
        gsap.ticker.lagSmoothing(0)
        lenisRef.current = lenis

        setTimeout(() => {
          ScrollTrigger.refresh()
        }, 200)
      })
    })
  }, [destroyLenis])

  useEffect(() => () => destroyLenis(), [destroyLenis])

  return (
    <div className="relative overflow-x-hidden">
      <HomeNavbar scrollEnabled={true} onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <HomeMobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} scrollEnabled={true} />

      {/* HeroSection — scrollEnabled and resetSignal removed (unused) */}
      <HeroSection onTransitionComplete={handleTransitionComplete} />

      <div id="problem">
        <ProblemSolutionSection />
      </div>

      <div id="how-it-works">
        <HowItWorksSection scrollEnabled={true} />
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

      <HomeFooter />
    </div>
  )
}
