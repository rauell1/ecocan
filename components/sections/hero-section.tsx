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

    // Hide cards before the transition fires using GSAP autoAlpha (opacity 0
    // + visibility hidden) so they are invisible regardless of overflow
    // behaviour. yPercent:120 also pushes them below the overflow:hidden
    // clip edge for a belt-and-suspenders approach.
    const initialCards = cardsContainerRef.current?.querySelectorAll(".hero-card")
    if (initialCards && initialCards.length > 0) {
      gsap.set(initialCards, { yPercent: 120, autoAlpha: 0 })
    }

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
      // Cards start invisible (autoAlpha:0 + yPercent:120 set on mount).
      // Slide them into the hero viewport while fading in.
      tl.fromTo(
        cards,
        { yPercent: 120, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 1.2, stagger: 0.05 },
        0
      )
    }

    tl.to(ctaBtnRef.current, { autoAlpha: 0, duration: 0.4 }, 0.8)
  }

  // ─── RESET ────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (resetSignal === 0) return

    // Do NOT call vid.load() — it forces a full network reload and flashes
    // the poster image. The browser keeps the decoded video in memory; if it
    // was auto-paused while off-screen, play() resumes from the current frame.
    const vid = videoElRef.current
    if (vid && vid.paused) {
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
        gsap.set(cards, { yPercent: 120, autoAlpha: 0 })
      }
    })

    // 2× speed on reverse so the user spends less time looking at the
    // darkened/scaled-down video state while returning to the hero.
    tl.timeScale(2)
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
        {/*
         * brightness-[0.85]: pulls the raw video exposure down ~15% globally.
         * This is the primary fix for the overexposed top-right area — it
         * reduces the source luminance before any overlay is applied so no
         * overlay thickness alone needs to compensate.
         */}
        <video
          ref={videoElRef}
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

        {/*
         * Layer 1 — directional glare killer.
         * A radial gradient centred on the top-right (where the bright spill
         * lives in the source footage) applies up to 0.65 opacity there and
         * fades to 0 at the centre/bottom so it doesn't muddy the subject.
         */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 85% 10%, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.0) 70%)",
          }}
        />

        {/*
         * Layer 2 — base scene depth gradient.
         * Keeps the original top-to-bottom drama without letting the sky
         * blow out: top starts at 0.45 (was 0.3 → too light), mid stays
         * light, bottom holds the heavy vignette for text legibility.
         */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(16,16,16,0.45) 0%, rgba(16,16,16,0.08) 45%, rgba(16,16,16,0.75) 100%)",
          }}
        />

        {/*
         * Layer 3 — left-edge safety vignette.
         * Ensures the white headline text on the left always has enough
         * contrast regardless of the video frame.
         */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,10,10,0.40) 0%, rgba(10,10,10,0.0) 55%)",
          }}
        />
      </div>

      {/* ── Content & brand layout (unchanged) ───────────────────────────────── */}
      <div className="absolute inset-0 flex flex-col" style={{ zIndex: 3 }}>
        {/* ── Content zone ──────────────────────────────────────────────────── */}
        <div
          ref={contentRef}
          className="flex flex-1 flex-col items-center justify-center px-4 text-center"
          style={{ paddingBottom: "0" }}
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

        {/* ── Brand zone: ECOCAN sits between tagline above and Explore below ── */}
        <div
          ref={brandRef}
          className="flex flex-col items-center justify-center gap-2 pb-[2vh] pt-1"
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

          {!scrollEnabled && (
            <button
              ref={ctaBtnRef}
              onClick={triggerTransition}
              className="glass-pill flex cursor-pointer items-center gap-3 px-6 py-2.5 text-white transition-all hover:bg-white/20 active:scale-95"
              aria-label="Explore the Journey"
            >
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-primary" />
              Explore the Journey
              <ChevronDown size={16} className="animate-bounce" />
            </button>
          )}
        </div>
      </div>

      {/* ── Floating reveal cards ─────────────────────────────────────────────── */}
      {/*
       * Container fills the full hero (inset-0). Cards are positioned within
       * the 0–100dvh hero viewport and start at yPercent:120 (pushed below
       * the overflow:clip boundary, invisible). The transition animates them
       * to yPercent:0 so they slide in from below — all self-contained inside
       * the hero. Nothing bleeds into the page sections below.
       */}
      <div
        ref={cardsContainerRef}
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 5 }}
      >
        {/* Card 0 – light stat row (back-left) */}
        <div
          className="hero-card absolute overflow-hidden rounded-3xl shadow-elevated"
          style={{ left: "5vw", width: "90vw", height: "80vh", top: "8vh", background: "#F7F7F7" }}
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

        {/* Card 1 – dark ECOmmunity roles strip (front / center) */}
        <div
          className="hero-card absolute overflow-hidden rounded-3xl shadow-elevated"
          style={{ left: "10vw", width: "80vw", height: "84vh", top: "7vh", background: "#101010" }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8 px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Who it&apos;s for
            </p>
            <h2
              className="font-bold text-white"
              style={{ fontSize: "clamp(24px, 3.5vw, 48px)", lineHeight: 1.2 }}
            >
              One ecosystem.
              <br />
              Everyone wins.
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {[
                {
                  emoji: "🛒",
                  role: "Consumers",
                  desc: "Earn M-Pesa rewards on every bottle returned",
                },
                {
                  emoji: "🏪",
                  role: "Retailers",
                  desc: "Boost loyalty & drive repeat foot-traffic",
                },
                {
                  emoji: "🏭",
                  role: "Producers",
                  desc: "Close your supply loop, cut packaging waste",
                },
                {
                  emoji: "💡",
                  role: "Investors",
                  desc: "Back Africa's first circular bottle economy",
                },
              ].map((r) => (
                <div
                  key={r.role}
                  className="flex flex-col items-center gap-2 rounded-2xl px-4 py-5"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  <span className="text-3xl">{r.emoji}</span>
                  <span className="text-sm font-semibold text-white">{r.role}</span>
                  <span className="text-xs leading-snug text-white/50">{r.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2 – white impact metrics (back-right) */}
        <div
          className="hero-card absolute overflow-hidden rounded-3xl shadow-elevated"
          style={{ left: "5vw", width: "90vw", height: "80vh", top: "8vh", background: "#FFFFFF" }}
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
