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
  // Separate ref for the <video> element itself so we can call .load() / .play()
  const videoElRef = useRef<HTMLVideoElement>(null)
  const brandRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const ctaBtnRef = useRef<HTMLButtonElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const transitionTlRef = useRef<gsap.core.Timeline | null>(null)
  const [transitionDone, setTransitionDone] = useState(false)

  // ─── Entrance animation (runs once on mount) ────────────────────────────────
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

  // ─── Scroll-to-top hero reset ────────────────────────────────────────────────
  // FIX: When resetSignal fires the GSAP timeline is reversed.
  // After the reverse completes we must reload + replay the video because the
  // browser's media pipeline is left in a paused/ended state after GSAP
  // animated `filter: brightness(0.6)` on its parent wrapper and then reversed
  // it — some Chromium versions mark the video as "ended" or leave it on the
  // last decoded frame (black), so we have to explicitly re-initialise it.
  useEffect(() => {
    if (resetSignal === 0) return

    const tl = transitionTlRef.current
    if (!tl) {
      setTransitionDone(false)
      return
    }

    tl.eventCallback("onReverseComplete", () => {
      setTransitionDone(false)
      tl.eventCallback("onReverseComplete", null)

      // Re-initialise the video element after the GSAP reverse completes.
      const vid = videoElRef.current
      if (vid) {
        vid.load()          // resets the media pipeline & rebuffers from src
        vid.play().catch(() => {
          // Autoplay policy may block silent resume; safe to ignore
        })
      }
    })
    tl.reverse()
  }, [resetSignal])

  // ─── Hero transition (scroll-down) ──────────────────────────────────────────
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

  // ─── Wheel / touch listeners to trigger the hero transition ─────────────────
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
    <div ref={heroRef} id="hero" className="relative w-full" style={{ height: "100vh" }}>
      {/* Video background
          NOTE: `key={resetSignal}` remounts the <video> element on every hero
          reset so the browser gets a completely fresh decode context.
          This is the belt-and-suspenders guarantee that no stale frame or
          ended-media state survives the GSAP reverse. */}
      <div ref={videoRef} className="absolute inset-0" style={{ zIndex: 1 }}>
        <video
          key={resetSignal}
          ref={videoElRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/scan-verify.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(16,16,16,0.3) 0%, rgba(16,16,16,0.1) 40%, rgba(16,16,16,0.6) 100%)",
          }}
        />
      </div>

      {/* Brand name */}
      <h1
        ref={brandRef}
        className="absolute left-1/2 -translate-x-1/2 text-center font-extrabold text-white"
        style={{
          bottom: "10vh",
          fontSize: "clamp(60px, 14vw, 180px)",
          textShadow: "0 4px 40px rgba(0,0,0,0.5)",
          mixBlendMode: "overlay",
          zIndex: 2,
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        ECOCAN
      </h1>

      {/* Hero content */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        style={{ zIndex: 3 }}
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
          Africa&apos;s Circular Bottle Ecosystem
        </p>
        <h2
          className="mb-4 font-bold text-white"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1 }}
        >
          Return. Recycle.
          <br />
          Make a difference.
        </h2>
        <p className="mb-8 max-w-[640px] text-lg font-normal text-white/80 md:text-xl">
          Recycle at any ECO-Station. Save the planet. Stop fake drinks. Get a bonus.
        </p>

        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
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

        <div className="mb-4 flex flex-wrap justify-center gap-3">
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

      {/* Explore CTA */}
      {!scrollEnabled && (
        <button
          ref={ctaBtnRef}
          onClick={triggerTransition}
          className="glass-pill absolute left-1/2 flex -translate-x-1/2 cursor-pointer items-center gap-3 px-6 py-3 text-white transition-all hover:bg-white/20 active:scale-95"
          style={{ bottom: "5vh", zIndex: 4 }}
          aria-label="Explore the Journey"
        >
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-primary" />
          Explore the Journey
          <ChevronDown size={16} className="animate-bounce" />
        </button>
      )}

      {/* Floating reveal cards */}
      <div
        ref={cardsContainerRef}
        className="pointer-events-none absolute inset-x-0"
        style={{ top: "100vh", zIndex: 5 }}
      >
        {/* Card 0 — light stat row */}
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

        {/* Card 1 — dark how-it-works strip */}
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

        {/* Card 2 — white impact metrics */}
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
