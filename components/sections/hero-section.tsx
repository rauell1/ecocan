"use client"

import { useRef, useEffect, useCallback, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Smartphone, Handshake, Leaf, MapPin, Lock } from "lucide-react"

const LENIS_INIT_DELAY = 500
const SCROLL_SCRUB = 1.2

interface HeroSectionProps {
  onTransitionComplete: () => void
}

export default function HeroSection({ onTransitionComplete }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoWrapRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [videoSrc, setVideoSrc] = useState("")
  const [videoPlaying, setVideoPlaying] = useState(false)

  const handleVideoPlay = () => {
    if (videoRef.current && videoRef.current.currentTime > 0.15) {
      setVideoPlaying(true)
    }
  }

  // 1. Determine correct responsive video source on mount to prevent Next.js hydration issues
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    setVideoSrc(isMobile ? "/videos/circular-loop.mp4" : "/videos/hero-loop.mp4")
  }, [])

  // 2. Setup video playback constraints and robust interaction fallback listeners
  useEffect(() => {
    const video = videoRef.current
    if (!video || !videoSrc) return

    video.muted = true
    video.playsInline = true
    video.defaultMuted = true

    const attemptPlay = async () => {
      try {
        await video.play()
        removeInteractionListeners()
      } catch (err) {
        console.warn("Autoplay blocked initially, waiting for user interaction:", err)
      }
    }

    const handleInteraction = () => {
      attemptPlay()
    }

    const removeInteractionListeners = () => {
      window.removeEventListener("touchstart", handleInteraction)
      window.removeEventListener("mousedown", handleInteraction)
      window.removeEventListener("keydown", handleInteraction)
      window.removeEventListener("scroll", handleInteraction)
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const saveData =
      typeof navigator !== "undefined" && "connection" in navigator
        ? Boolean(
            (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
          )
        : false

    if (!saveData) {
      video.preload = "auto"
    }

    if (!prefersReducedMotion) {
      attemptPlay()

      // Add fallbacks to automatically trigger play as soon as the user touches, clicks, or scrolls
      window.addEventListener("touchstart", handleInteraction, { passive: true })
      window.addEventListener("mousedown", handleInteraction, { passive: true })
      window.addEventListener("keydown", handleInteraction, { passive: true })
      window.addEventListener("scroll", handleInteraction, { passive: true })
    }

    return () => {
      removeInteractionListeners()
    }
  }, [videoSrc])

  const initLenis = useCallback(() => onTransitionComplete(), [onTransitionComplete])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const entranceCtx = gsap.context(() => {
      if (!rm) {
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
      } else {
        gsap.set([contentRef.current, indicatorRef.current], { opacity: 1 })
      }
    }, heroRef)

    let revealCtx: ReturnType<typeof gsap.context> | null = null

    const timer = setTimeout(() => {
      initLenis()

      if (!rm) {
        revealCtx = gsap.context(() => {
          gsap.utils.toArray<Element>(".ps-reveal").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 44 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  once: true,
                },
              }
            )
          })
        })
      }

      ScrollTrigger.refresh()
    }, LENIS_INIT_DELAY)

    return () => {
      clearTimeout(timer)
      entranceCtx.revert()
      revealCtx?.revert()
    }
  }, [initLenis])

  return (
    <div
      ref={heroRef}
      id="hero"
      className="relative min-h-[100svh] w-full"
      style={{ height: "100dvh", background: "var(--c-bg)" }}
    >
      <div
        ref={videoWrapRef}
        className="absolute inset-0 overflow-hidden"
        style={{
          willChange: "transform, border-radius, filter",
          filter: "brightness(0.9)",
          background: "var(--c-bg)",
        }}
      >
        {/* High-fidelity fallback poster image that stays underneath/behind the video element */}
        <img
          src="/images/scan-verify.jpg"
          alt="Ecocan App Scan and Verify Preview"
          className="absolute inset-0 h-full w-full object-cover object-[center_32%] transition-opacity duration-700 sm:object-center"
          style={{
            zIndex: 0,
            opacity: videoPlaying ? 0 : 1,
          }}
        />

        <video
          ref={videoRef}
          src={videoSrc || undefined}
          poster="/images/scan-verify.jpg"
          autoPlay
          loop
          muted
          playsInline
          onTimeUpdate={handleVideoPlay}
          className="absolute inset-0 h-full w-full object-cover object-[center_32%] transition-opacity duration-700 sm:object-center"
          style={{
            zIndex: 1,
            opacity: videoPlaying ? 1 : 0,
          }}
        />
        <div aria-hidden className="hero-overlay-gradient absolute inset-0 z-[2]" />
        <div aria-hidden className="hero-bottom-fade absolute inset-x-0 bottom-0 z-[3] h-[36%]" />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div
          ref={contentRef}
          className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-14"
        >
          <h1
            className="font-serif-luxury text-luxury-glow mb-6 text-white"
            style={{
              fontSize: "clamp(2.3rem, 7.2vw, 5.2rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
            }}
          >
            Return. Recycle.{" "}
            <span className="font-serif-luxury font-light text-emerald-400">
              Make a difference.
            </span>
          </h1>

          <p className="mx-auto mb-3 max-w-[40ch] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--c-text-muted)] sm:text-[11px]">
            Africa&apos;s circular bottle ecosystem.
          </p>
          <div className="mx-auto mb-10 h-[2px] w-12 rounded-full bg-emerald-500" />

          {/* Action CTAs */}
          <div className="mb-10 flex w-full max-w-2xl flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:px-0">
            {/* Left Button */}
            <a
              href="/download"
              className="inline-flex h-[64px] w-full items-center justify-between rounded-xl bg-emerald-600 px-5 py-3 text-left text-white shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-500 sm:w-auto sm:min-w-[260px]"
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 rounded-lg bg-emerald-700/50 p-2 text-white">
                  <Smartphone size={18} />
                </span>
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase leading-none tracking-wider">
                    DOWNLOAD APP
                  </p>
                  <p className="text-[10px] font-medium leading-none text-emerald-100">
                    Start Making a Difference
                  </p>
                </div>
              </div>
              <svg
                className="ml-4 h-4 w-4 shrink-0 text-emerald-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Right Button */}
            <a
              href="/contact"
              className="inline-flex h-[64px] w-full items-center justify-between rounded-xl border border-emerald-500/30 bg-[rgba(255,255,255,0.02)] px-5 py-3 text-left text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500 hover:bg-emerald-500/10 sm:w-auto sm:min-w-[260px]"
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
                  <Handshake size={18} />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  PARTNER WITH ECOCAN
                </span>
              </div>
              <svg
                className="ml-4 h-4 w-4 shrink-0 text-emerald-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Trust Badge Strip */}
          <div className="w-full max-w-3xl rounded-2xl border border-[var(--c-border)] bg-[rgba(255,255,255,0.03)] px-6 py-4 backdrop-blur-md">
            <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-white/10">
              <div className="flex items-center justify-center gap-3 py-2.5 sm:px-4 sm:py-0">
                <Leaf size={16} className="shrink-0 text-emerald-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--c-text-subtle)]">
                  EARLY-STAGE FUNDED
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 py-2.5 sm:px-4 sm:py-0">
                <MapPin size={16} className="shrink-0 text-emerald-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--c-text-subtle)]">
                  OPERATIONAL IN KENYA
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 py-2.5 sm:px-4 sm:py-0">
                <Lock size={16} className="shrink-0 text-emerald-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--c-text-subtle)]">
                  GDPR COMPLIANT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
