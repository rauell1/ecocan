"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import NavigationBar from "@/components/shared/navbar/navbar"
import { useScroll } from "@/lib/useScroll"
import Footer from "@/components/shared/footer/footer"
import News from "./components/news"

export default function Blog() {
  const isScrolled = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text staggers in
      const els = heroRef.current?.querySelectorAll(".news-animate")
      if (els && els.length > 0) {
        gsap.fromTo(
          els,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, delay: 0.15, ease: "power3.out" }
        )
      }

      // News content section fades up
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.3, ease: "power2.out" }
        )
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <NavigationBar
        className={isScrolled ? "bg-white shadow-sm" : "bg-white/95 backdrop-blur-md"}
        logoSrc="/assets/images/ecocan-logo.svg"
        linkColor="text-eco-dark"
      />

      {/* ── Page hero ───────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="relative w-full overflow-hidden pt-[72px]"
        style={{ background: "#0f0f0f" }}
      >
        {/* Ambient green glow top-left */}
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-[480px] w-[480px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #22c55e, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-20 md:py-28">
          <p className="news-animate section-overline mb-4 text-primary">Latest from ECOCAN</p>
          <h1
            className="news-animate mb-4 font-bold text-white"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
          >
            News &amp; Stories
          </h1>
          <p className="news-animate max-w-[520px] text-lg leading-relaxed text-white/60">
            Updates on sustainability, partnerships, and impact across Africa&apos;s circular
            economy.
          </p>

          {/* Category pills */}
          <div className="news-animate mt-8 flex flex-wrap gap-3">
            {["Sustainability", "Partnerships", "Impact", "Policy"].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-white/70"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── News tabs + articles ─────────────────────────────────────────── */}
      <div style={{ background: "#0f0f0f" }}>
        <div ref={contentRef} className="mx-auto max-w-[1280px] px-6 py-12 pb-20">
          <News />
        </div>
      </div>

      <Footer />
    </>
  )
}
