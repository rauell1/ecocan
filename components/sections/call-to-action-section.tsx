"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Smartphone, Store, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

const ctaPaths = [
  {
    title: "Consumer",
    desc: "Join our community of active recyclers. Download the ECOCAN app, scan your packaging codes, and start earning instant mobile wallet rewards today.",
    btnText: "Get the App",
    btnHref: "/download",
    icon: Smartphone,
    color: "rgba(16,185,129,0.06)",
  },
  {
    title: "Partner",
    desc: "Become an official circular station. Partner with ECOCAN to capture eco-conscious customers, boost your store foot traffic, and grow your revenue.",
    btnText: "Partner with ECOCAN",
    btnHref: "/contact",
    icon: Store,
    color: "rgba(16,185,129,0.06)",
  },
  {
    title: "Investor",
    desc: "Back the digital circular economy infrastructure scaling across Africa. Access our green metrics, growth roadmap, and investor relations portal.",
    btnText: "Investor Relations",
    btnHref: "/investors",
    icon: TrendingUp,
    color: "rgba(16,185,129,0.06)",
  },
]

export default function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const els = sectionRef.current!.querySelectorAll(".ec-reveal")
      gsap.fromTo(
        els,
        { opacity: 0, y: 36, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-[var(--landing-divider)] bg-transparent py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/cta_hero.png"
          alt="Futuristic forest canopy blending nature and technology"
          aria-hidden="true"
          className="section-bg-img opacity-12 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="ec-reveal section-overline mb-3 justify-center text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
            TAKE ACTION
          </p>
          <h2
            className="ec-reveal font-sans font-bold tracking-tight text-[var(--c-text)]"
            style={{
              fontSize: "clamp(2.2rem,5vw,3.6rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
            }}
          >
            Start making a circular impact <br className="hidden md:block" />
            <span className="text-emerald-600">with ECOCAN today.</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {ctaPaths.map((path) => (
            <div key={path.title} className="ec-reveal flex flex-col">
              <SpotlightCard
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/60 bg-white/90 p-8 shadow-xl shadow-emerald-950/[0.015] backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-950/[0.035]"
                spotlightColor={path.color}
              >
                <div>
                  {/* Premium Square-Rounded Icon Badge with Soft Shadow */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shadow-[0_4px_20px_rgba(16,185,129,0.12)] transition-transform duration-300 group-hover:scale-105">
                    <path.icon size={22} strokeWidth={1.75} />
                  </div>

                  <h3 className="mb-3 font-sans text-xl font-bold tracking-tight text-[var(--c-text)]">
                    {path.title}
                  </h3>

                  <p className="mb-8 text-[14px] font-normal leading-relaxed text-[var(--c-text-muted)] text-gray-600/90">
                    {path.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href={path.btnHref}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-emerald-600 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-md shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-900/20"
                  >
                    <span>{path.btnText}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
