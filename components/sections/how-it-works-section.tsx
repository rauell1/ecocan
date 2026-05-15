"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag, ScanLine, RotateCcw, Bike, Wallet } from "lucide-react"
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

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState<number | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Heading block
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

      // Connector line draw animation (desktop)
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

      // Step cards stagger in
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

      // Bottom image slide up
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
      className="relative w-full overflow-hidden py-[120px] md:py-[160px]"
      style={{ background: "#f5f5f0" }}
    >
      {/* Decorative background dot grid */}
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
        {/* Centered heading block */}
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

        {/* Step cards with desktop connector line */}
        <div className="relative mb-6">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] right-[10%] top-[52px] hidden h-[2px] origin-left lg:block"
            ref={lineRef}
            style={{
              background: "linear-gradient(to right, #16a34a, #0891b2, #7c3aed, #d97706, #e11d48)",
              opacity: 0.3,
            }}
          />

          <div ref={cardsRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isActive = activeStep === i
              return (
                <div
                  key={step.num}
                  className="step-card group relative cursor-pointer"
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Card body */}
                  <div
                    className="relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 md:p-7"
                    style={{
                      background: isActive ? step.accent : "white",
                      borderColor: isActive ? step.color + "55" : "rgba(0,0,0,0.07)",
                      transform: isActive ? "translateY(-6px)" : "translateY(0)",
                      boxShadow: isActive
                        ? `0 16px 40px ${step.color}22`
                        : "0 1px 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* Top colored bar */}
                    <div
                      className="absolute inset-x-0 top-0 transition-all duration-300"
                      style={{
                        height: isActive ? "4px" : "3px",
                        background: step.color,
                        opacity: isActive ? 1 : 0.6,
                      }}
                    />

                    {/* Step number + icon row */}
                    <div className="mb-5 flex items-start justify-between">
                      <span
                        className="font-mono text-5xl font-extrabold leading-none transition-colors duration-200 md:text-6xl"
                        style={{ color: isActive ? step.color : "rgba(0,0,0,0.08)" }}
                      >
                        {step.num}
                      </span>
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300"
                        style={{
                          background: isActive ? step.color : step.color + "15",
                        }}
                      >
                        <Icon
                          size={20}
                          style={{ color: isActive ? "white" : step.color }}
                          strokeWidth={1.8}
                        />
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

                    {/* "Hover me" pulse dot — only on resting state */}
                    {!isActive && (
                      <div
                        className="absolute bottom-4 right-4 h-2 w-2 animate-pulse-dot rounded-full"
                        style={{ background: step.color, opacity: 0.4 }}
                      />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Sub-copy + CTA */}
        <div className="hiw-heading mb-16 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
          <p className="text-sm italic text-eco-dark/40">
            No machine? No problem — partner counters scan and pay instantly.
          </p>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-eco-dark transition-colors hover:text-primary"
          >
            See full journey <ArrowRight size={15} />
          </Link>
        </div>

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
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          {/* Overlay copy */}
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
              >
                Find a station <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
