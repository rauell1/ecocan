"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What is ECOCAN?",
    a: "ECOCAN is Africa's first Deposit Return System (DRS) platform. It enables consumers to earn deposits back when they return empty bottles, while helping brands fight counterfeits and giving recyclers access to verified, pre-sorted materials.",
  },
  {
    q: "Which bottle types does ECOCAN accept?",
    a: "We currently support glass, plastic (PET), and aluminium cans from registered brand partners. The list of participating products grows as more brands join the ECOmmunity.",
  },
  {
    q: "How do I earn my deposit back?",
    a: "Download the ECOCAN app, scan the QR code on your bottle at purchase, and return it to any ECO-Station. Your deposit is instantly credited to your ECOCAN wallet — redeemable as mobile money, airtime, or in-store credit.",
  },
  {
    q: "Where are ECO-Stations located?",
    a: "ECO-Stations are currently active across Nairobi, with rollout planned for Mombasa and other major Kenyan cities. Use the app map to find the nearest drop-off point in real time.",
  },
  {
    q: "How does ECOCAN prevent counterfeit beverages?",
    a: "Every participating bottle is assigned a unique, one-time QR code at the point of production. Consumers can scan the code before drinking to instantly verify authenticity. Duplicate or unknown codes are flagged immediately.",
  },
  {
    q: "How can my business join ECOCAN?",
    a: "Brands, distributors, ECO-Station operators, and fleet couriers can all register through our platform. Visit the Solutions page or contact us directly to discuss the right partnership model for your business.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[760px] mx-auto">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            FAQs
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-eco-dark leading-tight mb-5">
            Common questions,
            <br />
            clear answers.
          </h2>
          <p className="text-eco-dark/65 text-lg">
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Contact our team.
            </Link>
          </p>
        </div>

        <div className="flex flex-col divide-y divide-eco-dark/8">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-[16px] font-semibold text-eco-dark group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-eco-dark/40 shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-6 text-eco-dark/65 text-[15px] leading-relaxed pr-8">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
