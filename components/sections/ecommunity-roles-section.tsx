"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Recycle, Store, Truck, Factory, Music, Leaf, ArrowRight, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/design-tokens";

const roles = [
  { icon: Recycle, title: "Consumer", subtitle: "Return & Earn", desc: "Scan, return your empty bottles at any ECO-Station, and earn real money.", stat: "Up to KES 5/bottle", color: "#16a34a", href: "/download", cta: "Download app" },
  { icon: Store, title: "ECO-Station", subtitle: "Host a Drop-off", desc: "Become a collection hub. Earn handling fees and increase foot traffic.", stat: "Fee per unit", color: "#0891b2", href: "/contact", cta: "Register" },
  { icon: Truck, title: "ECO-Courier", subtitle: "Ride & Collect", desc: "Use electric two-wheelers to collect batches on your own schedule.", stat: "Flexible earnings", color: "#7c3aed", href: "/contact", cta: "Apply" },
  { icon: Factory, title: "Eco-Producer", subtitle: "Brand Protection", desc: "Authenticate every bottle. Stop counterfeits and meet sustainability targets.", stat: "100% traceability", color: "#d97706", href: "/contact", cta: "Protect brand" },
  { icon: Leaf, title: "Recycler", subtitle: "Close the Loop", desc: "Receive sorted material directly for raw input manufacturing.", stat: "Clean material", color: "#059669", href: "/contact", cta: "Partner" },
  { icon: Music, title: "Events", subtitle: "Zero-Waste", desc: "Deploy portable stations at festivals to hit sustainability goals.", stat: "Portable stations", color: "#e11d48", href: "/contact", cta: "Get quote" },
];

export default function EcommunityRolesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out", 
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } 
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-32 bg-[#FBFBFD]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-24 text-center reveal">
          <span className="text-emerald-700 font-bold tracking-[0.2em] uppercase text-[11px]">The ECOmmunity</span>
          <h2 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tighter text-gray-900">
            Every role in the  <br />
            <span className="text-gray-400">ECOmmunity.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {roles.map((role, i) => (
            <GlassCard 
              key={i} 
              className={`group flex flex-col h-full ${activeCard === i ? 'border-emerald-500 shadow-2xl shadow-emerald-500/10' : ''}`}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Content Wrapper */}
              <div className="flex flex-col flex-grow">
                {/* RESTORED: Rounded-2xl icon container with animation */}
                <div 
                  className="mb-8 w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-[12deg]"
                  style={{ backgroundColor: role.color }}
                >
                  <role.icon size={28} />
                </div>
                
                <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: role.color }}>{role.subtitle}</span>
                <h3 className="mt-2 text-2xl font-bold text-gray-900">{role.title}</h3>
                <p className="mt-3 text-base text-gray-600 leading-relaxed font-medium">{role.desc}</p>
              </div>

              {/* Footer: Rounded-md pills with spacing */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col gap-4">
                {/* Stat Pill: Updated to rounded-md for modern look */}
                <div className="flex items-center gap-1.5 text-[13px] font-bold text-gray-700 bg-gray-100 px-3 py-2 rounded-md w-fit">
                  <CheckCircle2 size={14} /> {role.stat}
                </div>
                
                {/* Action Link */}
                <Link href={role.href} className="text-emerald-700 font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 hover:text-emerald-900 transition-colors mt-2">
                  {role.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}