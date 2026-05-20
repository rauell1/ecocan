"use client"

import { Users, Store, Recycle } from "lucide-react"

const roles = [
  { icon: Users, title: "Consumer", action: "Scan & earn" },
  { icon: Store, title: "Retailer", action: "Host returns" },
  { icon: Recycle, title: "Recycler", action: "Collect & process" },
]

export default function EcommunityRolesSection() {
  return (
    <section className="ps-reveal relative w-full overflow-hidden bg-[#0a0a0a] py-[clamp(5rem,10vw,9rem)]">
      <div className="px-[clamp(1.25rem,4vw,3rem)]">
        <h2
          className="ps-reveal mb-10 font-bold text-[#f5f5f5]"
          style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-0.02em" }}
        >
          One loop. Three roles.
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {roles.map((role) => (
            <div key={role.title} className="ps-reveal border border-white/10 bg-white/5 p-8">
              <role.icon size={20} className="text-white/70" strokeWidth={1.75} />
              <h3
                className="mt-5 text-2xl font-bold text-[#f5f5f5]"
                style={{ letterSpacing: "-0.02em" }}
              >
                {role.title}
              </h3>
              <p className="mt-2 text-sm text-white/50">{role.action}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
