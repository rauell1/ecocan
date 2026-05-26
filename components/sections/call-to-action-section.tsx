"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Smartphone, Store, TrendingUp } from "lucide-react"
import Link from "next/link"

const ctaPaths = [
  {
    title: "Consumer",
    desc: "Download app. Start making a difference.",
    btnText: "Get the app",
    btnHref: "/download",
    icon: Smartphone,
    color: "rgba(16,185,129,0.05)",
  },
  {
    title: "Partner",
    desc: "Join our network. Grow with us.",
    btnText: "Partner with ECOCAN",
    btnHref: "/contact",
    icon: Store,
    color: "rgba(16,185,129,0.05)",
  },
  {
    title: "Investor",
    desc: "Back Africa's circular infrastructure.",
    btnText: "Investor relations",
    btnHref: "#investors",
    icon: TrendingUp,
    color: "rgba(16,185,129,0.05)",
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
      className="relative w-full overflow-hidden border-b border-white/5 bg-[#050705] py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/cta_hero.png"
          alt="Futuristic forest canopy blending nature and technology"
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(5,7,5,0.9) 0%, rgba(5,7,5,0.98) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="ec-reveal section-overline mb-3 justify-center text-emerald-400">
            TAKE ACTION
          </p>
          <h2
            className="ec-reveal font-serif-luxury text-luxury-gradient"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            Start making a circular impact <br className="hidden md:block" />
            <span className="font-sans font-light text-emerald-400">with ECOCAN today.</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {ctaPaths.map((path) => (
            <div key={path.title} className="ec-reveal">
              <SpotlightCard
                className="flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-[#0c100c]/40 p-8 transition-all duration-500 hover:border-emerald-500/20"
                spotlightColor={path.color}
              >
                <div>
                  <div className="mb-6 inline-flex rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-3 text-emerald-400">
                    <path.icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-serif-luxury mb-3 text-2xl font-normal tracking-tight text-white">
                    {path.title}
                  </h3>

                  <p className="mb-8 text-[14px] font-normal leading-relaxed text-white/50">
                    {path.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href={path.btnHref}
                    className="inline-flex w-full justify-center rounded-full border border-white/10 bg-white/5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/10 hover:text-emerald-400"
                  >
                    {path.btnText}
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
