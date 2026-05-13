"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const stats = [
  { value: "30%", label: "of drinks in Africa are counterfeit" },
  { value: "80%", label: "of plastic bottles are never recovered" },
  { value: "$1B+", label: "lost annually to packaging waste" },
];

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const elements = headingRef.current?.querySelectorAll(".animate-in");
      if (!elements || elements.length === 0) return;

      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );

      const statCards = sectionRef.current?.querySelectorAll(".stat-item");
      if (statCards && statCards.length > 0) {
        gsap.fromTo(statCards, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current?.querySelector(".stats-row"), start: "top 85%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28 lg:py-36" style={{ background: "#101010" }}>
      <div ref={headingRef} className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4 animate-in">The Problem</p>
            <h2 className="section-headline text-white mb-8 animate-in">
              30% of drinks are fake.<br />Billions of bottles wasted.<br />
              <span className="text-primary">You can fix both.</span>
            </h2>
            <p className="section-body text-white/80 animate-in mb-10">
              Fake drinks and plastic waste hurt families and cities every day. ECOCAN turns each return into safer
              bottles, cleaner streets, and real value.
            </p>

            {/* Stats */}
            <div className="stats-row grid grid-cols-1 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item flex items-center gap-4 border-l-2 border-primary pl-5">
                  <span className="text-3xl font-bold text-primary shrink-0">{stat.value}</span>
                  <span className="text-white/60 text-base">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image collage */}
          <div className="animate-in relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated" style={{ height: 480 }}>
              <Image
                src="/assets/images/consumer/fight-back.svg"
                alt="Fight back against counterfeits"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/60 to-transparent" />
            </div>
            {/* Floating stat pill */}
            <div
              className="absolute -bottom-6 -left-6 glass-card p-5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <p className="text-4xl font-bold text-primary mb-1">1M+</p>
              <p className="text-white/60 text-sm">Bottles in our system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
