"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

// Components
import HomeNavbar from "@/components/sections/home-navbar";
import HeroSection from "@/components/sections/hero-section";
import ProblemSolutionSection from "@/components/sections/problem-solution-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import EcommunityRolesSection from "@/components/sections/ecommunity-roles-section";
import AntiCounterfeitSection from "@/components/sections/anti-counterfeit-section";
import AppShowcaseSection from "@/components/sections/app-showcase-section";
import ForInvestorsSection from "@/components/sections/for-investors-section";
import SustainabilityImpactSection from "@/components/sections/sustainability-impact-section";
import PartnersTestimonialsSection from "@/components/sections/partners-testimonials-section";
import CallToActionSection from "@/components/sections/call-to-action-section";
import FAQSection from "@/components/sections/faq-section";
import HomeFooter from "@/components/sections/home-footer";

export default function Home() {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHeroComplete = useCallback(() => {}, []);

  const sections = [
    { id: "problem", label: "Problem" },
    { id: "how-it-works", label: "How It Works" },
    { id: "app", label: "App" },
    { id: "investors", label: "Investors" },
    { id: "faq", label: "FAQ" },
  ];

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      let current = "";
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          current = section.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="relative overflow-x-hidden bg-[#FBFBFD] min-h-screen text-gray-900 font-sans">
      
      {/* Navbar correctly placed here */}
      <HomeNavbar onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />

      <HeroSection onTransitionComplete={handleHeroComplete} />

      {/* Main Container - standardized */}
      <main className="relative z-20 bg-[#FBFBFD] flex flex-col gap-0">
        <div id="problem"><ProblemSolutionSection /></div>
        <div id="how-it-works"><HowItWorksSection /></div>
        <div id="ecommunity"><EcommunityRolesSection /></div>
        <div id="counterfeit"><AntiCounterfeitSection /></div>
        <div id="app"><AppShowcaseSection /></div>
        <div id="investors"><ForInvestorsSection /></div>
        <div id="impact"><SustainabilityImpactSection /></div>
        <div id="partners"><PartnersTestimonialsSection /></div>
        <div id="cta"><CallToActionSection /></div>
        <div id="faq"><FAQSection /></div>
      </main>

      <HomeFooter />
    </div>
  );
}