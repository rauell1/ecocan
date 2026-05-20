"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const steps = [
  { step: "01", label: "Scan" },
  { step: "02", label: "Verify" },
  { step: "03", label: "Earn" },
]

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const targets = sectionRef.current!.querySelectorAll(".ec-reveal")
      if (targets.length === 0) return
      gsap.fromTo(
        targets,
        { opacity: 0, y: 28, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.11,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="section-py relative w-full bg-[#0a0a0a]">
      <div className="px-[clamp(1.25rem,4vw,3rem)]">
        <h2
          className="ec-reveal mb-10 font-bold text-[#f5f5f5]"
          style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-0.02em" }}
        >
          How it works
        </h2>

        <div className="relative border-l border-white/10 pl-7 md:pl-10">
          {steps.map(({ step, label }, idx) => (
            <div key={step} className={`ec-reveal ${idx < steps.length - 1 ? "mb-10" : ""}`}>
              <p
                className="leading-none text-white/20"
                style={{
                  fontSize: "clamp(3rem,8vw,6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                }}
              >
                {step}
              </p>
              <p className="mt-2 text-lg font-semibold text-[#f5f5f5]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
