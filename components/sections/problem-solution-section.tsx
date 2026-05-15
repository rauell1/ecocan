"use client"

import { useRef, useEffect } from "react"
import SectionBadge from "@/components/shared/section-badge"
import ProblemIllustration from "@/components/shared/problem-illustration"

const stats = [
  { value: "30%", label: "of drinks in Africa are counterfeit" },
  { value: "80%", label: "of plastic bottles are never recovered" },
  { value: "$1B+", label: "lost annually to packaging waste" },
] as const

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    if (typeof IntersectionObserver === "undefined") {
      section.setAttribute("data-visible", "true")
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          section.setAttribute("data-visible", "true")
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="w-full py-[120px] md:py-[160px]"
      style={{ background: "#101010" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — copy */}
          <div>
            <SectionBadge number="01" />
            <p className="section-overline ps-animate mb-6 text-eco-green">
              The Problem
            </p>
            <h2 className="section-headline ps-animate mb-8 text-white">
              30% of drinks are fake.
              <br />
              Billions of bottles wasted.
              <br />
              <span className="text-eco-green">You can fix both.</span>
            </h2>
            <p className="section-body ps-animate mb-10 text-white/60">
              Every bottle you return is one less fake drink, one less piece of plastic in our
              oceans, and one more step toward a cleaner Africa. ECOCAN creates a closed loop:
              collect → recycle → reuse.
            </p>

            {/* Stats — redesigned for maximum readability */}
            <div className="grid grid-cols-1 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="ps-stat flex items-center gap-5 rounded-xl border-l-4 border-eco-green bg-white/[0.04] py-4 pl-6 pr-4"
                >
                  {/* Stat value */}
                  <span
                    className="shrink-0 font-extrabold leading-none text-eco-green"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                  >
                    {stat.value}
                  </span>
                  {/* Stat label */}
                  <span className="text-base font-medium leading-snug text-white/80 md:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — illustration */}
          <div className="ps-animate relative hidden items-center justify-center lg:flex">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                width: 480,
                height: 480,
                background: "#151e19",
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
              }}
            >
              <ProblemIllustration />
            </div>

            {/* 1M+ counter card */}
            <div
              className="absolute -bottom-6 -left-6 min-w-[180px] rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-xl"
            >
              <p
                className="mb-1.5 font-extrabold leading-none text-eco-green"
                style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}
              >
                1M+
              </p>
              <p className="text-base font-medium text-white/75">Bottles in our system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
