"use client"

import { useRef, useState, useCallback, useEffect } from "react"

import HomeNavbar from "@/components/sections/home-navbar"
import HomeMobileMenu from "@/components/sections/home-mobile-menu"
import HeroSection from "@/components/sections/hero-section"
import ProblemSolutionSection from "@/components/sections/problem-solution-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import EcommunityRolesSection from "@/components/sections/ecommunity-roles-section"
import EcocanModelSection from "@/components/sections/ecocan-model-section"
import ElectricMobilitySection from "@/components/sections/electric-mobility-section"
import AntiCounterfeitSection from "@/components/sections/anti-counterfeit-section"
import AppShowcaseSection from "@/components/sections/app-showcase-section"
import ForInvestorsSection from "@/components/sections/for-investors-section"
import SustainabilityImpactSection from "@/components/sections/sustainability-impact-section"
import PartnersTestimonialsSection from "@/components/sections/partners-testimonials-section"
import CallToActionSection from "@/components/sections/call-to-action-section"
import FAQSection from "@/components/sections/faq-section"
import HomeFooter from "@/components/sections/home-footer"

// FIX: gsap and Lenis are NOT imported at the top level.
// They are dynamically imported inside the callbacks that actually need them
// (handleTransitionComplete, resetToHero) so they are excluded from the
// critical-path JS bundle and don't block LCP.

const SCROLL_AWAY_THRESHOLD_PX = 120
const HERO_RESET_THRESHOLD_PX = 50

export default function Home() {
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroResetSignal, setHeroResetSignal] = useState(0)

  // Store gsap / lenis instances in refs so they survive re-renders without
  // being re-imported on every render.
  const gsapRef = useRef<(typeof import("gsap"))["gsap"] | null>(null)
  const lenisRef = useRef<import("lenis").default | null>(null)
  const lenisRafRef = useRef<((time: number) => void) | null>(null)
  const hasScrolledAwayFromTopRef = useRef(false)
  const isResettingToHeroRef = useRef(false)

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

  // Lock scroll until the hero transition completes
  useEffect(() => {
    if (!scrollEnabled) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [scrollEnabled])

  const handleTransitionComplete = useCallback(async () => {
    document.body.style.overflow = ""
    setScrollEnabled(true)
    hasScrolledAwayFromTopRef.current = false
    isResettingToHeroRef.current = false

    // Dynamic imports — loaded only once per session; subsequent calls return
    // the cached module so there is no extra network cost.
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

  const resetToHero = useCallback(() => {
    if (!scrollEnabled || isResettingToHeroRef.current) return
    isResettingToHeroRef.current = true

    destroyLenis()
    window.scrollTo({ top: 0, behavior: "auto" })

    // FIX: 50 ms delay — give the scroll event loop one full tick to settle
    // before React re-renders. Without this, Lenis can be destroyed mid-frame
    // while a raf callback is still referencing the old instance, causing a
    // TypeError in production.
    setTimeout(() => {
      setHeroResetSignal((prev) => prev + 1)
      setScrollEnabled(false)
    }, 50)
  }, [destroyLenis, scrollEnabled])

  // Reset to hero when user scrolls back to the very top
  useEffect(() => {
    if (!scrollEnabled) {
      isResettingToHeroRef.current = false
      return
    }

    const handleScroll = () => {
      if (isResettingToHeroRef.current) return
      const y = window.scrollY
      if (y > SCROLL_AWAY_THRESHOLD_PX) {
        hasScrolledAwayFromTopRef.current = true
        return
      }
      if (hasScrolledAwayFromTopRef.current && y <= HERO_RESET_THRESHOLD_PX) {
        resetToHero()
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [resetToHero, scrollEnabled])

  useEffect(() => () => destroyLenis(), [destroyLenis])

  return (
    <div className="relative overflow-x-clip">
      <HomeNavbar scrollEnabled={scrollEnabled} onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <HomeMobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        scrollEnabled={scrollEnabled}
      />

      <HeroSection
        scrollEnabled={scrollEnabled}
        onTransitionComplete={handleTransitionComplete}
        resetSignal={heroResetSignal}
      />

      <div id="problem">
        <ProblemSolutionSection />
      </div>

      <div id="how-it-works">
        <HowItWorksSection scrollEnabled={scrollEnabled} />
      </div>

      {/* ECOmmunity roles  -  who is this for? (key content from original site) */}
      <div id="ecommunity">
        <EcommunityRolesSection />
      </div>

      <div id="model">
        <EcocanModelSection scrollEnabled={scrollEnabled} />
      </div>

      <div id="mobility">
        <ElectricMobilitySection />
      </div>

      <div id="counterfeit">
        <AntiCounterfeitSection />
      </div>

      {/* App showcase  -  drive downloads with real screenshots */}
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
