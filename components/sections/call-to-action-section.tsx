"use client";

import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-[900px] mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-4">
          Get Started
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Join Africa&apos;s growing
          <br />
          circular economy.
        </h2>
        <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-[560px] mx-auto mb-10">
          Download the ECOCAN app, find your nearest ECO-Station, and start earning rewards for every bottle you return.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/download"
            className="pill-btn bg-white text-primary hover:bg-white/90 font-semibold text-sm !py-3.5 !px-8 flex items-center gap-2"
          >
            <Download size={18} />
            Download the App
          </Link>
          <Link
            href="/solutions"
            className="text-white/85 hover:text-white font-medium text-[15px] flex items-center gap-2 transition-colors"
          >
            Explore solutions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
