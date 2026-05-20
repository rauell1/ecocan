"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const stats = [
  { value: "< 5%", label: "recycled today" },
  { value: "KES 2", label: "paid per can" },
  { value: "100%", label: "traceable" },
]

export default function SustainabilityImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".ec-reveal"),
        { opacity: 0, y: 28, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="px-[clamp(1.25rem,4vw,3rem)]">
        <p
          className="ec-reveal text-center font-bold text-[#f5f5f5]"
          style={{ fontSize: "clamp(4rem,16vw,12rem)", lineHeight: 0.95, letterSpacing: "-0.04em" }}
        >
          12 billion
        </p>
        <p className="ec-reveal mt-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          cans recycled annually in East Africa
        </p>

        <div className="ec-reveal mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white/5 px-6 py-7 text-left">
              <p className="text-3xl font-bold text-[#f5f5f5]" style={{ letterSpacing: "-0.02em" }}>
                {value}
              </p>
              <p className="mt-1 text-sm text-white/50">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
