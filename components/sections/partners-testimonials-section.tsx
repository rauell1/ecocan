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
    name: "Quickmart",
    element: (
      <span className="font-sans text-xl font-black tracking-tight text-[var(--c-text)]">
        Quick<span className="text-emerald-500">mart</span>
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
    name: "KWAL",
    element: (
      <div className="flex items-center gap-2">
        <svg className="h-7 w-7 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="9" cy="8" r="2" />
          <circle cx="13" cy="8" r="2" />
          <circle cx="17" cy="8" r="2" />
          <circle cx="11" cy="12" r="2" />
          <circle cx="15" cy="12" r="2" />
          <circle cx="13" cy="16" r="2" />
          <path d="M13 5c0-1.1-.9-2-2-2h-1v1c0 1.1.9 2 2 2h1z" />
        </svg>
        <div className="flex flex-col text-left font-sans leading-none">
          <span className="text-lg font-black tracking-tight text-[var(--c-text)]">KWAL</span>
          <span className="text-[7px] font-bold uppercase tracking-widest text-[var(--c-text-muted)]">
            Kenya Wine Agencies
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "Jaza",
    element: (
      <div className="flex flex-col items-center leading-none">
        <div className="relative rounded-xl bg-blue-600 px-4 py-1.5 shadow-sm shadow-blue-500/10">
          <div className="absolute -left-1.5 -top-1.5 h-3.5 w-3.5 rotate-12 rounded-sm border border-white bg-yellow-400" />
          <span className="font-sans text-lg font-black tracking-tight text-white">jaza</span>
        </div>
        <span className="mt-1 text-[8px] font-extrabold uppercase tracking-wider text-blue-600">
          Everyday Low Price
        </span>
      </div>
    ),
  },
  {
    name: "254 Brewing Co",
    element: (
      <div className="flex items-center gap-2">
        <svg
          className="h-8 w-8 text-[var(--c-text)]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <line x1="20" y1="80" x2="80" y2="20" />
          <line x1="20" y1="20" x2="80" y2="80" />
          <path d="M50 15 C68 30, 68 70, 50 85 C32 70, 32 30, 50 15 Z" fill="currentColor" />
          <text
            x="50"
            y="48"
            fill="white"
            fontSize="18"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            254
          </text>
          <text
            x="50"
            y="62"
            fill="white"
            fontSize="6.5"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="sans-serif"
            letterSpacing="0.5"
          >
            BREWING
          </text>
          <text
            x="50"
            y="70"
            fill="white"
            fontSize="5.5"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="sans-serif"
            letterSpacing="0.5"
          >
            CO.
          </text>
          <circle cx="50" cy="30" r="1.5" fill="white" />
          <circle cx="47" cy="24" r="1" fill="white" />
          <circle cx="52" cy="21" r="0.7" fill="white" />
        </svg>
        <div className="flex flex-col text-left font-sans leading-none">
          <span className="text-sm font-black uppercase tracking-wider text-[var(--c-text)]">
            254 Brewing
          </span>
          <span className="text-[7px] font-bold uppercase tracking-widest text-[var(--c-text-muted)]">
            Craft Beer Co.
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "Kenyan Originals",
    element: (
      <div className="flex items-center">
        <div className="relative -rotate-3 rounded border-[1.5px] border-[var(--c-text)] bg-[var(--c-text)] px-3 py-1 font-sans text-xs font-black uppercase tracking-tight text-white">
          Kenyan
          <div className="mt-0.5 text-[10px] font-extrabold leading-none tracking-[0.12em] text-emerald-400">
            Originals
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Booch",
    element: (
      <div className="flex flex-col items-center leading-none">
        <div className="relative rounded-lg bg-pink-600 px-3.5 py-1.5 shadow-sm shadow-pink-500/10">
          <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 animate-pulse flex-col items-center gap-0.5 text-pink-500">
            <div className="h-1 w-1 rounded-full bg-pink-500" />
            <div className="h-1.5 w-1.5 rounded-full bg-pink-500" />
          </div>
          <span className="font-sans text-sm font-black uppercase tracking-[0.1em] text-white">
            booch
          </span>
        </div>
        <span className="mt-1 text-[7px] font-bold uppercase tracking-wider text-pink-600">
          Organic Kombucha
        </span>
      </div>
    ),
  },
  {
    name: "EABL",
    element: (
      <div className="flex items-center gap-1.5">
        <svg
          className="h-6 w-6 text-emerald-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2C12 2 9 6 9 9C9 12 12 16 12 16C12 16 15 12 15 9C15 6 12 2 12 2Z" />
          <path d="M12 8C12 8 10.5 10.5 10.5 12.5C10.5 14.5 12 17 12 17C12 17 13.5 14.5 13.5 12.5C13.5 10.5 12 8 12 8Z" />
          <path d="M12 14C12 14 11.25 15.25 11.25 16.25C11.25 17.25 12 18.5 12 18.5C12 18.5 12.75 17.25 12.75 16.25C12.75 15.25 12 14 12 14Z" />
          <path d="M12 16v6" />
        </svg>
        <span className="font-sans text-lg font-black tracking-wider text-[var(--c-text)]">
          EABL
        </span>
      </div>
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
