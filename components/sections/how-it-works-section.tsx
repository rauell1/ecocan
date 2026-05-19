"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShoppingBag, ScanLine, RotateCcw, Bike, Wallet, MapPin } from "lucide-react";

const steps = [
  { num: "01", title: "Buy", desc: "Look for the ECOCAN seal on drinks.", icon: ShoppingBag },
  { num: "02", title: "Scan", desc: "Tap QR to verify authenticity.", icon: ScanLine },
  { num: "03", title: "Return", desc: "Drop empty bottle at any counter.", icon: RotateCcw },
  { num: "04", title: "Collect", desc: "Zero-emission cargo bike pickup.", icon: Bike },
  { num: "05", title: "Get Paid", desc: "Instant M-PESA or bank payout.", icon: Wallet },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 60%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-32 bg-white text-gray-900 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        
        <div className="mb-24 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600">How It Works</span>
          <h2 className="reveal text-5xl md:text-7xl font-medium tracking-tighter leading-[0.95]">
            <span className="text-gray-900">From Your Hand,</span>
            <br />
            <span className="text-emerald-600">Back to The Shelf.</span>
          </h2>
        </div>

        {/* Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="reveal group relative rounded-3xl bg-white border border-gray-200 p-8 h-full flex flex-col gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]">
              
              {/* ICON BOX */}
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-emerald-600 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-[10deg]">
                <step.icon size={24} strokeWidth={1.5} />
              </div>
              
              <div>
                <span className="text-[10px] font-mono font-bold text-gray-400 mb-2 block">{step.num}</span>
                <h3 className="text-lg font-semibold tracking-tight text-gray-900">{step.title}</h3>
                <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">{step.desc}</p>
              </div>

              {/* Data Line */}
              <div className="absolute bottom-6 left-8 right-8 h-[1px] bg-gray-100 group-hover:bg-emerald-500 transition-colors" />
            </div>
          ))}
        </div>

        {/* Feature Block */}
        <div className="reveal mt-32 relative rounded-[2.5rem] bg-gray-900 p-16 md:p-20 overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-white">
                Locate your nearest <br/>
                <span className="font-semibold text-emerald-400 italic">ECO-Station.</span>
              </h3>
              <button className="flex items-center gap-3 border-b border-white/20 pb-2 hover:border-emerald-400 transition-colors group">
                <span className="text-sm font-medium tracking-wide uppercase text-gray-300 group-hover:text-emerald-400">Find a station</span>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-emerald-400 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="h-40 w-40 flex items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <MapPin size={64} className="text-emerald-400 animate-pulse" strokeWidth={1} />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}