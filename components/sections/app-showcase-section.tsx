"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ScanLine, Wallet, MapPin, ShieldCheck } from "lucide-react";

const features = [
  { icon: ScanLine, title: "Scan & Verify in 3 seconds", desc: "Point your phone at any bottle. Know if it's real before you drink." },
  { icon: Wallet, title: "Instant earnings to your wallet", desc: "Return empties, get deposit money sent straight to M-PESA or bank." },
  { icon: MapPin, title: "Find the nearest ECO-Station", desc: "Our map shows every collection point in your area, updated in real time." },
  { icon: ShieldCheck, title: "Your bottle, fully traced", desc: "From producer to return — every step visible, every counterfeit caught." },
];

export default function AppShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const textEls = sectionRef.current?.querySelectorAll(".app-text-animate");
      if (textEls && textEls.length > 0) {
        gsap.fromTo(textEls, { opacity: 0, x: -40 }, {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      }
      const imgEl = sectionRef.current?.querySelector(".app-img-animate");
      if (imgEl) {
        gsap.fromTo(imgEl, { opacity: 0, y: 60, scale: 0.95 }, {
          opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      }
      const featureCards = sectionRef.current?.querySelectorAll(".feature-card");
      if (featureCards && featureCards.length > 0) {
        gsap.fromTo(featureCards, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-28 lg:py-36 overflow-hidden border-t border-white/8"
      style={{ background: "#101010" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: text + features */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4 app-text-animate">The ECOCAN App</p>
            <h2
              className="font-bold text-white app-text-animate mb-6"
              style={{ fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.1 }}
            >
              Everything you need.<br />One app.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed app-text-animate mb-10 max-w-[500px]">
              Scan, earn, find, and report — the ECOCAN app puts the entire circular bottle economy in your pocket.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {features.map((f) => (
                <div key={f.title} className="feature-card">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <f.icon size={18} className="text-primary" />
                    </div>
                    <h3 className="text-white font-semibold text-sm leading-tight">{f.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed pl-12">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 app-text-animate">
              <Link
                href="https://apps.apple.com/app/6502695438"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-white !py-3 !px-7 text-sm"
              >
                <Image
                  src="/assets/images/apple-store.png"
                  alt="App Store"
                  width={20}
                  height={20}
                  className="rounded"
                />
                App Store
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.superapp.ecocanapp"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn border border-white/30 text-white hover:bg-white/10 !py-3 !px-7 text-sm"
              >
                Google Play
              </Link>
            </div>
          </div>

          {/* Right: app mockup images */}
          <div className="relative flex justify-center items-end app-img-animate">
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #228B22 0%, transparent 70%)" }}
            />

            {/* Earn image (background, tilted) */}
            <div className="absolute -left-4 md:-left-8 bottom-0 w-[45%] rotate-[-8deg] origin-bottom-left z-0 opacity-80">
              <Image
                src="/assets/images/consumer/earn-image.png"
                alt="ECOCAN earn rewards screen"
                width={280}
                height={560}
                className="w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>

            {/* Main app screenshot (center, front) */}
            <div className="relative z-10 w-[55%]">
              <Image
                src="/assets/images/consumer/ecocan-app.png"
                alt="ECOCAN app main screen"
                width={340}
                height={680}
                className="w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>

            {/* Get-app illustration (right, tilted) */}
            <div className="absolute -right-4 md:-right-8 bottom-0 w-[40%] rotate-[6deg] origin-bottom-right z-0 opacity-70">
              <Image
                src="/assets/images/consumer/get-app.png"
                alt="Download ECOCAN"
                width={240}
                height={480}
                className="w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
