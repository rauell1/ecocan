"use client"

import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"
import { Store, Users, Truck, Recycle } from "lucide-react"

const roles = [
  {
    icon: Users,
    title: "Consumers",
    desc: "Scan for genuine drinks, return empties at ECO-Stations, and receive instant M-PESA recycling rewards.",
    accent: "#0891b2",
  },
  {
    icon: Store,
    title: "ECO-Stations",
    desc: "Serve nearby shoppers by accepting empties and helping neighborhoods recycle more bottles every day.",
    accent: "#16A34A",
  },
  {
    icon: Truck,
    title: "Couriers",
    desc: "Move sorted empties from ECO-Stations to recyclers quickly and reliably across urban Kenya.",
    accent: "#7c3aed",
  },
  {
    icon: Recycle,
    title: "Recyclers",
    desc: "Receive clean, sorted PET from a digitally verified chain — no sorting cost, no contamination.",
    accent: "#d97706",
  },
]

export default function EcommunityRolesSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-py section-alt relative w-full overflow-hidden"
    >
      <div className="site-container">
        <div className="ec-reveal mb-16">
          <SectionOverline>The eCommunity</SectionOverline>
          <h2 className="section-heading">
            Everyone wins.
            <br />
            <span className="font-light text-[--c-text-muted]">Together.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, i) => (
            <div
              key={i}
              className="ec-card group flex flex-col gap-6 p-8"
              style={{ borderTop: `3px solid ${role.accent}` }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:rotate-[8deg]"
                style={{ background: role.accent + "18", color: role.accent }}
              >
                <role.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold tracking-tight">{role.title}</h3>
                <p className="text-sm leading-relaxed text-[--c-text-muted]">{role.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
