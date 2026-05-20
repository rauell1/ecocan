"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { TrendingUp, Globe, Layers, ArrowRight } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

const pillars = [
  {
    icon: TrendingUp,
    title: "High-growth market",
    body: "Africa's beverage sector grows 8% YoY. Recycling infrastructure is at <5% capacity — ECOCAN is building the rails.",
  },
  {
    icon: Globe,
    title: "Regional expansion",
    body: "Live in 3 countries. 7 more markets planned by 2027. One platform, infinite collection points.",
  },
  {
    icon: Layers,
    title: "Multi-sided revenue",
    body: "Brand licensing, EPR compliance fees, recycled-material offtake, and consumer app subscriptions — four compounding streams.",
  },
]

export default function ForInvestorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".ec-reveal"),
        { opacity: 0, y: 28, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.11, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full section-py section-light-inv overflow-hidden">

      <div className="site-container relative z-10">

        {/* Header */}
        <div className="max-w-[640px] mb-14">
          <div className="ec-reveal">
            <SectionOverline>For Investors</SectionOverline>
          </div>
          <h2 className="ec-reveal section-heading mb-5" style={{ color: "#0B1A0D" }}>
            Infrastructure-grade<br />
            <span className="text-[--c-green-mid]">returns for Africa.</span>
          </h2>
          <p className="ec-reveal text-base text-[#3A5240] leading-relaxed max-w-[520px]">
            ECOCAN sits at the intersection of consumer tech, sustainability mandates, and financial inclusion — three of the fastest-growing categories on the continent.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <div key={title} className="ec-reveal ec-card-light group flex flex-col p-8" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 transition-transform duration-300 group-hover:scale-110">
                <Icon size={22} className="text-emerald-600" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-base font-bold text-[#0B1A0D]">{title}</h3>
              <p className="text-sm text-[#4A6A50] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="ec-reveal flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/investors"
            className="inline-flex items-center gap-2 rounded-full bg-[--c-green-mid] px-7 py-3 text-sm font-bold text-white hover:bg-[--c-green] hover:shadow-[0_0_24px_rgba(34,197,94,0.30)] active:scale-95 transition-all"
          >
            Download Deck
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-[#3A5240] hover:text-[--c-green-mid] transition-colors"
          >
            Schedule a call →
          </Link>
        </div>

      </div>
    </section>
  )
}
