"use client"

import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"
import { Store, Users, Truck, Recycle } from "lucide-react"

const roles = [
  {
    icon: Users,
    title: "Consumers",
    desc: "Scan for genuine drinks, return empties at ECO-Stations, and receive instant M-PESA recycling rewards.",
  },
  {
    icon: Store,
    title: "ECO-Stations",
    desc: "Serve nearby shoppers by accepting empties and helping neighbourhoods recycle more bottles every day.",
  },
  {
    icon: Truck,
    title: "Couriers",
    desc: "Move sorted empties from ECO-Stations to recyclers quickly and reliably across urban Kenya.",
  },
  {
    icon: Recycle,
    title: "Recyclers",
    desc: "Receive clean, sorted PET from a digitally verified chain — no sorting cost, no contamination.",
  },
]

export default function EcommunityRolesSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-py section-white relative w-full overflow-hidden"
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
            <div key={i} className="ec-reveal ec-card group flex flex-col gap-6 p-8">
              <div className="ec-icon-well group-hover:bg-[--c-green] group-hover:text-white transition-colors duration-300">
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
