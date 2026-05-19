"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Store, Factory, Bike } from "lucide-react";
import { GlassCard } from "@/components/ui/design-tokens";

const columns = [
  { icon: Store, title: "Retailers", desc: "Collection points. More foot traffic. Happier customers." },
  { icon: Factory, title: "Producers", desc: "Packaging recovered. Counterfeits stopped. Brand protected." },
  { icon: Bike, title: "Logistics", desc: "Last-mile collection. Lower costs." },
];

interface EcocanModelSectionProps {
  scrollEnabled: boolean;
}

export default function EcocanModelSection({ scrollEnabled }: EcocanModelSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollEnabled) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out", 
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } 
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [scrollEnabled]);

  return (
    <section ref={sectionRef} className="w-full py-32 bg-[#FBFBFD]">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Apple-style header */}
        <div className="mb-24 text-center reveal">
          <h2 className="text-5xl md:text-7xl font-semibold text-[#1d1d1f] tracking-[-0.02em] leading-tight">
            We don't do this alone. <br />
            <span className="text-[#86868b]">That's the point.</span>
          </h2>
        </div>

        {/* Glassmorphic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          {columns.map((col, i) => (
            <GlassCard key={i} className="hover:shadow-emerald-500/10">
              <div className="mb-8 w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
                <col.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{col.title}</h3>
              <p className="text-[17px] text-[#86868b] leading-relaxed">{col.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Sub-text */}
        <div className="mt-20 flex justify-center reveal">
          <p className="text-[17px] text-[#86868b] max-w-2xl text-center leading-relaxed">
            ECOCAN integrates into existing supply chains. Supermarket counters, not just machines. 
            Electric bikes, not just trucks. Circularity, not waste.
          </p>
        </div>
      </div>
    </section>
  );
}