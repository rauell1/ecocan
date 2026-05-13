"use client";

import Link from "next/link";
import { Store, Truck, Package, Recycle, Users, CalendarDays } from "lucide-react";

const roles = [
  {
    icon: <Users className="w-6 h-6" />,
    label: "Consumer",
    href: "/solutions",
    description: "Scan, return bottles, and earn deposit bonuses through the app.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: <Package className="w-6 h-6" />,
    label: "Eco-Producer",
    href: "/solutions",
    description: "Register your brand, track authentic containers, and fight counterfeits.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: <Store className="w-6 h-6" />,
    label: "ECO-Station",
    href: "/solutions",
    description: "Host a collection point, earn handling fees, and grow foot traffic.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    label: "Courier",
    href: "/solutions",
    description: "Pick up from stations, deliver to recyclers, and earn per collection.",
    color: "bg-orange-50 text-orange-700",
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    label: "Recycler",
    href: "/solutions",
    description: "Receive pre-sorted containers and access verified recycling data.",
    color: "bg-teal-50 text-teal-700",
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    label: "Events",
    href: "/solutions",
    description: "Activate ECOCAN at festivals, concerts, and community gatherings.",
    color: "bg-purple-50 text-purple-700",
  },
];

export default function EcommunityRolesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-14 max-w-[620px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            The ECOmmunity
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-eco-dark leading-tight mb-5">
            Everyone has a role
            <br />
            in the loop.
          </h2>
          <p className="text-eco-dark/70 text-lg leading-relaxed">
            ECOCAN is not a single product — it is a shared platform. Six distinct roles, each rewarded, each essential.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {roles.map((role) => (
            <Link
              key={role.label}
              href={role.href}
              className="group rounded-2xl border border-eco-dark/8 bg-neutral-50 hover:bg-white hover:shadow-md p-7 flex flex-col gap-3 transition-all duration-200"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${role.color}`}>
                {role.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-eco-dark group-hover:text-primary transition-colors">
                {role.label}
              </h3>
              <p className="text-eco-dark/60 text-[14px] leading-relaxed">{role.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
