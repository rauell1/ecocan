"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const stats = [
  {
    value: "< 5%",
    label: "Recycled Today",
    desc: "The current regional rate of post-consumer aluminum recovery across urban centers.",
  },
  {
    value: "KES 2.00",
    label: "Paid Per Deposit",
    desc: "Instant liquidity credited to user wallets per verified physical return.",
  },
  {
    value: "100%",
    label: "Real-Time Traceable",
    desc: "End-to-end blockchain provenance from consumer hand to final foundry ingot.",
  },
]

export default function SustainabilityImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const targets = sectionRef.current!.querySelectorAll(".ec-reveal")
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

      if (statRef.current) {
        gsap.fromTo(
          statRef.current,
          { scale: 0.92, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          }
        )
      }

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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-transparent py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/sustainability_hero.png"
          alt="Green plant growing out of recycled aluminum"
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(var(--c-bg-rgb), var(--c-overlay-opacity-start, 0.6)) 0%, rgba(var(--c-bg-rgb), var(--c-overlay-opacity-end, 0.92)) 100%)",
          }}
        />
      </div>
      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)]">
        <p
          ref={statRef}
          className="ec-reveal font-serif-luxury text-luxury-gradient text-center"
          style={{
            fontSize: "clamp(3.5rem,14vw,9rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
          }}
        >
          12 billion
        </p>
        <p className="ec-reveal mt-6 text-center text-[13px] font-medium uppercase tracking-[0.18em] text-emerald-400">
          cans discarded annually in East Africa
        </p>

        <div className="ec-reveal mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">
          {stats.map(({ value, label, desc }) => (
            <SpotlightCard
              key={label}
              className="rounded-3xl border-[var(--c-border)] bg-[var(--c-surface)] p-8 transition-all duration-300 hover:border-emerald-500/20"
            >
              <p
                className="font-serif-luxury text-4xl font-light text-[var(--c-text)] transition-colors duration-300 group-hover:text-emerald-400"
                style={{ letterSpacing: "-0.02em" }}
              >
                {value}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-400">
                {label}
              </p>
              <p className="mt-2 text-[13px] font-normal leading-relaxed text-[var(--c-text-muted)]">
                {desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
