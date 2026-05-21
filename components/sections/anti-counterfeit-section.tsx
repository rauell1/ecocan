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

      <div className="relative z-10 grid items-center gap-10 px-[clamp(1.25rem,4vw,3rem)] lg:grid-cols-2 max-w-7xl mx-auto">
        <div ref={imageColRef} className="order-2 ec-reveal lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c100c]/40 backdrop-blur-md shadow-2xl p-3">
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
            className="ec-reveal font-bold text-[#f5f5f5]"
            style={{
              fontSize: "clamp(2.5rem,5vw,4.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              textShadow: "0 0 40px rgba(16,185,129,0.15)"
            }}
          >
            Every can. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent">Verified.</span>
          </h2>
          <p className="ec-reveal mt-6 text-lg text-white/70 max-w-md leading-relaxed">
            Scan once to confirm authenticity before every sip. Absolute trust in a single, simple scan.
          </p>
        </div>
      </div>
    </section>
  )
}
