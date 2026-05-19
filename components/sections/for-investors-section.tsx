"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TrendingUp, Globe, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react"

const highlights = [
  { icon: TrendingUp, label: "Market Opportunity", value: 4.5, suffix: "B+", note: "African beverage recycling market by 2030", color: "#16a34a", detail: "East Africa alone generates 2B+ plastic bottles a year with <10% formal recycling rate." },
  { icon: Globe, label: "Countries Targeted", value: 12, suffix: "", note: "East & West African markets in 5-year roadmap", color: "#0891b2", detail: "Starting with Kenya, scaling to Tanzania, Uganda, Rwanda and beyond within 36 months." },
  { icon: ShieldCheck, label: "Anti-Counterfeit TAM", value: 820, suffix: "M", note: "Annual losses to fake beverages across SSA", color: "#7c3aed", detail: "ECOCAN's QR security layer is the first verifiable on-pack authentication at scale in Africa." },
]

export default function ForInvestorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const animateNumber = (index: number) => {
    const h = highlights[index]
    if (!h) return
    const valObj = { val: 0 }
    gsap.to(valObj, {
      val: h.value,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: () => {
        const el = document.getElementById(`stat-${index}`)
        if (el) el.innerText = valObj.val.toFixed(h.value % 1 !== 0 ? 1 : 0) + h.suffix
      }
    })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(".inv-reveal", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } })
  }, [])

  return (
    <section ref={sectionRef} className="relative px-6 py-32 bg-white text-gray-900">
      <div className="mx-auto max-w-6xl relative z-10">
        
        <div className="mb-20">
          <div className="inv-reveal mb-6">
            <span className="inline-block border-l-4 border-emerald-600 pl-4 text-[11px] font-black uppercase tracking-[0.25em] text-emerald-700">
              For Investors
            </span>
          </div>
          <h2 className="inv-reveal text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            This is not a recycling project.<br />
            <span className="text-gray-400 font-light">This is logistics infrastructure.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {highlights.map((h, i) => {
            const Icon = h.icon
            const isActive = activeCard === i
            return (
              <div
                key={i}
                onMouseEnter={() => { setActiveCard(i); animateNumber(i); }}
                onMouseLeave={() => setActiveCard(null)}
                className="inv-reveal group relative flex flex-col p-8 rounded-3xl bg-white border border-gray-200 border-t-[6px] transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]"
                style={{ borderTopColor: h.color }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" style={{ color: h.color }}>
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-900 transition-colors">{h.label}</span>
                </div>
                
                <div className="mb-4">
                  <h3 id={`stat-${i}`} className="text-5xl font-extrabold tracking-tighter text-gray-900 transition-colors duration-300">
                    {h.value}{h.suffix}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 font-medium">{h.note}</p>
                </div>
                
                <p className="mt-auto pt-6 text-sm text-gray-400 leading-relaxed border-t border-gray-100 transition-colors duration-300 group-hover:text-gray-600">
                  {h.detail}
                </p>
              </div>
            )
          })}
        </div>

        <div className="inv-reveal flex flex-wrap gap-4">
          <Link href="/contact" className="group flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-full font-bold transition-transform hover:scale-105 hover:bg-emerald-700 active:scale-95 shadow-lg shadow-emerald-600/20">
            Request Investor Deck <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/about-us" className="flex items-center gap-2 px-8 py-5 text-gray-500 font-semibold hover:text-emerald-600 transition-colors">
            Meet the Team <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
