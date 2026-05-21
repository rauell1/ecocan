"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const partnerLogos = ["NEMA", "KBL", "AMESA", "GREENPATH", "SAFARICOM"]

export default function PartnersTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const targets = sectionRef.current!.querySelectorAll(".ec-reveal")
      if (targets.length === 0) return
      gsap.fromTo(
        targets,
        { opacity: 0, y: 36, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      )

      const bgImg = sectionRef.current?.querySelector(".section-bg-img") as HTMLElement | null
      if (bgImg) {
        gsap.fromTo(
          bgImg,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        )
      }
    }, sectionRef)
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050705] py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/partners_hero.png"
          alt="High tech partnership network handshake"
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover opacity-50"
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: "linear-gradient(to bottom, rgba(5,7,5,0.7) 0%, rgba(5,7,5,0.92) 100%)" 
          }} 
        />
      </div>

      <div className="ec-reveal relative z-10 mx-[clamp(1.25rem,4vw,3rem)] max-w-5xl md:mx-auto rounded-[24px] border border-white/5 bg-[#0c100c]/20 backdrop-blur-xl px-10 py-8 shadow-2xl">
        <div className="flex flex-wrap items-center justify-around gap-8">
          {partnerLogos.map((logo) => (
            <span
              key={logo}
              className="text-[13px] font-bold uppercase tracking-[0.25em] text-white/30 hover:text-emerald-400 transition-colors duration-300"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      <div className="ec-reveal relative z-10 px-[clamp(1.25rem,4vw,3rem)] pt-20 max-w-4xl mx-auto text-center md:text-left">
        <div className="h-[1px] w-12 bg-emerald-500/30 mb-8 mx-auto md:mx-0" />
        
        <span className="text-8xl text-emerald-400/20 font-serif leading-none block select-none mb-[-20px] h-8">“</span>
        
        <blockquote className="text-2xl md:text-[36px] font-light leading-snug font-serif-luxury text-luxury-gradient tracking-tight">
          Ecocan has completely redefined the economics of waste recovery. By bridging immediate digital liquidity with verified circular provenance, it makes sustainability a profitable reality for every collector, merchant, and recycler in our network.
        </blockquote>
        
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/5 pt-8">
          <div className="text-left">
            <p className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">Grace M.</p>
            <p className="text-xs text-white/40 mt-1 font-serif-luxury italic">Retail Circularity & Operations Lead</p>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-xs text-white/30 uppercase tracking-[0.15em]">
            <span>Circular Network Impact</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Scale partner</span>
          </div>
        </div>
      </div>
    </section>
  )
}
