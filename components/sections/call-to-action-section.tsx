"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

export default function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".ec-reveal"),
        { opacity: 0, y: 28, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full section-py section-dark overflow-hidden">

      {/* Layered green glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-15 blur-[160px]"
             style={{ background: "radial-gradient(circle,#22c55e 0%,transparent 65%)" }} />
        <div className="absolute left-1/4 bottom-0 h-[300px] w-[300px] opacity-08 blur-[100px]"
             style={{ background: "radial-gradient(circle,#16a34a 0%,transparent 70%)" }} />
      </div>

      <div className="site-container relative z-10">
        <div className="mx-auto max-w-[780px] flex flex-col items-center text-center">

          <div className="ec-reveal">
            <SectionOverline inv>Join the Loop</SectionOverline>
          </div>

          <h2 className="ec-reveal section-heading section-heading-inv mb-6" style={{ fontSize: "clamp(2.25rem,1.6rem + 2.5vw,3.75rem)" }}>
            Your empties are<br />
            <span style={{ background: "linear-gradient(90deg,#86efac,#4ade80,#22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              worth something.
            </span>
          </h2>

          <p className="ec-reveal section-subhead section-subhead-center mb-10 text-white/55">
            Download the ECOCAN app, scan your first bottle, and start earning — today.
          </p>

          <div className="ec-reveal flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://apps.apple.com/app/6502695438"
              target="_blank"
              className="btn-primary text-sm"
            >
              Download the App
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link
              href="/solutions"
              className="btn-ghost text-sm"
            >
              Partner with us
            </Link>
          </div>

          {/* Social proof strip */}
          <div className="ec-reveal mt-12 flex flex-wrap items-center justify-center gap-6 text-white/30">
            {[
              { value: "4.8★", label: "App Store rating" },
              { value: "50K+", label: "Active users" },
              { value: "Free", label: "No subscription" },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-sm font-bold text-white/60">{value}</span>
                <span className="text-xs text-white/30">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
