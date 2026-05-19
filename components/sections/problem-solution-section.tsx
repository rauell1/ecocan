"use client"

import { AlertCircle, Trash2, TrendingUp, ArrowRight } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"

const stats = [
  { value: "30%",  label: "of drinks in Africa are counterfeit", icon: AlertCircle },
  { value: "80%",  label: "of plastic bottles never recovered",  icon: Trash2 },
  { value: "$1B+", label: "lost to packaging waste annually",    icon: TrendingUp },
]

export default function ProblemSolutionSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative w-full section-py section-alt overflow-hidden"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-5 ec-reveal">
              <SectionOverline>The Problem</SectionOverline>
              <h2 className="section-heading">
                Systemic Failure <br />
                <span className="text-[--c-text]">Demands Change.</span>
              </h2>
            </div>

            <div className="grid gap-5 ec-reveal">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="ec-card group p-7 flex items-center gap-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[--c-green-dim] text-[--c-green] transition-all duration-300 group-hover:bg-[--c-green] group-hover:text-white group-hover:rotate-[8deg]">
                    <stat.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight">{stat.value}</div>
                    <div className="text-[11px] font-semibold text-[--c-text-muted] uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 ec-reveal flex flex-col gap-7">
            <div className="relative w-full aspect-[4/3] rounded-[--radius-xl] overflow-hidden border border-[--c-border] shadow-[--shadow-lift] group">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-[1.02]">
                <source src="/videos/circular-loop.mp4" type="video/mp4" />
              </video>
            </div>

            <button className="flex items-center justify-between w-full bg-[--c-dark] rounded-[--radius-card] p-9 transition-all hover:bg-[--c-green] group">
              <span className="text-base font-medium text-white/70 group-hover:text-white transition-colors italic">Ready to join the loop?</span>
              <div className="flex items-center gap-3 font-semibold text-white group-hover:gap-7 transition-all duration-300">
                See How It Works
                <span className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 group-hover:rotate-[-45deg] transition-all duration-300">
                  <ArrowRight size={18} />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
