"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavigationBar from "@/components/shared/navbar/navbar";
import { useScroll } from "@/lib/useScroll";
import Footer from "@/components/shared/footer/footer";
import News from "./components/news";

export default function Blog() {
  const isScrolled = useScroll();
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", delay: 0.1 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <NavigationBar
        className={isScrolled ? "bg-white shadow-sm" : "bg-white/95 backdrop-blur-md"}
        logoSrc="/assets/images/ecocan-logo.svg"
        linkColor="text-eco-dark"
      />

      {/* Page hero */}
      <div className="w-full pt-[72px]" style={{ background: "#F7F7F7" }}>
        <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-28" ref={headingRef}>
          <p className="section-overline mb-4">Latest from ECOCAN</p>
          <h1 className="section-headline text-eco-dark max-w-[640px]">
            News &amp; Stories
          </h1>
          <p className="section-body text-eco-dark mt-4 max-w-[560px]">
            Updates on sustainability, partnerships, and impact across Africa&apos;s circular economy.
          </p>
        </div>
      </div>

      {/* News tabs + articles - unchanged */}
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <News />
      </div>

      <Footer />
    </>
  );
}
