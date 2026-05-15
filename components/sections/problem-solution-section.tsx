"use client"

import { useRef, useEffect } from "react"
import SectionBadge from "@/components/shared/section-badge"
import ProblemIllustration from "@/components/shared/problem-illustration"

const stats = [
  { value: "30%", label: "of drinks in Africa are counterfeit" },
  { value: "80%", label: "of plastic bottles are never recovered" },
  { value: "$1B+", label: "lost to packaging waste every year" },
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
            <p className="section-overline ps-animate text-eco-green mb-6">The Problem</p>
            <h2 className="section-headline ps-animate mb-10 text-white">
              30% of drinks are fake.
              <br />
              80% of bottles wasted.
              <br />
              <span className="text-eco-green">You can fix both.</span>
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="ps-stat border-eco-green flex items-center gap-5 rounded-xl border-l-4 bg-white/[0.04] py-4 pl-6 pr-4"
                >
                  <span
                    className="text-eco-green shrink-0 font-extrabold leading-none"
                    style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium leading-snug text-white/70 md:text-base">
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

            <div className="absolute -bottom-6 -left-6 min-w-[160px] rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-xl">
              <p
                className="text-eco-green mb-1 font-extrabold leading-none"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
              >
                1M+
              </p>
              <p className="text-sm font-medium text-white/65">Bottles in our system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
