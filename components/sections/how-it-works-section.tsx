"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { QrCode, MapPin, Coins, Recycle } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

const steps = [
  {
    step: "01",
    icon: QrCode,
    title: "Scan to verify",
    body: "Open the ECOCAN app and scan the QR code on any can or bottle — instantly confirm it&apos;s genuine.",
  },
  {
    step: "02",
    icon: MapPin,
    title: "Find an ECO-Station",
    body: "The app guides you to the nearest collection point. Drop off your empties — any brand, any size.",
  },
  {
    step: "03",
    icon: Recycle,
    title: "Bottle gets crushed",
    body: "The machine crushes and records each container, making reuse impossible — eliminating counterfeits at source.",
  },
  {
    step: "04",
    icon: Coins,
    title: "Earn instantly",
    body: "Cash lands in your M-PESA wallet within seconds. No friction, no delays, no middleman.",
  },
]

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const targets = sectionRef.current?.querySelectorAll(".ec-reveal")
      if (!targets || targets.length === 0) return
      gsap.fromTo(
        targets,
        { opacity: 0, y: 28, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.11,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="relative w-full section-py section-dark overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 opacity-10 blur-[140px]"
             style={{ background: "radial-gradient(ellipse at top,#22c55e 0%,transparent 70%)" }} />
      </div>

      <div className="site-container relative z-10">

        {/* Header — centred */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="ec-reveal">
            <SectionOverline inv>How It Works</SectionOverline>
          </div>
          <h2 className="ec-reveal section-heading section-heading-inv mb-5">
            Four steps.<br />
            <span style={{ background: "linear-gradient(90deg,#86efac,#22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real change.
            </span>
          </h2>
          <p className="ec-reveal section-subhead section-subhead-center">
            From the first scan to cash in your pocket — the whole loop takes under a minute.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ step, icon: Icon, title, body }, i) => (
            <div
              key={step}
              className="ec-reveal ec-card-dark group relative flex flex-col p-7 overflow-hidden"
            >
              {/* Step number — large ghosted */}
              <span
                className="absolute top-4 right-5 font-black text-[4rem] leading-none select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.04)", letterSpacing: "-0.04em" }}
              >
                {step}
              </span>

              {/* Connector dot for lg */}
              {i < steps.length - 1 && (
                <div className="absolute -right-2.5 top-10 z-20 hidden lg:block h-5 w-5 rounded-full border-2 border-[--c-green] bg-[--c-dark]" />
              )}

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 transition-transform duration-300 group-hover:scale-110">
                <Icon size={22} className="text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-base font-bold text-white">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
