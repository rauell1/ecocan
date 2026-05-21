"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"

export default function AppShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const phonesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: "top 75%", once: true }

      const textEls = sectionRef.current!.querySelectorAll(".ec-reveal")
      if (textEls.length) {
        gsap.fromTo(
          textEls,
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

      if (phonesRef.current) {
        const center = phonesRef.current.querySelector(".phone-center")

        gsap.fromTo(
          center,
          { opacity: 0, y: 64, scale: 0.93 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out", scrollTrigger: trigger }
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
      id="app"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/app_showcase_hero.png"
          alt="Ecocan rewards app screenshot mockup"
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover opacity-45"
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: "linear-gradient(to bottom, rgba(5,7,5,0.72) 0%, rgba(5,7,5,0.95) 100%)" 
          }} 
        />
      </div>

      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)] text-center max-w-5xl mx-auto">
        <h2
          className="ec-reveal font-serif-luxury text-luxury-gradient"
          style={{ 
            fontSize: "clamp(2.5rem,5vw,4.5rem)", 
            letterSpacing: "-0.02em", 
            lineHeight: "1.1",
          }}
        >
          Your loop rewards app. <br />
          <span className="font-sans font-light text-emerald-400">Paid recycling.</span>
        </h2>

        <div ref={phonesRef} className="phone-center ec-reveal mx-auto my-14 w-[min(340px,75vw)] transition-transform duration-500 hover:scale-[1.03] filter drop-shadow-[0_0_60px_rgba(16,185,129,0.25)]">
          <Image
            src="/assets/images/consumer/ecocan-app.png"
            alt="ECOCAN mobile app"
            width={340}
            height={680}
            className="h-auto w-full"
          />
        </div>

        <div className="ec-reveal flex flex-wrap items-center justify-center gap-4">
          <Link 
            href="https://apps.apple.com/app/6502695438" 
            target="_blank" 
            className="inline-flex rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/20"
          >
            App Store
          </Link>
          <Link 
            href="#" 
            className="inline-flex rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/20"
          >
            Google Play
          </Link>
        </div>
      </div>
    </section>
  )
}
