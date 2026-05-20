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
  const contentRef = useRef<HTMLDivElement>(null)
  const cornerRef = useRef<HTMLDivElement>(null)

  const initLenis = useCallback(() => onTransitionComplete(), [onTransitionComplete])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 50, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.4,
            delay: 0.2,
            ease: "power3.out",
          }
        )

        gsap.fromTo(
          cornerRef.current,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 1,
            ease: "power2.out",
          }
        )
      } else {
        gsap.set([contentRef.current, cornerRef.current], { opacity: 1 })
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
            { opacity: 1, y: 0, scale: 1 },
            {
              opacity: 0,
              y: -120,
              scale: 0.95,
              ease: "power1.inOut",
              duration: 0.6,
            },
            0
          )
            .fromTo(
              cornerRef.current,
              { opacity: 1 },
              { opacity: 0, ease: "power1.in", duration: 0.3 },
              0
            )
            .fromTo(
              videoWrapperRef.current,
              { scale: 1, borderRadius: "0px", filter: "brightness(0.72)" },
              {
                scale: 0.75,
                borderRadius: "32px",
                filter: "brightness(0.4)",
                ease: "power2.inOut",
                duration: 1,
              },
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

  // FIXED: The scrollTo function must be closed correctly
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      ref={heroRef}
      id="hero"
      className="relative w-full bg-[#060a08] text-white"
      style={{ height: "100dvh" }}
    >
      <div
        ref={videoWrapperRef}
        className="absolute inset-0 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        style={{ willChange: "transform, border-radius, filter" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/scan-verify.jpg"
          className="h-full w-full object-cover brightness-[0.75]"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>

        <div
          aria-hidden="true"
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(to bottom, rgba(4,10,6,0.4) 0%, transparent 40%, rgba(4,10,6,0.8) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, rgba(16,185,129,0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end px-6 pb-16 md:px-16 md:pb-20">
        <div className="flex items-end justify-between gap-6">
          <div ref={contentRef} className="max-w-[640px] lg:max-w-[900px]">
            <h1
              className="mb-6 font-semibold tracking-tight text-white drop-shadow-sm"
              style={{
                fontSize: "clamp(48px, 7vw, 90px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Buy Safe. Return Bottles.
              <br />
              <span className="whitespace-normal bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent md:whitespace-nowrap">
                Earn M-PESA rewards.
              </span>
            </h1>

            <p className="mb-10 max-w-[500px] text-[16px] font-medium leading-relaxed text-white/70 drop-shadow-md md:text-[18px]">
              Join thousands of Kenyan shoppers using ECOCAN to verify genuine drinks, return
              empties at ECO-Stations, and get paid for recycling.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <a
                href="/download"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Download
                  size={18}
                  className="relative z-10 transition-transform group-hover:-translate-y-0.5"
                />
                <span className="relative z-10">Download & Start Recycling</span>
              </a>

              <a
                href="/solutions"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-[15px] font-medium text-white backdrop-blur-lg transition-all duration-300 hover:border-white/40 hover:bg-white/15 active:scale-95"
              >
                For Brands & Investors
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <p className="text-[13px] font-medium uppercase tracking-wide text-white/50">
                Safer Drinks in Kenya <span className="mx-2 text-emerald-500/50">•</span>
                ECO-Station Rewards <span className="mx-2 text-emerald-500/50">•</span>
                Instant M-PESA Payouts
              </p>
            </div>
          </div>

          <div
            ref={cornerRef}
            className="hidden shrink-0 flex-col items-end gap-3 text-right md:flex"
          >
            <button
              onClick={() => scrollTo("how-it-works")}
              className="group flex flex-col items-end gap-3 transition-opacity hover:opacity-80"
            >
              <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 bg-white/5 p-1 shadow-inner backdrop-blur-sm">
                <div className="h-2 w-1.5 animate-bounce rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/40 transition-colors group-hover:text-white/70">
                Scroll to explore
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
