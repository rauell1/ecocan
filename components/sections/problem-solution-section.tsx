"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AlertTriangle, Recycle, ShieldCheck, Coins } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

const problems = [
  { icon: AlertTriangle, label: "Fake alcohol kills" },
  { icon: Recycle,       label: "Plastic chokes waterways" },
]

const solutions = [
  { icon: ShieldCheck, label: "QR-verified authenticity" },
  { icon: Coins,       label: "Paid recycling incentives" },
]

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".ec-reveal"),
        { opacity: 0, y: 28, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.10, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="problem" ref={sectionRef} className="relative w-full section-py section-alt overflow-hidden">
      {/* Subtle noise bg */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="max-w-[640px] mb-16">
          <div className="ec-reveal">
            <SectionOverline>The Challenge</SectionOverline>
          </div>
          <h2 className="ec-reveal section-heading mb-5">
            A broken system<br />
            <span className="text-[--c-green]">we&apos;re fixing.</span>
          </h2>
          <p className="ec-reveal section-subhead">
            Counterfeit drinks and plastic waste are two sides of the same broken supply chain — ECOCAN closes both loops.
          </p>
        </div>

        {/* Two-column contrast grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Problem card */}
          <div className="ec-reveal ec-card group p-8 md:p-10" style={{ borderColor: "rgba(239,68,68,0.18)", background: "rgba(239,68,68,0.03)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">The Problem</span>
            </div>
            <div className="space-y-4">
              {problems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
                    <Icon size={18} className="text-red-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-base font-medium text-white/75">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution card */}
          <div className="ec-reveal ec-card group p-8 md:p-10" style={{ borderColor: "rgba(34,197,94,0.20)", background: "rgba(34,197,94,0.04)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">The ECOCAN Fix</span>
            </div>
            <div className="space-y-4">
              {solutions.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <Icon size={18} className="text-emerald-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-base font-medium text-white/75">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Impact stats strip */}
        <div className="ec-reveal mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/07 rounded-[--radius-card] overflow-hidden">
          {[
            { value: "40%",  label: "of drinks are counterfeit" },
            { value: "12B+", label: "cans generated yearly" },
            { value: "< 5%", label: "recycling rate in EA" },
            { value: "$8B",  label: "lost to fake goods annually" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center justify-center p-7 text-center bg-[--c-surface]">
              <span className="stat-number mb-1">{value}</span>
              <span className="text-xs text-white/45 font-medium leading-snug max-w-[14ch]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
