"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HomeNavbar from "@/components/sections/home-navbar"
import HomeFooter from "@/components/sections/home-footer"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ArrowDown, Globe, Shield, Users, Heart, Award, ArrowRight, UserCheck } from "lucide-react"

const timelineItems = [
  {
    year: "2022",
    title: "The idea is born",
    desc: "The founder recognized the growing challenge of bottles littering streets, communities, and natural spaces. A better way to collect and recycle had to exist.",
  },
  {
    year: "2023",
    title: "First prototype",
    desc: "ECOCAN designed an accessible smart reverse vending solution for bottle recovery and recycling engagement.",
  },
  {
    year: "2024",
    title: "Seed funding secured",
    desc: "Early-stage funding closed. Pilot launch in Nairobi. Manual collection counters introduced to accelerate bottle returns.",
  },
  {
    year: "2025",
    title: "Supermarket partnerships expand",
    desc: "Collection counters become the primary return network. 50+ collection points established. 10,000+ ECOnsumers engaged.",
  },
  {
    year: "2026",
    title: "ECOCAN begins zero emission logistics",
    desc: "Regional expansion begins as ECOCAN scales recycling infrastructure across Africa with electric motorcycles.",
  },
]

const missionItems = [
  {
    icon: "🌍",
    title: "Protect the planet",
    desc: "Build a circular economy where every bottle collected becomes part of a new lifecycle.",
  },
  {
    icon: "♻",
    title: "Enable responsible recycling",
    desc: "Make recycling simple, rewarding, and accessible for every community.",
  },
  {
    icon: "🤝",
    title: "Support communities",
    desc: "Create environmental pride, shared responsibility, and economic opportunity.",
  },
]

