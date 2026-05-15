"use client"

import { useRef, useEffect, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Download, ArrowRight } from "lucide-react"

// ── Animation constants ────────────────────────────────────────────────────
const ENTRY_CONTENT_DELAY = 0.15
const ENTRY_BRAND_DELAY   = 0.4
const SCROLL_END          = "+=100%"
const SCROLL_SCRUB        = 1.5
const LENIS_INIT_DELAY    = 500 // ms — waits for Lenis wiring in page.tsx

interface HeroSectionProps {
  onTransitionComplete: () => void
}

const STATS = [
  { value: "30%",  label: "of drinks in Africa are counterfeit" },
  { value: "80%",  label: "of plastic bottles are never recovered" },
  { value: "$1B+", label: "lost annually to packaging waste" },
]

export default function HeroSection({ onTransitionComplete }: HeroSectionProps) {
  const heroRef        = useRef<HTMLDivElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const contentRef     = useRef<HTMLDivElement>(null)   // headline + CTA
  const badgesRef      = useRef<HTMLDivElement>(null)   // BUY · RETURN · EARN + stats
  const brandRef       = useRef<HTMLDivElement>(null)   // ECOCAN wordmark

  const initLenis = useCallback(() => {
    onTransitionComplete()
  }, [onTransitionComplete])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // ── Entry animations ───────────────────────────────────────────────────
    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1.1, delay: ENTRY_CONTENT_DELAY, ease: "power3.out" }
        )
        gsap.fromTo(
          badgesRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.0, delay: ENTRY_CONTENT_DELAY + 0.15, ease: "power3.out" }
        )
        gsap.fromTo(
          brandRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 1.0, delay: ENTRY_BRAND_DELAY, ease: "power3.out" }
        )
      } else {
        gsap.set([contentRef.current, badgesRef.current, brandRef.current], { opacity: 1, y: 0 })
      }
    }, heroRef)

    // ── Scroll exit timeline ───────────────────────────────────────────────
    let scrollCtx: ReturnType<typeof gsap.context> | null = null
    const timer = setTimeout(() => {
      initLenis()

      scrollCtx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: SCROLL_END,
            pin: true,
            scrub: SCROLL_SCRUB,
            anticipatePin: 1,
          },
        })

        if (!reducedMotion) {
          // Headline + CTA — exits FIRST (0–40% of scroll)
          tl.fromTo(
            contentRef.current,
            { opacity: 1, y: 0 },
            { opacity: 0, y: -40, ease: "power1.in", duration: 0.4 },
            0
          )

          // BUY/RETURN/EARN + stats — stays readable until 55% of scroll
          tl.fromTo(
            badgesRef.current,
            { opacity: 1, y: 0 },
            { opacity: 0, y: -24, ease: "power1.in", duration: 0.35 },
            0.2   // ← starts fading at 20% into the scroll, not at 0%
          )

          // ECOCAN wordmark — fades with badges
          tl.fromTo(
            brandRef.current,
            { opacity: 1 },
            { opacity: 0, ease: "power1.in", duration: 0.35 },
            0.05
          )

          // Video shrinks + rounds corners over the full scroll
          tl.fromTo(
            videoWrapperRef.current,
            { scale: 1, borderRadius: "0px" },
            { scale: 0.78, borderRadius: "32px", ease: "power2.inOut", duration: 1 },
            0
          )
        }
      }, heroRef)

      ScrollTrigger.refresh()
    }, LENIS_INIT_DELAY)

    return () => {
      clearTimeout(timer)
      ctx.revert()
      scrollCtx?.revert()
    }
  }, [initLenis])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      ref={heroRef}
      id="hero"
      className="hero-root relative w-full bg-[#080808]"
      style={{ height: "100dvh" }}
    >
      {/* ── Video wrapper ────────────────────────────────────────────── */}
      <div
        ref={videoWrapperRef}
        className="absolute inset-0 overflow-hidden"
        style={{ willChange: "transform, border-radius" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/scan-verify.jpg"
          className="h-full w-full object-cover brightness-[0.85]"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>

        {/* Radial top-right vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 85% 10%, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0) 70%)",
          }}
        />
        {/* Top → bottom gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(16,16,16,0.45) 0%, rgba(16,16,16,0.08) 45%, rgba(16,16,16,0.75) 100%)",
          }}
        />
        {/* Left-side gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,10,10,0.40) 0%, rgba(10,10,10,0) 55%)",
          }}
        />
      </div>

      {/* ── Hero content ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-[3] flex flex-col">

        {/* BLOCK 1 — Headline + CTA (fades first) */}
        <div
          ref={contentRef}
          className="flex flex-1 flex-col items-center justify-center px-4 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
            Africa&apos;s Circular Bottle Ecosystem
          </p>
          <h2
            className="mb-4 font-bold text-white"
            style={{ fontSize: "clamp(28px, 5vw, 56px)", lineHeight: 1.1 }}
          >
            Return. Recycle.
            <br />
            Make a difference.
          </h2>
          <p className="mb-6 max-w-[560px] text-base font-normal text-white/80 md:text-xl">
            Recycle at any ECO-Station. Save the planet. Stop fake drinks. Get a bonus.
          </p>

          <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row">
            <a href="/download" className="pill-btn pill-btn-white">
              <Download size={18} />
              Download App
            </a>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="flex cursor-pointer items-center gap-2 border-none bg-transparent font-medium text-white hover:underline"
            >
              See how it works <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* BLOCK 2 — Stats + BUY · RETURN · EARN (fades LATER so they stay readable) */}
        <div
          ref={badgesRef}
          className="flex flex-col items-center gap-4 px-4 pb-4"
        >
          {/* Stat row */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {STATS.map(({ value, label }) => (
              <div key={value} className="flex flex-col items-center text-center">
                <span
                  className="font-extrabold text-white"
                  style={{ fontSize: "clamp(22px, 3.5vw, 36px)", lineHeight: 1.1, textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
                >
                  {value}
                </span>
                <span
                  className="mt-0.5 max-w-[180px] text-xs font-medium leading-snug text-white/85"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* BUY · RETURN · EARN pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {(["BUY", "RETURN", "EARN"] as const).map((word) => (
              <span
                key={word}
                className="px-5 py-2 text-sm font-bold tracking-[0.20em] text-white"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.38)",
                  borderRadius: "9999px",
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                {word}
              </span>
            ))}
          </div>

          {/* 1M+ bottles metric */}
          <p className="text-xs font-semibold tracking-[0.12em] text-white/80 uppercase">
            <span className="mr-1 text-white font-extrabold text-base">1M+</span>
            Bottles in our system
          </p>
        </div>

        {/* BLOCK 3 — ECOCAN wordmark + Explore CTA */}
        <div
          ref={brandRef}
          className="flex flex-col items-center justify-center gap-3 pb-[2vh] pt-1"
          style={{ minHeight: "100px", height: "22vh" }}
        >
          <h1
            className="pointer-events-none w-full max-w-[96vw] select-none text-center font-extrabold"
            style={{
              fontSize: "clamp(52px, 12vw, 160px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "transparent",
              WebkitTextStroke: "2px rgba(255,255,255,0.9)",
            }}
            aria-label="ECOCAN"
          >
            ECOCAN
          </h1>

          <button
            onClick={() => scrollToSection("how-it-works")}
            className="glass-pill flex cursor-pointer items-center gap-3 px-6 py-2.5 text-white transition-all hover:bg-white/20 active:scale-95"
            aria-label="Explore the site"
          >
            <span aria-hidden="true" className="h-2 w-2 animate-pulse-dot rounded-full bg-primary" />
            Explore the Journey
          </button>
        </div>
      </div>
    </div>
  )
}
