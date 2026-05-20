"use client"

import { ArrowRight, ShoppingBag, ScanLine, RotateCcw, Bike, Wallet, MapPin } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"

const steps = [
  { num: "01", title: "Buy",      icon: ShoppingBag },
  { num: "02", title: "Scan",     icon: ScanLine },
  { num: "03", title: "Return",   icon: RotateCcw },
  { num: "04", title: "Collect",  icon: Bike },
  { num: "05", title: "Get Paid", icon: Wallet },
]

export default function HowItWorksSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative w-full section-py section-white overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.018)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="site-container relative z-10">
        <div className="ec-reveal mb-16">
          <SectionOverline>How It Works</SectionOverline>
          <h2 className="section-heading">
            From Your Hand,{" "}
            <span className="text-[--c-green]">Back to The Shelf.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="ec-reveal ec-card group relative flex flex-col gap-4 p-6">
              <div className="ec-icon-well group-hover:bg-[--c-green] group-hover:text-white transition-colors duration-300">
                <step.icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[--c-text-faint] mb-1 block">{step.num}</span>
                <h3 className="text-base font-semibold tracking-tight">{step.title}</h3>
              </div>
              {/* Bottom accent line */}
              <div className="absolute bottom-4 left-6 right-6 h-px bg-[--c-border] group-hover:bg-[--c-green] transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* ECO-Station CTA block */}
        <div className="ec-reveal mt-20 relative rounded-[--radius-xl] bg-[--c-dark] px-14 py-12 md:px-20 md:py-16 overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-white">
                Find your nearest{" "}
                <span className="font-semibold text-[--c-green-light] italic">ECO-Station.</span>
              </h3>
              <button className="flex items-center gap-2 border-b border-white/20 pb-1.5 hover:border-[--c-green-light] transition-colors group">
                <span className="text-sm font-medium tracking-wide uppercase text-white/60 group-hover:text-[--c-green-light]">
                  Find a station
                </span>
                <ArrowRight
                  size={13}
                  className="text-white/60 group-hover:text-[--c-green-light] group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </button>
            </div>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[--c-green-dim] border border-[rgba(74,222,128,0.2)]">
              <MapPin size={40} className="text-[--c-green-light]" strokeWidth={1.25} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
