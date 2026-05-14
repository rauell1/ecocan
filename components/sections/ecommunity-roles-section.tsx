"use client"

import Link from "next/link"
import { Recycle, Store, Truck, Factory, Music, ArrowRight } from "lucide-react"
import SectionBadge from "@/components/shared/section-badge"

const roles = [
  {
    icon: Recycle,
    title: "Consumer",
    subtitle: "Return & Earn",
    description:
      "Scan, return your empty bottles at any ECO-Station, and earn real money straight to your M-Pesa wallet.",
    color: "#16a34a",
    href: "/solutions",
    cta: "How to earn",
  },
  {
    icon: Store,
    title: "ECO-Station",
    subtitle: "Host a Drop-off Point",
    description:
      "Become a collection hub, earn per-unit fees, and grow your business as part of Africa's DRS network.",
    color: "#0891b2",
    href: "/solutions",
    cta: "Become a station",
  },
  {
    icon: Truck,
    title: "ECO-Courier",
    subtitle: "Ride & Collect",
    description:
      "Use electric two-wheelers to collect from stations and earn per pickup on a flexible schedule.",
    color: "#7c3aed",
    href: "/solutions",
    cta: "Start delivering",
  },
  {
    icon: Factory,
    title: "Eco-Producer",
    subtitle: "Brand Protection + DRS",
    description:
      "Protect your brand from counterfeits with QR authentication and join the official deposit return loop.",
    color: "#d97706",
    href: "/solutions",
    cta: "Protect your brand",
  },
  {
    icon: Recycle,
    title: "Recycler",
    subtitle: "Close the Loop",
    description:
      "Receive sorted, clean material from ECO-Stations and turn it into raw input for manufacturing.",
    color: "#059669",
    href: "/solutions",
    cta: "Join as recycler",
  },
  {
    icon: Music,
    title: "Events",
    subtitle: "Zero-Waste Activations",
    description:
      "Deploy portable ECO-Stations at festivals and events to hit your sustainability goals.",
    color: "#e11d48",
    href: "/solutions",
    cta: "Event solutions",
  },
]

export default function EcommunityRolesSection() {
  return (
    <section id="ecommunity" className="bg-[#f8f8f6] px-6 py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 max-w-[600px]">
          <SectionBadge number="03" />
          <p className="section-overline mb-3">Who is ECOCAN for?</p>
          <h2 className="section-headline mb-4">Every role in the ECOmmunity</h2>
          <p className="section-body">
            ECOCAN connects six types of participants into one circular economy. Find your role and
            tap in.
          </p>
        </div>

        {/* Role cards — horizontal scroll on mobile, 3-col grid on desktop */}
        <div
          className="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {roles.map((role) => {
            const Icon = role.icon
            return (
              <Link
                key={role.title}
                href={role.href}
                className="group relative flex w-[80vw] shrink-0 cursor-pointer flex-col rounded-2xl border border-black/5 bg-white p-7 transition-all duration-200 hover:border-black/10 hover:shadow-lg sm:w-[60vw] lg:w-auto"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Icon */}
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: role.color + "15" }}
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
                <p className="flex-1 text-[15px] leading-relaxed text-eco-dark/60">
                  {role.description}
                </p>

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
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
