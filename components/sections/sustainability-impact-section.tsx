"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Leaf, Recycle, MapPin, TrendingUp } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

const stats = [
  { value: 50000, suffix: "+",  label: "Bottles Recovered",    sub: "and climbing every month",         color: "#4ade80", icon: Recycle },
  { value: 120,   suffix: "",   label: "Tons CO\u2082 Saved",  sub: "equivalent to 52 cars off the road", color: "#facc15", icon: Leaf },
  { value: 150,   suffix: "+",  label: "ECO-Stations Active",  sub: "across Nairobi and Mombasa",         color: "#60a5fa", icon: MapPin },
  { value: 18000, suffix: "+",  label: "Kenyans Earning",      sub: "from recycling their empties",       color: "#f97316", icon: TrendingUp },
]

export default function SustainabilityImpactSection() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const countersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      if (countersRef.current) {
        gsap.fromTo(countersRef.current.querySelectorAll(".stat-card"),
          { opacity: 0, y: 56, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.72, stagger: 0.14, ease: "power3.out",
            scrollTrigger: { trigger: countersRef.current, start: "top 78%", once: true } })
        countersRef.current.querySelectorAll(".counter-value").forEach(el => {
          const target = parseInt(el.getAttribute("data-target") ?? "0", 10)
          gsap.fromTo(el, { textContent: "0" },
            { textContent: target, duration: 2.4, ease: "power2.out", snap: { textContent: 1 },
              scrollTrigger: { trigger: el, start: "top 83%", once: true } })
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="ps-reveal relative w-full section-py overflow-hidden" style={{ background: "#060E06" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={{ backgroundImage: "url(/images/recycling-hub.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060E06]/80 via-[#060E06]/65 to-[#060E06]/90" />
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle,#22c55e 0%,transparent 65%)" }} />
      </div>

      <div className="site-container relative z-10">
        <div className="mb-4">
          <SectionOverline>Impact</SectionOverline>
        </div>
        <h2 className="section-heading mb-4">
          Measurable.{" "}
          <span style={{ background: "linear-gradient(90deg,#4ade80,#22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Real.</span>
        </h2>
        <p className="mb-16 max-w-lg text-sm leading-relaxed text-[--c-text-muted]">
          Every bottle returned is tracked, every ton of CO\u2082 avoided is counted. Here is what the loop looks like in numbers.
        </p>

        <div ref={countersRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(stat => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="stat-card ec-card group relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: stat.color }} />
                <div className="px-7 py-9">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: stat.color + "18" }}>
                    <Icon size={20} style={{ color: stat.color }} strokeWidth={1.8} />
                  </div>
                  <div className="mb-1 font-extrabold tabular-nums leading-none" style={{ fontSize: "clamp(40px,5.5vw,68px)", color: stat.color }}>
                    <span className="counter-value" data-target={stat.value}>0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="text-sm font-bold">{stat.label}</p>
                  <p className="mt-1 text-[12px] text-[--c-text-muted]">{stat.sub}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
