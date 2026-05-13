"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const steps = [
  { num: "01", title: "Buy", desc: "Any drink with ECOCAN security code" },
  { num: "02", title: "Scan", desc: "Verify authenticity in 3 seconds" },
  { num: "03", title: "Return", desc: "Empty, intact, to any ECO-Station counter" },
  { num: "04", title: "Collect", desc: "We pick up by electric bike. You've done your part." },
  { num: "05", title: "Get Rewarded", desc: "Instant deposit money to M-PESA or bank" },
]

interface HowItWorksSectionProps {
  scrollEnabled: boolean
}

export default function HowItWorksSection({ scrollEnabled }: HowItWorksSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollEnabled) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const headingEls = sectionRef.current?.querySelectorAll(".heading-animate")
      if (headingEls && headingEls.length > 0) {
        gsap.fromTo(
          headingEls,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          }
        )
      }
      if (!cardsRef.current) return
      const cards = cardsRef.current.querySelectorAll(".step-card")
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, x: 30 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%", once: true },
          }
        )
      }
      const imgEl = sectionRef.current?.querySelector(".counter-img")
      if (imgEl) {
        gsap.fromTo(
          imgEl,
          { opacity: 0, scale: 1.05 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: imgEl, start: "top 85%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [scrollEnabled])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-[120px] md:py-[160px]"
      style={{ background: "#101010" }}
    >
      {/* subtle background texture */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url(/images/bottle-journey.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-transparent to-[#101010]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* ── Centered heading block ── */}
        <div className="mb-14 flex flex-col items-center text-center">
          <p className="section-overline heading-animate mb-4">How It Works</p>
          <h2 className="section-headline heading-animate mb-4 max-w-[700px] text-white">
            From your hand back to the shelf.
          </h2>
          <p className="heading-animate text-lg font-normal leading-relaxed text-white/60">
            Clean. Traceable. Rewarded.
          </p>
        </div>

        {/* ── Step cards ── */}
        <div ref={cardsRef} className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="step-card glass-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/30 md:p-8"
            >
              <span className="mb-4 block text-4xl font-bold leading-none text-primary md:text-5xl">
                {step.num}
              </span>
              <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Sub-copy + CTA ── */}
        <p className="heading-animate mb-3 text-sm italic text-white/40">
          No machine? No problem. Our partner counters scan and pay you instantly - right now,
          today.
        </p>
        <Link
          href="/solutions"
          className="heading-animate mb-16 inline-flex items-center gap-2 font-medium text-white hover:underline"
        >
          See full journey <ArrowRight size={16} />
        </Link>

        {/* ── Return counter photo ── */}
        <div
          className="counter-img heading-animate relative overflow-hidden rounded-3xl"
          style={{ height: "clamp(200px, 32vw, 400px)" }}
        >
          <Image
            src="/images/return-counter.jpg"
            alt="ECOCAN return counter at a supermarket"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center bg-gradient-to-r from-[#101010]/70 via-[#101010]/20 to-transparent p-8 md:p-12">
            <div>
              <p className="mb-2 text-2xl font-bold text-white md:text-3xl">
                Return it right here.
              </p>
              <p className="text-base text-white/70">
                Any ECO-Station counter. No machine required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
