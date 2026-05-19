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
  const phonesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: "top 75%", once: true }

      // Smooth cascading text & feature cards slide-up
      const textEls = sectionRef.current?.querySelectorAll(".app-text-animate")
      if (textEls && textEls.length > 0) {
        gsap.fromTo(
          textEls,
          { opacity: 0, y: 40, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: trigger,
          }
        )
      }

      // 3D Phone Reveal & Continuous Levitation
      if (phonesRef.current) {
        const centerPhone = phonesRef.current.querySelector(".phone-center")
        const sidePhones = phonesRef.current.querySelectorAll(".phone-side")

        // 1. Initial pop-in
        gsap.fromTo(
          centerPhone,
          { opacity: 0, y: 100, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", scrollTrigger: trigger }
        )

        gsap.fromTo(
          sidePhones,
          { opacity: 0, y: 120, scale: 0.85 },
          { opacity: 0.75, y: 0, scale: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", scrollTrigger: trigger }
        )

        // 2. Infinite floating effect for the side phones
        sidePhones.forEach((phone, i) => {
          gsap.to(phone, {
            y: i === 0 ? -15 : 15, // Opposite floating directions
            rotation: i === 0 ? -10 : 8, // Slight sway
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.2, // Start after initial reveal
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-24 md:py-32 bg-[#030605]">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          <div className="pt-8">
            <div className="app-text-animate inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              The ECOCAN App
            </div>

            <h2
              className="app-text-animate mb-10 font-bold text-white tracking-tight"
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 1.05,
              }}
            >
              Everything you need.
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-600 bg-clip-text text-transparent">
                One app.
              </span>
            </h2>

            <div className="mb-12 space-y-4">
              {features.map((f, idx) => (
                <div 
                  key={idx} 
                  className="app-text-animate group flex items-start sm:items-center gap-5 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-500/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <f.icon size={24} className="text-emerald-400" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-[16px] font-bold text-white group-hover:text-emerald-300 transition-colors">{f.title}</h3>
                    <p className="text-[14px] leading-relaxed text-white/60">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="app-text-animate flex flex-wrap gap-4">
              <Link href="https://apps.apple.com/app/6502695438" target="_blank" className="group flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3.5 text-[15px] font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95">
                App Store
              </Link>
              <Link href="#" className="group flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95">
                Google Play
              </Link>
            </div>
          </div>

          <div ref={phonesRef} className="relative flex items-end justify-center h-[500px] md:h-[650px] mt-10 lg:mt-0">
             <div className="absolute inset-0 rounded-full opacity-30 blur-[100px] pointer-events-none mix-blend-screen" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.8) 0%, transparent 60%)" }} />
             
             {/* Left Phone */}
             <div className="phone-side absolute -left-2 md:-left-8 bottom-4 z-0 w-[45%] origin-bottom-left rotate-[-8deg]">
               <Image src="/assets/images/consumer/earn-image.png" alt="Earn rewards" width={280} height={560} className="w-full h-auto drop-shadow-2xl" />
             </div>
             
             {/* Right Phone */}
             <div className="phone-side absolute -right-2 md:-right-8 bottom-8 z-0 w-[40%] origin-bottom-right rotate-[6deg]">
               <Image src="/assets/images/consumer/get-app.png" alt="Download" width={240} height={480} className="w-full h-auto drop-shadow-2xl" />
             </div>
             
             {/* Center Phone */}
             <div className="phone-center relative z-10 w-[55%]">
               <Image src="/assets/images/consumer/ecocan-app.png" alt="Main App" width={340} height={680} className="w-full h-auto drop-shadow-2xl" />
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}