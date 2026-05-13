"use client";

import { ShieldCheck, QrCode, AlertCircle } from "lucide-react";

const features = [
  {
    icon: <QrCode className="w-6 h-6 text-primary" />,
    title: "Unique QR per bottle",
    body: "Every participating bottle carries a one-time scannable code tied to the brand, batch, and distribution chain.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Instant authenticity check",
    body: "Consumers scan before drinking. A green confirmation means the product is genuine. A red flag means stop.",
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-primary" />,
    title: "Real-time brand alerts",
    body: "Brands receive live data on suspect scans, geographic anomalies, and duplicate codes — enabling rapid response.",
  },
];

export default function AntiCounterfeitSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Brand Protection
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-eco-dark leading-tight mb-5">
              Stop counterfeits
              <br />
              before they reach consumers.
            </h2>
            <p className="text-eco-dark/70 text-lg leading-relaxed mb-10">
              ECOCAN&apos;s QR-based verification system makes every genuine bottle traceable — protecting brand integrity and consumer safety simultaneously.
            </p>
            <div className="flex flex-col gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-eco-dark mb-1">{f.title}</h3>
                    <p className="text-eco-dark/60 text-[14px] leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="rounded-3xl bg-neutral-100 border border-eco-dark/6 aspect-square flex items-center justify-center">
            <div className="text-center p-10">
              <QrCode className="w-20 h-20 text-primary/30 mx-auto mb-4" />
              <p className="text-eco-dark/40 text-sm">Scan. Verify. Protect.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