const valuesItems = [
  {
    title: "SISU",
    desc: "A Finnish word for determination, resilience, and courage in the face of adversity. We don't give up. Not on sustainability. Not on building a cleaner future.",
  },
  {
    title: "Integrity",
    desc: "Transparent systems, measurable impact, and accountability at every stage of collection and recovery.",
  },
  {
    title: "Collaboration",
    desc: "No one builds a circular economy alone. We work with retailers, producers, recyclers, logistics partners, and the ECOnsumer community.",
  },
]

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let lenisInst: any = null
    import("lenis").then(({ default: Lenis }) => {
      lenisInst = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })
      function raf(time: number) {
        if (lenisInst) {
          lenisInst.raf(time)
          requestAnimationFrame(raf)
        }
      }
      requestAnimationFrame(raf)
    })

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        ".about-hero-text",
        { opacity: 0, y: 60, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          stagger: 0.15,
          delay: 0.2,
          ease: "power3.out",
        }
      )

      // Scroll-triggered reveals
      gsap.utils.toArray<Element>(".about-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          }
        )
      })
    })

    return () => {
      ctx.revert()
      if (lenisInst) lenisInst.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--c-bg)" }}>
      <HomeNavbar onMenuToggle={() => {}} />

      {/* ── 1. HERO SECTION ──────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{ background: "var(--c-bg)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(34,197,94,0.1) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center md:px-14">
          <p className="about-hero-text section-overline mb-4 justify-center text-emerald-400">
            ABOUT US
          </p>
          <h1
            className="about-hero-text font-serif-luxury text-luxury-gradient text-luxury-glow mb-6"
            style={{
              fontSize: "clamp(2.5rem, 7.5vw, 5.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
            }}
          >
            We are catalysts of positive change.
          </h1>
          <p className="about-hero-text mx-auto mb-10 max-w-[46ch] text-base leading-relaxed tracking-wide text-[var(--c-text-muted)] md:text-lg">
            Re-imagining sustainability for Africa through circular solutions.
          </p>
          <a
            href="#story"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="about-hero-text inline-flex items-center gap-2 rounded-full border border-[var(--c-border-dark)] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--c-text-muted)] backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-600"
          >
            Our Story <ArrowDown size={14} />
          </a>
        </div>
      </div>

      {/* ── 2. SECTION 1: OUR STORY (TIMELINE) ────────────────────────────── */}
      <section
        id="story"
        className="relative border-t border-white/5 px-[clamp(1.25rem,4vw,3rem)] py-[clamp(6rem,12vw,10rem)]"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-20 text-center">
            <p className="about-reveal section-overline mb-3 justify-center text-emerald-400">
              OUR JOURNEY
            </p>
            <h2
              className="about-reveal font-serif-luxury text-luxury-gradient text-luxury-glow"
              style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05 }}
            >
              How we built the loop.
            </h2>
          </div>

          <div className="relative ml-4 space-y-12 border-l border-emerald-500/10 py-4 pl-8 md:ml-32 md:pl-12">
            {timelineItems.map((item, idx) => (
              <div key={item.year} className="about-reveal group relative">
                {/* Visual marker point */}
                <div className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-emerald-500/20 bg-[var(--c-bg)] transition-all duration-500 group-hover:border-emerald-500 md:-left-[57px]">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>

                {/* Left side year indicator for desktop */}
                <div className="font-serif-luxury absolute -left-44 top-0 hidden w-24 text-right text-2xl font-light text-emerald-600 transition-colors duration-300 group-hover:text-emerald-500 md:block">
                  {item.year}
                </div>

                <div className="rounded-3xl border border-[var(--c-border)] bg-[var(--c-surface)] p-8 transition-all duration-300 hover:border-emerald-500/20">
                  {/* Mobile-only year display */}
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-emerald-400 md:hidden">
                    {item.year}
                  </span>

                  <h3 className="font-serif-luxury mb-3 text-xl font-normal text-[var(--c-text)] transition-colors group-hover:text-emerald-600">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-[var(--c-text-muted)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto h-[1px] max-w-5xl bg-white/5" />

      {/* ── 3. SECTION 2: OUR MISSION (3 PILLARS) ────────────────────────── */}
      <section className="relative px-[clamp(1.25rem,4vw,3rem)] py-[clamp(6rem,12vw,10rem)]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="about-reveal section-overline mb-3 justify-center text-emerald-400">
              OUR MISSION
            </p>
            <h2
              className="about-reveal font-serif-luxury text-luxury-gradient text-luxury-glow"
              style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05 }}
            >
              The Three Pillars
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {missionItems.map((item, idx) => (
              <div key={idx} className="about-reveal">
                <SpotlightCard
                  className="flex h-full flex-col justify-between rounded-3xl border border-[var(--c-border)] bg-[var(--c-surface)] p-8 transition-all duration-500 hover:border-emerald-500/20"
                  spotlightColor="rgba(16,185,129,0.05)"
                >
                  <div>
                    <span className="mb-6 block flex-shrink-0 select-none text-4xl saturate-100 filter">
                      {item.icon}
                    </span>
                    <h3 className="font-serif-luxury mb-3 text-xl font-normal text-[var(--c-text)]">
                      {item.title}
                    </h3>
                    <p className="text-[13px] font-normal leading-relaxed text-[var(--c-text-muted)]">
                      {item.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto h-[1px] max-w-5xl bg-white/5" />

      {/* ── 4. SECTION 3: OUR VALUES ─────────────────────────────────────── */}
      <section className="relative px-[clamp(1.25rem,4vw,3rem)] py-[clamp(6rem,12vw,10rem)]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="about-reveal section-overline mb-3 justify-center text-emerald-400">
              OUR VALUES
            </p>
            <h2
              className="about-reveal font-serif-luxury text-luxury-gradient text-luxury-glow"
              style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05 }}
            >
              What shapes our identity.
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {valuesItems.map((item, idx) => (
              <div key={item.title} className="about-reveal">
                <SpotlightCard
                  className="h-full rounded-3xl border border-[var(--c-border)] bg-[var(--c-surface)] p-8 transition-all duration-500 hover:border-emerald-500/20"
                  spotlightColor="rgba(16,185,129,0.05)"
                >
                  <p
                    className="font-serif-luxury mb-3 text-3xl text-emerald-600"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-[13px] font-normal leading-relaxed text-[var(--c-text-muted)]">
                    {item.desc}
                  </p>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto h-[1px] max-w-5xl bg-white/5" />

      {/* ── 5. SECTION 4: OUR TEAM ───────────────────────────────────────── */}
      <section className="relative px-[clamp(1.25rem,4vw,3rem)] py-[clamp(6rem,12vw,10rem)]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="about-reveal section-overline mb-3 justify-center text-emerald-400">
              OUR TEAM
            </p>
            <h2
              className="about-reveal font-serif-luxury text-luxury-gradient text-luxury-glow"
              style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05 }}
            >
              The people building Africa&apos;s circular future.
            </h2>
          </div>

          <div className="about-reveal relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-[var(--c-border)] bg-[var(--c-surface)] p-8 shadow-[var(--shadow-lift)] backdrop-blur-xl md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0" />

            <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1fr_2fr]">
              {/* Founder Avatar Placeholder */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 rounded-full border border-emerald-500/15 bg-emerald-500/5 p-6 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                  <UserCheck size={48} strokeWidth={1} />
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                  Founder &amp; CEO
                </h4>
                <p className="font-serif-luxury mt-1 text-[10px] italic text-[var(--c-text-muted)]">
                  ECOCAN Executive Leadership
                </p>
              </div>

              {/* Founder Quote */}
              <div className="text-left">
                <span className="mb-[-12px] block h-6 select-none font-serif text-7xl leading-none text-emerald-400/20">
                  &ldquo;
                </span>
                <blockquote className="font-serif-luxury mb-6 text-base font-light italic leading-relaxed tracking-wide text-[var(--c-text)] md:text-[17px]">
                  I started ECOCAN after seeing bottles accumulate across our communities and
                  realizing recycling needed to become easier, smarter, and more rewarding. I
                  believed we could build a system that turns waste into value and communities into
                  environmental champions.
                </blockquote>
                <div className="mb-4 h-[1px] w-12 bg-emerald-500/30" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--c-text)]">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  )
}
