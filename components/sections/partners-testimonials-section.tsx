"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partnerCategories = [
  { label: "Retailers", names: ["Jaza", "Quickmart", "Carrefour", "Naivas"] },
  { label: "Producers", names: ["Coca-Cola", "Keroche", "KWAL", "Del Monte"] },
  { label: "Logistics", names: ["Roam Air", "Bolt", "Glovo", "Sendy"] },
  { label: "Investors", names: ["Antler", "Unreasonable", "Villgro", "NEFCO"] },
];

const testimonials = [
  {
    quote: "I don't think about the money. I think about my children drinking safe water.",
    name: "Mama Jane",
    role: "Consumer, Nairobi",
    image: "/images/testimonial-jane.jpg",
  },
  {
    quote: "My customers feel proud to recycle here. The foot traffic is a bonus.",
    name: "Supermarket Owner",
    role: "Retail partner",
    image: "/images/testimonial-owner.jpg",
  },
  {
    quote: "Putting a bottle in the bin feels wrong now. Returning it feels right.",
    name: "James",
    role: "ECOnsumer, Mombasa",
    image: "/images/testimonial-james.jpg",
  },
];

const newsItems = [
  { title: "ECOCAN secures early-stage funding from global impact investors", date: "Jan 2026", href: "/news" },
  { title: "Electric bike fleet launches across Nairobi collection routes", date: "Dec 2025", href: "/news" },
  { title: "ECOCAN signs landmark partnership with leading supermarket chain", date: "Nov 2025", href: "/news" },
];

export default function PartnersTestimonialsSection() {
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
      const partnersArea = sectionRef.current?.querySelector(".partners-area");
      if (partnersArea) {
        const partnerRows = partnersArea.querySelectorAll(".partner-row");
        if (partnerRows.length > 0) {
          gsap.fromTo(partnerRows, { opacity: 0, y: 20 }, {
            opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out",
            scrollTrigger: { trigger: partnersArea, start: "top 85%", once: true },
          });
        }
      }
      const testimonialsArea = sectionRef.current?.querySelector(".testimonials-area");
      if (testimonialsArea) {
        const cards = testimonialsArea.querySelectorAll(".testimonial-card");
        if (cards.length > 0) {
          gsap.fromTo(cards, { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out",
            scrollTrigger: { trigger: testimonialsArea, start: "top 80%", once: true },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28 lg:py-36 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Retail partner image banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 heading-animate" style={{ height: "clamp(180px, 28vw, 340px)" }}>
          <Image
            src="/images/supermarket-interior.jpg"
            alt="ECOCAN collection point in supermarket"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-eco-dark/70 via-eco-dark/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">Our Partners</p>
            <h2 className="section-headline text-white">Trusted by leaders across the value chain</h2>
          </div>
        </div>

        {/* Partner pills grid */}
        <div className="partners-area mb-6">
          <div className="space-y-5">
            {partnerCategories.map((cat) => (
              <div key={cat.label} className="partner-row flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-eco-dark/40 w-24 uppercase tracking-wider shrink-0">{cat.label}</span>
                <div className="flex flex-wrap gap-2">
                  {cat.names.map((name) => (
                    <span key={name} className="px-4 py-1.5 bg-eco-light rounded-full text-eco-dark/70 text-sm font-medium">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold mt-8 hover:underline heading-animate"
          >
            Become a partner <ArrowRight size={16} />
          </Link>
        </div>

        {/* Partner retail image */}
        <div className="relative rounded-2xl overflow-hidden mb-20 heading-animate" style={{ height: "clamp(160px, 22vw, 280px)" }}>
          <Image
            src="/images/partner-retail.jpg"
            alt="ECOCAN partner retail counter"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-eco-dark/30" />
        </div>

        {/* Testimonials */}
        <div className="testimonials-area">
          <h2 className="section-headline text-eco-dark heading-animate mb-12">Real impact. Real pride.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card bg-white rounded-[24px] p-8 shadow-card border border-gray-100">
                <p className="text-eco-dark/80 text-lg leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-eco-dark text-sm">{t.name}</p>
                    <p className="text-eco-dark/50 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News */}
        <div className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4 heading-animate">As seen in</p>
          <div className="flex flex-wrap gap-6 mb-10 heading-animate">
            {["BBC", "CNN", "Business Daily", "The Standard", "TechCrunch"].map((name) => (
              <span key={name} className="text-eco-dark/30 font-bold text-xl tracking-tight">{name}</span>
            ))}
          </div>
          <h3 className="text-2xl font-semibold text-eco-dark heading-animate mb-8">ECOCAN in the news</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Link key={item.title} href={item.href} className="group cursor-pointer heading-animate block">
                <p className="text-eco-dark/40 text-sm mb-2">{item.date}</p>
                <h4 className="text-eco-dark font-semibold group-hover:text-primary transition-colors leading-snug">{item.title}</h4>
                <span className="inline-flex items-center gap-1 text-primary text-sm mt-3 group-hover:underline font-medium">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-primary font-semibold mt-8 hover:underline"
          >
            All news <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
