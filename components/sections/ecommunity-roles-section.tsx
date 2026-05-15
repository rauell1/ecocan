"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Recycle, Store, Truck, Factory, Music, Leaf, ArrowRight, CheckCircle2 } from "lucide-react"
import SectionBadge from "@/components/shared/section-badge"

const roles = [
  {
    icon: Recycle,
    title: "Consumer",
    subtitle: "Return & Earn",
    description:
      "Scan, return your empty bottles at any ECO-Station, and earn real money straight to your M-Pesa wallet.",
    stat: "Up to KES 5 per bottle",
    color: "#16a34a",
    href: "/download",
    cta: "Download the app",
    accent: "rgba(22,163,74,0.08)",
  },
  {
    icon: Store,
    title: "ECO-Station",
    subtitle: "Host a Drop-off Point",
    description:
      "Become a collection hub in your neighbourhood. Earn a per-unit handling fee and grow foot traffic to your business.",
    stat: "Fee per unit collected",
    color: "#0891b2",
    href: "/contact",
    cta: "Register your station",
    accent: "rgba(8,145,178,0.08)",
  },
  {
    icon: Truck,
    title: "ECO-Courier",
    subtitle: "Ride & Collect",
    description:
      "Use electric two-wheelers to collect full batches from stations and earn per pickup on a schedule that fits you.",
    stat: "Flexible daily earnings",
    color: "#7c3aed",
    href: "/contact",
    cta: "Apply as courier",
    accent: "rgba(124,58,237,0.08)",
  },
  {
    icon: Factory,
    title: "Eco-Producer",
    subtitle: "Brand Protection + DRS",
    description:
      "Authenticate every bottle with a unique QR code. Stop counterfeits, meet sustainability targets, and join the official deposit-return loop.",
    stat: "100% bottle traceability",
    color: "#d97706",
    href: "/contact",
    cta: "Protect your brand",
    accent: "rgba(217,119,6,0.08)",
  },
  {
    icon: Leaf,
    title: "Recycler",
    subtitle: "Close the Loop",
    description:
      "Receive sorted, clean material from ECO-Stations and turn it into raw input for manufacturing \u2014 zero sorting overhead.",
    stat: "Pre-sorted clean material",
    color: "#059669",
    href: "/contact",
    cta: "Partner with us",
    accent: "rgba(5,150,105,0.08)",
  },
  {
    icon: Music,
    title: "Events",
    subtitle: "Zero-Waste Activations",
    description:
      "Deploy portable ECO-Stations at festivals and events. Hit your sustainability goals and delight your audience.",
    stat: "Portable stations available",
    color: "#e11d48",
    href: "/contact",
    cta: "Get an event quote",
    accent: "rgba(225,29,72,0.08)",
  },
] as const

