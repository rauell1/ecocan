"use client";

import NavigationBar from "@/components/shared/navbar/navbar";
import { useScroll } from "@/lib/useScroll";
import React from "react";
import ContactForm from "./contact-form";

export default function ContactHero() {
  const isScrolled = useScroll();

  return (
    <>
      <NavigationBar
        logoSrc={isScrolled ? "/assets/images/ecocan-logo.svg" : "/assets/images/ecocan-logo-alt.svg"}
        className={isScrolled ? "bg-white shadow-sm" : "bg-transparent text-white border-b-0"}
        linkColor={isScrolled ? "text-eco-dark" : "text-white"}
      />

      <div className="bg-[url('/assets/images/about/about-hero.png')] min-h-screen lg:bg-contain xl:bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/60 after:z-10">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 px-6 relative">

          {/* Left - headline */}
          <div className="flex flex-col gap-6 mt-40 md:mt-52 text-white z-50 w-full md:w-1/2">
            <p className="section-overline text-white/70">Get in touch</p>
            <h1
              className="text-white font-bold"
              style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.1 }}
            >
              Contact us.
            </h1>
            <p className="text-white/70 text-lg max-w-[420px] leading-relaxed">
              Whether you&apos;re a brand, retailer, investor, or just curious, we&apos;d love to hear from you.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              {["Nairobi, Kenya", "Helsinki, Finland", "info@ecocanafrica.com"].map((tag) => (
                <span key={tag} className="glass-pill text-white/80 text-[13px] px-4 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - form (untouched) */}
          <div className="w-full md:w-1/2 z-40 flex items-center">
            <ContactForm title="Leave us a message" className="mt-0 lg:mt-[20rem] xl:mt-[16rem]" />
          </div>
        </div>
      </div>
    </>
  );
}
