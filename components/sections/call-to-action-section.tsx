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
      const section = sectionRef.current
      if (!section) return
      const els = section.querySelectorAll(".ec-reveal")
      if (!els.length) return
      gsap.fromTo(
        els,
        { opacity: 0, y: 28, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 75%", once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#052e16] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="px-[clamp(1.25rem,4vw,3rem)]">
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