export default function EcommunityRolesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsWrapRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const iconRefs = useRef<(HTMLDivElement | null)[]>([])
  const arrowRefs = useRef<(SVGSVGElement | null)[]>([])
  const reducedMotion = useRef(false)

  // Stable handlers
  const handleCardEnter = useCallback((i: number) => {
    if (reducedMotion.current) return
    const icon = iconRefs.current[i]
    const arrow = arrowRefs.current[i]
    if (icon) gsap.to(icon, { scale: 1.18, duration: 0.35, ease: "back.out(2)" })
    if (arrow) gsap.to(arrow, { x: 5, duration: 0.28, ease: "power2.out" })
  }, [])

  const handleCardLeave = useCallback((i: number) => {
    if (reducedMotion.current) return
    const icon = iconRefs.current[i]
    const arrow = arrowRefs.current[i]
    if (icon) gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" })
    if (arrow) gsap.to(arrow, { x: 0, duration: 0.25, ease: "power2.out" })
  }, [])

  const handleCardClick = useCallback((i: number) => {
    setActiveCard((prev) => (prev === i ? null : i))
  }, [])

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotion.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // ── 1. Heading sequence ──────────────────────────────────────────────
      const badge = headingRef.current?.querySelector(".eco-badge")
      const overline = headingRef.current?.querySelector(".eco-overline")
      const headline = headingRef.current?.querySelector(".eco-headline")
      const body = headingRef.current?.querySelector(".eco-body")

      const headingTl = gsap.timeline({
        scrollTrigger: { trigger: headingRef.current, start: "top 78%", once: true },
      })

      if (badge) {
        gsap.set(badge, { clipPath: "inset(0 100% 0 0)", opacity: 1 })
        headingTl.to(badge, { clipPath: "inset(0 0% 0 0)", duration: 0.55, ease: "power2.out" }, 0)
      }
      if (overline) {
        gsap.set(overline, { opacity: 0, y: 20 })
        headingTl.to(overline, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0.15)
      }
      if (headline) {
        gsap.set(headline, { opacity: 0, y: 30 })
        headingTl.to(headline, { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }, 0.28)
      }
      if (body) {
        gsap.set(body, { opacity: 0, y: 18 })
        headingTl.to(body, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0.45)
      }

      // ── 2. Card stagger reveal ────────────────────────────────────────────
      const cards = cardsWrapRef.current?.querySelectorAll(".role-card")
      if (cards && cards.length > 0) {
        gsap.set(cards, { opacity: 0, y: 48, scale: 0.97 })
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.62,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsWrapRef.current,
            start: "top 82%",
            once: true,
          },
        })
      }

      // ── 3. Subtle background parallax ─────────────────────────────────────
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { backgroundPositionY: "0%" },
          {
            backgroundPositionY: "6%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Active card ring animation
  useEffect(() => {
    if (reducedMotion.current) return
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      if (activeCard === i) {
        gsap.to(card, {
          y: -8,
          boxShadow: "0 20px 48px rgba(0,0,0,0.12)",
          duration: 0.35,
          ease: "power2.out",
        })
      } else {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          duration: 0.3,
          ease: "power2.out",
        })
      }
    })
  }, [activeCard])

  return (
    <section
      ref={sectionRef}
      id="ecommunity"
      className="relative overflow-hidden bg-[#f8f8f6] px-6 py-28 md:py-36"
    >
      {/* Decorative background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(22,163,74,0.07) 0%, rgba(22,163,74,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-[380px] w-[380px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(8,145,178,0.06) 0%, rgba(8,145,178,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* ── Header ── */}
        <div ref={headingRef} className="mb-16 max-w-[640px]">
          <div className="eco-badge">
            <SectionBadge number="03" />
          </div>
          <p className="section-overline eco-overline mb-3 mt-6">Who is ECOCAN for?</p>
          <h2 className="section-headline eco-headline mb-5">
            Every role in the{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#16a34a,#059669)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ECOmmunity
            </span>
          </h2>
          <p className="section-body eco-body max-w-[440px]">
            Six roles. One loop. Find yours and tap in.
          </p>
        </div>

        {/* ── Role cards ── */}
        <div
          ref={cardsWrapRef}
          className="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {roles.map((role, i) => {
            const Icon = role.icon
            const isActive = activeCard === i

            return (
              <div
                key={role.title}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                className="role-card group relative flex w-[82vw] shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white sm:w-[60vw] lg:w-auto"
                style={{
                  scrollSnapAlign: "start",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  transition: "border-color 0.25s",
                  borderColor: isActive ? role.color + "55" : undefined,
                  willChange: "transform, box-shadow",
                }}
                onMouseEnter={() => handleCardEnter(i)}
                onMouseLeave={() => handleCardLeave(i)}
                onClick={() => handleCardClick(i)}
              >
                {/* Top accent bar — grows on active */}
                <div
                  className="w-full transition-all duration-300"
                  style={{
                    height: isActive ? "5px" : "3px",
                    background: role.color,
                    opacity: isActive ? 1 : 0.7,
                  }}
                />

                {/* Active glow ring */}
                {isActive && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
                    style={{
                      boxShadow: `inset 0 0 0 1.5px ${role.color}55`,
                      background: role.accent,
                    }}
                  />
                )}

                <div className="flex flex-1 flex-col p-6">
                  {/* Icon */}
                  <div
                    ref={(el) => {
                      iconRefs.current[i] = el
                    }}
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: role.color + "18" }}
                  >
                    <Icon size={24} style={{ color: role.color }} strokeWidth={1.8} />
                  </div>

                  {/* Subtitle */}
                  <p
                    className="mb-1 text-[11px] font-semibold uppercase tracking-widest"
                    style={{ color: role.color }}
                  >
                    {role.subtitle}
                  </p>

                  {/* Title */}
                  <h3 className="mb-3 text-[21px] font-bold leading-tight text-eco-dark">
                    {role.title}
                  </h3>

                  {/* Description — always visible, highlighted on active */}
                  <p
                    className="flex-1 text-[14px] leading-relaxed transition-colors duration-200"
                    style={{ color: isActive ? "rgba(15,15,15,0.75)" : "rgba(15,15,15,0.55)" }}
                  >
                    {role.description}
                  </p>

                  {/* Stat pill */}
                  <div
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1 text-[12px] font-semibold transition-all duration-200"
                    style={{
                      background: isActive ? role.color + "22" : role.color + "12",
                      color: role.color,
                    }}
                  >
                    <CheckCircle2 size={12} />
                    {role.stat}
                  </div>

                  {/* CTA */}
                  <Link
                    href={role.href}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-5 flex items-center gap-1.5 text-[14px] font-semibold transition-opacity duration-200 hover:opacity-80"
                    style={{ color: role.color }}
                  >
                    {role.cta}
                    <ArrowRight
                      size={14}
                      ref={(el) => {
                        arrowRefs.current[i] = el
                      }}
                      style={{ flexShrink: 0 }}
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Connector line — desktop only */}
        <div
          aria-hidden="true"
          className="mt-12 hidden h-px lg:block"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(22,163,74,0.25) 30%, rgba(8,145,178,0.25) 70%, transparent)",
          }}
        />
        <p className="mt-4 hidden text-center text-[12px] text-eco-dark/30 lg:block">
          Tap any card to explore
        </p>
      </div>
    </section>
  )
}
