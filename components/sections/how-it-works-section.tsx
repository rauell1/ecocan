"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { ShoppingBag, QrCode, Store, Bike, Wallet, Play } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Buy",
    desc: "Any drink with ECOCAN code",
    icon: ShoppingBag,
  },
  {
    step: "02",
    title: "Scan",
    desc: "Verify it's real (3 seconds)",
    icon: QrCode,
  },
  {
    step: "03",
    title: "Return",
    desc: "Empty, intact, to any ECO-Station counter or machine",
    icon: Store,
    note: "Our partners at supermarket counters scan and pay you instantly.",
  },
  {
    step: "04",
    title: "Collect",
    desc: "We pick up. You've done your part.",
    icon: Bike,
  },
  {
    step: "05",
    title: "Get rewarded",
    desc: "Instant cash to your wallet – a bonus for doing good",
    icon: Wallet,
  },
]

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const targets = sectionRef.current!.querySelectorAll(".ec-reveal")
      if (targets.length === 0) return
      gsap.fromTo(
        targets,
        { opacity: 0, y: 36, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      )

      const bgImg = sectionRef.current?.querySelector(".section-bg-img") as HTMLElement | null
      if (bgImg) {
        gsap.fromTo(
          bgImg,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        )
      }

      const desktopLine = sectionRef.current?.querySelector(".steps-line-desktop")
      if (desktopLine) {
        gsap.fromTo(
          desktopLine,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          }
        )
      }

      const mobileLine = sectionRef.current?.querySelector(".steps-line-mobile")
      if (mobileLine) {
        gsap.fromTo(
          mobileLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          }
        )
      }
    }, sectionRef)
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="section-py relative w-full overflow-hidden bg-[#050705]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/how_it_works_hero.png"
          alt="AR scanning of cans"
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(5,7,5,0.85) 0%, rgba(5,7,5,0.98) 100%)",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mb-16 max-w-3xl">
          <p className="ec-reveal section-overline mb-3 text-emerald-400">HOW IT WORKS</p>
          <h2
            className="ec-reveal font-serif-luxury text-luxury-gradient"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textShadow: "0 0 40px rgba(16,185,129,0.15)",
            }}
          >
            From your hand back to the shelf. Clean. Traceable.
          </h2>
        </div>

        <div className="relative mb-16">
          <div className="steps-line-mobile absolute left-3 top-0 z-0 h-full w-px origin-top bg-white/5 md:hidden" />
          <div className="steps-line-desktop absolute left-0 top-[2.2rem] z-0 hidden h-px w-full origin-left bg-white/5 md:block" />

          <div className="grid gap-6 pl-7 md:grid-cols-5 md:gap-4 md:pl-0 md:pt-10">
            {steps.map((item, idx) => (
              <div
                key={item.step}
                className="ec-reveal group relative z-10 flex flex-col justify-between rounded-2xl border border-white/5 bg-[#0c100c]/45 p-6 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/10"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-center justify-between">
                    <p
                      className="leading-none text-emerald-500/10 transition-colors duration-500 group-hover:text-emerald-400/20"
                      style={{
                        fontSize: "clamp(2rem,4vw,3.5rem)",
                        fontWeight: 300,
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {item.step}
                    </p>
                    <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-2.5 text-emerald-400 transition-colors group-hover:bg-emerald-500/10">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-serif-luxury mb-2 text-xl font-normal tracking-tight text-[#f5f5f5] transition-colors group-hover:text-emerald-400">
                    {item.title}
                  </h3>
                  <p className="flex-grow text-xs font-normal leading-relaxed text-white/55">
                    {item.desc}
                  </p>

                  {item.note && (
                    <div className="mt-4 border-t border-white/5 pt-4 font-mono text-[10px] italic leading-relaxed text-emerald-400/80">
                      {item.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ec-reveal mt-12 flex justify-center">
          <button className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#f5f5f5] transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/10 hover:text-emerald-400">
            <Play size={12} fill="currentColor" />
            <span>See full journey video</span>
          </button>
        </div>
      </div>
    </section>
  )
}
