"use client";

import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section
      id="cta"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f5132 0%, #1a7a4a 50%, #0f5132 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full"
        style={{ background: "rgba(255,255,255,0.04)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full"
        style={{ background: "rgba(255,255,255,0.04)" }}
      />

      <div className="relative max-w-[760px] mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-4">
          Join the Movement
        </p>
        <h2
          className="font-bold text-white mb-5 leading-tight"
          style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
        >
          Ready to Return,<br />Recycle &amp; Earn?
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-[520px] mx-auto leading-relaxed">
          Download the ECOCAN app, locate your nearest ECO-Station, and start earning rewards
          every time you return a bottle.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/download"
            className="pill-btn pill-btn-white text-base !py-4 !px-8 min-w-[200px] active:scale-95 transition-transform"
          >
            <Download size={20} />
            Download Free App
          </Link>
          <Link
            href="/solutions"
            className="pill-btn border-2 border-white/50 text-white hover:bg-white/15 text-base !py-4 !px-8 min-w-[200px] transition-all"
          >
            Partner with Us
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            "✓  Free to download",
            "✓  M-Pesa cashout",
            "✓  500+ ECO-Stations",
            "✓  No sign-up fee",
          ].map((item) => (
            <span
              key={item}
              className="text-[13px] text-white/70 font-medium px-4 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
