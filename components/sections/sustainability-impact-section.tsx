"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, DropletOff, ShieldCheck, Users } from "lucide-react";

const impacts = [
  {
    icon: Leaf,
    value: "1M+",
    label: "Bottles recovered",
    sub: "and diverted from landfill",
  },
  {
    icon: DropletOff,
    value: "40t",
    label: "CO₂ emissions avoided",
    sub: "through circular material use",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Counterfeit detection rate",
    sub: "across scanned products",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Active ECOmmunity members",
    sub: "and growing every month",
  },
];

export default function SustainabilityImpactSection() {
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
        gridRef.current?.querySelectorAll(".impact-card") ?? [],
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
    <section ref={sectionRef} className="w-full py-[100px] md:py-[140px] bg-white">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <div ref={headRef} className="max-w-[560px] mb-14">
          <p className="section-overline animate-in mb-4">Our Impact</p>
          <h2 className="section-headline animate-in mb-5">
            Real numbers.<br />Real change.
          </h2>
          <p className="section-body text-muted-foreground animate-in leading-relaxed">
            Every bottle returned is a data point in a larger story of environmental recovery,
            brand protection, and community empowerment across Africa.
          </p>
        </div>

        {/* Impact grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {impacts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="impact-card rounded-2xl border border-border/60 bg-card p-7 flex flex-col gap-3 hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <p className="text-4xl font-bold text-foreground tabular-nums">{item.value}</p>
                <div>
                  <p className="text-[15px] font-semibold text-foreground">{item.label}</p>
                  <p className="text-[13px] text-muted-foreground mt-0.5">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
