"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { ScanLine, Wallet, MapPin } from "lucide-react"

const features = [
  {
    icon: ScanLine,
    title: "Scan & verify in 3 seconds",
    desc: "Know if it's real before you drink.",
  },
  {
    icon: Wallet,
    title: "Earn straight to M-PESA",
    desc: "Return empties, get paid instantly.",
  },
  {
    icon: MapPin,
    title: "Find the nearest ECO-Station",
    desc: "Real-time map of every collection point.",
  },
]

export default function AppShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const textEls = sectionRef.current?.querySelectorAll(".app-text-animate")
      if (textEls && textEls.length > 0) {
        gsap.fromTo(
          textEls,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          }
        )
      }
      const imgEl = sectionRef.current?.querySelector(".app-img-animate")
      if (imgEl) {
        gsap.fromTo(
          imgEl,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
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
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: text + features */}
          <div>
            <p className="section-overline app-text-animate mb-6">The ECOCAN App</p>
            <h2
              className="app-text-animate mb-10 font-bold text-white"
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Everything you need.
              <br />
              One app.
            </h2>

            <div className="mb-10 space-y-6">
              {features.map((f) => (
                <div key={f.title} className="app-text-animate flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <f.icon size={18} className="text-primary" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="mb-0.5 text-[15px] font-semibold text-white">{f.title}</h3>
                    <p className="text-[14px] leading-relaxed text-white/50">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="app-text-animate flex flex-wrap gap-4">
              <Link
                href="https://apps.apple.com/app/6502695438"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-white !px-7 !py-3 text-sm"
              >
                <Image
                  src="/assets/images/apple-store.png"
                  alt="App Store"
                  width={18}
                  height={18}
                  className="rounded"
                />
                App Store
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.superapp.ecocanapp"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn border border-white/25 !px-7 !py-3 text-sm text-white hover:bg-white/10"
              >
                Google Play
              </Link>
            </div>
          </div>

          {/* Right: app mockup */}
          <div className="app-img-animate relative flex items-end justify-center">
            <div
              className="absolute inset-0 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #228B22 0%, transparent 70%)" }}
            />
            <div className="absolute -left-4 bottom-0 z-0 w-[45%] origin-bottom-left rotate-[-8deg] opacity-75 md:-left-8">
              <Image
                src="/assets/images/consumer/earn-image.png"
                alt="Earn rewards screen"
                width={280}
                height={560}
                className="h-auto w-full drop-shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="relative z-10 w-[55%]">
              <Image
                src="/assets/images/consumer/ecocan-app.png"
                alt="ECOCAN app"
                width={340}
                height={680}
                className="h-auto w-full drop-shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -right-4 bottom-0 z-0 w-[40%] origin-bottom-right rotate-[6deg] opacity-65 md:-right-8">
              <Image
                src="/assets/images/consumer/get-app.png"
                alt="Download ECOCAN"
                width={240}
                height={480}
                className="h-auto w-full drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
