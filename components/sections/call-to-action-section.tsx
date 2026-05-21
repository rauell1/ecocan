"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Download, Handshake, TrendingUp } from "lucide-react"

const paths = [
  {
    icon: Download,
    eyebrow: "For consumers",
    headline: "Download the app.\nStart making a difference.",
    cta: "Get the App",
    href: "/download",
    accent: "#4ade80",
  },
  {
    icon: Handshake,
    eyebrow: "For partners",
    headline: "Join our network.\nGrow with us.",
    cta: "Become a Partner",
    href: "/contact",
    accent: "#38bdf8",
  },
  {
    icon: TrendingUp,
    eyebrow: "For investors",
    headline: "Back Africa's circular infrastructure.",
    cta: "Talk to Us",
    href: "/contact",
    accent: "#a78bfa",
  },
]

export default function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const els = sectionRef.current!.querySelectorAll(".ec-reveal")
      if (els.length === 0) return
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
    }, sectionRef)
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#060a08] py-[clamp(6rem,12vw,10rem)]"
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/cta_hero.png"
          alt="Futuristic forest canopy blending nature and technology"
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(6,10,8,0.7) 0%, rgba(6,10,8,0.95) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-[clamp(1.25rem,4vw,3rem)]">
        <h2
          className="ec-reveal font-serif-luxury text-luxury-gradient mb-16 text-center"
          style={{
            fontSize: "clamp(2.2rem,4.5vw,4rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          One platform. Every role.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {paths.map(({ icon: Icon, eyebrow, headline, cta, href, accent }) => (
            <div
              key={eyebrow}
              className="ec-reveal group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-[#0c100c]/40 p-10 backdrop-blur-md transition-all duration-500 hover:border-white/10"
            >
              {/* hover glow */}
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${accent}10 0%, transparent 60%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: `${accent}15` }}
                >
                  <Icon size={22} style={{ color: accent }} strokeWidth={1.5} />
                </div>

                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: accent }}
                >
                  {eyebrow}
                </p>

                <p className="font-serif-luxury whitespace-pre-line text-xl font-light leading-snug text-white/90">
                  {headline}
                </p>
              </div>

              <Link
                href={href}
                className="relative z-10 mt-10 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                style={{ color: `${accent}99` }}
              >
                <span
                  className="underline-offset-4 group-hover:underline"
                  style={{ color: accent }}
                >
                  {cta}
                </span>
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: accent }}
                >
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
