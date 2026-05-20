"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { ScanLine, Wallet, MapPin } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

const features = [
  { icon: ScanLine, title: "Scan & verify in 3 seconds",  desc: "Know if it's real before you drink." },
  { icon: Wallet,   title: "Earn straight to M-PESA",      desc: "Return empties, get paid instantly." },
  { icon: MapPin,   title: "Find the nearest ECO-Station", desc: "Real-time map of every collection point." },
]

export default function AppShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const phonesRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: "top 72%", once: true }

      const textEls = sectionRef.current?.querySelectorAll(".ec-reveal")
      if (textEls?.length) {
        gsap.fromTo(
          textEls,
          { opacity: 0, y: 28, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.12, ease: "power3.out", scrollTrigger: trigger }
        )
      }

      if (phonesRef.current) {
        const center = phonesRef.current.querySelector(".phone-center")
        const sides  = phonesRef.current.querySelectorAll(".phone-side")

        gsap.fromTo(center,
          { opacity: 0, y: 64, scale: 0.93 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out", scrollTrigger: trigger }
        )
        gsap.fromTo(sides,
          { opacity: 0, y: 80, scale: 0.90 },
          { opacity: 0.75, y: 0, scale: 1, duration: 1.1, stagger: 0.18, ease: "power3.out", scrollTrigger: trigger }
        )
        sides.forEach((phone, i) => {
          gsap.to(phone, { y: i === 0 ? -14 : 14, rotation: i === 0 ? -8 : 6, duration: 4.2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.3 })
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full section-py section-dark overflow-hidden" id="app">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[130px]"
             style={{ background: "radial-gradient(circle,#16a34a 0%,transparent 65%)" }} />
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* TEXT COLUMN */}
          <div className="pt-8 flex flex-col">
            <div className="ec-reveal">
              <SectionOverline inv>The ECOCAN App</SectionOverline>
            </div>
            <h2 className="ec-reveal section-heading section-heading-inv mb-10">
              Everything you need.<br />
              <span style={{ background: "linear-gradient(90deg,#86efac,#4ade80,#16a34a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                One app.
              </span>
            </h2>

            <div className="mb-12 flex flex-col gap-3">
              {features.map((f, idx) => (
                <div key={idx} className="ec-reveal ec-card-dark group flex items-start sm:items-center gap-5 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/12 border border-emerald-500/22 transition-transform duration-300 group-hover:scale-110">
                    <f.icon size={20} className="text-emerald-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-0.5 text-base font-semibold text-white">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-white/50">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ec-reveal flex flex-wrap gap-3">
              <Link
                href="https://apps.apple.com/app/6502695438"
                target="_blank"
                className="btn-primary"
              >
                App Store
              </Link>
              <Link
                href="#"
                className="btn-ghost"
              >
                Google Play
              </Link>
            </div>
          </div>

          {/* PHONES COLUMN */}
          <div ref={phonesRef} className="relative flex items-end justify-center h-[500px] md:h-[640px] mt-10 lg:mt-0">
            <div className="phone-side absolute -left-2 md:-left-8 bottom-4 z-0 w-[45%] origin-bottom-left rotate-[-8deg]">
              <Image src="/assets/images/consumer/earn-image.png" alt="Earn rewards" width={280} height={560} className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div className="phone-side absolute -right-2 md:-right-8 bottom-8 z-0 w-[40%] origin-bottom-right rotate-[6deg]">
              <Image src="/assets/images/consumer/get-app.png" alt="Download" width={240} height={480} className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div className="phone-center relative z-10 w-[55%]">
              <Image src="/assets/images/consumer/ecocan-app.png" alt="ECOCAN App" width={340} height={680} className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
