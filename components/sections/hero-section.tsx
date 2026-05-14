"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Download, ArrowRight } from "lucide-react"

interface HeroSectionProps {
  onTransitionComplete: () => void
}

export default function HeroSection({ onTransitionComplete }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLDivElement>(null)

  // Unlock scroll + initialise Lenis immediately on mount
  useEffect(() => {
    onTransitionComplete()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Entry fade-in ─────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1.1, delay: 0.15, ease: "power3.out" }
      )
      gsap.fromTo(
        brandRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 1.0, delay: 0.4, ease: "power3.out" }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  // ── Pinned scroll zoom-out ────────────────────────────────────────────────
  // The hero is pinned for one full viewport-height of additional scroll so
  // the animation plays while the hero stays on screen. A single timeline
  // scrubbed to the scroll position drives all three targets together.
  // 500 ms delay ensures Lenis is wired up in page.tsx before we register.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let scrollCtx: ReturnType<typeof gsap.context> | null = null

    const timer = setTimeout(() => {
      scrollCtx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 1.5,
            anticipatePin: 1,
          },
        })

        // Text fades up and out
        tl.fromTo(
          contentRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0, y: -60, ease: "power1.in", duration: 0.4 },
          0
        )
        tl.fromTo(
          brandRef.current,
          { opacity: 1 },
          { opacity: 0, ease: "power1.in", duration: 0.35 },
          0.05
        )

        // Video wrapper pulls back + corners round
        tl.fromTo(
          videoWrapperRef.current,
          { scale: 1, borderRadius: "0px" },
          { scale: 0.78, borderRadius: "32px", ease: "power2.inOut", duration: 1 },
          0
        )
      }, heroRef)

      ScrollTrigger.refresh()
    }, 500)

    return () => {
      clearTimeout(timer)
      scrollCtx?.revert()
    }
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    /*
     * bg-[#080808] — the dark canvas that appears around the video as it
     * shrinks. No overflow-hidden on the root so the scaled-down video
     * wrapper shows the rounded corners against the dark background.
     * The video wrapper carries its own overflow-hidden for corner clipping.
     */
    <div
      ref={heroRef}
      id="hero"
      className="relative w-full bg-[#080808]"
      style={{ height: "100dvh" }}
    >
      {/* ── Video wrapper — target of the scale animation ─────────────────── */}
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

        {/* Directional glare killer — top-right bright spill */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 85% 10%, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.0) 70%)",
          }}
        />

        {/* Base depth gradient — top and bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(16,16,16,0.45) 0%, rgba(16,16,16,0.08) 45%, rgba(16,16,16,0.75) 100%)",
          }}
        />

        {/* Left-edge vignette for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,10,10,0.40) 0%, rgba(10,10,10,0.0) 55%)",
          }}
        />
      </div>

      {/* ── Hero text ─────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 flex flex-col" style={{ zIndex: 3 }}>
        {/* Main copy */}
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

          <div className="mb-3 flex flex-wrap justify-center gap-2">
            {["Early-stage funded", "Operational in Kenya", "GDPR Compliant"].map((badge) => (
              <span key={badge} className="glass-pill px-4 py-1.5 text-[13px] text-white">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* ECOCAN brand + Explore CTA */}
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
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-primary" />
            Explore the Journey
          </button>
        </div>
      </div>
    </div>
  )
}
