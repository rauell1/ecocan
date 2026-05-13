"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const roles = [
  {
    id: "consumer",
    label: "ECOnsumer",
    tagline: "Return. Earn. Repeat.",
    desc: "Download the app, scan your bottles to verify authenticity, return empties at any ECO-Station, and get rewarded instantly.",
    image: "/assets/images/consumer/hero-img.png",
    cta: "Download the App",
    href: "/download",
    accent: "from-primary/30 to-primary/5",
    pillBg: "bg-primary/10 text-primary",
  },
  {
    id: "eco-station",
    label: "ECO-Station",
    tagline: "Make money while facilitating recycling.",
    desc: "Host a collection counter at your shop, supermarket, or kiosk. We handle the logistics — you earn commission on every bottle returned.",
    image: "/images/return-counter.jpg",
    cta: "Register Your Station",
    href: "/contact",
    accent: "from-blue-900/30 to-blue-900/5",
    pillBg: "bg-blue-500/10 text-blue-300",
  },
  {
    id: "eco-producer",
    label: "ECO-Producer",
    tagline: "Protect your brand. Recover your packaging.",
    desc: "Tag every bottle with ECOCAN security codes. Stop counterfeits. Recover packaging for recycling. Meet your sustainability targets.",
    image: "/assets/images/consumer/avoid-fakes.svg",
    cta: "Join as a Producer",
    href: "/solutions",
    accent: "from-amber-900/20 to-amber-900/5",
    pillBg: "bg-amber-500/10 text-amber-300",
  },
  {
    id: "eco-events",
    label: "ECO-Events",
    tagline: "Elevate your event. Leave no trace.",
    desc: "Run zero-waste events with ECOCAN's collection infrastructure. Real-time reporting, deposit refunds for attendees, and sustainability certification.",
    image: "/assets/images/consumer/four-pics.svg",
    cta: "Plan an ECO-Event",
    href: "/contact",
    accent: "from-purple-900/20 to-purple-900/5",
    pillBg: "bg-purple-500/10 text-purple-300",
  },
];

export default function EcommunityRolesSection() {
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
      const roleCards = sectionRef.current?.querySelectorAll(".role-card");
      if (roleCards && roleCards.length > 0) {
        gsap.fromTo(roleCards, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current?.querySelector(".roles-grid"), start: "top 80%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-[120px] md:py-[160px] bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-[720px] mb-16">
          <p className="section-overline heading-animate mb-6">The ECOmmunity</p>
          <h2 className="section-headline text-eco-dark heading-animate mb-6">
            Everyone has a role in the ECO-loop.
          </h2>
          <p className="section-body text-eco-dark heading-animate max-w-[560px]">
            From the consumer who returns a bottle to the producer who recovers it — every member of the ECOmmunity closes the loop a little more.
          </p>
        </div>

        {/* Roles grid */}
        <div className="roles-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`role-card relative rounded-3xl overflow-hidden bg-gradient-to-br ${role.accent} border border-gray-100 p-8 md:p-10 flex flex-col min-h-[380px] group hover:shadow-elevated transition-all duration-500`}
              style={{ background: role.id === "consumer" ? "#F7F7F7" : undefined }}
            >
              {/* Pill label */}
              <span className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold mb-5 ${role.pillBg}`}>
                {role.label}
              </span>

              {/* Text */}
              <h3 className="text-2xl md:text-3xl font-bold text-eco-dark mb-3 leading-tight">{role.tagline}</h3>
              <p className="text-eco-dark/60 text-base leading-relaxed mb-8 flex-1">{role.desc}</p>

              {/* CTA */}
              <Link
                href={role.href}
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
              >
                {role.cta} <ArrowRight size={18} />
              </Link>

              {/* Image (decorative, right side) */}
              <div className="absolute bottom-0 right-0 w-2/5 h-full overflow-hidden pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity duration-500">
                <div className="relative w-full h-full">
                  <Image
                    src={role.image}
                    alt={role.label}
                    fill
                    className="object-cover object-left-top"
                    sizes="(max-width: 768px) 40vw, 20vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: African family image + join CTA */}
        <div className="mt-10 relative rounded-3xl overflow-hidden" style={{ minHeight: 260 }}>
          <Image
            src="/images/african-family.jpg"
            alt="African family joining the ECOmmunity"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
            style={{ background: "rgba(9, 76, 49, 0.72)" }}
          >
            <h3 className="text-white font-bold mb-4" style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              Join the ECOmmunity today
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl">
              250,000+ members across Kenya. Growing every day.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/download" className="pill-btn pill-btn-white !py-3 !px-8">
                Download the App
              </Link>
              <Link href="/contact" className="pill-btn border border-white/50 text-white hover:bg-white/10 !py-3 !px-8">
                Register Your Business
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
