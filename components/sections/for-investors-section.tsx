"use client";

import Link from "next/link";
import { TrendingUp, Globe, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Recurring revenue model",
    body: "Transaction fees, brand licensing, and data insights create multiple compounding income streams.",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Pan-African scalability",
    body: "Our Deposit Return System model is jurisdiction-ready and designed to replicate across Sub-Saharan Africa.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Regulatory tailwinds",
    body: "Extended Producer Responsibility legislation is being enacted across East Africa — creating a mandated market for ECOCAN.",
  },
];

export default function ForInvestorsSection() {
  return (
    <section id="investors" className="py-24 px-6 bg-eco-dark text-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-14 max-w-[600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            For Investors
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Investing in Africa&apos;s
            <br />
            circular economy.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            ECOCAN sits at the intersection of sustainability mandates, consumer technology, and brand protection — a market with structural growth drivers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-white leading-snug">{p.title}</h3>
              <p className="text-white/60 text-[14px] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/contact"
            className="pill-btn pill-btn-filled text-sm !py-3 !px-7"
          >
            Request Investor Deck
          </Link>
          <Link
            href="/about-us"
            className="text-white/70 hover:text-white text-[15px] font-medium transition-colors underline underline-offset-4"
          >
            Learn more about our team
          </Link>
        </div>
      </div>
    </section>
  );
}
