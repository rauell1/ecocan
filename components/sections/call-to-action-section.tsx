"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"

export default function CallToActionSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative w-full section-py section-dark overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle,#16a34a 0%,transparent 70%)" }} />

      <div className="site-container relative z-10 flex flex-col items-center text-center">
        <div className="ec-reveal">
          <SectionOverline inv>Get Involved</SectionOverline>
        </div>
        <h2 className="ec-reveal section-heading section-heading-inv mb-6 max-w-[720px] mx-auto">
          Ready to close<br />
          <span className="text-[--c-green-light]">the loop?</span>
        </h2>
        <p className="ec-reveal mb-12 max-w-[480px] text-base text-white/55 leading-relaxed">
          Whether you're a brand, retailer, collector, or investor — there's a place for you in the ECOCAN network.
        </p>
        <div className="ec-reveal flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[--c-green] text-white px-10 py-4 rounded-[--radius-full] font-semibold hover:bg-[#15803d] active:scale-95 shadow-lg shadow-emerald-600/20"
          >
            Join the Movement <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-[--radius-full] text-white/70 font-semibold hover:border-white/50 hover:text-white transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
