"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ShoppingBag,
  QrCode,
  Store,
  Bike,
  Wallet,
  Leaf,
  Users,
  Zap,
  BarChart3,
  ArrowRight,
  Globe,
  Smartphone,
} from "lucide-react"

/* ─── Update this with the real ECOCAN YouTube video ID ───────────────────── */
const YOUTUBE_VIDEO_ID = "M1YkMXlLNVo"

const steps = [
  {
    num: "1",
    title: "Buy",
    desc: "Any drink with ECOCAN code",
    img: "/assets/images/brand/bottle-journey.jpg",
    icon: ShoppingBag,
  },
  {
    num: "2",
    title: "Scan",
    desc: "Verify it's real (3 seconds)",
    img: "/assets/images/brand/scan-verify.jpg",
    icon: QrCode,
  },
  {
    num: "3",
    title: "Return",
    desc: "Empty, intact, to any ECO-Station counter or machine",
    img: "/assets/images/brand/return-counter.jpg",
    icon: Store,
  },
  {
    num: "4",
    title: "Collect",
    desc: "We pick up. You've done your part.",
    img: "/assets/images/brand/ebike-collection.jpg",
    icon: Bike,
  },
  {
    num: "5",
    title: "Get rewarded",
    desc: "Instant cash to your wallet – a bonus for doing good",
    img: "/assets/images/brand/recycling-hub.jpg",
    icon: Wallet,
  },
]

const ecosystemNodes = [
  {
    label: "Producers",
    desc: "Responsible brands put bottles on the market.",
    img: "/assets/images/brand/bottle-journey.jpg",
  },
  {
    label: "Retail Partners",
    desc: "You buy, enjoy, and return.",
    img: "/images/supermarket-interior.jpg",
  },
  {
    label: "You",
    desc: "Return your bottle. Make a difference.",
    img: "/images/african-family.jpg",
  },
  {
    label: "ECOCAN & Roam",
    desc: "We collect using clean, electric logistics.",
    img: "/assets/images/brand/ebike-collection.jpg",
  },
  {
    label: "Recycling Partners",
    desc: "Bottles are sorted, recycled and processed.",
    img: "/images/recycling-hub.jpg",
  },
  {
    label: "Back to shelf",
    desc: "New bottles. Same purpose. A new life.",
    img: "/images/scan-verify.jpg",
  },
]

