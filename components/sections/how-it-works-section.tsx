"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ShoppingBag, QrCode, Store, Bike, Wallet, Play } from "lucide-react"

/* ── Set this to the real ECOCAN YouTube video ID ──────────────────────────
   e.g. for https://youtube.com/watch?v=ABC123  →  YOUTUBE_VIDEO_ID = "ABC123"  */
const YOUTUBE_VIDEO_ID = "1A9o-MalN0k"

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

/* ── YouTube lite embed ────────────────────────────────────────────────────
   Shows a thumbnail on first render; replaces with iframe on play click.    */
function YouTubeLite({ videoId }: { videoId: string }) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="ECOCAN – Circular Bottle Podcast (AI NotebookLM Overview)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    )
  }

  return (
    <button
      aria-label="Play ECOCAN explainer video"
      onClick={() => setActive(true)}
      className="group relative block w-full overflow-hidden focus:outline-none"
      style={{ aspectRatio: "16/9", background: "#000" }}
    >
      {/* Thumbnail */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt="ECOCAN explainer video thumbnail"
        className="h-full w-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"
        loading="lazy"
      />

      {/* Dark overlay gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
          style={{
            background: "rgba(255,0,0,0.9)",
            boxShadow: "0 0 40px rgba(255,0,0,0.4)",
          }}
        >
          <Play size={32} className="translate-x-0.5 text-white" fill="white" />
        </div>
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-white/80">
          ECOCAN – Circular Bottle Podcast (AI NotebookLM Overview)
        </p>
      </div>

      {/* YouTube logo badge */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-black/70 px-3 py-1.5 backdrop-blur-sm">
        <span className="text-[11px] font-semibold text-white/80">Watch on</span>
        <span className="text-sm font-bold text-white">YouTube</span>
      </div>
    </button>
  )
}

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
      className="relative w-full overflow-hidden"
      style={{ background: "var(--c-bg)" }}
    >
      {/* ── 1. INTRO HEADER ──────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden px-[clamp(1.25rem,4vw,3rem)] py-[clamp(4rem,8vw,7rem)]"
        style={{ background: "var(--c-bg)" }}
      >
        {/* BG image */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <img
            src="/images/hero/how_it_works_hero.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(var(--c-bg-rgb), 0.7) 0%, rgba(var(--c-bg-rgb), 0.97) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_auto]">
          {/* Left: copy */}
          <div>
            <p className="ec-reveal section-overline mb-4 text-[var(--c-green)]">HOW IT WORKS</p>
            <h2
              className="ec-reveal mb-4 font-bold leading-tight tracking-tight text-[var(--c-text)]"
              style={{ fontSize: "clamp(2.2rem,5.5vw,4rem)", letterSpacing: "-0.02em" }}
            >
              From your hand back to the shelf.{" "}
              <span style={{ color: "var(--c-green)" }}>Clean. Traceable.</span>
            </h2>
            <p className="ec-reveal max-w-xl text-base leading-relaxed text-[var(--c-text-muted)]">
              Our simple 5-step journey turns your empty bottle into real impact.
            </p>
          </div>

          {/* Right: phone + eco-wallet badge */}
          <div className="ec-reveal relative mx-auto w-[180px] shrink-0 drop-shadow-[0_0_40px_rgba(34,197,94,0.08)] md:w-[210px]">
            <Image
              src="/assets/images/consumer/ecocan-app.png"
              alt="ECOCAN app showing eco-wallet reward"
              width={210}
              height={420}
              className="h-auto w-full"
            />
            {/* Eco-wallet badge */}
            <div
              className="absolute -right-5 top-8 z-10 flex min-w-[90px] flex-col items-center gap-1 rounded-2xl px-3 py-3 shadow-2xl"
              style={{
                background: "var(--landing-glass-bg)",
                border: "1px solid var(--c-border)",
              }}
            >
              <p
                className="text-[8px] font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--c-green)" }}
              >
                ECO-WALLET
              </p>
              <p
                className="font-bold text-[var(--c-text)]"
                style={{ fontSize: "1.4rem", lineHeight: 1.1 }}
              >
                KSh 5
              </p>
              <p className="text-[8px] font-medium text-[var(--c-text-muted)]">Added</p>
              <div
                className="mt-0.5 flex h-5 w-5 animate-pulse items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ background: "var(--c-green)" }}
              >
                ✓
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. YOUTUBE LITE EMBED — full-width ───────────────────────────── */}
      <YouTubeLite videoId={YOUTUBE_VIDEO_ID} />

      {/* ── 3. 5-STEP PROCESS ────────────────────────────────────────────── */}
      <div
        className="px-[clamp(1.25rem,4vw,3rem)] py-[clamp(4rem,8vw,7rem)]"
        style={{ background: "var(--c-bg)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="ec-reveal section-overline mb-3 justify-center text-[var(--c-green)]">
              THE JOURNEY
            </p>
            <h3
              className="ec-reveal font-bold text-[var(--c-text)]"
              style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }}
            >
              5 steps. Real rewards.
            </h3>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-5 md:gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={step.num} className="ec-reveal flex flex-col">
                  {/* Card */}
                  <div
                    className="hover:ring-[var(--c-green)]/30 group relative flex-1 overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:ring-1"
                    style={{ border: "1px solid var(--c-border)" }}
                  >
                    {/* Numbered badge */}
                    <div
                      className="absolute left-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shadow-md"
                      style={{ background: "var(--c-green)" }}
                    >
                      {step.num}
                    </div>

                    {/* Photo */}
                    <div className="relative h-[170px] overflow-hidden md:h-[155px]">
                      <Image
                        src={step.img}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 20vw"
                      />
                      {/* Bottom gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Icon badge at bottom */}
                      <div
                        className="absolute bottom-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full shadow-lg"
                        style={{
                          background: "rgba(255, 255, 255, 0.85)",
                          border: "1px solid var(--c-green)",
                        }}
                      >
                        <Icon size={14} strokeWidth={2} style={{ color: "var(--c-green)" }} />
                      </div>
                    </div>

                    {/* Label area */}
                    <div className="px-4 py-4" style={{ background: "var(--c-surface)" }}>
                      <h4
                        className="mb-1 font-bold text-[var(--c-text)]"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {step.title}
                      </h4>
                      <p className="text-[12px] leading-relaxed text-[var(--c-text-muted)]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Partner note */}
          <div className="ec-reveal mt-8 flex items-center justify-center gap-3">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-lg"
              style={{
                background: "var(--c-green-dim)",
                border: "1px solid var(--c-border)",
              }}
            >
              <Store size={13} style={{ color: "var(--c-green)" }} strokeWidth={1.5} />
            </div>
            <p className="text-sm text-[var(--c-text-muted)]">
              Our partners at supermarket counters scan and pay you instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
