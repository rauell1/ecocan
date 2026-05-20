"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Leaf, Users, TrendingUp, Globe } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

const metrics = [
  { icon: Leaf, value: "2M+", label: "Cans collected", sub: "and growing" },
  { icon: Users, value: "50K+", label: "Active collectors", sub: "across East Africa" },
  { icon: TrendingUp, value: "KES 8M", label: "Paid out to users", sub: "via M-PESA" },
  { icon: Globe, value: "3", label: "Countries live", sub: "Kenya · Uganda · Rwanda" },
]

export default function SustainabilityImpactSection() {
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
    <section
      id="impact"
      ref={sectionRef}
      className="section-py section-alt relative w-full overflow-hidden"
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="opacity-12 absolute bottom-0 left-1/2 h-[360px] w-[700px] -translate-x-1/2 blur-[120px]"
          style={{ background: "radial-gradient(ellipse at bottom,#16a34a 0%,transparent 70%)" }}
        />
      </div>

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="ec-reveal">
            <SectionOverline>Our Impact</SectionOverline>
          </div>
          <h2 className="ec-reveal section-heading mb-5">
            Numbers that
            <br />
            <span className="text-[--c-green]">speak for themselves.</span>
          </h2>
          <p className="ec-reveal section-subhead section-subhead-center">
            Real people. Real cans. Real cash. Every metric below represents a can that didn&apos;t
            end up in a river — and a person who got paid.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {metrics.map(({ icon: Icon, value, label, sub }) => (
            <div
              key={label}
              className="ec-reveal ec-card group flex flex-col items-center p-8 text-center"
            >
              <div
                className="h-13 w-13 border-emerald-500/18 mb-5 flex items-center justify-center rounded-xl border bg-emerald-500/10 transition-transform duration-300 group-hover:scale-110"
                style={{ height: "3.25rem", width: "3.25rem" }}
              >
                <Icon size={22} className="text-emerald-400" strokeWidth={1.5} />
              </div>
              <span className="stat-number mb-1">{value}</span>
              <span className="mb-1 text-sm font-semibold text-white/80">{label}</span>
              <span className="text-xs font-medium text-white/35">{sub}</span>
            </div>
          ))}
        </div>

        {/* Quote strip */}
        <div className="ec-reveal border-white/07 mt-12 flex flex-col items-start gap-6 rounded-[--radius-card] border bg-[--c-surface] p-8 md:flex-row md:items-center md:p-10">
          <div className="select-none font-serif text-4xl leading-none text-emerald-400">
            &ldquo;
          </div>
          <div>
            <p className="max-w-[600px] text-base font-medium leading-relaxed text-white/80 md:text-lg">
              ECOCAN turned my daily commute into income. I collect on the way to work and earn
              before I reach the office.
            </p>
            <p className="mt-3 text-sm font-medium text-white/35">— Grace M., Nairobi collector</p>
          </div>
        </div>
      </div>
    </section>
  )
}
