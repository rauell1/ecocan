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
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://source.unsplash.com/1600x900/?security,qr,technology"
          alt=""
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)" }} />
      </div>

      <div className="relative z-10 grid items-center gap-10 px-[clamp(1.25rem,4vw,3rem)] lg:grid-cols-2">
        <div ref={imageColRef} className="order-2 ec-reveal lg:order-1">
          <div className="overflow-hidden border border-white/10 bg-white/5">
            <Image
              src="/images/counterfeit-alert.jpg"
              alt="Phone verifying QR code authenticity"
              width={900}
              height={1100}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2
            className="ec-reveal font-bold text-[#f5f5f5]"
            style={{
              fontSize: "clamp(2rem,5vw,4.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
            }}
          >
            Every can. Verified.
          </h2>
          <p className="ec-reveal mt-4 text-base text-white/50">
            Scan once to confirm authenticity before every sip.
          </p>
        </div>
      </div>
    </section>
  )
}
