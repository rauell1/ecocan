"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionBadge from "@/components/shared/section-badge"
import ProblemIllustration from "@/components/shared/problem-illustration"

const GREEN = "#4ade80"

const stats = [
  { value: "30%", label: "of drinks in Africa are counterfeit" },
  { value: "80%", label: "of plastic bottles are never recovered" },
  { value: "$1B+", label: "lost to packaging waste every year" },
] as const

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Headline + overline
      const headingEls = sectionRef.current?.querySelectorAll(".ps-heading")
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

      // Stat cards stagger up
      const statCards = sectionRef.current?.querySelectorAll(".ps-stat")
      if (statCards && statCards.length > 0) {
        gsap.fromTo(
          statCards,
          { opacity: 0, x: -32 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true },
          }
        )
      }

      // Illustration
      const illus = sectionRef.current?.querySelector(".ps-illus")
      if (illus) {
        gsap.fromTo(
          illus,
          { opacity: 0, scale: 0.96, y: 24 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: illus, start: "top 80%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="w-full py-[120px] md:py-[160px]"
      style={{ background: "#101010" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* ── Left: headline + stat cards ── */}
          <div>
            <div className="ps-heading">
              <SectionBadge number="01" />
            </div>
            <p
              className="ps-heading mb-5 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: GREEN }}
            >
              The Problem
            </p>
            <h2
              className="ps-heading mb-5 font-bold text-white"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              30% of drinks are fake.
              <br />
              Billions of bottles wasted.
              <br />
              <span style={{ color: GREEN }}>You can fix both.</span>
            </h2>

            <p
              className="ps-heading mb-3 text-[16px] font-medium"
              style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "-0.01em" }}
            >
              One empty at a time.
            </p>

            {/* Body text */}
            <p
              className="ps-heading mb-10 max-w-[460px] text-[15px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Every bottle you return is one less fake drink, one less piece of plastic in our
              oceans, and one more step toward a cleaner Africa. ECOCAN creates a closed loop:
              collect → recycle → reuse. Every bottle is traceable.
            </p>

            {/* Stat cards */}
            <div className="flex flex-col gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="ps-stat group flex items-center gap-5 overflow-hidden rounded-xl py-5 pl-5 pr-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderLeft: `3px solid ${GREEN}`,
                  }}
                >
                  {/* Number — explicit color, never inherits */}
                  <span
                    className="shrink-0 font-extrabold tabular-nums leading-none"
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 3rem)",
                      color: GREEN,
                    }}
                  >
                    {stat.value}
                  </span>

                  {/* Divider */}
                  <span
                    className="h-8 w-px shrink-0"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  />

                  {/* Label */}
                  <span
                    className="text-[15px] font-medium leading-snug"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: illustration ── */}
          <div className="ps-illus relative hidden items-center justify-center lg:flex">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                width: 480,
                height: 480,
                background: "#151e19",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              }}
            >
              <ProblemIllustration />
            </div>

            {/* 1M+ floating card */}
            <div
              className="absolute -bottom-5 -left-5 min-w-[164px] rounded-2xl p-5"
              style={{
                background: "rgba(15,25,18,0.92)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(16px)",
              }}
            >
              <p
                className="mb-1 font-extrabold leading-none"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  color: GREEN,
                }}
              >
                1M+
              </p>
              <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                Bottles in our system
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
