"use client"

import { useRef, useEffect } from "react"
import { Users, Store, Recycle } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const roles = [
  {
    icon: Users,
    title: "Consumer",
    action: "Scan daily circular items to authenticate materials instantly. Recycled deposits convert directly into verified eco-credits in your digital app wallet.",
  },
  {
    icon: Store,
    title: "Retailer",
    action: "Become a certified physical deposit station. Drive premium recurring footprint, unlock verified footprint offsets, and anchor retail circularity.",
  },
  {
    icon: Recycle,
    title: "Recycler",
    action: "Access high-purity pre-sorted feedstock directly from local networks. Streamline processing lines and automate circular verification cycles.",
  },
]

import { SpotlightCard } from "@/components/ui/spotlight-card"

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
          className="ec-reveal mb-16 font-serif-luxury text-luxury-gradient"
          style={{ 
            fontSize: "clamp(2.5rem,4vw,4.5rem)", 
            letterSpacing: "-0.02em",
            lineHeight: "1.1"
          }}
        >
          One loop. Three roles.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div key={role.title} className="ec-reveal">
              <SpotlightCard className="h-full bg-[#0c100c]/30 border-white/5 rounded-3xl p-8 hover:border-emerald-500/20">
                <role.icon size={26} className="text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" strokeWidth={1.5} />
                <h3
                  className="mt-6 font-serif-luxury font-light text-2xl text-white"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {role.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/50 font-normal">{role.action}</p>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
