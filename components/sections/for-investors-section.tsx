"use client";

import Link from "next/link";
import { TrendingUp, Globe, ShieldCheck, ArrowRight } from "lucide-react";

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
];

export default function ForInvestorsSection() {
  return (
    <section id="investors" className="py-20 md:py-28 lg:py-36 bg-[#101010] text-white border-t border-white/8">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-[600px] mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">For Investors</p>
          <h2 className="section-headline text-white mb-4">
            Back the infrastructure<br />Africa&apos;s circular economy needs
          </h2>
          <p className="section-body text-white/80">
            ECOCAN is building the deposit-return backbone that makes recycling profitable for
            everyone — from individual consumers to multinational brands.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.label}
                className="rounded-2xl p-7"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Icon size={24} className="text-primary mb-4" />
                <p className="text-[13px] text-white/50 uppercase tracking-widest mb-1">{h.label}</p>
                <p className="text-[40px] font-bold text-white leading-none mb-2">{h.value}</p>
                <p className="text-[14px] text-white/50 leading-snug">{h.note}</p>
              </div>
            );
          })}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <Link
            href="/contact"
            className="pill-btn pill-btn-filled !py-4 !px-9 text-base active:scale-95 transition-transform"
          >
            Request Investor Deck
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/about-us"
            className="text-white/70 hover:text-white font-medium flex items-center gap-2 transition-colors text-[15px]"
          >
            Meet the Team <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
