"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScanLine, MapPin, Coins, Recycle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <ScanLine className="w-6 h-6" />,
    title: "Buy & Scan",
    description:
      "Purchase any participating beverage. Open the ECOCAN app and scan the unique QR code on the bottle to confirm authenticity.",
  },
  {
    number: "02",
    icon: <MapPin className="w-6 h-6" />,
    title: "Return at an ECO-Station",
    description:
      "Find your nearest ECO-Station on the map. Drop off empty bottles — via a reverse-vending machine or a staffed counter.",
  },
  {
    number: "03",
    icon: <Coins className="w-6 h-6" />,
    title: "Earn Your Deposit",
    description:
      "Your deposit is automatically credited to your ECOCAN wallet. Redeem it as airtime, mobile money, or in-app rewards.",
  },
  {
    number: "04",
    icon: <Recycle className="w-6 h-6" />,
    title: "Bottles Enter the Loop",
    description:
      "Returned containers are collected by certified couriers and delivered to licensed recyclers — completing the circular economy.",
  },
];

interface HowItWorksSectionProps {
  scrollEnabled: boolean;
}

export default function HowItWorksSection({ scrollEnabled }: HowItWorksSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!scrollEnabled) return;
    gsap.registerPlugin(ScrollTrigger);
    const cards = sectionRef.current?.querySelectorAll(".step-card");
    if (!cards) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, [scrollEnabled]);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-14 max-w-[580px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-eco-dark leading-tight mb-5">
            Four steps to a cleaner Africa.
          </h2>
          <p className="text-eco-dark/70 text-lg leading-relaxed">
            ECOCAN makes recycling rewarding, simple, and verifiable — from the first scan to the final loop.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="step-card rounded-2xl bg-white border border-eco-dark/8 p-7 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {step.icon}
                </div>
                <span className="text-4xl font-black text-eco-dark/8 leading-none">{step.number}</span>
              </div>
              <h3 className="text-[17px] font-semibold text-eco-dark">{step.title}</h3>
              <p className="text-eco-dark/65 text-[14px] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
