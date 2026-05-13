"use client"

import NavigationBar from "@/components/shared/navbar/navbar"
import { useScroll } from "@/lib/useScroll"
import React from "react"
import ContactForm from "./contact-form"

export default function ContactHero() {
  const isScrolled = useScroll()

  return (
    <>
      <NavigationBar
        logoSrc={
          isScrolled ? "/assets/images/ecocan-logo.svg" : "/assets/images/ecocan-logo-alt.svg"
        }
        className={isScrolled ? "bg-white shadow-sm" : "border-b-0 bg-transparent text-white"}
        linkColor={isScrolled ? "text-eco-dark" : "text-white"}
      />

      <div className="relative min-h-screen bg-[url('/assets/images/about/about-hero.png')] after:absolute after:inset-0 after:z-10 after:bg-black/60 after:content-[''] lg:bg-contain xl:bg-cover">
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:flex-row">
          {/* Left  -  headline */}
          <div className="z-50 mt-40 flex w-full flex-col gap-6 text-white md:mt-52 md:w-1/2">
            <p className="section-overline text-white/70">Get in touch</p>
            <h1
              className="font-bold text-white"
              style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.1 }}
            >
              Contact us.
            </h1>
            <p className="max-w-[420px] text-lg leading-relaxed text-white/70">
              Whether you&apos;re a brand, retailer, investor, or just curious - we&apos;d love to
              hear from you.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              {["Nairobi, Kenya", "Helsinki, Finland", "info@ecocanafrica.com"].map((tag) => (
                <span key={tag} className="glass-pill px-4 py-1.5 text-[13px] text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right  -  form (untouched) */}
          <div className="z-40 flex w-full items-center md:w-1/2">
            <ContactForm title="Leave us a message" className="mt-0 lg:mt-[20rem] xl:mt-[16rem]" />
          </div>
        </div>
      </div>
    </>
  )
}
