"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import HomeNavbar from "@/components/sections/home-navbar"
import HomeFooter from "@/components/sections/home-footer"
import News from "./components/news"

export default function Blog() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lenisInst: any = null
    import("lenis").then(({ default: Lenis }) => {
      lenisInst = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
      function raf(time: number) { if (lenisInst) { lenisInst.raf(time); requestAnimationFrame(raf) } }
      requestAnimationFrame(raf)
    })

    const ctx = gsap.context(() => {
      const els = heroRef.current?.querySelectorAll(".news-animate")
      if (els && els.length > 0) {
        gsap.fromTo(els,
          { opacity: 0, y: 32, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, stagger: 0.13, delay: 0.15, ease: "power3.out" }
        )
      }
      if (contentRef.current) {
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.35, ease: "power2.out" }
        )
      }
    })
    return () => { ctx.revert(); if (lenisInst) lenisInst.destroy() }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#050705" }}>
      <HomeNavbar onMenuToggle={() => {}} />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px]" style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(34,197,94,0.07) 0%, transparent 65%)" }} />

      {/* ── Page hero ─────────────────────────────────────────────────── */}
      <div ref={heroRef} className="relative z-10 w-full pt-32 pb-16 px-[clamp(1.25rem,4vw,3rem)] max-w-[1280px] mx-auto">
        <p className="news-animate section-overline text-emerald-400">Latest from ECOCAN</p>
        <h1
          className="news-animate font-serif-luxury text-luxury-gradient text-luxury-glow mb-4"
          style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.03em" }}
        >
          News &amp; Stories.
        </h1>
        <p className="news-animate max-w-[520px] text-[16px] leading-relaxed text-white/60">
          Updates on sustainability, partnerships, and impact across Africa&apos;s circular economy.
        </p>

        {/* Category pills */}
        <div className="news-animate mt-8 flex flex-wrap gap-3">
          {["Sustainability", "Partnerships", "Impact", "Policy"].map((tag) => (
            <span
              key={tag}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-white/70 hover:text-white hover:border-emerald-500/30 transition-all duration-300 cursor-default"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── News tabs + articles ────────────────────────────────────────── */}
      <div className="relative z-10" style={{ background: "#050705" }}>
        <div ref={contentRef} className="mx-auto max-w-[1280px] px-[clamp(1.25rem,4vw,3rem)] pb-20">
          <News />
        </div>
      </div>

      <HomeFooter />
    </div>
  )
}

