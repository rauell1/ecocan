"use client"

import { useRef, useEffect, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Download } from "lucide-react"

const ENTRY_CONTENT_DELAY = 0.15
const ENTRY_BRAND_DELAY = 0.4
const SCROLL_END = "+=100%"
const SCROLL_SCRUB = 1.5
const LENIS_INIT_DELAY = 500

interface HeroSectionProps {
  onTransitionComplete: () => void
}

export default function HeroSection({ onTransitionComplete }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLDivElement>(null)

  const initLenis = useCallback(() => {
    onTransitionComplete()
  }, [onTransitionComplete])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1.1, delay: ENTRY_CONTENT_DELAY, ease: "power3.out" }
        )
        gsap.fromTo(
          brandRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 1.0, delay: ENTRY_BRAND_DELAY, ease: "power3.out" }
        )
      } else {
        gsap.set([contentRef.current, brandRef.current], { opacity: 1, y: 0 })
      }
    }, heroRef)

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
          tl.fromTo(
            contentRef.current,
            { opacity: 1, y: 0 },
            { opacity: 0, y: -40, ease: "power1.in", duration: 0.4 },
            0
          )
          tl.fromTo(
            brandRef.current,
            { opacity: 1 },
            { opacity: 0, ease: "power1.in", duration: 0.35 },
            0.05
          )
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
      {/* Video */}
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
          className="h-full w-full object-cover brightness-[0.80]"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>

        {/* Vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.5) 0%, rgba(8,8,8,0.05) 45%, rgba(8,8,8,0.7) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(8,8,8,0.35) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-[3] flex flex-col">
        {/* Headline + CTA */}
        <div
          ref={contentRef}
          className="flex flex-1 flex-col items-center justify-center px-4 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Africa&apos;s Circular Bottle Ecosystem
          </p>
          <h2
            className="mb-8 font-bold text-white"
            style={{
              fontSize: "clamp(32px, 5.5vw, 64px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Return. Recycle.
            <br />
            Get Paid.
          </h2>
          <a href="/download" className="pill-btn pill-btn-white !px-9 !py-4 text-base">
            <Download size={18} />
            Download Free
          </a>
        </div>

        {/* Wordmark + scroll cue */}
        <div
          ref={brandRef}
          className="flex flex-col items-center gap-4 pb-[3vh]"
          style={{ minHeight: "22vh", justifyContent: "flex-end" }}
        >
          <h1
            className="pointer-events-none w-full max-w-[96vw] select-none text-center font-extrabold"
            style={{
              fontSize: "clamp(56px, 13vw, 168px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.85)",
            }}
            aria-label="ECOCAN"
          >
            ECOCAN
          </h1>

          <button
            onClick={() => scrollToSection("how-it-works")}
            className="glass-pill flex cursor-pointer items-center gap-3 px-6 py-2.5 text-sm text-white transition-all hover:bg-white/20"
            aria-label="Explore the site"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-pulse-dot rounded-full bg-primary"
            />
            Explore the Journey
          </button>
        </div>
      </div>
    </div>
  )
}
