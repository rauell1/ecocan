"use client"

import Image from "next/image"
import React from "react"
import NavigationBar from "../navbar/navbar"
import { useScroll } from "@/lib/useScroll"
import JoinEcommunity from "@/components/shared/join-ecommunity"
import AppStoreButton from "../download-app"
import ScanqrPopup from "../scan-qr"
import { LucideDownload } from "lucide-react"

export default function DefaultHero() {
  const isScrolled = useScroll()

  return (
    <header>
      <NavigationBar
        logoSrc={
          isScrolled ? "/assets/images/ecocan-logo.svg" : "/assets/images/ecocan-logo-alt.svg"
        }
        className={isScrolled ? "bg-white" : "border-b-0 bg-transparent text-white"}
        linkColor={isScrolled ? "text-black" : "text-white"}
      />
      <div>
        <div className="relative bg-[url('/assets/images/consumer/hero-bg.jpeg')] bg-center pt-[3.575rem] after:absolute after:inset-0 after:z-10 after:bg-black/50 after:content-[''] lg:h-[38.875rem] xl:h-[46.85rem]">
          <div className="relative mx-auto flex max-w-[72rem] flex-col lg:flex lg:flex-row lg:gap-12">
            <div className="z-[99] flex flex-col justify-center gap-4 px-4 pt-12 text-white md:w-3/4 lg:w-1/2 lg:items-center lg:space-y-4 lg:pt-0 xl:px-0">
              <div>
                <h1 className="text-start text-5xl font-semibold xl:text-[4rem]">
                  Kenya&apos;s{" "}
                  <span className="bg-gradient-to-r from-[hsl(var(--eco-grad-start))] via-[hsl(var(--eco-grad-mid))] to-[hsl(var(--eco-grad-end))] bg-clip-text text-transparent">
                    recycling journey
                  </span>
                </h1>
              </div>
              <div className="text-base md:space-y-8 lg:text-xl xl:space-y-6">
                <p className="text-start text-white">
                  Download EcocanApp to verify genuine drinks before you buy, return empties at
                  nearby ECO-Stations, and earn rewards while keeping Kenyan neighborhoods cleaner.
                </p>
                <div className="mt-4 gap-4 md:mt-0 md:flex">
                  <AppStoreButton
                    className="text-primary mb-4 border bg-white px-8 font-medium no-underline hover:bg-white lg:hidden"
                    playStoreUrl="https://play.google.com/store/apps/details?id=com.superapp.ecocanapp"
                    appStoreUrl="https://apps.apple.com/app/6502695438"
                    showArrow={true}
                  />
                  <ScanqrPopup
                    join="Download App"
                    showArrow={true}
                    arrow={<LucideDownload className="ml-4" />}
                    className="text-primary mb-4 hidden border bg-white px-8 font-medium no-underline hover:bg-white lg:flex"
                  />
                  <JoinEcommunity className="text-base" />
                </div>
              </div>
            </div>
            <div className="z-[999] lg:hidden">
              <Image
                src="/assets/images/consumer/hero-mobile.svg"
                alt="hero-image"
                className="md:mx-auto"
                width={500}
                height={500}
                priority
              />
            </div>
            <div className="relative z-[99] hidden overflow-hidden md:w-1/2 lg:flex lg:h-[38rem] lg:overflow-visible xl:h-[44rem]">
              <Image
                src="/assets/images/consumer/consumer-hero-mobile.png"
                className="xl:max-w-[40rem]"
                alt="ecocan mobile app"
                width={900}
                height={100}
                priority
              />
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 280"
            className="absolute bottom-0 z-50 hidden lg:block"
          >
            <path fill="#FAFAFA" fillOpacity="1" d="M0,260L1440,0L1440,340L0,340Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 530"
            className="absolute bottom-0 z-50 hidden md:block lg:hidden"
          >
            <path fill="#FAFAFA" fillOpacity="1" d="M0,300L600,0L600,600L0,600Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 480"
            className="absolute bottom-0 z-50 md:hidden"
          >
            <path fill="#FAFAFA" fillOpacity="1" d="M0,260L350,0L540,540L0,540Z"></path>
          </svg>
        </div>
        <section className="px-4 py-8 text-center">
          <h2 className="text-3xl font-medium xl:text-5xl">The Consumer ECOmmunity</h2>
        </section>
      </div>
    </header>
  )
}
