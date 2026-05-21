"use client"

import { useRef, useEffect } from "react"
import { Users, Store, Recycle } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const roles = [
  { icon: Users, title: "Consumer", action: "Scan & earn" },
  { icon: Store, title: "Retailer", action: "Host returns" },
  { icon: Recycle, title: "Recycler", action: "Collect & process" },
]

export default function EcommunityRolesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
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
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      )

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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#050705] py-[clamp(5rem,10vw,9rem)]">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/community_roles_hero.png"
          alt="Eco-friendly community network"
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

      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)]">
        <h2
          className="ec-reveal mb-12 font-bold text-[#f5f5f5]"
          style={{ 
            fontSize: "clamp(2.5rem,4vw,4rem)", 
            letterSpacing: "-0.02em",
            textShadow: "0 0 40px rgba(16,185,129,0.15)"
          }}
        >
          One loop. Three roles.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div 
              key={role.title} 
              className="ecommunity-role-card ec-reveal p-8 rounded-2xl border border-white/10 bg-[#0c100c]/50 backdrop-blur-md shadow-2xl hover:border-emerald-500/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <role.icon size={28} className="text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" strokeWidth={1.5} />
                <h3
                  className="mt-5 text-2xl font-bold text-[#f5f5f5]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {role.title}
                </h3>
                <p className="mt-2 text-base text-white/60">{role.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
