"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ShieldCheck } from "lucide-react"
import SectionBadge from "@/components/shared/section-badge"

export default function AntiCounterfeitSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textColRef = useRef<HTMLDivElement>(null)
  const imageColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: "top 75%", once: true }

      if (textColRef.current) {
        const els = textColRef.current.querySelectorAll(".text-slide")
        if (els.length > 0) {
          gsap.fromTo(
            els,
            { opacity: 0, x: -80 },
            {
              opacity: 1,
              x: 0,
              duration: 0.85,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: trigger,
            }
          )
        }
      }

      if (imageColRef.current) {
        gsap.fromTo(
          imageColRef.current,
          { opacity: 0, x: 100, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.05,
            delay: 0.18,
            ease: "power3.out",
            scrollTrigger: trigger,
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden py-[120px] md:py-[160px]"
      style={{ background: "#101010" }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: text */}
          <div ref={textColRef} className="lg:col-span-3">
            <div className="text-slide">
              <SectionBadge number="06" />
            </div>
            <p className="section-overline text-slide mb-6">Anti-Counterfeit</p>
            <h2 className="section-headline text-slide mb-6 text-white">
              Fake alcohol kills.
              <br />
              We stop it.
            </h2>
            <p className="section-body text-slide mb-8 max-w-[480px] text-white/60">
              Every bottle carries a unique, tamper-evident QR code. One scan tells you if it&apos;s
              real — before you drink.
            </p>

            {/* Single stat callout */}
            <div
              className="text-slide inline-flex items-center gap-4 rounded-2xl border border-primary/25 px-6 py-4"
              style={{ background: "rgba(22,163,74,0.08)" }}
            >
              <ShieldCheck size={26} className="shrink-0 text-primary" />
              <p className="text-base font-semibold text-white md:text-lg">
                2 in 5 drinks in Africa are counterfeit
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-2">
            <div
              ref={imageColRef}
              className="overflow-hidden rounded-3xl shadow-elevated lg:translate-x-8"
            >
              <Image
                src="/images/counterfeit-alert.jpg"
                alt="Counterfeit vs verified bottles"
                width={600}
                height={800}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-auto w-full object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwYTFhMGYiLz48L3N2Zz4="
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
