"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function AntiCounterfeitSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: "top 75%", once: true }
      const targets = sectionRef.current!.querySelectorAll(".ec-reveal")

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
          scrollTrigger: trigger,
        }
      )

      if (imageColRef.current) {
        gsap.fromTo(
          imageColRef.current,
          { opacity: 0, x: 48, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.0,
            delay: 0.18,
            ease: "power2.out",
            scrollTrigger: trigger,
          }
        )
      }

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
      ScrollTrigger.getAll().forEach((triggerItem) => triggerItem.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050705] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/anti_counterfeit_hero.png"
          alt="Digital security QR verification matrix"
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

      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)] max-w-7xl mx-auto">
        <div className="ec-reveal border border-white/5 bg-[#0c100c]/25 backdrop-blur-xl rounded-[32px] p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden relative">
          {/* Subtle radial ambient light */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div ref={imageColRef} className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#0a0c0a] p-2 shadow-xl">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/counterfeit-alert.jpg"
                    alt="Phone verifying QR code authenticity"
                    width={900}
                    height={1100}
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:pl-8">
              <h2
                className="font-serif-luxury text-luxury-gradient leading-tight"
                style={{
                  fontSize: "clamp(2.2rem, 3.5vw, 3.8rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Every can. <br />
                <span className="font-sans font-light text-emerald-400">Verified instantly.</span>
              </h2>
              <p className="mt-6 text-base text-white/50 max-w-md leading-relaxed font-normal">
                Scan the smart-matrix code to confirm absolute authenticity in a single, simple action. Premium circular verification, clinical precision, complete trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
