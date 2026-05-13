"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ScanLine, Repeat2, Gift } from "lucide-react";

interface HowItWorksSectionProps {
  scrollEnabled: boolean;
}

const steps = [
  {
    icon: MapPin,
    number: "01",
    title: "Find an ECO-Station",
    body:
      "Locate your nearest drop-off point using the ECOCAN app. Stations are available at supermarkets, petrol stations, and community hubs across Kenya.",
  },
  {
    icon: ScanLine,
    number: "02",
    title: "Scan & Verify",
    body:
      "Scan the QR code on your bottle to confirm it is genuine and track its journey from manufacturer to you — defeating fakes at the source.",
  },
  {
    icon: Repeat2,
    number: "03",
    title: "Return & Recycle",
    body:
      "Hand in your empty bottle. It enters our certified recycling stream, keeping plastic out of landfills and oceans.",
  },
  {
    icon: Gift,
    number: "04",
    title: "Earn Your Reward",
    body:
      "Receive instant cashback, airtime, or loyalty points directly in the app. The more you return, the more you earn.",
  },
];

export default function HowItWorksSection({ scrollEnabled }: HowItWorksSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollEnabled) return;
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
        cardsRef.current?.querySelectorAll(".step-card") ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 82%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [scrollEnabled]);

  return (
    <section ref={sectionRef} className="w-full py-[100px] md:py-[140px] bg-white">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <div ref={headRef} className="max-w-[640px] mb-16">
          <p className="section-overline animate-in mb-4">How It Works</p>
          <h2 className="section-headline animate-in mb-5">
            Four steps to a cleaner,<br />more rewarding future.
          </h2>
          <p className="section-body text-muted-foreground animate-in leading-relaxed">
            ECOCAN turns an everyday action — returning an empty bottle — into something that
            fights counterfeits, funds recycling, and puts money back in your pocket.
          </p>
        </div>

        {/* Step cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="step-card group relative rounded-2xl border border-border/60 bg-card p-7 flex flex-col gap-4 hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <span className="text-[13px] font-semibold text-muted-foreground/50 tabular-nums">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-[17px] font-semibold text-foreground leading-snug">
                  {step.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed flex-1">
                  {step.body}
                </p>
              </div>
            );
          })}  
        </div>
      </div>
    </section>
  );
}
