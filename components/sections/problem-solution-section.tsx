"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ProblemSolutionSection() {
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
    <section id="problem" ref={sectionRef} className="section-py relative w-full bg-[#0a0a0a]">
      <div className="px-[clamp(1.25rem,4vw,3rem)]">
        <p
          className="ec-reveal font-bold text-[#f5f5f5]"
          style={{ fontSize: "clamp(2rem,6vw,5rem)", lineHeight: 1.03, letterSpacing: "-0.03em" }}
        >
          40% of drinks are fake. We fix that.
        </p>
      </div>
    </section>
  )
}
