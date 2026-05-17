"use client"

import { useRef, useEffect, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Download, ArrowRight } from "lucide-react"

const LENIS_INIT_DELAY = 500
const SCROLL_END = "+=100%"
const SCROLL_SCRUB = 1.5

interface HeroSectionProps {
  onTransitionComplete: () => void
}

export default function HeroSection({ onTransitionComplete }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null) // bottom-left block
  const cornerRef = useRef<HTMLDivElement>(null) // bottom-right label

  const initLenis = useCallback(() => onTransitionComplete(), [onTransitionComplete])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // ── Entry animations ───────────────────────────────────────────
    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        // Content block rises from below
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.1, delay: 0.3, ease: "power3.out" }
        )
        // Corner label fades in later
        gsap.fromTo(
          cornerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.9, delay: 0.85, ease: "power2.out" }
        )
      } else {
        gsap.set([contentRef.current, cornerRef.current], { opacity: 1 })
      }
    }, heroRef)

    // ── Scroll-out timeline ────────────────────────────────────────
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
          // Text fades up as you scroll
          tl.fromTo(
            contentRef.current,
            { opacity: 1, y: 0 },
            { opacity: 0, y: -50, ease: "power1.in", duration: 0.45 },
            0
          )
          tl.fromTo(
            cornerRef.current,
            { opacity: 1 },
            { opacity: 0, ease: "power1.in", duration: 0.3 },
            0
          )
          // Video shrinks into a rounded card
          tl.fromTo(
            videoWrapperRef.current,
            { scale: 1, borderRadius: "0px" },
            { scale: 0.78, borderRadius: "28px", ease: "power2.inOut", duration: 1 },
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

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <div
      ref={heroRef}
      id="hero"
      className="relative w-full bg-[#060a08]"
      style={{ height: "100dvh" }}
    >
      {/* ── Full-bleed video ──────────────────────────────────── */}
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
          className="h-full w-full object-cover brightness-[0.72]"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>

        {/* Bottom gradient — gives text a base to sit on */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(4,10,6,0.92) 0%, rgba(4,10,6,0.55) 30%, rgba(4,10,6,0.1) 65%, transparent 100%)",
          }}
        />
        {/* Left edge darkening */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(4,10,6,0.55) 0%, rgba(4,10,6,0.12) 45%, transparent 80%)",
          }}
        />
      </div>

      {/* ── Overlay content ──────────────────────────────────── */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between px-8 pb-10 pt-24 md:px-12 md:pb-14">
        {/* Spacer — top area is used by navbar */}
        <div />

        {/* Bottom row: left content + right label */}
        <div className="flex items-end justify-between gap-6">
          {/* LEFT: headline + CTAs */}
          <div ref={contentRef} className="max-w-[640px]">
            {/* Eyebrow */}
            <p
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Africa&apos;s Circular Bottle Ecosystem
            </p>

            {/* Main headline */}
            <h1
              className="mb-3 font-bold text-white"
              style={{
                fontSize: "clamp(40px, 6.5vw, 80px)",
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
              }}
            >
              Return. Recycle.
              <br />
              Make a difference.
            </h1>

            {/* Sub-headline */}
            <p
              className="mb-6 max-w-[480px] text-[15px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Recycle at any ECO-Station. Save the planet. Stop fake drinks. Get a bonus.
            </p>

            {/* CTAs */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <a
                href="/download"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-eco-dark transition-all hover:bg-white/90 active:scale-95"
              >
                <Download size={15} />
                Start Making a Difference
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-[14px] font-medium text-white transition-all hover:bg-white/10"
              >
                Partner with ECOCAN <ArrowRight size={14} />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-2">
              {["Early-stage funded", "Operational in Kenya", "GDPR Compliant"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full px-3 py-1 text-[11px] font-medium"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* "No machine" note */}
            <p className="mt-3 text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              No machine? No problem. Our counters work today.
            </p>
          </div>

          {/* RIGHT: scroll cue */}
          <div
            ref={cornerRef}
            className="hidden shrink-0 flex-col items-end gap-2 text-right md:flex"
          >
            <button
              onClick={() => scrollTo("how-it-works")}
              className="flex items-center gap-2 text-[12px] font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              <span
                className="h-2 w-2 animate-pulse-dot rounded-full"
                style={{ background: "rgba(74,222,128,0.8)" }}
              />
              Scroll to explore
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
