"use client"

import { SectionOverline } from "@/components/shared/section-shell"
import { Store, Users, Truck, Recycle, ArrowRight } from "lucide-react"

const roles = [
  {
    icon: Users,
    title: "Consumers",
    desc: "Scan for genuine drinks, return empties at ECO-Stations, and receive instant M-PESA recycling rewards.",
    cta: "Download App",
    href: "/download",
    color: "#4ade80",
  },
  {
    icon: Store,
    title: "ECO-Stations",
    desc: "Host a collection point for your neighbourhood. Accept empties, attract foot traffic, earn host rewards.",
    cta: "Register a Station",
    href: "/contact",
    color: "#60a5fa",
  },
  {
    icon: Truck,
    title: "Couriers",
    desc: "Move sorted empties from ECO-Stations to certified recyclers quickly and reliably across urban Kenya.",
    cta: "Become a Courier",
    href: "/contact",
    color: "#facc15",
  },
  {
    icon: Recycle,
    title: "Recyclers",
    desc: "Receive clean, sorted PET from a digitally verified chain — no sorting cost, no contamination.",
    cta: "Partner With Us",
    href: "/contact",
    color: "#f97316",
  },
]

export default function EcommunityRolesSection() {
  return (
    <section className="ps-reveal section-py section-alt relative w-full overflow-hidden">
      <div className="site-container">
        <div className="mb-5">
          <SectionOverline>The eCommunity</SectionOverline>
          <h2 className="section-heading">Everyone wins.</h2>
        </div>
        <p className="mb-16 max-w-xl text-sm leading-relaxed text-[--c-text-muted]">
          ECOCAN is a circular economy that rewards every participant — from the consumer who returns a bottle to the recycler who gives it new life.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, i) => (
            <div key={i} className="ps-reveal ec-card group relative flex flex-col gap-6 overflow-hidden p-8">
              <div className="absolute inset-x-0 top-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: role.color }} />
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{ background: role.color + "1a", color: role.color }}
              >
                <role.icon size={22} strokeWidth={1.5} />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="mb-2 text-base font-bold tracking-tight">{role.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[--c-text-muted]">{role.desc}</p>
                <a
                  href={role.href}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold transition-colors"
                  style={{ color: role.color }}
                >
                  {role.cta} <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
