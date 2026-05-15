"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Download, ArrowRight } from "lucide-react"

export default function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".cta-animate")
      if (els && els.length > 0) {
        gsap.fromTo(
          els,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative overflow-hidden px-6 py-28 md:py-36"
      style={{
        background: "linear-gradient(135deg, #0f5132 0%, #1a7a4a 50%, #0f5132 100%)",
      }}
    >
      {/* Subtle decorative circles */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full"
        style={{ background: "rgba(255,255,255,0.035)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full"
        style={{ background: "rgba(255,255,255,0.035)" }}
      />

      <div className="relative mx-auto max-w-[680px] text-center">
        <p className="cta-animate mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          Join the Movement
        </p>
        <h2
          className="cta-animate mb-10 font-bold leading-tight text-white"
          style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.02em" }}
        >
          Ready to Return,
          <br />
          Recycle &amp; Earn?
        </h2>

        <div className="cta-animate flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/download"
            className="pill-btn pill-btn-white min-w-[180px] !px-8 !py-4 text-base transition-transform active:scale-95"
          >
            <Download size={18} />
            Download Free
          </Link>
          <Link
            href="/contact"
            className="pill-btn hover:bg-white/12 min-w-[160px] border-2 border-white/40 !px-8 !py-4 text-base text-white transition-all"
          >
            Partner with Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}
