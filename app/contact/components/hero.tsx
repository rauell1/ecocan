"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import NavigationBar from "@/components/shared/navbar/navbar"
import { useScroll } from "@/lib/useScroll"
import ContactForm from "./contact-form"

export default function ContactHero() {
  const isScrolled = useScroll()
  const textColRef = useRef<HTMLDivElement>(null)
  const formColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column: stagger slide in from left
      if (textColRef.current) {
        const els = textColRef.current.querySelectorAll(".contact-animate")
        if (els.length > 0) {
          gsap.fromTo(
            els,
            { opacity: 0, x: -56 },
            { opacity: 1, x: 0, duration: 0.85, stagger: 0.13, delay: 0.25, ease: "power3.out" }
          )
        }
      }
      // Right column: form slides in from right
      if (formColRef.current) {
        gsap.fromTo(
          formColRef.current,
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration: 0.9, delay: 0.4, ease: "power3.out" }
        )
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <NavigationBar
        logoSrc={
          isScrolled ? "/assets/images/ecocan-logo.svg" : "/assets/images/ecocan-logo-alt.svg"
        }
        className={isScrolled ? "bg-white shadow-sm" : "border-b-0 bg-transparent text-white"}
        linkColor={isScrolled ? "text-eco-dark" : "text-white"}
      />

      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/about/about-hero.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/60" />

        <div className="relative z-20 mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:flex-row">
          {/* ── Left: headline ──────────────────────────────────────────── */}
          <div
            ref={textColRef}
            className="mt-40 flex w-full flex-col gap-6 text-white md:mt-52 md:w-1/2"
          >
            <p className="contact-animate section-overline text-white/70">Get in touch</p>
            <h1
              className="contact-animate font-bold text-white"
              style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.1 }}
            >
              Contact us.
            </h1>
            <p className="contact-animate max-w-[420px] text-lg leading-relaxed text-white/70">
              Whether you&apos;re a brand, retailer, investor, or just curious — we&apos;d love to
              hear from you.
            </p>

            <div className="contact-animate mt-2 flex flex-wrap gap-3">
              {["Nairobi, Kenya", "Helsinki, Finland", "info@ecocanafrica.com"].map((tag) => (
                <span key={tag} className="glass-pill px-4 py-1.5 text-[13px] text-white/80">
                  {tag}
                </span>
              ))}
            </div>

            {/* Stat glass card */}
            <div
              className="contact-animate mt-4 inline-flex w-fit flex-col rounded-2xl border border-white/15 px-6 py-5"
              style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(10px)" }}
            >
              <span className="text-4xl font-extrabold text-white">12+</span>
              <span className="mt-1 text-sm text-white/60">African markets in our roadmap</span>
            </div>
          </div>

          {/* ── Right: form ─────────────────────────────────────────────── */}
          <div ref={formColRef} className="z-40 flex w-full items-center md:w-1/2">
            <ContactForm title="Leave us a message" className="mt-0 lg:mt-[20rem] xl:mt-[16rem]" />
          </div>
        </div>
      </div>
    </>
  )
}
