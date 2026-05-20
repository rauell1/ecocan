"use client"

import { AlertCircle, Trash2, TrendingUp } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

const stats = [
  { value: "30%",     label: "of drinks sold in Kenya may be counterfeit",       icon: AlertCircle, color: "#f87171" },
  { value: "80%",     label: "of plastic bottles miss formal recycling channels",  icon: Trash2,       color: "#facc15" },
  { value: "KES Bn+", label: "lost every year from discarded empties in landfills", icon: TrendingUp,   color: "#4ade80" },
]

export default function ProblemSolutionSection() {
  return (
    <section className="ps-reveal section-py section-alt relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:5rem_5rem]" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">

          {/* LEFT */}
          <div className="flex flex-col gap-10 lg:col-span-5">
            <div className="space-y-4">
              <SectionOverline>The Problem</SectionOverline>
              <h2 className="section-heading">
                Unsafe drinks.<br />
                <span className="text-[--c-green-light]">Wasted empties.</span>
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-[--c-text-muted]">
                Millions of Kenyan households drink without knowing whether their bottle is real or refilled with a dangerous substitute. Meanwhile, the same bottle ends up in a ditch instead of a recycler.
              </p>
            </div>

            <div className="grid gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="ps-reveal ec-card group flex items-center gap-5 p-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300"
                    style={{ background: stat.color + "1a", color: stat.color }}
                  >
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
          <div className="ps-reveal flex flex-col gap-6 lg:col-span-7">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[--radius-xl] border border-[--c-border] shadow-[--shadow-lift]">
              <video autoPlay loop muted playsInline className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-[1.02]">
                <source src="/videos/circular-loop.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6">
                <span className="rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/60 backdrop-blur-sm">
                  The plastic problem is solvable
                </span>
              </div>
            </div>

            <button className="group flex w-full items-center justify-between rounded-[--radius-card] border border-[--c-border] bg-[--c-surface] px-8 py-7 transition-all hover:border-[--c-green]/30 hover:bg-[--c-surface-alt]">
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-[--c-green]">Our Solution</p>
                <p className="mt-1 text-base font-semibold">See how ECOCAN closes the loop</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[--c-green]/10 transition-all group-hover:bg-[--c-green]/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[--c-green] transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
