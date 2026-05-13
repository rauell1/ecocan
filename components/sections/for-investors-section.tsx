"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { TrendingUp, Globe2, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Proven traction",
    body: "Over 1 million bottles processed since launch. Early-stage funded, operationally live, and expanding across Kenya.",
  },
  {
    icon: Globe2,
    title: "A market of billions",
    body: "Africa's beverage market is worth over $100B annually. Less than 5 % of packaging is currently recovered — the upside is enormous.",
  },
  {
    icon: ShieldCheck,
    title: "Dual revenue model",
    body: "ECOCAN earns from brand authentication licences and recycling offtake agreements — two complementary, recurring income streams.",
  },
];

export default function ForInvestorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        cardsRef.current?.querySelectorAll(".pillar-card") ?? [],
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 82%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-[100px] md:py-[140px]"
      style={{ background: "#F9F9F7" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <div ref={headRef} className="max-w-[600px] mb-14">
          <p className="section-overline animate-in mb-4">For Investors</p>
          <h2 className="section-headline animate-in mb-5">
            A scalable business model<br />backed by real-world results.
          </h2>
          <p className="section-body text-muted-foreground animate-in leading-relaxed">
            ECOCAN is not just an environmental initiative — it is a commercially viable
            platform tackling two of Africa&apos;s biggest market failures simultaneously.
          </p>
        </div>

        {/* Pillars */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="pillar-card rounded-2xl border border-border/60 bg-white p-7 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-[17px] font-semibold text-foreground">{p.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/about-us"
            className="pill-btn pill-btn-filled"
          >
            View Our Story
          </Link>
          <Link
            href="/contact"
            className="pill-btn border border-border text-foreground hover:bg-card"
          >
            Contact the Team
          </Link>
        </div>
      </div>
    </section>
  );
}
