"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

const metrics = [
  { value: "KES 8M", label: "paid to collectors" },
  { value: "50K+", label: "active users" },
  { value: "3", label: "markets live" },
]

export default function ForInvestorsSection() {
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
      id="investors"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://source.unsplash.com/1600x900/?finance,growth,chart"
          alt=""
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)" }} />
      </div>

      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)]">
        <h2
          className="ec-reveal mb-10 font-bold text-[#f5f5f5]"
          style={{ fontSize: "clamp(2rem,5vw,4.5rem)", lineHeight: 1.04, letterSpacing: "-0.03em" }}
        >
          Build circular infrastructure with us.
        </h2>

        <div className="ec-reveal grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {metrics.map(({ value, label }) => (
            <div key={label} className="bg-white/5 px-6 py-7">
              <p className="text-3xl font-bold text-[#f5f5f5]">{value}</p>
              <p className="mt-1 text-sm text-white/50">{label}</p>
            </div>
          ))}
        </div>

        <div className="ec-reveal mt-8">
          <Link
            href="/investors"
            className="inline-flex items-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-[#f5f5f5] transition hover:bg-white hover:text-black"
          >
            Download Deck
          </Link>
        </div>
      </div>
    </section>
  )
}
