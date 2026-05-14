"use client"

import Link from "next/link"
import { TrendingUp, Globe, ShieldCheck, ArrowRight } from "lucide-react"
import SectionBadge from "@/components/shared/section-badge"

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
    <section id="investors" className="px-6 py-24" style={{ background: "#f5f5f0" }}>
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 max-w-[600px]">
          <SectionBadge number="04" />
          <p className="section-overline mb-3">For Investors</p>
          <h2 className="section-headline mb-4 text-eco-dark">
            Back the infrastructure
            <br />
            Africa&apos;s circular economy needs
          </h2>
          <p className="section-body text-eco-dark/60">
            ECOCAN is building the deposit-return backbone that makes recycling profitable for
            everyone - from individual consumers to multinational brands.
          </p>
        </div>

        {/* Stats — solid white cards */}
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map((h) => {
            const Icon = h.icon
            return (
              <div
                key={h.label}
                className="border-black/8 rounded-2xl border bg-white p-7 shadow-sm"
              >
                <Icon size={24} className="mb-4 text-primary" />
                <p className="mb-1 text-[13px] uppercase tracking-widest text-eco-dark/40">
                  {h.label}
                </p>
                <p className="mb-2 text-[40px] font-bold leading-none text-eco-dark">{h.value}</p>
                <p className="text-[14px] leading-snug text-eco-dark/50">{h.note}</p>
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
            className="flex items-center gap-2 text-[15px] font-medium text-eco-dark/60 transition-colors hover:text-eco-dark"
          >
            Meet the Team <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
