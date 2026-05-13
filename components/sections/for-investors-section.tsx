"use client"

import Link from "next/link"
import { TrendingUp, Globe, ShieldCheck, ArrowRight } from "lucide-react"

const highlights = [
  {
    icon: TrendingUp,
    label: "Market Opportunity",
    value: "$4.5B+",
    note: "African beverage recycling market by 2030",
  },
  {
    icon: Globe,
    label: "Countries Targeted",
    value: "12",
    note: "East & West African markets in 5-year roadmap",
  },
  {
    icon: ShieldCheck,
    label: "Anti-Counterfeit TAM",
    value: "$820M",
    note: "Annual losses to fake beverages across SSA",
  },
]

export default function ForInvestorsSection() {
  return (
    <section id="investors" className="bg-[#101010] px-6 py-24 text-white">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 max-w-[600px]">
          <p className="section-overline mb-3" style={{ color: "#4ade80" }}>
            For Investors
          </p>
          <h2 className="section-headline mb-4 text-white">
            Back the infrastructure
            <br />
            Africa&apos;s circular economy needs
          </h2>
          <p className="section-body text-white/60">
            ECOCAN is building the deposit-return backbone that makes recycling profitable for
            everyone - from individual consumers to multinational brands.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map((h) => {
            const Icon = h.icon
            return (
              <div
                key={h.label}
                className="rounded-2xl p-7"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Icon size={24} className="mb-4 text-primary" />
                <p className="mb-1 text-[13px] uppercase tracking-widest text-white/50">
                  {h.label}
                </p>
                <p className="mb-2 text-[40px] font-bold leading-none text-white">{h.value}</p>
                <p className="text-[14px] leading-snug text-white/50">{h.note}</p>
              </div>
            )
          })}
        </div>

        {/* CTA row */}
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="pill-btn pill-btn-filled !px-9 !py-4 text-base transition-transform active:scale-95"
          >
            Request Investor Deck
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/about-us"
            className="flex items-center gap-2 text-[15px] font-medium text-white/70 transition-colors hover:text-white"
          >
            Meet the Team <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
