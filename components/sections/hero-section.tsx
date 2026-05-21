"use client"

import { useRef, useEffect, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

const LENIS_INIT_DELAY = 500

interface HeroSectionProps {
  onTransitionComplete: () => void
}

export default function HeroSection({ onTransitionComplete }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  /* ── Autoplay with interaction fallback ─────────────────── */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.playsInline = true

    const play = () => {
      video.play().catch(() => {
        /* silently ignore */
      })
    }

    play()

    const onInteraction = () => {
      play()
    }
    window.addEventListener("touchstart", onInteraction, { passive: true })
    window.addEventListener("mousedown", onInteraction, { passive: true })
    window.addEventListener("scroll", onInteraction, { passive: true, once: true })

    return () => {
      window.removeEventListener("touchstart", onInteraction)
      window.removeEventListener("mousedown", onInteraction)
      window.removeEventListener("scroll", onInteraction)
    }
  }, [])

  const initLenis = useCallback(() => onTransitionComplete(), [onTransitionComplete])

  /* ── GSAP animations ────────────────────────────────────── */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    /* entrance */
    const entranceCtx = gsap.context(() => {
      if (rm) {
        gsap.set([contentRef.current, indicatorRef.current], { opacity: 1 })
        return
      }
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, delay: 0.25, ease: "power3.out" }
      )
      gsap.fromTo(
        indicatorRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power2.out" }
      )
    }, heroRef)

    /* scroll-driven fade — video stays full-bleed, content fades out */
    let scrollCtx: ReturnType<typeof gsap.context> | null = null
    const timer = setTimeout(() => {
      initLenis()

      if (!rm) {
        scrollCtx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "+=80%",
              scrub: 1.2,
            },
          })
          tl.fromTo(
            contentRef.current,
            { opacity: 1, y: 0 },
            { opacity: 0, y: -50, ease: "power1.in", duration: 0.45 },
            0
          )
          tl.fromTo(
            indicatorRef.current,
            { opacity: 1 },
            { opacity: 0, ease: "power1.in", duration: 0.2 },
            0
          )
          tl.fromTo(
            videoWrapperRef.current,
            { opacity: 1 },
            { opacity: 0.6, ease: "power1.in", duration: 1 },
            0
          )
          tl.fromTo(
            ".hero-overlay-gradient",
            { opacity: 1 },
            { opacity: 0, ease: "power2.inOut", duration: 1 },
            0
          )
          tl.fromTo(
            ".hero-bottom-fade",
            { opacity: 1 },
            { opacity: 0, ease: "power2.inOut", duration: 1 },
            0
          )
        }, heroRef)
      }

      ScrollTrigger.refresh()
    }, LENIS_INIT_DELAY)

    return () => {
      clearTimeout(timer)
      entranceCtx.revert()
      scrollCtx?.revert()
    }
  }, [initLenis])

  return (
    <div
      ref={heroRef}
      id="hero"
      className="relative w-full"
      style={{ height: "100dvh", background: "#050705" }}
    >
      {/* ── Full-bleed video ──────────────────────────────────── */}
      <div ref={videoWrapperRef} className="absolute inset-0" style={{ willChange: "opacity" }}>
        <video
          ref={videoRef}
          src="/videos/hero-loop.mp4"
          poster="/images/scan-verify.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover brightness-[0.72]"
          style={{
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />

        {/* Gradient overlays */}
        <div
          aria-hidden
          className="hero-overlay-gradient absolute inset-0 z-[2]"
          style={{
            background: "linear-gradient(to bottom, rgba(5,7,5,0.2) 0%, rgba(5,7,5,0.82) 100%)",
          }}
        />
        <div
          aria-hidden
          className="hero-bottom-fade absolute inset-x-0 bottom-0 z-[3] h-[36%]"
          style={{ background: "linear-gradient(to bottom, transparent 60%, #050705 100%)" }}
        />
      </div>

      {/* ── Hero content ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div ref={contentRef} className="max-w-4xl px-6 text-center md:px-14">
          {/* Trust badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            {["Early-stage funded", "Operational in Kenya", "GDPR Compliant"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50 backdrop-blur-md"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1
            className="font-serif-luxury text-luxury-gradient text-luxury-glow mb-6"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
            }}
          >
            Return. Recycle. <br className="hidden md:inline" />
            Make a difference.
          </h1>

          <p className="mx-auto mb-3 max-w-[42ch] text-base leading-relaxed text-white/50">
            Recycle at any ECO-Station. Save the planet. Stop fake drinks. Get a bonus.
          </p>

          <p className="mb-9 text-xs tracking-wide text-emerald-400/60">
            No machine? No problem. Our counters work today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/download"
              className="inline-flex items-center rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-400"
            >
              Start Making a Difference
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              Partner with ECOCAN
            </Link>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <div
        ref={indicatorRef}
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/40"
      >
        <ArrowDown size={20} strokeWidth={1.75} />
      </div>
    </div>
  )
}
