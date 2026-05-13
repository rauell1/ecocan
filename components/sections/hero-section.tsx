"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Download, ArrowRight, ChevronDown } from "lucide-react"

interface HeroSectionProps {
  scrollEnabled: boolean
  onTransitionComplete: () => void
  resetSignal: number
}

export default function HeroSection({
  scrollEnabled,
  onTransitionComplete,
  resetSignal,
}: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const videoElRef = useRef<HTMLVideoElement>(null)
  const brandRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const ctaBtnRef = useRef<HTMLButtonElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const transitionTlRef = useRef<gsap.core.Timeline | null>(null)
  const [transitionDone, setTransitionDone] = useState(false)

  // ─── INTRO ANIMATIONS ────────────────────────────────────────────────────────
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
      )
      gsap.fromTo(
        ctaBtnRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power2.out" }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  // ─── TRANSITION TRIGGER ───────────────────────────────────────────────────────
  const triggerTransition = () => {
    if (transitionDone) return
    setTransitionDone(true)

    const tl = gsap.timeline({
      defaults: { ease: "expo.inOut" },
      onComplete: () => onTransitionComplete(),
    })

    transitionTlRef.current = tl

    tl.to(videoRef.current, { scale: 0.5, filter: "brightness(0.6)", duration: 1.2 }, 0)
    tl.to(brandRef.current, { autoAlpha: 0, duration: 0.5 }, 0.3)
    tl.to(contentRef.current, { autoAlpha: 0, duration: 0.4 }, 0.2)

    const cards = cardsContainerRef.current?.querySelectorAll(".hero-card")
    if (cards) {
      tl.fromTo(cards, { yPercent: 100 }, { yPercent: 0, duration: 1.2, stagger: 0.05 }, 0)
      const card1 = cards[1]
      if (card1) tl.to(card1, { y: "-15vh", duration: 1.2 }, 0)
    }

    tl.to(ctaBtnRef.current, { autoAlpha: 0, duration: 0.4 }, 0.8)
  }

  // ─── RESET ────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (resetSignal === 0) return

    const vid = videoElRef.current
    if (vid) {
      vid.load()
      vid.play().catch(() => {})
    }

    const tl = transitionTlRef.current
    if (!tl) {
      setTransitionDone(false)
      return
    }

    tl.eventCallback("onReverseComplete", () => {
      setTransitionDone(false)
      tl.eventCallback("onReverseComplete", null)

      const cards = cardsContainerRef.current?.querySelectorAll(".hero-card")
      if (cards && cards.length > 0) {
        gsap.set(cards, { clearProps: "all" })
        gsap.set(cards, { yPercent: 100 })
      }
    })

    tl.reverse()
  }, [resetSignal])

  // ─── WHEEL / TOUCH TRIGGER ────────────────────────────────────────────────────
  useEffect(() => {
    if (scrollEnabled || transitionDone) return
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) triggerTransition()
    }
    const onTouch = (() => {
      let startY = 0
      return {
        start: (e: TouchEvent) => {
          startY = e.touches[0]?.clientY ?? 0
        },
        end: (e: TouchEvent) => {
          if (startY - (e.changedTouches[0]?.clientY ?? 0) > 40) triggerTransition()
        },
      }
    })()
    window.addEventListener("wheel", onWheel, { passive: true })
    window.addEventListener("touchstart", onTouch.start, { passive: true })
    window.addEventListener("touchend", onTouch.end, { passive: true })
    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchstart", onTouch.start)
      window.removeEventListener("touchend", onTouch.end)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollEnabled, transitionDone])

  const scrollToSection = (id: string) => {
    document.body.style.overflow = ""
    const el = document.getElementById(id)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80)
  }

  return (
    <div
      ref={heroRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* ── Video background ──────────────────────────────────────────────────── */}
      <div ref={videoRef} className="absolute inset-0" style={{ zIndex: 1 }}>
        <video
          ref={videoElRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/scan-verify.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>

        {/*
         * FIX: Replaced the old 3-stop gradient that had only 10% opacity
         * at the midpoint (causing the bright "glare" blowout in the centre
         * of the frame) with a 4-stop gradient that keeps opacity at a
         * consistent, controlled level across the entire viewport.
         *
         * Old (glary):  0% → 30%  |  40% → 10%  |  100% → 72%
         * New (clean):  0% → 55%  |  35% → 45%  |  70% → 55%  |  100% → 80%
         *
         * The bottom darkens more (80%) so the ECOCAN watermark and the
         * Explore CTA read clearly without any extra text-shadow hackery.
         */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.45) 35%, rgba(10,10,10,0.55) 70%, rgba(10,10,10,0.80) 100%)",
          }}
        />
      </div>

      {/*
       * ── LAYOUT ─────────────────────────────────────────────────────────────
       *
       *  ┌─────────────────────────────────┐  ← 100dvh
       *  │   CONTENT ZONE  (flex-grow:1)   │  tagline + CTA + badges
       *  ├─────────────────────────────────┤
       *  │   BRAND ZONE  (h-[18vh])        │  "ECOCAN" + Explore CTA
       *  └─────────────────────────────────┘
       *
       * FIX: Added `gap-0` and `justify-between` to prevent the two zones
       * bleeding into each other on viewport heights < 700 px.
       */}
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ zIndex: 3 }}
      >
        {/* ── Content zone ───────────────────────────────────────────────────── */}
        <div
          ref={contentRef}
          className="flex flex-1 flex-col items-center justify-center px-4 text-center"
        >
          {/*
           * FIX: Capped max-width on the label so it never wraps on narrow
           * phones; tightened letter-spacing for cleaner presentation.
           */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
            Africa&apos;s Circular Bottle Ecosystem
          </p>

          {/*
           * FIX: Constrained the heading to max-w-[640px] so on wider
           * viewports it doesn't stretch ear-to-ear. Line-height tightened
           * slightly (1.05) for a more typographically confident display.
           */}
          <h2
            className="mb-4 max-w-[640px] font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
            style={{ fontSize: "clamp(28px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            Return. Recycle.
            <br />
            Make a difference.
          </h2>

          {/*
           * FIX: Constrained subtext to max-w-[480px] — the original
           * max-w-[560px] caused a very long line on mid-size screens that
           * broke the visual grouping with the heading above it.
           */}
          <p className="mb-6 max-w-[480px] text-base font-normal text-white/80 md:text-lg">
            Recycle at any ECO-Station. Save the planet. Stop fake drinks. Get a bonus.
          </p>

          <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row">
            <a href="/download" className="pill-btn pill-btn-white">
              <Download size={18} />
              Download App
            </a>
            <button
              onClick={() => {
                triggerTransition()
                setTimeout(() => scrollToSection("model"), 1400)
              }}
              className="flex cursor-pointer items-center gap-2 border-none bg-transparent font-medium text-white hover:underline"
            >
              Partner with ECOCAN <ArrowRight size={16} />
            </button>
          </div>

          <div className="mb-3 flex flex-wrap justify-center gap-2">
            {["Early-stage funded", "Operational in Kenya", "GDPR Compliant"].map((badge) => (
              <span key={badge} className="glass-pill px-4 py-1.5 text-[13px] text-white">
                {badge}
              </span>
            ))}
          </div>
          <span className="glass-pill px-4 py-1.5 text-[13px] italic text-white/80">
            No machine? No problem. Our counters work today.
          </span>
        </div>

        {/*
         * ── Brand zone ─────────────────────────────────────────────────────────
         *
         * FIX: Changed bottom padding from pb-[3vh] to pb-[2vh] and enforced
         * a tighter flex gap so the CTA button sits flush below the word mark
         * on short viewports. Added `shrink-0` to prevent the zone from
         * collapsing when the content zone is tall.
         */}
        <div
          ref={brandRef}
          className="flex shrink-0 flex-col items-center justify-end gap-1 pb-[2vh]"
          style={{ minHeight: "80px", height: "18vh" }}
        >
          <h1
            className="pointer-events-none w-full max-w-[96vw] select-none overflow-hidden text-center font-extrabold"
            style={{
              fontSize: "clamp(48px, 10vw, 160px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "transparent",
              /*
               * FIX: Reduced WebkitTextStroke from 2px to 1.5px — the
               * heavier stroke was reflecting the video light and amplifying
               * the glare effect at the bottom of the hero. Reduced the
               * outer-glow text-shadow radii so the halo is tighter and less
               * bloomy.
               */
              WebkitTextStroke: "1.5px rgba(255,255,255,0.80)",
              textShadow: [
                "0 0 30px rgba(0,0,0,0.7)",
                "0 0 60px rgba(0,0,0,0.5)",
                "0 2px 16px rgba(0,0,0,0.8)",
              ].join(", "),
            }}
            aria-label="ECOCAN"
          >
            ECOCAN
          </h1>

          {!scrollEnabled && (
            <button
              ref={ctaBtnRef}
              onClick={triggerTransition}
              className="glass-pill mt-1 flex cursor-pointer items-center gap-3 px-6 py-2.5 text-white transition-all hover:bg-white/20 active:scale-95"
              aria-label="Explore the Journey"
            >
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-primary" />
              Explore the Journey
              <ChevronDown size={16} className="animate-bounce" />
            </button>
          )}
        </div>
      </div>

      {/* ── Floating reveal cards ──────────────────────────────────────────────── */}
      <div
        ref={cardsContainerRef}
        className="pointer-events-none absolute inset-x-0"
        style={{ top: "100vh", zIndex: 5 }}
      >
        {/* Card 0 – light stat row */}
        <div
          className="hero-card absolute overflow-hidden rounded-3xl shadow-elevated"
          style={{ left: "5vw", width: "90vw", height: "80vh", top: "10vh", background: "#F7F7F7" }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8 px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              The numbers that matter
            </p>
            <h2
              className="font-bold text-eco-dark"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.15 }}
            >
              A circular economy
              <br />
              built for Africa
            </h2>
            <div className="grid grid-cols-3 gap-6 md:gap-16">
              {[
                { value: "1M+", label: "Bottles in system" },
                { value: "30%", label: "Drinks are counterfeit" },
                { value: "KES 50", label: "Minimum cash-out" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span className="text-3xl font-extrabold text-primary md:text-5xl">
                    {s.value}
                  </span>
                  <span className="text-xs text-eco-dark/60 md:text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 1 – dark how-it-works strip */}
        <div
          className="hero-card absolute overflow-hidden rounded-3xl shadow-elevated"
          style={{ left: "10vw", width: "80vw", height: "85vh", top: "5vh", background: "#101010" }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8 px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              How it works
            </p>
            <h2
              className="font-bold text-white"
              style={{ fontSize: "clamp(24px, 3.5vw, 48px)", lineHeight: 1.2 }}
            >
              From your hand back to the shelf
            </h2>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-0">
              {[
                { num: "01", title: "Buy", desc: "Drink with QR code" },
                { num: "02", title: "Scan", desc: "Verify in 3 seconds" },
                { num: "03", title: "Return", desc: "To any ECO-Station" },
                { num: "04", title: "Collect", desc: "Electric bike pickup" },
                { num: "05", title: "Earn", desc: "Instant M-Pesa credit" },
              ].map((step, i, arr) => (
                <div key={step.num} className="flex items-center">
                  <div className="flex flex-col items-center gap-1 px-3 md:px-5">
                    <span className="text-xl font-bold text-primary md:text-2xl">{step.num}</span>
                    <span className="text-sm font-semibold text-white">{step.title}</span>
                    <span className="text-xs text-white/50">{step.desc}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="hidden text-primary/40 sm:block">&#8250;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2 – white impact metrics */}
        <div
          className="hero-card absolute overflow-hidden rounded-3xl shadow-elevated"
          style={{ left: "5vw", width: "90vw", height: "80vh", top: "10vh", background: "#FFFFFF" }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8 px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Real impact
            </p>
            <h2
              className="font-bold text-eco-dark"
              style={{ fontSize: "clamp(26px, 3.5vw, 48px)", lineHeight: 1.2 }}
            >
              Every bottle returned
              <br />
              changes Africa
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
              {[
                { value: "80%", label: "Bottles never recovered" },
                { value: "$1B+", label: "Lost to packaging waste" },
                { value: "Zero", label: "Emission collection" },
                { value: "GDPR", label: "Data compliant" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-eco-light p-4 md:p-6"
                >
                  <span className="text-2xl font-extrabold text-primary md:text-4xl">
                    {m.value}
                  </span>
                  <span className="text-xs text-eco-dark/70 md:text-sm">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
