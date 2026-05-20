"use client"

import { Store, Factory, Bike } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"

const columns = [
  {
    icon: Store,
    title: "Retailers",
    desc: "Collection points. More foot traffic. Happier customers.",
  },
  {
    icon: Factory,
    title: "Producers",
    desc: "Packaging recovered. Counterfeits stopped. Brand protected.",
  },
  {
    icon: Bike,
    title: "Logistics",
    desc: "Last-mile collection. Lower costs. Zero emissions.",
  },
]

export default function EcocanModelSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative w-full section-py section-alt overflow-hidden"
    >
      <div className="site-container">
        {/* Header */}
        <div className="ec-reveal mb-16 text-center">
          <SectionOverline>The ECOCAN Model</SectionOverline>
          <h2 className="section-heading">
            We don&apos;t do this alone.{" "}
            <span className="font-light text-[--c-text-muted]">That&apos;s the point.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <div key={i} className="ec-reveal ec-card group flex flex-col gap-6 p-8">
              <div className="ec-icon-well group-hover:bg-[--c-green] group-hover:text-white transition-colors duration-300">
                <col.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold tracking-tight">{col.title}</h3>
                <p className="text-sm leading-relaxed text-[--c-text-muted]">{col.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-text */}
        <div className="ec-reveal mt-16 flex justify-center">
          <p className="text-sm text-[--c-text-muted] max-w-2xl text-center leading-relaxed">
            ECOCAN integrates into existing supply chains — supermarket counters, not just
            machines. Electric bikes, not just trucks. Circularity, not waste.
          </p>
        </div>
      </div>
    </section>
  )
}
