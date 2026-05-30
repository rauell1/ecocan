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
      lenisInst = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })
      function raf(time: number) {
        if (lenisInst) {
          lenisInst.raf(time)
          requestAnimationFrame(raf)
        }
      }
      requestAnimationFrame(raf)
    })

    const ctx = gsap.context(() => {
      const els = heroRef.current?.querySelectorAll(".news-animate")
      if (els && els.length > 0) {
        gsap.fromTo(
          els,
          { opacity: 0, y: 32, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.0,
            stagger: 0.13,
            delay: 0.15,
            ease: "power3.out",
          }
        )
      }
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.35, ease: "power2.out" }
        )
      }
    })
    return () => {
      ctx.revert()
      if (lenisInst) lenisInst.destroy()
    }
  }, [])

  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-[var(--c-text)]"
      style={{ background: "var(--c-bg)" }}
    >
      <HomeNavbar onMenuToggle={() => {}} />

      {/* Grid Pattern Ambient Overlay */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[800px] opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(ellipse at top, var(--c-green) 0%, transparent 60%),
            linear-gradient(rgba(13,18,13,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,18,13,0.1) 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
      />

      {/* ── Page hero ─────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="relative z-10 mx-auto w-full max-w-[1280px] px-[clamp(1.25rem,4vw,3rem)] pb-16 pt-32"
      >
        <p className="news-animate section-overline text-[var(--c-green)]">Latest from ECOCAN</p>
        <h1
          className="news-animate font-serif-luxury text-luxury-gradient text-luxury-glow mb-4"
          style={{
            fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
          }}
        >
          News &amp; Stories.
        </h1>
        <p className="news-animate max-w-[520px] text-[16px] leading-relaxed text-[var(--c-text-muted)]">
          Updates on sustainability, partnerships, and impact across Africa&apos;s circular economy.
        </p>

        {/* Category pills */}
        <div className="news-animate mt-8 flex flex-wrap gap-3">
          {["Sustainability", "Partnerships", "Impact", "Policy"].map((tag) => (
            <span
              key={tag}
              className="hover:border-[var(--c-green)]/35 cursor-default rounded-full border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-1.5 text-sm font-medium text-[var(--c-text-muted)] transition-all duration-300 hover:text-[var(--c-text)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── News tabs + articles ────────────────────────────────────────── */}
      <div className="relative z-10" style={{ background: "var(--c-bg)" }}>
        <div ref={contentRef} className="mx-auto max-w-[1280px] px-[clamp(1.25rem,4vw,3rem)] pb-20">
          <News />
        </div>
      </div>

      <HomeFooter />
    </div>
  )
}
