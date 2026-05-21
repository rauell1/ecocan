"use client"

import { useEcReveal } from "@/lib/use-ec-reveal"

const stats = [
  { value: "3", label: "active markets" },
  { value: "50K+", label: "monthly collectors" },
  { value: "100%", label: "traceable returns" },
]

export default function EcocanModelSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="px-[clamp(1.25rem,4vw,3rem)]">
        <h2
          className="ec-reveal mb-10 font-bold text-[#f5f5f5]"
          style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-0.02em" }}
        >
          Circular model at scale
        </h2>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="ec-reveal bg-white/5 px-6 py-7">
              <p className="text-3xl font-bold text-[#f5f5f5]">{stat.value}</p>
              <p className="mt-1 text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
