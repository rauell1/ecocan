"use client"

import { useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { TrendingUp, Globe, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"

const highlights = [
  {
    icon: TrendingUp,
    label: "Market Opportunity",
    value: 4.5,
    suffix: "B+",
    note: "African beverage recycling market by 2030",
    accent: "#22c55e",
    detail: "East Africa alone generates 2B+ plastic bottles a year with less than 10% formal recycling rate.",
  },
  {
    icon: Globe,
    label: "Countries Targeted",
    value: 12,
    suffix: "",
    note: "East & West African markets in 5-year roadmap",
    accent: "#60a5fa",
    detail: "Starting with Kenya, scaling to Tanzania, Uganda, Rwanda and beyond within 36 months.",
  },
  {
    icon: ShieldCheck,
    label: "Anti-Counterfeit TAM",
    value: 820,
    suffix: "M",
    note: "Annual losses to fake beverages across Sub-Saharan Africa",
    accent: "#a78bfa",
    detail: "ECOCAN's QR security layer is the first verifiable on-pack authentication at scale in Africa.",
  },
]

export default function ForInvestorsSection() {
  const ref = useEcReveal()
  const [active, setActive] = useState<number | null>(null)

  const animateNumber = (i: number) => {
    const h = highlights[i]
    if (!h) return
    const valObj = { val: 0 }
    gsap.to(valObj, {
      val: h.value,
      duration: 1.4,
      ease: "power2.out",
      onUpdate: () => {
        const el = document.getElementById(`inv-stat-${i}`)
        if (el) el.innerText = valObj.val.toFixed(h.value % 1 !== 0 ? 1 : 0) + h.suffix
      },
    })
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-py section-light-inv relative w-full overflow-hidden"
    >
      <div className="site-container">
        <div className="ec-reveal mb-16">
          <SectionOverline>For Investors</SectionOverline>
          <h2 className="section-heading" style={{ color: "#111827" }}>
            Backing the consumer loop
            <br />
            <span style={{ color: "#6B7280", fontWeight: 400 }}>
              means backing core recycling infrastructure.
            </span>
          </h2>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {highlights.map((h, i) => {
            const Icon = h.icon
            return (
              <div
                key={i}
                className="ec-card-light ec-reveal group flex cursor-default flex-col p-8"
                style={{ borderTop: `3px solid ${h.accent}` }}
                onMouseEnter={() => { setActive(i); animateNumber(i) }}
                onMouseLeave={() => setActive(null)}
              >
                <div className="mb-7 flex items-center justify-between">
                  <div
                    className="rounded-xl p-3 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
                    style={{ background: h.accent + "15", color: h.accent }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors group-hover:text-gray-700">
                    {h.label}
                  </span>
                </div>
                <h3 id={`inv-stat-${i}`} className="mb-2 text-5xl font-extrabold tracking-tighter" style={{ color: "#111827" }}>
                  {h.value}{h.suffix}
                </h3>
                <p className="mb-auto text-sm font-medium text-gray-500">{h.note}</p>
                <p className="mt-6 border-t border-gray-100 pt-5 text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-500">
                  {h.detail}
                </p>
              </div>
            )
          })}
        </div>

        <div className="ec-reveal flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[--c-green-mid] px-9 py-4 font-semibold text-white shadow-lg shadow-green-600/15 hover:bg-[#15803d] active:scale-95"
          >
            Request Investor Deck{" "}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 px-7 py-4 font-semibold text-gray-500 transition-colors hover:text-[--c-green-mid]"
          >
            Meet the Team <ExternalLink size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
