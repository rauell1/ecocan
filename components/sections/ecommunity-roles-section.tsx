"use client"

import { useRef, useEffect } from "react"
import { Users, Store, Recycle, ArrowRight } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const roles = [
  {
    icon: Users,
    title: "Consumer",
    action:
      "Buy your drink, return the empty bottle to any ECO-Station, and earn instant cash rewards directly to your M-PESA wallet. Simple, rewarding, and good for the planet.",
  },
  {
    icon: Store,
    title: "Retailer",
    action:
      "Partner with us as an official collection point. Attract new customers, increase foot traffic, and earn instant commissions on every bottle returned.",
    linkText: "Become a Partner",
    href: "/contact",
  },
  {
    icon: Recycle,
    title: "Recycler",
    action:
      "Access high-purity, fully pre-sorted packaging feedstock. Streamline your supply chain with certified, clean, and 100% traceable materials.",
    linkText: "Access Feedstock",
    href: "/solutions/packaging-recycling",
  },
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
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-transparent py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/community_roles_hero.png"
          alt="Eco-friendly community network"
          aria-hidden="true"
          className="section-bg-img opacity-12 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-[clamp(1.25rem,4vw,3rem)]">
        <p className="ec-reveal section-overline mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
          THE ECOSYSTEM
        </p>
        <h2
          className="ec-reveal mb-12 font-sans font-bold tracking-tight text-[var(--c-text)]"
          style={{
            fontSize: "clamp(2.2rem,5vw,3.6rem)",
            letterSpacing: "-0.03em",
            lineHeight: "1.1",
          }}
        >
          One loop. <span className="text-emerald-600">Three roles.</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div key={role.title} className="ec-reveal flex flex-col">
              <SpotlightCard
                spotlightColor="rgba(16,185,129,0.06)"
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/60 bg-white/90 p-8 shadow-xl shadow-emerald-950/[0.015] backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-950/[0.035]"
              >
                <div>
                  {/* Premium Square-Rounded Icon Badge with Soft Shadow */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shadow-[0_4px_20px_rgba(16,185,129,0.12)] transition-transform duration-300 group-hover:scale-105">
                    <role.icon size={24} strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-[var(--c-text)]">
                    {role.title}
                  </h3>

                  <p className="mt-3 text-[14px] font-normal leading-relaxed text-[var(--c-text-muted)] text-gray-600/90">
                    {role.action}
                  </p>
                </div>

                {/* Sub-card Action Callout — only shown when a link is defined */}
                {role.href && role.linkText && (
                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <Link
                      href={role.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 transition-colors duration-300 hover:text-emerald-700"
                    >
                      <span>{role.linkText}</span>
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                )}
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