const impactPillars = [
  {
    icon: Leaf,
    title: "Cleaner Planet",
    desc: "Every bottle returned keeps our communities and environment clean.",
  },
  {
    icon: Users,
    title: "Stronger Communities",
    desc: "Creating pride, jobs, and economic opportunities across Kenya.",
  },
  {
    icon: Zap,
    title: "Sustainable Logistics",
    desc: "Electric bikes. Lower emissions. Lower costs.",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact",
    desc: "Data-driven systems for transparency and real change.",
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
    }, sectionRef)
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-transparent"
    >
      {/* ── 1. INTRO HEADER ─────────────────────────────────────────────── */}
      <div className="relative overflow-hidden px-[clamp(1.25rem,4vw,3rem)] py-[clamp(4rem,8vw,7rem)]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/how_it_works_hero.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-30"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(12,14,12,0.82) 0%, rgba(12,14,12,0.96) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_auto]">
          {/* Left: copy */}
          <div>
            <p className="ec-reveal section-overline mb-4 text-emerald-400">HOW IT WORKS</p>
            <h2
              className="ec-reveal mb-4 font-bold leading-tight tracking-tight text-white"
              style={{ fontSize: "clamp(2.2rem,5.5vw,4rem)", letterSpacing: "-0.02em" }}
            >
              From your hand back to the shelf.{" "}
              <span style={{ color: "#4ade80" }}>Clean. Traceable.</span>
            </h2>
            <p className="ec-reveal max-w-xl text-base leading-relaxed text-white/60">
              Our simple 5-step journey turns your empty bottle into real impact.
            </p>
          </div>

          {/* Right: phone mockup with eco-wallet overlay */}
          <div className="ec-reveal relative mx-auto w-[200px] shrink-0 drop-shadow-[0_0_40px_rgba(74,222,128,0.2)] md:w-[220px]">
            <Image
              src="/assets/images/consumer/ecocan-app.png"
              alt="ECOCAN eco-wallet showing KSh 5 reward"
              width={220}
              height={440}
              className="h-auto w-full"
            />
            {/* Eco-wallet badge overlay */}
            <div
              className="absolute -right-4 top-10 z-10 flex flex-col items-center gap-1 rounded-2xl px-4 py-3 shadow-xl"
              style={{
                background: "rgba(12,14,12,0.92)",
                border: "1px solid rgba(74,222,128,0.3)",
              }}
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                ECO-WALLET
              </p>
              <p className="font-bold text-white" style={{ fontSize: "1.5rem", lineHeight: 1.1 }}>
                KSh 5
              </p>
              <p className="text-[9px] font-medium text-white/60">Added</p>
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-black">
                ✓
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. YOUTUBE EMBED — full-width ───────────────────────────────── */}
      <div className="relative w-full" style={{ background: "#000" }}>
        {/* 16:9 aspect ratio container */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&color=white`}
            title="ECOCAN – The Circular Bottle Ecosystem"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>

      {/* ── 3. 5-STEP PROCESS ───────────────────────────────────────────── */}
      <div className="px-[clamp(1.25rem,4vw,3rem)] py-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-7xl">
          <p className="ec-reveal section-overline mb-10 text-center text-emerald-400">
            HOW IT WORKS
          </p>

          {/* Steps grid */}
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={step.num} className="ec-reveal flex flex-col items-center">
                  {/* Photo card */}
                  <div className="relative mb-4 w-full overflow-hidden rounded-2xl">
                    {/* Numbered circle */}
                    <div
                      className="absolute left-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-black"
                      style={{ background: "#4ade80" }}
                    >
                      {step.num}
                    </div>

                    {/* Photo */}
                    <Image
                      src={step.img}
                      alt={step.title}
                      width={300}
                      height={220}
                      className="h-[180px] w-full object-cover md:h-[200px]"
                    />

                    {/* Icon circle at bottom-centre */}
                    <div
                      className="absolute bottom-3 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full"
                      style={{ background: "rgba(74,222,128,0.15)", border: "1px solid #4ade80" }}
                    >
                      <Icon size={16} style={{ color: "#4ade80" }} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="mb-1 text-center text-base font-bold text-white">{step.title}</h3>
                  <p
                    className="text-center text-[12px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {step.desc}
                  </p>

                  {/* Arrow connector (not on last) — shown between cols on desktop */}
                  {idx < steps.length - 1 && (
                    <div className="mt-3 hidden text-white/25 md:flex md:justify-center">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Partner note */}
          <div className="ec-reveal mt-10 flex items-center justify-center gap-3">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{
                background: "rgba(74,222,128,0.1)",
                border: "1px solid rgba(74,222,128,0.2)",
              }}
            >
              <Store size={14} style={{ color: "#4ade80" }} strokeWidth={1.5} />
            </div>
            <p className="text-sm text-white/55">
              Our partners at supermarket counters scan and pay you instantly.
            </p>
          </div>
        </div>
      </div>

      {/* ── 4. THE ECOSYSTEM FLOW ───────────────────────────────────────── */}
      <div
        className="px-[clamp(1.25rem,4vw,3rem)] py-[clamp(4rem,8vw,7rem)]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="ec-reveal mb-14 text-center">
            <p className="section-overline mb-3 justify-center text-emerald-400">THE ECOSYSTEM</p>
            <h2
              className="font-bold text-white"
              style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.02em" }}
            >
              Africa&apos;s <span style={{ color: "#4ade80" }}>circular</span> bottle ecosystem.
            </h2>
          </div>

          {/* Circular nodes */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-6 md:gap-4">
              {ecosystemNodes.map((node, idx) => (
                <div key={node.label} className="ec-reveal flex flex-col items-center gap-3">
                  {/* Circle photo */}
                  <div className="relative">
                    <div
                      className="overflow-hidden rounded-full"
                      style={{
                        width: "clamp(90px,13vw,130px)",
                        height: "clamp(90px,13vw,130px)",
                        border: "2px solid rgba(74,222,128,0.25)",
                      }}
                    >
                      <Image
                        src={node.img}
                        alt={node.label}
                        width={130}
                        height={130}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* Arrow to next node (desktop) */}
                    {idx < ecosystemNodes.length - 1 && (
                      <div className="absolute -right-[22px] top-1/2 hidden -translate-y-1/2 text-white/25 md:block">
                        <ArrowRight size={16} />
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <p className="mb-1 text-sm font-bold text-white">{node.label}</p>
                    <p
                      className="text-[11px] leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {node.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Globe icon + dashed arc (decorative) */}
            <div className="mt-10 flex flex-col items-center gap-2">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: "rgba(74,222,128,0.08)",
                  border: "1px solid rgba(74,222,128,0.2)",
                }}
              >
                <Globe size={20} style={{ color: "#4ade80" }} strokeWidth={1.5} />
              </div>
              <div
                className="h-[1px] w-2/3 max-w-md"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(74,222,128,0.3), transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. IMPACT PILLARS ───────────────────────────────────────────── */}
      <div className="px-[clamp(1.25rem,4vw,3rem)] pb-[clamp(3rem,6vw,5rem)]">
        <div className="mx-auto max-w-7xl">
          <div
            className="ec-reveal grid grid-cols-2 gap-6 rounded-3xl p-8 md:grid-cols-4 md:p-10"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            {impactPillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-3 text-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: "rgba(74,222,128,0.1)",
                    border: "1px solid rgba(74,222,128,0.2)",
                  }}
                >
                  <Icon size={22} style={{ color: "#4ade80" }} strokeWidth={1.5} />
                </div>
                <p className="text-sm font-bold text-white">{title}</p>
                <p
                  className="text-[11px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6. CTA STRIP ────────────────────────────────────────────────── */}
      <div className="px-[clamp(1.25rem,4vw,3rem)] pb-[clamp(4rem,8vw,7rem)]">
        <div className="mx-auto max-w-7xl">
          <div
            className="ec-reveal flex flex-col items-center justify-between gap-6 rounded-3xl p-8 md:flex-row md:p-10"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: "rgba(74,222,128,0.1)",
                  border: "1px solid rgba(74,222,128,0.25)",
                }}
              >
                <Leaf size={18} style={{ color: "#4ade80" }} strokeWidth={1.5} />
              </div>
              <p className="text-base font-medium leading-snug text-white/80 md:text-lg">
                Every bottle returned is a step towards a{" "}
                <span style={{ color: "#4ade80" }}>cleaner, greener Africa.</span>
              </p>
            </div>

            <Link
              href="/download"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              style={{ background: "#4ade80" }}
            >
              <Smartphone size={16} strokeWidth={2} />
              Get the app today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
