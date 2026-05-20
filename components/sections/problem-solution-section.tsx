"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section id="problem" ref={sectionRef} className="section-py relative w-full overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://source.unsplash.com/1600x900/?recycling,aluminium"
          alt=""
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)" }} />
      </div>
      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)]">
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
