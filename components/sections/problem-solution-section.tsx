"use client";

import { Recycle, ShieldCheck, Zap } from "lucide-react";

const problems = [
  {
    icon: <Recycle className="w-7 h-7 text-primary" />,
    title: "Bottles end up in landfills",
    body:
      "Millions of glass, plastic, and aluminium containers are discarded daily across Africa — contaminating soil, waterways, and communities.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    title: "Counterfeit drinks harm consumers",
    body:
      "Without verification, fake and adulterated beverages reach shelves unchecked — putting people's health at serious risk.",
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: "Recyclers lack fair incentives",
    body:
      "Informal recyclers do critical environmental work yet receive little recognition, data, or financial reward for their efforts.",
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-[680px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-eco-dark leading-tight mb-5">
            Africa&apos;s packaging crisis
            <br />
            needs a system-level fix.
          </h2>
          <p className="text-eco-dark/70 text-lg leading-relaxed">
            Packaging waste, counterfeit beverages, and broken recycling incentives are connected problems. ECOCAN solves all three through a single circular ecosystem.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-eco-dark/8 bg-neutral-50 p-7 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-eco-dark leading-snug">{p.title}</h3>
              <p className="text-eco-dark/65 text-[15px] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Solution statement */}
        <div className="rounded-3xl bg-eco-dark text-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80 mb-3">
              Our Solution
            </p>
            <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              One app. Every bottle. Closed loop.
            </h3>
            <p className="text-white/75 text-[15px] leading-relaxed max-w-[520px]">
              ECOCAN connects consumers, brands, eco-stations, couriers, and recyclers through a verified Deposit Return System — rewarding every participant at every step.
            </p>
          </div>
          <a
            href="/solutions"
            className="pill-btn pill-btn-filled shrink-0 text-sm !py-3 !px-7"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
