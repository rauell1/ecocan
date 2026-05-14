"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Recycle, Store, Truck, Factory, Music, Leaf, ArrowRight } from "lucide-react"
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
  },
  {
    icon: Leaf,
    title: "Recycler",
    subtitle: "Close the Loop",
    description:
      "Receive sorted, clean material from ECO-Stations and turn it into raw input for manufacturing — zero sorting overhead.",
    stat: "Pre-sorted clean material",
    color: "#059669",
    href: "/contact",
    cta: "Partner with us",
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
  },
]

export default function EcommunityRolesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Header fades up
      const headingEls = sectionRef.current?.querySelectorAll(".eco-heading")
      if (headingEls && headingEls.length > 0) {
        gsap.fromTo(
          headingEls,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          }
        )
      }

      // Cards stagger in — desktop grid only (skip on mobile where they're in a scroll container)
      if (cardsWrapRef.current) {
        const cards = cardsWrapRef.current.querySelectorAll(".role-card")
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: { trigger: cardsWrapRef.current, start: "top 82%", once: true },
            }
          )
        }
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="ecommunity" className="bg-[#f8f8f6] px-6 py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 max-w-[600px]">
          <SectionBadge number="03" />
          <p className="section-overline eco-heading mb-3">Who is ECOCAN for?</p>
          <h2 className="section-headline eco-heading mb-4">Every role in the ECOmmunity</h2>
          <p className="section-body eco-heading">
            ECOCAN connects six types of participants into one circular economy. Find your role and
            tap in.
          </p>
        </div>

        {/* Role cards — horizontal scroll on mobile, 3-col grid on desktop */}
        <div
          ref={cardsWrapRef}
          className="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {roles.map((role) => {
            const Icon = role.icon
            return (
              <Link
                key={role.title}
                href={role.href}
                className="role-card group relative flex w-[82vw] shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-200 hover:shadow-lg sm:w-[60vw] lg:w-auto"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Coloured top accent bar */}
                <div className="h-[3px] w-full" style={{ background: role.color }} />

                <div className="flex flex-1 flex-col p-6">
                  {/* Icon */}
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200"
                    style={{ background: role.color + "18" }}
                  >
                    <Icon size={22} style={{ color: role.color }} />
                  </div>

                  {/* Content */}
                  <p
                    className="mb-1 text-[11px] font-semibold uppercase tracking-widest"
                    style={{ color: role.color }}
                  >
                    {role.subtitle}
                  </p>
                  <h3 className="mb-2 text-[20px] font-bold leading-tight text-eco-dark">
                    {role.title}
                  </h3>
                  <p className="flex-1 text-[14px] leading-relaxed text-eco-dark/60">
                    {role.description}
                  </p>

                  {/* Stat pill */}
                  <div
                    className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold"
                    style={{ background: role.color + "12", color: role.color }}
                  >
                    {role.stat}
                  </div>

                  {/* CTA */}
                  <div
                    className="mt-5 flex items-center gap-1.5 text-[14px] font-semibold"
                    style={{ color: role.color }}
                  >
                    {role.cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
