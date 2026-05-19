"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ShieldCheck, AlertTriangle, ScanLine, CheckCircle } from "lucide-react"

export default function AntiCounterfeitSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textColRef = useRef<HTMLDivElement>(null)
  const imageColRef = useRef<HTMLDivElement>(null)
  const floatingCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const trigger = { 
        trigger: sectionRef.current, 
        start: "top 75%", 
        once: true 
      }

      if (textColRef.current) {
        const els = textColRef.current.querySelectorAll(".text-slide")
        gsap.fromTo(els,
          { opacity: 0, y: 40, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: trigger,
          }
        )
      }

      if (imageColRef.current) {
        gsap.fromTo(imageColRef.current,
          { opacity: 0, x: 60, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: trigger,
          }
        )
      }

      if (floatingCardRef.current) {
        gsap.fromTo(floatingCardRef.current,
          { opacity: 0, y: 40, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            delay: 0.8,
            ease: "elastic.out(1, 0.75)",
            scrollTrigger: trigger,
          }
        )

        gsap.to(floatingCardRef.current, {
          y: -12,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.5,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 md:py-32 bg-[#020403]"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-5 lg:gap-20">
          
          <div ref={textColRef} className="lg:col-span-3">
            {/* CLEAN LABEL - NO PILL */}
            <div className="text-slide mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-red-400">
                Consumer Protection
              </span>
            </div>
            
            <h2 className="text-slide text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
              Fake alcohol kills.<br />
              <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-600 bg-clip-text text-transparent">
                We stop it.
              </span>
            </h2>
            
            <p className="text-slide text-lg text-white/60 mb-10 max-w-[500px] leading-relaxed">
              Every EcoCan bottle carries a unique, tamper-evident QR code. One scan tells you if it&apos;s real—before you take a sip.
            </p>

            <div className="flex flex-col gap-5 max-w-[520px]">
              <div className="text-slide group flex items-start sm:items-center gap-5 rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-500/10 to-transparent p-5 backdrop-blur-md transition-all duration-500 hover:border-red-500/40 hover:bg-red-500/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500/20 border border-red-500/30 text-red-400 shadow-inner">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[17px] mb-1">The Danger</h4>
                  <p className="text-white/60 text-[14px] leading-relaxed">
                    2 in 5 drinks in Africa are counterfeit, risking lives daily through repurposed bottles.
                  </p>
                </div>
              </div>

              <div className="text-slide group flex items-start sm:items-center gap-5 rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-transparent p-5 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 shadow-inner">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[17px] mb-1">Total Security</h4>
                  <p className="text-white/60 text-[14px] leading-relaxed">
                    Our digital ledger and physical crushing mechanism permanently destroys fake supply chains.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative mt-12 lg:mt-0">
            <div
              ref={imageColRef}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#020403]/80 via-transparent to-transparent z-10 pointer-events-none" />
              <Image
                src="/images/counterfeit-alert.jpg"
                alt="Counterfeit vs verified bottles"
                width={600}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>

            <div
              ref={floatingCardRef}
              className="absolute -bottom-6 -left-4 md:-left-12 z-20 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/70 p-4 pr-8 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                <ScanLine size={22} className="text-emerald-400 absolute opacity-40" />
                <CheckCircle size={22} className="text-emerald-400 relative z-10" />
                <span className="absolute inset-0 rounded-full border border-emerald-400 animate-ping opacity-25 duration-1000" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest text-emerald-400/80 uppercase mb-0.5">Scan Result</p>
                <p className="text-[16px] font-bold text-white tracking-wide">100% Authentic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
