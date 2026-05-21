"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight } from "lucide-react"

const steps = [
  {
    step: "01",
    label: "Buy",
    description: "Purchase any ECOCAN-registered drink from a partner store.",
    color: "#4ade80",
  },
  {
    step: "02",
    label: "Scan",
    description: "Scan the QR code on the can or bottle with the ECOCAN app.",
    color: "#34d399",
  },
  {
    step: "03",
    label: "Return",
    description: "Drop your empty at any ECO-Station counter or machine.",
    color: "#2dd4bf",
  },
  {
    step: "04",
    label: "Collect",
    description: "Your return is verified instantly — no receipts needed.",
    color: "#38bdf8",
  },
  {
    step: "05",
    label: "Get Paid",
    description: "Money lands in your ECO-wallet in seconds. Withdraw anytime.",
    color: "#818cf8",
  },
]

function StepCardInner({
  step,
  label,
  description,
  color,
}: {
  step: string
  label: string
  description: string
  color: string
}) {
  return (
    <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-[#0c100c]/30 p-8 backdrop-blur-md transition-all duration-500 hover:border-white/10">
      <div
        className="absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${color}08 0%, transparent 60%)`,
        }}
      />
      <div className="relative z-10">
        <p
          className="mb-6 leading-none transition-colors duration-500"
          style={{
            fontSize: "clamp(3.5rem,8vw,5.5rem)",
            fontWeight: 300,
            fontFamily: "var(--font-sans)",
            letterSpacing: "-0.04em",
            color: `${color}20`,
          }}
        >
          {step}
        </p>
        <p
          className="font-serif-luxury mb-3 text-xl font-normal tracking-tight"
          style={{ color: "#f5f5f5" }}
        >
          {label}
        </p>
        <p className="text-sm leading-relaxed text-white/40">{description}</p>
      </div>
      <div className="mt-6 h-[2px] w-8 rounded-full opacity-40" style={{ background: color }} />
    </div>
  )
}

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  /* ── desktop GSAP ──────────────────────────────────────────── */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const targets = sectionRef.current!.querySelectorAll(".ec-reveal")
      if (targets.length === 0) return
      gsap.fromTo(
        targets,
        { opacity: 0, y: 36, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      )

      const bgImg = sectionRef.current?.querySelector(".section-bg-img") as HTMLElement | null
      if (bgImg) {
        gsap.fromTo(
          bgImg,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        )
      }
    }, sectionRef)
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  /* ── mobile carousel sync ──────────────────────────────────── */
  const handleScroll = useCallback(() => {
    const el = sliderRef.current
    if (!el) return
    const slideWidth = el.offsetWidth
    const idx = Math.round(el.scrollLeft / slideWidth)
    setActiveSlide(Math.max(0, Math.min(idx, steps.length - 1)))
  }, [])

  const scrollToSlide = useCallback((idx: number) => {
    const el = sliderRef.current
    if (!el) return
    const slideWidth = el.offsetWidth
    el.scrollTo({ left: slideWidth * idx, behavior: "smooth" })
  }, [])

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="section-py relative w-full overflow-hidden bg-[#050705]"
    >
      {/* background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/how_it_works_hero.png"
          alt="AR scanning of cans"
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(5,7,5,0.7) 0%, rgba(5,7,5,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)]">
        <h2
          className="ec-reveal font-serif-luxury text-luxury-gradient mb-16"
          style={{
            fontSize: "clamp(2.5rem,5.5vw,4.5rem)",
            letterSpacing: "-0.02em",
            textShadow: "0 0 40px rgba(16,185,129,0.15)",
          }}
        >
          Five steps. Thirty seconds. Real money.
        </h2>

        {/* ── MOBILE CAROUSEL ────────────────────────────────────── */}
        <div className="lg:hidden">
          {/* step counter */}
          <p className="mb-4 text-xs uppercase tracking-widest text-white/30">
            Step {activeSlide + 1} of {steps.length}
          </p>

          {/* slider */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="hiw-slider flex gap-4 overflow-x-auto pb-4"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              marginLeft: "-24px",
              paddingLeft: "24px",
              paddingRight: "24px",
            }}
          >
            {steps.map(({ step, label, description, color }) => (
              <div
                key={step}
                style={{
                  scrollSnapAlign: "center",
                  flex: "0 0 82vw",
                  maxWidth: "320px",
                  minHeight: "260px",
                }}
              >
                <StepCardInner step={step} label={label} description={description} color={color} />
              </div>
            ))}
          </div>

          {/* dots + arrows */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => scrollToSlide(activeSlide - 1)}
              disabled={activeSlide === 0}
              aria-label="Previous step"
              className="rounded-full border border-white/10 p-2 text-white/50 transition-all hover:border-white/20 hover:text-white disabled:opacity-25"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {steps.map((s, i) => (
                <button
                  key={s.step}
                  onClick={() => scrollToSlide(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeSlide ? "24px" : "8px",
                    height: "8px",
                    background:
                      i === activeSlide
                        ? (steps[activeSlide]?.color ?? "#16a34a")
                        : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToSlide(activeSlide + 1)}
              disabled={activeSlide === steps.length - 1}
              aria-label="Next step"
              className="rounded-full border border-white/10 p-2 text-white/50 transition-all hover:border-white/20 hover:text-white disabled:opacity-25"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* ── DESKTOP GRID ───────────────────────────────────────── */}
        <div className="hidden pt-2 lg:grid lg:grid-cols-5 lg:gap-6">
          {steps.map(({ step, label, description, color }) => (
            <div key={step} className="ec-reveal">
              <StepCardInner step={step} label={label} description={description} color={color} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
