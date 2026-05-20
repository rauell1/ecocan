"use client"

import { ShoppingBag, ScanLine, RotateCcw, Bike, Wallet, MapPin, ArrowRight } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

const steps = [
  { num: "01", title: "Buy",      desc: "Pick any ECOCAN-tagged drink at your local shop.",            icon: ShoppingBag },
  { num: "02", title: "Scan",     desc: "Tap the QR code to verify it's genuine before you drink.",   icon: ScanLine },
  { num: "03", title: "Return",   desc: "Drop the empty at any ECO-Station near you.",                icon: RotateCcw },
  { num: "04", title: "Collect",  desc: "Our electric cargo fleet picks it up for recycling.",        icon: Bike },
  { num: "05", title: "Get Paid", desc: "Rewards land in your M-PESA wallet instantly.",             icon: Wallet },
]

export default function HowItWorksSection() {
  return (
    <section className="ps-reveal relative w-full section-py section-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="site-container relative z-10">
        <div className="mb-16">
          <SectionOverline>How It Works</SectionOverline>
          <h2 className="section-heading">
            From Your Hand,{" "}
            <span style={{ background: "linear-gradient(90deg,#4ade80,#22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Back to The Shelf.
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[--c-text-muted]">
            Five simple steps close the bottle loop — and put money in your pocket every time.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-[2.2rem] hidden h-px lg:block"
            style={{ background: "linear-gradient(90deg, transparent 4%, rgba(34,197,94,0.20) 20%, rgba(34,197,94,0.20) 80%, transparent 96%)" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {steps.map((step, i) => (
              <div key={i} className="ps-reveal ec-card group relative flex flex-col gap-5 p-7">
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[--c-border] bg-[--c-surface-alt] text-[11px] font-black tracking-wider text-[--c-green] group-hover:border-[--c-green]/40 group-hover:bg-[--c-green]/10 transition-colors duration-300">
                  {step.num}
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <step.icon size={16} strokeWidth={2} className="text-[--c-green]" />
                    <h3 className="text-base font-bold tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-[13px] leading-relaxed text-[--c-text-muted]">{step.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-[--radius-card] bg-transparent group-hover:bg-[--c-green] transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="ps-reveal mt-16 relative overflow-hidden rounded-[--radius-xl]" style={{ background: "linear-gradient(135deg, #080A08 0%, #0f1a0f 100%)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(34,197,94,0.12) 0%, transparent 60%)" }} />
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 px-10 py-12 md:flex-row md:items-center md:px-16">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[--c-green]/70">Drop-off Network</span>
              <h3 className="text-2xl font-light tracking-tight text-white md:text-3xl">
                Find your nearest{" "}
                <span className="font-bold italic text-[--c-green-light]">ECO-Station.</span>
              </h3>
              <p className="text-sm text-white/50">Over 150 collection points across Kenya and growing every week.</p>
              <button className="flex items-center gap-2 border-b border-white/20 pb-1 hover:border-[--c-green-light] transition-colors group">
                <span className="text-sm font-semibold uppercase tracking-widest text-white/55 group-hover:text-[--c-green-light]">Find a Station</span>
                <ArrowRight size={13} className="text-white/55 group-hover:text-[--c-green-light] group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[--c-green]/20 bg-[--c-green]/10">
              <MapPin size={44} className="text-[--c-green-light]" strokeWidth={1.25} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
