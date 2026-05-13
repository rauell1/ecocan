"use client";

import Link from "next/link";
import { Recycle, Store, Truck, Factory, Music, ArrowRight } from "lucide-react";

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
];

export default function EcommunityRolesSection() {
  return (
    <section id="ecommunity" className="py-20 md:py-28 lg:py-36 bg-[#f8f8f6]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-[600px] mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">Who is ECOCAN for?</p>
          <h2 className="section-headline mb-4">Every role in the ECOmmunity</h2>
          <p className="section-body">
            ECOCAN connects six types of participants into one circular economy.
            Find your role and tap in.
          </p>
        </div>

        {/* Role cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Link
                key={role.title}
                href={role.href}
                className="group relative flex flex-col bg-[#101010] rounded-2xl p-7 border border-white/10 hover:border-white/20 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: role.color + "15" }}
                >
                  <Icon size={22} style={{ color: role.color }} />
                </div>

                {/* Content */}
                <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: role.color }}>
                  {role.subtitle}
                </p>
                <h3 className="text-[20px] font-semibold text-white mb-2 leading-tight">{role.title}</h3>
                <p className="text-[15px] text-white/75 leading-relaxed flex-1">{role.description}</p>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: role.color }}>
                  {role.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
