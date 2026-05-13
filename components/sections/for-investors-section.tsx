"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link2, Recycle, Handshake, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  { icon: Link2, title: "Closed-loop system", desc: "Bottles → producers → bottles. Every unit traceable." },
  { icon: Recycle, title: "Electric logistics", desc: "Lower cost per collection. Infinitely scalable." },
  { icon: Handshake, title: "Strategic partnerships", desc: "Supermarkets, distributors, and top brands already on board." },
  { icon: TrendingUp, title: "Regional scaling", desc: "Kenya live. East Africa next. The template is proven." },
];

export default function ForInvestorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      const cardEls = cardsRef.current.querySelectorAll(".investor-card");
      if (cardEls.length > 0) {
        gsap.fromTo(cardEls, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-[120px] md:py-[160px] overflow-hidden" style={{ background: "#F7F7F7" }}>
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Hero image banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 heading-animate" style={{ height: "clamp(200px, 35vw, 400px)" }}>
          <Image
            src="/images/investor-aerial.jpg"
            alt="Aerial view — infrastructure investment"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-eco-dark/80 via-eco-dark/40 to-transparent flex items-end p-8 md:p-12">
            <div>
              <p className="section-overline !text-primary mb-2">For Investors</p>
              <h2 className="text-white font-bold" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", lineHeight: 1.2 }}>
                This is not a recycling project.<br />This is logistics infrastructure.
              </h2>
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="investor-card bg-white rounded-[24px] p-8 md:p-10 shadow-card hover:-translate-y-2 hover:shadow-elevated transition-all duration-300"
            >
              <card.icon size={36} className="text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-eco-dark mb-2">{card.title}</h3>
              <p className="text-eco-dark/60 text-base leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card flex flex-col md:flex-row items-center justify-between gap-8 heading-animate">
          <div>
            <p className="text-eco-dark font-semibold text-lg mb-1">Early-stage funding secured. Operations live.</p>
            <p className="text-eco-dark/60">Ready for Series A. Talk to our team.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/contact" className="pill-btn pill-btn-filled text-sm !py-3 !px-6">
              Request Investor Deck
            </Link>
            <Link href="/contact" className="pill-btn pill-btn-outline text-sm !py-3 !px-6">
              Financials Overview
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
