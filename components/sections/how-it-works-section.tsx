"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import {
  ShoppingBag,
  ScanLine,
  RotateCcw,
  Bike,
  Wallet,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import SectionBadge from "@/components/shared/section-badge"

const steps = [
  {
    num: "01",
    title: "Buy",
    desc: "Any drink with an ECOCAN security code — look for the seal.",
    icon: ShoppingBag,
    color: "#16a34a",
    accent: "rgba(22,163,74,0.10)",
  },
  {
    num: "02",
    title: "Scan",
    desc: "Tap the QR code in the app. Authenticity verified in 3 seconds.",
    icon: ScanLine,
    color: "#0891b2",
    accent: "rgba(8,145,178,0.10)",
  },
  {
    num: "03",
    title: "Return",
    desc: "Drop the empty, intact bottle at any ECO-Station counter nearby.",
    icon: RotateCcw,
    color: "#7c3aed",
    accent: "rgba(124,58,237,0.10)",
  },
  {
    num: "04",
    title: "Collect",
    desc: "Our courier picks up by electric bike. Zero extra trips for you.",
    icon: Bike,
    color: "#d97706",
    accent: "rgba(217,119,6,0.10)",
  },
  {
    num: "05",
    title: "Get Paid",
    desc: "Deposit lands instantly in your M-PESA or bank account.",
    icon: Wallet,
    color: "#e11d48",
    accent: "rgba(225,29,72,0.10)",
  },
]

