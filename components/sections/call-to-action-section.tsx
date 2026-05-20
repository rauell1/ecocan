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
      className="section-py section-dark relative w-full overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle,#16a34a 0%,transparent 70%)" }}
      />

      <div className="site-container relative z-10 flex flex-col items-center text-center">
        <div className="ec-reveal">
          <SectionOverline inv>Get Involved</SectionOverline>
        </div>
        <h2 className="ec-reveal section-heading section-heading-inv mx-auto mb-6 max-w-[720px]">
          Ready to recycle
          <br />
          <span className="text-[--c-green-light]">the loop?</span>
        </h2>
        <p className="ec-reveal mb-12 max-w-[480px] text-base leading-relaxed text-white/55">
          Start as a consumer today: verify safe drinks, return empties, and collect rewards. Brands
          and investors can join in one click.
        </p>
        <div className="ec-reveal flex flex-wrap justify-center gap-4">
          <Link
            href="/download"
            className="group inline-flex items-center gap-3 rounded-[--radius-full] bg-[--c-green] px-10 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-[#15803d] active:scale-95"
          >
            Start Recycling{" "}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-[--radius-full] border border-white/20 px-8 py-4 font-semibold text-white/70 transition-all hover:border-white/50 hover:text-white"
          >
            Explore Business Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}
