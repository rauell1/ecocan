"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, ArrowRight, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  scrollEnabled: boolean;
  onTransitionComplete: () => void;
}

export default function HeroSection({ scrollEnabled, onTransitionComplete }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaBtnRef = useRef<HTMLButtonElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [transitionDone, setTransitionDone] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        ctaBtnRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power2.out" }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const triggerTransition = () => {
    if (transitionDone) return;
    setTransitionDone(true);

    const tl = gsap.timeline({
      defaults: { ease: "expo.inOut" },
      onComplete: () => onTransitionComplete(),
    });

    tl.to(videoRef.current, { scale: 0.5, filter: "brightness(0.6)", duration: 1.2 }, 0);
    tl.to(brandRef.current, { autoAlpha: 0, duration: 0.5 }, 0.3);
    tl.to(contentRef.current, { autoAlpha: 0, duration: 0.4 }, 0.2);

    const cards = cardsContainerRef.current?.querySelectorAll(".hero-card");
    if (cards) {
      tl.fromTo(cards, { yPercent: 100 }, { yPercent: 0, duration: 1.2, stagger: 0.05 }, 0);
      tl.to(cards[1], { y: "-15vh", duration: 1.2 }, 0);
    }

    tl.to(ctaBtnRef.current, { autoAlpha: 0, duration: 0.4 }, 0.8);
  };

  // Allow scroll wheel / touch to also trigger the transition
  useEffect(() => {
    if (scrollEnabled || transitionDone) return;
    const onWheel = (e: WheelEvent) => { if (e.deltaY > 0) triggerTransition(); };
    const onTouch = (() => {
      let startY = 0;
      return {
        start: (e: TouchEvent) => { startY = e.touches[0].clientY; },
        end: (e: TouchEvent) => { if (startY - e.changedTouches[0].clientY > 40) triggerTransition(); },
      };
    })();
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouch.start, { passive: true });
    window.addEventListener("touchend", onTouch.end, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouch.start);
      window.removeEventListener("touchend", onTouch.end);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollEnabled, transitionDone]);

  const scrollToSection = (id: string) => {
    document.body.style.overflow = "";
    const el = document.getElementById(id);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
  };

  return (
    <div ref={heroRef} id="hero" className="relative w-full" style={{ height: "100vh" }}>
      {/* Video background */}
      <div ref={videoRef} className="absolute inset-0" style={{ zIndex: 1 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/scan-verify.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(16,16,16,0.3) 0%, rgba(16,16,16,0.1) 40%, rgba(16,16,16,0.6) 100%)",
          }}
        />
      </div>

      {/* Brand name */}
      <h1
        ref={brandRef}
        className="absolute left-1/2 -translate-x-1/2 font-extrabold text-white text-center"
        style={{
          bottom: "10vh",
          fontSize: "clamp(60px, 14vw, 180px)",
          textShadow: "0 4px 40px rgba(0,0,0,0.5)",
          mixBlendMode: "overlay",
          zIndex: 2,
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        ECOCAN
      </h1>

      {/* Hero content */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ zIndex: 3 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 mb-4">
          Africa&apos;s Circular Bottle Ecosystem
        </p>
        <h2
          className="text-white font-bold mb-4"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1 }}
        >
          Return. Recycle.<br />Make a difference.
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-[640px] mb-8 font-normal">
          Recycle at any ECO-Station. Save the planet. Stop fake drinks. Get a bonus.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          {/* Download App - always works, goes to /download page */}
          <a
            href="/download"
            className="pill-btn pill-btn-white"
          >
            <Download size={18} />
            Download App
          </a>
          {/* Partner - unlocks scroll & jumps to model section */}
          <button
            onClick={() => { triggerTransition(); setTimeout(() => scrollToSection("model"), 1400); }}
            className="text-white font-medium hover:underline flex items-center gap-2 cursor-pointer bg-transparent border-none"
          >
            Partner with ECOCAN <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {["Early-stage funded", "Operational in Kenya", "GDPR Compliant"].map((badge) => (
            <span key={badge} className="glass-pill text-white text-[13px] px-4 py-1.5">
              {badge}
            </span>
          ))}
        </div>
        <span className="glass-pill text-white/80 text-[13px] px-4 py-1.5 italic">
          No machine? No problem. Our counters work today.
        </span>
      </div>

      {/* Explore CTA - shown until transition fires */}
      {!scrollEnabled && (
        <button
          ref={ctaBtnRef}
          onClick={triggerTransition}
          className="absolute left-1/2 -translate-x-1/2 glass-pill text-white px-6 py-3 flex items-center gap-3 hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
          style={{ bottom: "5vh", zIndex: 4 }}
          aria-label="Explore the Journey"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
          Explore the Journey
          <ChevronDown size={16} className="animate-bounce" />
        </button>
      )}

      {/* Floating reveal cards */}
      <div
        ref={cardsContainerRef}
        className="absolute inset-x-0 pointer-events-none"
        style={{ top: "100vh", zIndex: 5 }}
      >
        <div
          className="hero-card absolute rounded-3xl overflow-hidden shadow-elevated flex items-center justify-center px-6 py-12"
          style={{ left: "5vw", width: "90vw", height: "80vh", top: "10vh", background: "#F7F7F7" }}
        >
          <div className="w-full max-w-4xl text-center">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-8">
              {["30% counterfeit drinks", "80% bottles unrecovered", "$1B+ annual waste loss"].map((stat) => (
                <span
                  key={stat}
                  className="inline-flex items-center justify-center rounded-full bg-[#101010] text-white px-5 py-2.5 text-sm md:text-base font-bold"
                >
                  {stat}
                </span>
              ))}
            </div>
            <p className="text-[#101010] text-xl md:text-3xl font-semibold leading-tight">
              Africa&apos;s packaging crisis is solvable. Here&apos;s how.
            </p>
          </div>
        </div>
        <div
          className="hero-card absolute rounded-3xl overflow-hidden shadow-elevated flex items-center justify-center px-6 py-12"
          style={{ left: "10vw", width: "80vw", height: "85vh", top: "5vh", background: "#101010" }}
        >
          <div className="w-full max-w-5xl text-center text-white">
            <p className="text-primary font-semibold uppercase tracking-[0.12em] mb-8 text-xs md:text-sm">How ECOCAN Works</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { step: "1", label: "Buy, scan QR", desc: "Buy any genuine drink and scan the code instantly." },
                { step: "2", label: "Return at ECO-Station", desc: "Drop empties at your nearest partner counter." },
                { step: "3", label: "Earn rewards", desc: "Get your deposit back and keep returning." },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
                  <p className="text-primary text-4xl md:text-5xl font-bold leading-none mb-3">{item.step}</p>
                  <p className="text-white text-lg font-semibold mb-2">{item.label}</p>
                  <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="hero-card absolute rounded-3xl overflow-hidden shadow-elevated pointer-events-auto flex items-center justify-center px-6 py-12"
          style={{ left: "5vw", width: "90vw", height: "80vh", top: "10vh", background: "#FFFFFF" }}
        >
          <div className="w-full max-w-5xl text-center">
            <p className="text-primary font-semibold uppercase tracking-[0.12em] mb-6 text-xs md:text-sm">Your Impact at a Glance</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
              {[
                { value: "1M+", label: "bottles tracked" },
                { value: "5K+", label: "ECO-Stations" },
                { value: "KES", label: "earned back to consumers" },
                { value: "Zero", label: "counterfeits in network" },
              ].map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-[#101010]/10 bg-[#F7F7F7] p-4 md:p-5">
                  <p className="text-[#101010] text-2xl md:text-3xl font-bold mb-1">{metric.value}</p>
                  <p className="text-[#101010]/70 text-sm md:text-[15px]">{metric.label}</p>
                </div>
              ))}
            </div>
            <p className="text-[#101010] text-base md:text-xl font-medium mb-6">
              Join the circular economy. Download the app.
            </p>
            <a href="/download" className="pill-btn pill-btn-filled !inline-flex !px-8 !py-3">
              Download App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
