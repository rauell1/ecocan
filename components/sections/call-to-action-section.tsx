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
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
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
      className="relative overflow-hidden px-6 py-28"
      style={{
        background: "linear-gradient(135deg, #0f5132 0%, #1a7a4a 50%, #0f5132 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full"
        style={{ background: "rgba(255,255,255,0.04)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full"
        style={{ background: "rgba(255,255,255,0.04)" }}
      />

      <div className="relative mx-auto max-w-[760px] text-center">
        <p className="cta-animate mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
          Join the Movement
        </p>
        <h2
          className="cta-animate mb-5 font-bold leading-tight text-white"
          style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
        >
          Ready to Return,
          <br />
          Recycle &amp; Earn?
        </h2>
        <p className="cta-animate mx-auto mb-10 max-w-[480px] text-lg leading-relaxed text-white/75">
          Download the free ECOCAN app, find your nearest ECO-Station, and earn rewards every time
          you return a bottle.
        </p>

        <div className="cta-animate mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/download"
            className="pill-btn pill-btn-white min-w-[200px] !px-8 !py-4 text-base transition-transform active:scale-95"
          >
            <Download size={20} />
            Download Free App
          </Link>
          <Link
            href="/contact"
            className="pill-btn min-w-[200px] border-2 border-white/50 !px-8 !py-4 text-base text-white transition-all hover:bg-white/15"
          >
            Partner with Us
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Trust badges */}
        <div className="cta-animate flex flex-wrap items-center justify-center gap-3">
          {["Free to download", "M-Pesa cashout", "500+ ECO-Stations", "No sign-up fee"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full px-4 py-1.5 text-[13px] font-medium text-white/70"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                ✓&nbsp;&nbsp;{item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}
