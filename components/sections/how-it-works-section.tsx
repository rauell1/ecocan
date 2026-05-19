"use client"

import { ArrowRight, ShoppingBag, ScanLine, RotateCcw, Bike, Wallet, MapPin } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"

const steps = [
  { num: "01", title: "Buy",      desc: "Look for the ECOCAN seal on drinks.",   icon: ShoppingBag },
  { num: "02", title: "Scan",     desc: "Tap QR to verify authenticity.",         icon: ScanLine },
  { num: "03", title: "Return",   desc: "Drop empty bottle at any counter.",      icon: RotateCcw },
  { num: "04", title: "Collect",  desc: "Zero-emission cargo bike pickup.",        icon: Bike },
  { num: "05", title: "Get Paid", desc: "Instant M-PESA or bank payout.",         icon: Wallet },
]

export default function HowItWorksSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative w-full section-py section-white overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.018)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="site-container relative z-10">

        <div className="mb-20 ec-reveal">
          <SectionOverline>How It Works</SectionOverline>
          <h2 className="section-heading">
            From Your Hand,{" "}
            <span className="text-[--c-green]">Back to The Shelf.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <div key={i} className="ec-card group relative p-7 flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-[--c-green-dim] flex items-center justify-center text-[--c-green] transition-all duration-300 group-hover:bg-[--c-green] group-hover:text-white group-hover:rotate-[8deg]">
                <step.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[--c-text-faint] mb-2 block">{step.num}</span>
                <h3 className="text-base font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-1.5 text-sm text-[--c-text-muted] leading-relaxed">{step.desc}</p>
              </div>
              <div className="absolute bottom-5 left-7 right-7 h-px bg-[--c-border] group-hover:bg-[--c-green] transition-colors" />
            </div>
          ))}
        </div>

        {/* ECO-Station block */}
        <div className="ec-reveal mt-24 relative rounded-[--radius-xl] bg-[--c-dark] p-14 md:p-20 overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="space-y-5">
              <h3 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-white">
                Locate your nearest <br />
                <span className="font-semibold text-[--c-green-light] italic">ECO-Station.</span>
              </h3>
              <button className="flex items-center gap-2 border-b border-white/20 pb-1.5 hover:border-[--c-green-light] transition-colors group">
                <span className="text-sm font-medium tracking-wide uppercase text-white/60 group-hover:text-[--c-green-light]">Find a station</span>
                <ArrowRight size={13} className="text-white/60 group-hover:text-[--c-green-light] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
            <div className="h-36 w-36 flex items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <MapPin size={56} className="text-[--c-green-light] animate-pulse" strokeWidth={1} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
