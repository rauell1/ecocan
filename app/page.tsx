"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import HomeNavbar from "@/components/sections/home-navbar";
import HomeMobileMenu from "@/components/sections/home-mobile-menu";
import HeroSection from "@/components/sections/hero-section";
import ProblemSolutionSection from "@/components/sections/problem-solution-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import EcocanModelSection from "@/components/sections/ecocan-model-section";
import ElectricMobilitySection from "@/components/sections/electric-mobility-section";
import AntiCounterfeitSection from "@/components/sections/anti-counterfeit-section";
import ForInvestorsSection from "@/components/sections/for-investors-section";
import SustainabilityImpactSection from "@/components/sections/sustainability-impact-section";
import PartnersTestimonialsSection from "@/components/sections/partners-testimonials-section";
import CallToActionSection from "@/components/sections/call-to-action-section";
import FAQSection from "@/components/sections/faq-section";
import HomeFooter from "@/components/sections/home-footer";

export default function Home() {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Lock scroll until the hero transition completes
  useEffect(() => {
    if (!scrollEnabled) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [scrollEnabled]);

  const handleTransitionComplete = useCallback(() => {
    document.body.style.overflow = "";
    setScrollEnabled(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

        lenis.on("scroll", () => {
          ScrollTrigger.update();
        });

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
        lenisRef.current = lenis;

        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);
      });
    });
  }, []);

  return (
    <div className="relative">
      <HomeNavbar scrollEnabled={scrollEnabled} onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <HomeMobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <HeroSection scrollEnabled={scrollEnabled} onTransitionComplete={handleTransitionComplete} />

      <div id="problem">
        <ProblemSolutionSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection scrollEnabled={scrollEnabled} />
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
  );
}
