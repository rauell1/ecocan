"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".animate-in") ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-[100px] md:py-[140px]"
      style={{ background: "#101010" }}
    >
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <p className="section-overline animate-in mb-6" style={{ color: "var(--color-primary)" }}>
          Get Started Today
        </p>
        <h2
          className="animate-in text-white font-bold mb-6"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1 }}
        >
          Ready to join Africa&apos;s circular economy?
        </h2>
        <p className="animate-in text-white/70 text-lg leading-relaxed mb-10 max-w-[560px] mx-auto">
          Download the app, find your nearest ECO-Station, and start earning rewards for every
          bottle you return — your first drop-off is free.
        </p>
        <div className="animate-in flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/download"
            className="pill-btn pill-btn-filled flex items-center gap-2"
          >
            <Download size={18} />
            Download the App
          </Link>
          <Link
            href="/about-us"
            className="pill-btn border border-white/40 text-white hover:bg-white/10 flex items-center gap-2"
          >
            Learn About Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
