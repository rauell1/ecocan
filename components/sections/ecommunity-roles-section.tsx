"use client"

import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"
import { Store, Users, Truck, Recycle } from "lucide-react"

const roles = [
  {
    icon: Store,
    title: "Retailers",
    desc: "Act as ECO-Station hosts. Accept returns, earn rewards, and build loyalty with eco-conscious shoppers.",
    accent: "#16A34A",
  },
  {
    icon: Users,
    title: "Consumers",
    desc: "Scan, return, and earn. Every bottle you hand back puts money directly into your M-PESA wallet.",
    accent: "#0891b2",
  },
  {
    icon: Truck,
    title: "Collectors",
    desc: "Ride electric cargo bikes, pick up verified bottles, and earn a living wage on a green route.",
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
      className="relative w-full section-py section-alt overflow-hidden"
    >
      <div className="site-container">
        <div className="ec-reveal mb-16">
          <SectionOverline>The eCommunity</SectionOverline>
          <h2 className="section-heading">
            Everyone wins.<br />
            <span className="text-[--c-text-muted] font-light">Together.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roles.map((role, i) => (
            <div
              key={i}
              className="ec-card group p-8 flex flex-col gap-6"
              style={{ borderTop: `3px solid ${role.accent}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-[8deg]"
                style={{ background: role.accent + "18", color: role.accent }}
              >
                <role.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-tight mb-2">{role.title}</h3>
                <p className="text-sm text-[--c-text-muted] leading-relaxed">{role.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
