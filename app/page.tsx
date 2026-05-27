"use client"

import { useEffect, useState, useCallback, useMemo } from "react"

import HomeNavbar from "@/components/sections/home-navbar"
import HeroSection from "@/components/sections/hero-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import ElectricMobilitySection from "@/components/sections/electric-mobility-section"
import ForInvestorsSection from "@/components/sections/for-investors-section"
import PartnersTestimonialsSection from "@/components/sections/partners-testimonials-section"
import CallToActionSection from "@/components/sections/call-to-action-section"
import FAQSection from "@/components/sections/faq-section"
import HomeFooter from "@/components/sections/home-footer"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleHeroComplete = useCallback(() => {}, [])

  const sections = useMemo(
    () => [{ id: "how-it-works" }, { id: "electric-mobility" }, { id: "investors" }, { id: "faq" }],
    []
  )

  useEffect(() => {
    let lenisInst: any = null
    import("lenis").then(({ default: Lenis }) => {
      lenisInst = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
      if (lenisInst) {
        lenisInst.destroy()
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150
      sections.forEach((section) => {
        const el = document.getElementById(section.id)
        if (el && el.offsetTop <= scrollPos) {
          // active section tracking
        }
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--c-bg)" }}>
      <HomeNavbar onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />

      <HeroSection onTransitionComplete={handleHeroComplete} />

      <main className="relative z-20 flex flex-col gap-0">
        {/* 1. How it works */}
        <div id="how-it-works" className="ps-reveal">
          <HowItWorksSection />
        </div>

        {/* 2. The Electric Mobility Angle */}
        <div id="electric-mobility" className="ps-reveal">
          <ElectricMobilitySection />
        </div>

        {/* 3. For Investors */}
        <div id="investors" className="ps-reveal">
          <ForInvestorsSection />
        </div>

        {/* 4. Partners & Testimonials */}
        <div id="stories" className="ps-reveal">
          <PartnersTestimonialsSection />
        </div>

        {/* 5. CTA */}
        <div id="cta" className="ps-reveal">
          <CallToActionSection />
        </div>

        {/* 6. FAQ */}
        <div id="faq" className="ps-reveal">
          <FAQSection />
        </div>
      </main>

      <HomeFooter />
    </div>
  )
}
