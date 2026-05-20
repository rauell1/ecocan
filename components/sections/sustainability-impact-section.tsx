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
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://source.unsplash.com/1600x900/?nature,green,sustainability"
          alt=""
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(5,46,22,0.7) 100%)",
          }}
        />
      </div>
      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)]">
        <p
          ref={statRef}
          className="ec-reveal text-center font-bold text-[#f5f5f5]"
          style={{
            fontSize: "clamp(4rem,16vw,12rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            textShadow: "0 0 60px rgba(34,197,94,0.3)",
          }}
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
