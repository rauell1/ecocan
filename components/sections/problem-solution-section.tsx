"use client"

import { AlertCircle, Trash2, TrendingUp, ArrowRight } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"

const stats = [
  { value: "30%", label: "of drinks sold may be counterfeit", icon: AlertCircle },
  { value: "80%", label: "of bottles miss formal recycling", icon: Trash2 },
  { value: "KES Bn+", label: "lost yearly from discarded empties", icon: TrendingUp },
]

export default function ProblemSolutionSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-py section-alt relative w-full overflow-hidden"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          {/* LEFT */}
          <div className="flex flex-col gap-10 lg:col-span-5">
            <div className="ec-reveal space-y-4">
              <SectionOverline>The Problem</SectionOverline>
              <h2 className="section-heading">
                Unsafe drinks.
                <br />
                <span className="text-[--c-text]">Wasted empties.</span>
              </h2>
            </div>

            <div className="ec-reveal grid gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="ec-card group flex items-center gap-5 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[--c-green-dim] text-[--c-green] transition-all duration-300 group-hover:bg-[--c-green] group-hover:text-white">
                    <stat.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
                    <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest text-[--c-text-muted]">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="ec-reveal flex flex-col gap-6 lg:col-span-7">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[--radius-xl] border border-[--c-border] shadow-[--shadow-lift]">
              <video autoPlay loop muted playsInline className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-[1.02]">
                <source src="/videos/circular-loop.mp4" type="video/mp4" />
              </video>
            </div>

            <button className="group flex w-full items-center justify-between rounded-[--radius-card] bg-[--c-dark] px-8 py-7 transition-all hover:bg-[--c-green]">
              <span className="text-sm font-medium italic text-white/60 transition-colors group-hover:text-white">Ready to earn while recycling?</span>
              <div className="flex items-center gap-3 font-semibold text-white transition-all duration-300 group-hover:gap-6">
                Start Now
                <span className="rounded-full bg-white/10 p-2.5 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-white/20">
                  <ArrowRight size={16} />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
