"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ShieldCheck, AlertTriangle, ScanLine, CheckCircle } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

export default function AntiCounterfeitSection() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const textColRef  = useRef<HTMLDivElement>(null)
  const imageColRef = useRef<HTMLDivElement>(null)
  const floatRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: "top 72%", once: true }

      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current.querySelectorAll(".ps-reveal"),
          { opacity: 0, y: 32, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.12, ease: "power3.out", scrollTrigger: trigger }
        )
      }
      if (imageColRef.current) {
        gsap.fromTo(imageColRef.current,
          { opacity: 0, x: 48, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 1.0, delay: 0.18, ease: "power2.out", scrollTrigger: trigger }
        )
      }
      if (floatRef.current) {
        gsap.fromTo(floatRef.current,
          { opacity: 0, y: 28, scale: 0.84 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0, delay: 0.7, ease: "elastic.out(1,0.75)", scrollTrigger: trigger }
        )
        gsap.to(floatRef.current, { y: -10, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.4 })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="ps-reveal relative w-full section-py section-dark overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -left-40 w-[480px] h-[480px] bg-red-600/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[480px] h-[480px] bg-emerald-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-16 lg:gap-20">

          <div ref={textColRef} className="lg:col-span-3 flex flex-col">
            <div className="ps-reveal">
              <SectionOverline inv>Consumer Protection</SectionOverline>
            </div>
            <h2 className="ps-reveal section-heading section-heading-inv mb-5">
              Fake alcohol kills.<br />
              <span style={{ background: "linear-gradient(90deg,#4ade80,#22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                We stop it.
              </span>
            </h2>
            <p className="ps-reveal text-base text-white/55 mb-10 max-w-[480px] leading-relaxed">
              Every EcoCan bottle carries a unique, tamper-evident QR code. One scan tells you if it&apos;s real—before you take a sip.
            </p>

            <div className="flex flex-col gap-4 max-w-[510px]">
              {[
                { icon: AlertTriangle, color: "red",    title: "The Danger",    body: "2 in 5 drinks in Africa are counterfeit, risking lives daily through repurposed bottles." },
                { icon: ShieldCheck,  color: "emerald", title: "Total Security", body: "Our digital ledger and physical crushing mechanism permanently destroys fake supply chains." },
              ].map(({ icon: Icon, color, title, body }) => (
                <div
                  key={title}
                  className="ps-reveal ec-card-dark group flex items-start gap-5 p-5"
                  style={{ borderColor: color === "red" ? "rgba(239,68,68,0.18)" : "rgba(74,222,128,0.18)" }}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: color === "red" ? "rgba(239,68,68,0.15)" : "rgba(74,222,128,0.12)", color: color === "red" ? "#f87171" : "#4ade80" }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">{title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={imageColRef} className="lg:col-span-2 relative mt-10 lg:mt-0">
            <div className="relative overflow-hidden rounded-[--radius-xl] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0F0B]/70 via-transparent to-transparent z-10 pointer-events-none" />
              <Image
                src="/images/counterfeit-alert.jpg"
                alt="Counterfeit vs verified bottles"
                width={600} height={800}
                className="h-auto w-full object-cover"
              />
            </div>
            <div
              ref={floatRef}
              className="absolute -bottom-5 -left-4 md:-left-10 z-20 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/65 p-4 pr-7 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                <ScanLine size={20} className="text-emerald-400 absolute opacity-40" />
                <CheckCircle size={20} className="text-emerald-400 relative z-10" />
                <span className="absolute inset-0 rounded-full border border-emerald-400 animate-ping opacity-20" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-emerald-400/75 uppercase mb-0.5">Scan Result</p>
                <p className="text-base font-bold text-white">100% Authentic</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
