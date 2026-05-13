"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, Handshake, TrendingUp } from "lucide-react";
import Link from "next/link";

const ctaCards = [
  {
    title: "Consumer",
    desc: "Download app. Return bottles. Get paid. Repeat.",
    btn: "Get the App",
    icon: Download,
    href: "/download",
    accent: "text-primary",
  },
  {
    title: "Partner",
    desc: "Join our network as a retailer, producer, or logistics partner.",
    btn: "Register as Partner",
    icon: Handshake,
    href: "/contact",
    accent: "text-primary",
  },
  {
    title: "Investor",
    desc: "Back Africa's circular infrastructure. Early-stage, high conviction.",
    btn: "Talk to Us",
    icon: TrendingUp,
    href: "/contact",
    accent: "text-primary",
  },
];

export default function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      const ctaCardsEl = sectionRef.current?.querySelector(".cta-cards");
      if (ctaCardsEl) {
        const cards = ctaCardsEl.querySelectorAll(".cta-card");
        if (cards.length > 0) {
          gsap.fromTo(cards, { opacity: 0, y: 50 }, {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
            scrollTrigger: { trigger: ctaCardsEl, start: "top 85%", once: true },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-[120px] md:py-[160px]"
      style={{ background: "linear-gradient(135deg, #094C31 0%, #101010 100%)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <p className="section-overline heading-animate mb-4 !text-primary/80">Join the movement</p>
        <h2
          className="text-white font-bold heading-animate mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1 }}
        >
          Ready to close the loop?
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-16 heading-animate">
          Whether you return bottles, host a collection point, or fund the infrastructure — there&apos;s a place for you in the ECOmmunity.
        </p>

        <div className="cta-cards grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {ctaCards.map((card) => (
            <div
              key={card.title}
              className="cta-card glass-card p-8 md:p-10 hover:-translate-y-2 hover:border-white/30 transition-all duration-300 flex flex-col"
            >
              <card.icon size={36} className="text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-white/60 text-base mb-8 flex-1 leading-relaxed">{card.desc}</p>
              <Link
                href={card.href}
                className="pill-btn pill-btn-white !py-3 !px-6 text-sm w-full justify-center"
              >
                {card.btn}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
