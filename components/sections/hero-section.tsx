"use client"

import { useRef, useEffect, useCallback } from "react"
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
      style={{ height: "100dvh", background: "#0a0a0a" }}
    >
      <div
        ref={videoWrapRef}
        className="absolute inset-0 overflow-hidden"
        style={{ willChange: "transform, border-radius, filter" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/scan-verify.jpg"
          className="h-full w-full object-cover"
          style={{ filter: "brightness(0.85)" }}
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden
          className="hero-overlay-gradient absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.82) 100%)",
          }}
        />
        <div
          aria-hidden
          className="hero-bottom-fade absolute inset-x-0 bottom-0 h-[36%]"
          style={{ background: "linear-gradient(to bottom, transparent 60%, #0a0a0a 100%)" }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div ref={contentRef} className="px-6 text-center md:px-14">
          <h1
            className="mb-6 font-bold text-[#f5f5f5]"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Scan. Verify. Earn.
          </h1>
          <p className="mx-auto mb-9 max-w-[40ch] text-base text-white/50">
            Safer drinks and paid recycling in one tap.
          </p>
          <a
            href="/download"
            className="inline-flex items-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-[#f5f5f5] transition hover:bg-white hover:text-black"
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
