"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Buy", desc: "Any drink with ECOCAN security code" },
  { num: "02", title: "Scan", desc: "Verify authenticity in 3 seconds" },
  { num: "03", title: "Return", desc: "Empty, intact, to any ECO-Station counter" },
  { num: "04", title: "Collect", desc: "We pick up by electric bike. You've done your part." },
  { num: "05", title: "Get Rewarded", desc: "Instant deposit money to M-PESA or bank" },
];

interface HowItWorksSectionProps {
  scrollEnabled: boolean;
}

export default function HowItWorksSection({ scrollEnabled }: HowItWorksSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollEnabled) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const headingEls = sectionRef.current?.querySelectorAll(".heading-animate");
      if (headingEls && headingEls.length > 0) {
        gsap.fromTo(headingEls, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        });
      }
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll(".step-card");
      if (cards.length > 0) {
        gsap.fromTo(cards, { opacity: 0, y: 60, x: 30 }, {
          opacity: 1, y: 0, x: 0, duration: 0.6, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%", once: true },
        });
      }
      const imgEl = sectionRef.current?.querySelector(".counter-img");
      if (imgEl) {
        gsap.fromTo(imgEl, { opacity: 0, scale: 1.05 }, {
          opacity: 1, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: imgEl, start: "top 85%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [scrollEnabled]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden border-t border-white/8"
      style={{ background: "#101010" }}
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{ backgroundImage: "url(/images/bottle-journey.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-transparent to-[#101010]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4 heading-animate">How It Works</p>
        <h2 className="section-headline text-white heading-animate mb-2 max-w-[700px]">
          From your hand back to the shelf.
        </h2>
        <p className="section-body text-white heading-animate mb-12">Clean. Traceable. Rewarded.</p>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="step-card glass-card p-6 md:p-8 hover:-translate-y-2 hover:border-white/30 transition-all duration-300"
            >
              <span className="text-4xl md:text-5xl font-bold text-primary block mb-4 leading-none">{step.num}</span>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-white text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-white/40 text-sm italic heading-animate mb-3">
          No machine? No problem. Our partner counters scan and pay you instantly — right now, today.
        </p>
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-white font-medium hover:underline heading-animate mb-16"
        >
          See full journey <ArrowRight size={16} />
        </Link>

        {/* Return counter photo from original site */}
        <div className="counter-img relative rounded-3xl overflow-hidden heading-animate" style={{ height: "clamp(200px, 32vw, 400px)" }}>
          <Image
            src="/images/return-counter.jpg"
            alt="ECOCAN return counter at a supermarket"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101010]/70 via-[#101010]/20 to-transparent flex items-center p-8 md:p-12">
            <div>
              <p className="text-white font-bold text-2xl md:text-3xl mb-2">Return it right here.</p>
              <p className="text-white/70 text-base">Any ECO-Station counter. No machine required.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
