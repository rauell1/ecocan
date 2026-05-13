"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  ShoppingBag,
  Factory,
  MapPin,
  Bike,
  Recycle,
  CalendarDays,
} from "lucide-react";

const roles = [
  {
    icon: ShoppingBag,
    title: "Consumer",
    tagline: "Return empties, earn rewards.",
    body: "Scan your bottle, drop it off at any ECO-Station, and collect instant cashback or airtime — while keeping your community clean.",
    href: "/solutions",
  },
  {
    icon: Factory,
    title: "Eco-Producer",
    tagline: "Protect your brand at scale.",
    body: "Embed ECOCAN QR codes on your packaging to authenticate every unit in the market and eliminate counterfeits before they reach consumers.",
    href: "/solutions",
  },
  {
    icon: MapPin,
    title: "ECO-Station",
    tagline: "Turn footfall into income.",
    body: "Host a drop-off counter at your shop or site and earn a commission on every bottle collected — no machinery required to get started.",
    href: "/solutions",
  },
  {
    icon: Bike,
    title: "Courier",
    tagline: "Collect more, earn more.",
    body: "Pick up consignments of returned bottles and deliver them to recycling hubs. Flexible hours, transparent per-trip earnings.",
    href: "/solutions",
  },
  {
    icon: Recycle,
    title: "Recycler",
    tagline: "Verified material, guaranteed.",
    body: "Receive certified, sorted packaging material from our collection network — reducing your sourcing costs and your carbon footprint.",
    href: "/solutions",
  },
  {
    icon: CalendarDays,
    title: "Events",
    tagline: "Zero-waste activations.",
    body: "Run a sustainability-branded event with ECOCAN collection stations on-site. Great for festivals, sports days, and corporate CSR drives.",
    href: "/solutions",
  },
];

export default function EcommunityRolesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current?.querySelectorAll(".animate-in") ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: headRef.current, start: "top 82%", once: true },
        }
      );
      gsap.fromTo(
        gridRef.current?.querySelectorAll(".role-card") ?? [],
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-[100px] md:py-[140px]" style={{ background: "#F9F9F7" }}>
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <div ref={headRef} className="max-w-[600px] mb-14">
          <p className="section-overline animate-in mb-4">The ECOmmunity</p>
          <h2 className="section-headline animate-in mb-5">
            A role for everyone<br />in the ecosystem.
          </h2>
          <p className="section-body text-muted-foreground animate-in leading-relaxed">
            ECOCAN works because every participant — from the person returning a bottle to the
            brand protecting its reputation — has a clear benefit and a simple way to join.
          </p>
        </div>

        {/* Role cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Link
                key={role.title}
                href={role.href}
                className="role-card group rounded-2xl border border-border/60 bg-white p-7 flex flex-col gap-4 hover:border-primary/40 hover:shadow-md transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary outline-none"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-foreground mb-1">{role.title}</h3>
                  <p className="text-[13px] font-medium text-primary">{role.tagline}</p>
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed flex-1">{role.body}</p>
                <span className="text-[13px] font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
