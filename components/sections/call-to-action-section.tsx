"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

export default function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const els = sectionRef.current!.querySelectorAll(".ec-reveal")
      gsap.fromTo(
        els,
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
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://source.unsplash.com/1600x900/?forest,green"
          alt=""
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.60)" }} />
      </div>

      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)]">
        <h2
          className="ec-reveal mb-7 font-bold text-[#f5f5f5]"
          style={{ fontSize: "clamp(2rem,5vw,4rem)", lineHeight: 1.04, letterSpacing: "-0.03em" }}
        >
          Start earning from empties.
        </h2>
        <Link
          href="https://apps.apple.com/app/6502695438"
          target="_blank"
          className="ec-reveal inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0a0a0a] transition hover:opacity-90"
        >
          Download App
        </Link>
      </div>
    </section>
  )
}
