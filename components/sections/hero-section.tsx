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
              "linear-gradient(to bottom, rgba(16,16,16,0.35) 0%, rgba(16,16,16,0.15) 40%, rgba(16,16,16,0.72) 100%)",
          }}
        />
      </div>

      {/* Brand name — overlay treatment */}
      <h1
        ref={brandRef}
        className="absolute left-1/2 -translate-x-1/2 font-extrabold text-white text-center pointer-events-none"
        style={{
          bottom: "10vh",
          fontSize: "clamp(64px, 14vw, 180px)",
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
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75 mb-4">
          Africa&apos;s Circular Bottle Ecosystem
        </p>

        <h2
          className="text-white font-bold mb-5"
          style={{ fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.08 }}
        >
          Return. Recycle.<br />Earn. Repeat.
        </h2>

        <p className="text-white/85 text-lg md:text-xl max-w-[600px] mb-8 font-normal leading-relaxed">
          Drop off empty bottles at any ECO-Station — earn rewards, stop fake drinks, and help clean up Africa.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <a
            href="/download"
            className="pill-btn pill-btn-white"
          >
            <Download size={18} />
            Download the App
          </a>
          <button
            onClick={() => { triggerTransition(); setTimeout(() => scrollToSection("model"), 1400); }}
            className="text-white font-medium hover:underline flex items-center gap-2 cursor-pointer bg-transparent border-none"
          >
            Become a Partner <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {[
            "Early-stage funded",
            "Live in Kenya",
            "GDPR Compliant",
          ].map((badge) => (
            <span key={badge} className="glass-pill text-white text-[13px] px-4 py-1.5">
              {badge}
            </span>
          ))}
        </div>

        <span className="glass-pill text-white/80 text-[13px] px-4 py-1.5">
          No machine needed — our manual counters are open now.
        </span>
      </div>

      {/* Scroll CTA — visible until user scrolls */}
      {!scrollEnabled && (
        <button
          ref={ctaBtnRef}
          onClick={triggerTransition}
          className="absolute left-1/2 -translate-x-1/2 glass-pill text-white px-6 py-3 flex items-center gap-3 hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
          style={{ bottom: "5vh", zIndex: 4 }}
          aria-label="Scroll to explore"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
          Explore ECOCAN
          <ChevronDown size={16} className="animate-bounce" />
        </button>
      )}

      {/* Reveal cards */}
      <div
        ref={cardsContainerRef}
        className="absolute inset-x-0 pointer-events-none"
        style={{ top: "100vh", zIndex: 5 }}
      >
        <div
          className="hero-card absolute rounded-3xl overflow-hidden shadow-elevated"
          style={{ left: "5vw", width: "90vw", height: "80vh", top: "10vh", background: "#F7F7F7" }}
        />
        <div
          className="hero-card absolute rounded-3xl overflow-hidden shadow-elevated"
          style={{ left: "10vw", width: "80vw", height: "85vh", top: "5vh", background: "#101010" }}
        />
        <div
          className="hero-card absolute rounded-3xl overflow-hidden shadow-elevated"
          style={{ left: "5vw", width: "90vw", height: "80vh", top: "10vh", background: "#FFFFFF" }}
        />
      </div>
    </div>
  );
}
