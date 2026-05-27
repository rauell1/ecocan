"use client"

import { useRef, useEffect, useCallback, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown } from "lucide-react"

const LENIS_INIT_DELAY = 500
const SCROLL_SCRUB = 1.2
const HERO_VIDEO_SOURCES = [
  {
    src: "/videos/circular-loop.mp4",
    type: "video/mp4",
    media: "(max-width: 767px)",
  },
  {
    src: "/videos/hero-loop.mp4",
    type: "video/mp4",
    media: "(min-width: 768px)",
  },
  {
    src: "/videos/hero-loop.mp4",
    type: "video/mp4",
  },
]

interface HeroSectionProps {
  onTransitionComplete: () => void
}

export default function HeroSection({ onTransitionComplete }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoWrapRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [videoPlaying, setVideoPlaying] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  const handleVideoPlay = () => {
    if (videoRef.current && videoRef.current.currentTime > 0.15) {
      setVideoPlaying(true)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure initial audio status is muted for autoplay policy compatibility
    video.muted = true
    video.playsInline = true
    video.defaultMuted = true

    const attemptPlay = async () => {
      if (videoFailed) return
      try {
        await video.play()
      } catch (err) {
        setVideoPlaying(false)
        console.warn("Autoplay blocked; hero poster fallback remains visible:", err)
      }
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
    }

    return () => {}
  }, [videoFailed])

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

    let scrollCtx: ReturnType<typeof gsap.context> | null = null
    let revealCtx: ReturnType<typeof gsap.context> | null = null

    const timer = setTimeout(() => {
      initLenis()

      scrollCtx = gsap.context(() => {
        if (!rm) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "+=100%",
              pin: true,
              scrub: SCROLL_SCRUB,
              anticipatePin: 1,
            },
          })

          tl.fromTo(
            contentRef.current,
            { opacity: 1, y: 0, scale: 1 },
            { opacity: 0, y: -80, scale: 0.97, ease: "power1.inOut", duration: 0.55 },
            0
          )
            .fromTo(
              indicatorRef.current,
              { opacity: 1 },
              { opacity: 0, ease: "power1.in", duration: 0.2 },
              0
            )
            .fromTo(
              videoWrapRef.current,
              { scale: 1, borderRadius: "0px", filter: "brightness(0.85)" },
              {
                scale: 0.8,
                borderRadius: "24px",
                filter: "brightness(1.0)",
                ease: "power2.inOut",
                duration: 1,
              },
              0
            )
            .fromTo(
              ".hero-overlay-gradient",
              { opacity: 1 },
              { opacity: 0, ease: "power2.inOut", duration: 1 },
              0
            )
            .fromTo(
              ".hero-bottom-fade",
              { opacity: 1 },
              { opacity: 0, ease: "power2.inOut", duration: 1 },
              0
            )
        }
      }, heroRef)

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
      scrollCtx?.revert()
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
          poster="/images/scan-verify.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onTimeUpdate={handleVideoPlay}
          onCanPlay={() => {
            if (!videoPlaying && !videoFailed) {
              void videoRef.current?.play().catch(() => {
                setVideoPlaying(false)
                setVideoFailed(true)
              })
            }
          }}
          onError={() => {
            setVideoFailed(true)
            setVideoPlaying(false)
          }}
          className="absolute inset-0 h-full w-full object-cover object-[center_32%] transition-opacity duration-700 sm:object-center"
          style={{
            zIndex: 1,
            opacity: videoPlaying && !videoFailed ? 1 : 0,
          }}
        >
          {/* Browser automatically falls back through this ordered source list when needed. */}
          {HERO_VIDEO_SOURCES.map((source) => (
            <source
              key={`${source.src}-${source.media ?? "default"}`}
              src={source.src}
              type={source.type}
              media={source.media}
            />
          ))}
        </video>
        <div aria-hidden className="hero-overlay-gradient absolute inset-0 z-[2]" />
        <div aria-hidden className="hero-bottom-fade absolute inset-x-0 bottom-0 z-[3] h-[36%]" />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div
          ref={contentRef}
          className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-14"
        >
          <h1
            className="font-serif-luxury text-luxury-gradient text-luxury-glow mb-6"
            style={{
              fontSize: "clamp(2.5rem, 7.5vw, 5.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
            }}
          >
            Return. Recycle. Make a difference.
          </h1>
          <p className="mx-auto mb-4 max-w-[40ch] text-sm uppercase tracking-[0.15em] text-[var(--c-text-muted)] md:text-base">
            Africa&apos;s circular bottle ecosystem.
          </p>

          <div className="mb-8 animate-pulse text-base font-medium tracking-wide text-emerald-400 md:text-lg">
            Your bottle. Your planet. Your reward.
          </div>

          <div className="mb-10 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/download"
              className="inline-flex w-full items-center justify-center rounded-full border border-emerald-500 bg-emerald-500 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:bg-transparent hover:text-[var(--c-text)] sm:w-auto"
            >
              Download App – Start Making a Difference
            </a>
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-[var(--landing-pill-border)] bg-[var(--landing-pill-bg)] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--landing-pill-text)] backdrop-blur-md transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 sm:w-auto"
            >
              Partner with ECOCAN
            </a>
          </div>

          {/* Trust Badge Strip */}
          <div className="flex w-full max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[var(--landing-divider)] pt-6 text-center">
            {["Early-stage funded", "Operational in Kenya", "GDPR Compliant"].map((badge, idx) => (
              <div
                key={badge}
                className="flex items-center text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--c-text-subtle)] md:text-xs"
              >
                {idx > 0 && <span className="mr-6 h-1 w-1 rounded-full bg-emerald-500/40" />}
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={indicatorRef}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--c-text-subtle)]"
      >
        <ArrowDown size={20} strokeWidth={1.75} />
      </div>
    </div>
  )
}
