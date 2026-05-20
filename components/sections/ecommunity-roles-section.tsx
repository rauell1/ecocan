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
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#0a0a0a] py-[clamp(5rem,10vw,9rem)]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://source.unsplash.com/1600x900/?community,people,africa"
          alt=""
          aria-hidden="true"
          className="section-bg-img h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.70)" }} />
      </div>

      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)]">
        <h2
          className="ec-reveal mb-10 font-bold text-[#f5f5f5]"
          style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-0.02em" }}
        >
          One loop. Three roles.
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {roles.map((role) => (
            <div key={role.title} className="ecommunity-role-card ec-reveal border border-white/10 bg-white/5 p-8">
              <role.icon size={20} className="text-white/70" strokeWidth={1.75} />
              <h3
                className="mt-5 text-2xl font-bold text-[#f5f5f5]"
                style={{ letterSpacing: "-0.02em" }}
              >
                {role.title}
              </h3>
              <p className="mt-2 text-sm text-white/50">{role.action}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
