"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ShieldCheck } from "lucide-react"
import SectionBadge from "@/components/shared/section-badge"

export default function AntiCounterfeitSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textColRef = useRef<HTMLDivElement>(null)
  const imageColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      }

      // ── Left column: text elements slide in from the left ──────────────
      if (textColRef.current) {
        const els = textColRef.current.querySelectorAll(".text-slide")
        if (els.length > 0) {
          gsap.fromTo(
            els,
            { opacity: 0, x: -80 },
            {
              opacity: 1,
              x: 0,
              duration: 0.85,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: trigger,
            }
          )
        }
      }

      // ── Right column: image slides in from the right ───────────────────
      if (imageColRef.current) {
        gsap.fromTo(
          imageColRef.current,
          {
            opacity: 0,
            x: 100,
            scale: 0.96,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.05,
            delay: 0.18, // slightly after text starts
            ease: "power3.out",
            scrollTrigger: trigger,
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const traceSteps = [
    { icon: "🏭", label: "Producer registers bottle with unique QR code" },
    { icon: "🛒", label: "Consumer scans to verify before drinking" },
    { icon: "♻️", label: "Empty returned to ECO-Station — code invalidated" },
    { icon: "🚫", label: "Refilled fake? Code fails scan instantly" },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden py-[120px] md:py-[160px]"
      style={{ background: "#101010" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* ── Left: text ──────────────────────────────────────────────── */}
          <div ref={textColRef} className="lg:col-span-3">
            <div className="text-slide">
              <SectionBadge number="06" />
            </div>

            <p className="section-overline text-slide mb-6">Anti-Counterfeit</p>

            <h2 className="section-headline text-slide mb-6 text-white">
              Fake alcohol kills.
              <br />
              We stop it.
            </h2>

            <p className="section-body text-slide mb-8 max-w-[520px] text-white/70">
              Every bottle in our system is traceable from producer to return. Criminals can&apos;t
              refill what they can&apos;t collect.
            </p>

            {/* Stat callout */}
            <div
              className="text-slide mb-10 inline-flex items-center gap-4 rounded-2xl border border-primary/30 px-6 py-4"
              style={{ background: "rgba(42,122,79,0.1)" }}
            >
              <ShieldCheck size={28} className="shrink-0 text-primary" />
              <p className="text-lg font-bold text-white md:text-xl">
                2 out of 5 drinks in Africa are counterfeit
              </p>
            </div>

            {/* Traceability steps */}
            <p className="text-slide mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              How traceability works
            </p>
            <div className="text-slide space-y-3">
              {traceSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg leading-none">{step.icon}</span>
                  <p className="text-[14px] leading-snug text-white/65">{step.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: image — slides in from the right ──────────────────── */}
          <div className="lg:col-span-2">
            <div
              ref={imageColRef}
              className="overflow-hidden rounded-3xl shadow-elevated lg:translate-x-8"
            >
              <Image
                src="/images/counterfeit-alert.jpg"
                alt="Counterfeit vs verified bottles"
                width={600}
                height={800}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
