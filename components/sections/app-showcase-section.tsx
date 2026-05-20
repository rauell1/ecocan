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
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-[clamp(5rem,10vw,9rem)]"
      id="app"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://source.unsplash.com/1600x900/?phone,app,dark"
          alt=""
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.75)" }} />
      </div>

      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)] text-center">
        <h2
          className="ec-reveal font-bold text-[#f5f5f5]"
          style={{ fontSize: "clamp(2rem,5vw,4rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
        >
          Your rewards app
        </h2>

        <div ref={phonesRef} className="phone-center ec-reveal mx-auto my-12 w-[min(360px,78vw)]">
          <Image
            src="/assets/images/consumer/ecocan-app.png"
            alt="ECOCAN mobile app"
            width={340}
            height={680}
            className="h-auto w-full"
          />
        </div>

        <div className="ec-reveal flex items-center justify-center gap-3">
          <Link href="https://apps.apple.com/app/6502695438" target="_blank" className="btn-ghost">
            App Store
          </Link>
          <Link href="#" className="btn-ghost">
            Google Play
          </Link>
        </div>
      </div>
    </section>
  )
}
