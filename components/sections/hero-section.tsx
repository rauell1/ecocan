"use client"

import { useRef, useEffect, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Download, ArrowRight, Recycle } from "lucide-react"

const LENIS_INIT_DELAY = 500
const SCROLL_SCRUB = 1.2

interface HeroSectionProps {
  onTransitionComplete: () => void
}

export default function HeroSection({ onTransitionComplete }: HeroSectionProps) {
  const heroRef        = useRef<HTMLDivElement>(null)
  const videoWrapRef   = useRef<HTMLDivElement>(null)
  const contentRef     = useRef<HTMLDivElement>(null)
  const indicatorRef   = useRef<HTMLDivElement>(null)
  const tickerRef      = useRef<HTMLDivElement>(null)

  const initLenis = useCallback(() => onTransitionComplete(), [onTransitionComplete])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = gsap.context(() => {
      if (!rm) {
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: 60, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, delay: 0.25, ease: "power3.out" })
        gsap.fromTo(indicatorRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power2.out" })
        gsap.fromTo(tickerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, delay: 1.8, ease: "power2.out" })
      } else {
        gsap.set([contentRef.current, indicatorRef.current, tickerRef.current], { opacity: 1 })
      }
    }, heroRef)

    let scrollCtx: ReturnType<typeof gsap.context> | null = null
    const timer = setTimeout(() => {
      initLenis()
      scrollCtx = gsap.context(() => {
        if (!rm) {
          // ── Hero pin + scrub-out ──────────────────────────────────────────
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
          tl
            .fromTo(contentRef.current,
              { opacity: 1, y: 0, scale: 1 },
              { opacity: 0, y: -80, scale: 0.97, ease: "power1.inOut", duration: 0.55 }, 0)
            .fromTo(indicatorRef.current,
              { opacity: 1 },
              { opacity: 0, ease: "power1.in", duration: 0.2 }, 0)
            .fromTo(tickerRef.current,
              { opacity: 1 },
              { opacity: 0, ease: "power1.in", duration: 0.18 }, 0)
            .fromTo(videoWrapRef.current,
              { scale: 1, borderRadius: "0px", filter: "brightness(0.68)" },
              { scale: 0.80, borderRadius: "24px", filter: "brightness(0.28)", ease: "power2.inOut", duration: 1 }, 0)

          // ── Global section reveal (ps-reveal class) ──────────────────────
          document.querySelectorAll(".ps-reveal").forEach((el) => {
            gsap.fromTo(el,
              { opacity: 0, y: 44 },
              {
                opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  once: true,
                }
              }
            )
          })
        }
      }, heroRef)
      ScrollTrigger.refresh()
    }, LENIS_INIT_DELAY)

    return () => { clearTimeout(timer); ctx.revert(); scrollCtx?.revert() }
  }, [initLenis])

  const ticker = [
    "Buy Safe Drinks",
    "Return Empties",
    "Earn M-PESA Rewards",
    "Fight Counterfeits",
    "Close the Loop",
    "Recycle. Repeat.",
  ]

  return (
    <div ref={heroRef} id="hero" className="relative w-full" style={{ height: "100dvh", background: "#040604" }}>

      {/* Video */}
      <div
        ref={videoWrapRef}
        className="absolute inset-0 overflow-hidden"
        style={{ willChange: "transform, border-radius, filter" }}
      >
        <video autoPlay loop muted playsInline preload="auto"
          poster="/images/scan-verify.jpg"
          className="h-full w-full object-cover"
          style={{ filter: "brightness(0.68)" }}
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div aria-hidden className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(4,6,4,0.25) 0%, transparent 35%, rgba(4,6,4,0.88) 100%)" }} />
        <div aria-hidden className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 15% 85%, rgba(22,163,74,0.14) 0%, transparent 55%)" }} />
      </div>

      {/* Main copy */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end">
        <div ref={contentRef} className="px-6 pb-24 md:px-14 md:pb-28 max-w-[820px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 backdrop-blur-sm">
            <Recycle size={13} className="text-[--c-green-light]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/65">
              Kenya&apos;s Circular Bottle Loop
            </span>
          </div>

          <h1
            className="mb-8 font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 1.03, letterSpacing: "-0.035em" }}
          >
            Buy safe.{" "}
            <span style={{
              background: "linear-gradient(90deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Recycle.<br />Earn.
            </span>
          </h1>

          <p className="mb-10 max-w-[520px] text-base leading-relaxed text-white/60">
            Every bottle you return earns you M-PESA cash. Every scan protects your family from counterfeits.
            One app. Zero waste.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/download"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[--c-green] px-8 py-4 text-[15px] font-bold text-black transition-all hover:bg-[--c-green-light] hover:shadow-[0_0_32px_rgba(34,197,94,0.45)] active:scale-95"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              Download the App
            </a>
            <a
              href="/solutions"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/6 px-7 py-4 text-[15px] font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/12 active:scale-95"
            >
              For Brands &amp; Investors
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div ref={indicatorRef} className="absolute bottom-10 right-8 hidden flex-col items-center gap-2 md:flex">
          <div className="flex h-10 w-5.5 justify-center rounded-full border border-white/20 bg-white/5 p-1.5 backdrop-blur-sm">
            <div className="h-2 w-1 animate-bounce rounded-full bg-[--c-green-light] shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Scroll</span>
        </div>
      </div>

      {/* Ticker */}
      <div ref={tickerRef} className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/8 bg-black/40 backdrop-blur-sm" style={{ height: "40px" }}>
        <div className="ec-marquee flex h-full items-center gap-0">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex shrink-0 items-center gap-4 px-8">
              <span className="h-1 w-1 rounded-full bg-[--c-green]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">{t}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