// ── Shared card inner ──────────────────────────────────────────────────────
function StepCardInner({ step, isActive }: { step: (typeof steps)[number]; isActive: boolean }) {
  const Icon = step.icon
  return (
    <div
      className="relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-300"
      style={{
        background: isActive ? step.accent : "white",
        borderColor: isActive ? step.color + "55" : "rgba(0,0,0,0.07)",
        transform: isActive ? "translateY(-6px)" : "translateY(0)",
        boxShadow: isActive ? `0 16px 40px ${step.color}22` : "0 1px 6px rgba(0,0,0,0.05)",
      }}
    >
      {/* Top colour bar */}
      <div
        className="absolute inset-x-0 top-0 transition-all duration-300"
        style={{
          height: isActive ? "4px" : "3px",
          background: step.color,
          opacity: isActive ? 1 : 0.6,
        }}
      />

      {/* Number + icon row */}
      <div className="mb-5 flex items-start justify-between">
        <span
          className="font-mono text-5xl font-extrabold leading-none transition-colors duration-200 md:text-6xl"
          style={{ color: isActive ? step.color : "rgba(0,0,0,0.08)" }}
        >
          {step.num}
        </span>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300"
          style={{ background: isActive ? step.color : step.color + "15" }}
        >
          <Icon size={20} style={{ color: isActive ? "white" : step.color }} strokeWidth={1.8} />
        </div>
      </div>

      {/* Title */}
      <h3
        className="mb-2 text-[19px] font-bold leading-tight transition-colors duration-200"
        style={{ color: isActive ? step.color : "#111" }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="text-[13.5px] leading-relaxed transition-colors duration-200"
        style={{ color: isActive ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0.45)" }}
      >
        {step.desc}
      </p>

      {/* Pulse dot on resting state */}
      {!isActive && (
        <div
          className="absolute bottom-4 right-4 h-2 w-2 animate-pulse-dot rounded-full"
          style={{ background: step.color, opacity: 0.4 }}
        />
      )}
    </div>
  )
}

// ── Main section ───────────────────────────────────────────────────────────
export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const [activeStep, setActiveStep] = useState<number | null>(null) // desktop hover
  const [activeSlide, setActiveSlide] = useState(0) // mobile carousel

  // ── Mobile: track active slide from scroll position ──────────────────────
  const handleScroll = useCallback(() => {
    const el = sliderRef.current
    if (!el) return
    // Each slide is the full scroll width divided by count
    const slideWidth = el.scrollWidth / steps.length
    const idx = Math.round(el.scrollLeft / slideWidth)
    setActiveSlide(Math.min(Math.max(idx, 0), steps.length - 1))
  }, [])

  const scrollToSlide = (index: number) => {
    const el = sliderRef.current
    if (!el) return
    const slideWidth = el.scrollWidth / steps.length
    el.scrollTo({ left: slideWidth * index, behavior: "smooth" })
  }

  const prev = () => scrollToSlide(Math.max(activeSlide - 1, 0))
  const next = () => scrollToSlide(Math.min(activeSlide + 1, steps.length - 1))

  // ── GSAP animations (desktop grid only) ──────────────────────────────────
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const headingEls = sectionRef.current?.querySelectorAll(".hiw-heading")
      if (headingEls && headingEls.length > 0) {
        gsap.fromTo(
          headingEls,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
          }
        )
      }

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: { trigger: cardsRef.current, start: "top 82%", once: true },
          }
        )
      }

      // Desktop cards only (cardsRef is the lg grid)
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".step-card")
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 56, scale: 0.94 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: cardsRef.current, start: "top 82%", once: true },
            }
          )
        }
      }

      const imgEl = sectionRef.current?.querySelector(".counter-img")
      if (imgEl) {
        gsap.fromTo(
          imgEl,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: imgEl, start: "top 88%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative w-full overflow-hidden py-[120px] md:py-[160px]"
      style={{ background: "#f5f5f0" }}
    >
      {/* Dot-grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(22,163,74,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* ── Heading ──────────────────────────────────────────────────── */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="hiw-heading">
            <SectionBadge number="02" />
          </div>
          <p className="section-overline hiw-heading mb-4">How It Works</p>
          <h2 className="section-headline hiw-heading mb-4 max-w-[640px] text-eco-dark">
            From your hand{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #16a34a, #059669)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              back to the shelf.
            </span>
          </h2>
          <p className="hiw-heading max-w-[400px] text-lg font-normal leading-relaxed text-eco-dark/60">
            Five steps. Thirty seconds. Real money in your pocket.
          </p>
        </div>

        {/* ── MOBILE CAROUSEL (hidden lg+) ─────────────────────────────── */}
        <div className="relative mb-6 lg:hidden">
          {/* Scroll track — breaks out of px-6 container */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="hiw-slider flex gap-4 overflow-x-auto pb-2"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              marginLeft: "-24px",
              marginRight: "-24px",
              paddingLeft: "24px",
              paddingRight: "24px",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="shrink-0"
                style={{
                  scrollSnapAlign: "center",
                  width: "82vw",
                  maxWidth: "320px",
                  // last card gets extra right padding so it can snap fully
                  paddingRight: i === steps.length - 1 ? "24px" : "0",
                }}
              >
                <StepCardInner step={step} isActive={activeSlide === i} />
              </div>
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            disabled={activeSlide === 0}
            className="absolute -left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-all disabled:opacity-25"
            aria-label="Previous step"
          >
            <ChevronLeft size={18} className="text-eco-dark" />
          </button>
          <button
            onClick={next}
            disabled={activeSlide === steps.length - 1}
            className="absolute -right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-all disabled:opacity-25"
            aria-label="Next step"
          >
            <ChevronRight size={18} className="text-eco-dark" />
          </button>
        </div>

        {/* Dot indicators + step counter — mobile only */}
        <div className="mb-10 flex flex-col items-center gap-3 lg:hidden">
          <div className="flex items-center gap-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                aria-label={`Go to step ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeSlide === i ? "24px" : "8px",
                  height: "8px",
                  background:
                    activeSlide === i
                      ? (steps[activeSlide]?.color ?? "#16a34a")
                      : "rgba(0,0,0,0.15)",
                }}
              />
            ))}
          </div>
          <p className="text-[12px] font-medium text-eco-dark/40">
            Step {activeSlide + 1} of {steps.length}
          </p>
        </div>

        {/* ── DESKTOP GRID (hidden below lg) ───────────────────────────── */}
        <div className="relative mb-6 hidden lg:block">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] right-[10%] top-[52px] h-[2px] origin-left"
            ref={lineRef}
            style={{
              background: "linear-gradient(to right, #16a34a, #0891b2, #7c3aed, #d97706, #e11d48)",
              opacity: 0.3,
            }}
          />

          <div ref={cardsRef} className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="step-card group relative cursor-pointer"
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <StepCardInner step={step} isActive={activeStep === i} />
              </div>
            ))}
          </div>
        </div>

        {/* Sub-copy */}
        <p className="hiw-heading mb-16 text-center text-sm italic text-eco-dark/40">
          No machine needed — partner counters scan and pay you instantly.
        </p>

        {/* Return counter photo */}
        <div
          className="counter-img relative overflow-hidden rounded-3xl"
          style={{ height: "clamp(200px, 32vw, 420px)" }}
        >
          <Image
            src="/images/return-counter.jpg"
            alt="ECOCAN return counter at a supermarket"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwYTFhMGYiLz48L3N2Zz4="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8 md:p-14">
            <div>
              <p
                className="mb-1 text-sm font-semibold uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                ECO-Station
              </p>
              <p className="mb-3 text-2xl font-bold text-white md:text-3xl">
                Return it right here.
              </p>
              <p className="mb-6 max-w-[320px] text-[15px] leading-relaxed text-white/65">
                Any ECO-Station counter accepts empties — no machine required, instant payment.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
              >
                Find a station <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
