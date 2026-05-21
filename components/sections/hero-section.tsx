"use client"

import { useRef, useEffect, useCallback, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown } from "lucide-react"

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

  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure initial audio status is muted for autoplay policy compatibility
    video.muted = true
    video.playsInline = true

    const attemptPlay = async () => {
      try {
        await video.play()
        removeInteractionListeners()
      } catch (err) {
        console.warn("Autoplay attempt blocked or video not ready, awaiting user interaction:", err)
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

    // Attempt to play immediately on mount
    attemptPlay()

    // Add robust touch/scroll/click fallbacks to automatically play once user interacts
    window.addEventListener("touchstart", handleInteraction, { passive: true })
    window.addEventListener("mousedown", handleInteraction, { passive: true })
    window.addEventListener("keydown", handleInteraction, { passive: true })
    window.addEventListener("scroll", handleInteraction, { passive: true })

    return () => {
      removeInteractionListeners()
    }
  }, [])

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
      className="relative w-full"
      style={{ height: "100dvh", background: "#050705" }}
    >
      <div
        ref={videoWrapRef}
        className="absolute inset-0 overflow-hidden bg-[#050705]"
        style={{ willChange: "transform, border-radius, filter", filter: "brightness(0.85)" }}
      >
        {/* High-fidelity fallback poster image that stays underneath/behind the video element */}
        <img
          src="/images/scan-verify.jpg"
          alt="Ecocan App Scan and Verify Preview"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{
            zIndex: 0,
            opacity: isPlaying ? 0 : 1,
          }}
        />

        <video
          ref={videoRef}
          src="/videos/hero-loop.mp4"
          poster="/images/scan-verify.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{
            zIndex: 1,
            opacity: isPlaying ? 1 : 0,
          }}
          onTimeUpdate={() => {
            if (videoRef.current && videoRef.current.currentTime > 0.15) {
              setIsPlaying(true)
            }
          }}
        />
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

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div ref={contentRef} className="px-6 text-center md:px-14">
          <h1
            className="font-serif-luxury text-luxury-gradient text-luxury-glow mb-6"
            style={{
              fontSize: "clamp(3rem, 8.5vw, 6.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
            }}
          >
            Scan. Verify. Earn.
          </h1>
          <p className="mx-auto mb-9 max-w-[40ch] text-base uppercase tracking-[0.15em] text-white/50">
            Safer drinks &amp; paid recycling in one tap.
          </p>
          <a
            href="/download"
            className="inline-flex items-center rounded-full border border-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#f5f5f5] backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black"
          >
            Download App
          </a>
        </div>
      </div>

      <div
        ref={indicatorRef}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60"
      >
        <ArrowDown size={20} strokeWidth={1.75} />
      </div>
    </div>
  )
}
