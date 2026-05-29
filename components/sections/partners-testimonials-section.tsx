"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Handshake, Quote, ArrowRight } from "lucide-react"

const marqueeLogos = [
  {
    name: "Naivas",
    element: (
      <span className="font-sans text-xl font-black tracking-tight text-[var(--c-text)]">
        Naivas<span className="text-orange-500">.</span>
      </span>
    ),
  },
  {
    name: "Carrefour",
    element: (
      <span className="font-sans text-xl font-extrabold tracking-tighter text-[var(--c-text)]">
        C<span className="text-red-500">arrefour</span>
      </span>
    ),
  },
  {
    name: "Quickmart",
    element: (
      <span className="font-sans text-xl font-black tracking-tight text-[var(--c-text)]">
        Quick<span className="text-emerald-500">mart</span>
      </span>
    ),
  },
  {
    name: "Jaza",
    element: (
      <span className="font-sans text-xl font-bold tracking-widest text-[var(--c-text)]">JAZA</span>
    ),
  },
  {
    name: "Coca-Cola",
    element: (
      <span className="font-serif text-2xl font-black italic tracking-tight text-red-500">
        Coca-Cola
      </span>
    ),
  },
  {
    name: "EABL",
    element: (
      <span className="font-serif text-xl font-extrabold tracking-wider text-[var(--c-text)]">
        EABL
      </span>
    ),
  },
  {
    name: "KWAL",
    element: (
      <span className="font-sans text-xl font-bold tracking-tight text-[var(--c-text)]">KWAL</span>
    ),
  },
  {
    name: "BasiGo",
    element: (
      <span className="font-mono text-lg font-bold text-emerald-500">
        basi<span className="text-[var(--c-text)]">go</span>
      </span>
    ),
  },
  {
    name: "Roam",
    element: (
      <span className="font-sans text-xl font-extrabold tracking-tighter text-[var(--c-text)]">
        ROAM
      </span>
    ),
  },
  {
    name: "Antler",
    element: (
      <span className="font-sans text-lg font-semibold tracking-widest text-[var(--c-text)]">
        ▲NTLER
      </span>
    ),
  },
  {
    name: "Saviu",
    element: (
      <span className="font-serif text-xl font-bold tracking-wider text-[var(--c-text)]">
        SAVIU
      </span>
    ),
  },
]

const marqueeStyle = `
  @keyframes marqueeScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marqueeScroll 30s linear infinite;
  }
  .marquee-track:hover {
    animation-play-state: paused;
  }
`

const testimonials = [
  {
    quote: "I don't think about the money. I think about my children drinking safe water.",
    author: "Mama Jane",
    role: "Consumer, Nairobi",
  },
  {
    quote: "My customers feel proud to recycle here. The foot traffic is a bonus.",
    author: "Supermarket Owner",
    role: "Retail partner",
  },
  {
    quote: "Putting a bottle in the bin feels wrong now. Returning it feels right.",
    author: "Consumer",
    role: "ECOnsumer",
  },
]

export default function PartnersTestimonialsSection() {
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.02),transparent_50%)]" />

      {/* ── PARTNERS & BACKING ── */}
      <div className="mx-auto mb-24 max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="ec-reveal section-overline mb-3 justify-center text-emerald-400">
            PARTNERS & BACKING
          </p>
          <h2
            className="ec-reveal font-serif-luxury text-luxury-gradient"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Trusted by leaders across the value chain.
          </h2>
        </div>

        <style dangerouslySetInnerHTML={{ __html: marqueeStyle }} />

        {/* Dynamic Infinite Logo Marquee */}
        <div className="ec-reveal relative mx-auto mb-16 max-w-5xl overflow-hidden py-6">
          {/* Edge fade gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f5f7f5] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f5f7f5] to-transparent" />

          <div className="marquee-track flex items-center gap-16">
            {/* First sequence */}
            {marqueeLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center opacity-45 grayscale transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0"
              >
                {logo.element}
              </div>
            ))}
            {/* Duplicated sequence for infinite seamless scrolling */}
            {marqueeLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center opacity-45 grayscale transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0"
                aria-hidden="true"
              >
                {logo.element}
              </div>
            ))}
          </div>
        </div>

        <div className="ec-reveal flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--landing-pill-border)] bg-[var(--landing-pill-bg)] px-8 py-3 text-xs font-bold uppercase tracking-wider text-[var(--landing-pill-text)] backdrop-blur-md transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            <Handshake size={14} />
            <span>Become a partner</span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="ec-reveal mx-auto my-16 h-[1px] max-w-5xl bg-[var(--landing-divider)] px-[clamp(1.25rem,4vw,3rem)]" />

      {/* ── TESTIMONIALS (Three Voices) ── */}
      <div className="mx-auto max-w-7xl px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="ec-reveal section-overline mb-3 justify-center text-emerald-400">
            TESTIMONIALS
          </p>
          <h2
            className="ec-reveal font-serif-luxury text-luxury-gradient"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Real impact. Real pride.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((test, idx) => (
            <div key={idx} className="ec-reveal">
              <SpotlightCard className="flex h-full flex-col justify-between rounded-3xl border-[var(--landing-glass-border)] bg-[var(--landing-glass-bg)] p-8 transition-all duration-300 hover:border-emerald-500/20">
                <div>
                  <Quote size={32} className="mb-6 shrink-0 text-emerald-500/10" strokeWidth={1} />
                  <blockquote className="font-serif-luxury mb-6 text-base font-light italic leading-relaxed tracking-tight text-[var(--c-text)] md:text-lg">
                    “{test.quote}”
                  </blockquote>
                </div>

                <div className="border-t border-[var(--landing-divider)] pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {test.author}
                  </p>
                  <p className="font-serif-luxury mt-1 text-[11px] italic text-[var(--c-text-muted)]">
                    {test.role}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
