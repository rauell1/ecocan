"use client"
import React, { useEffect, useState } from "react"
import NavigationBar from "../navbar/navbar"
import { Button } from "@/components/ui/button"
import HeroForm from "../hero-form/hero-form"
import Link from "next/link"
import Image from "next/image"

export default function CourierHero() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <NavigationBar
        logoSrc={
          isScrolled ? "/assets/images/ecocan-logo.svg" : "/assets/images/ecocan-logo-alt.svg"
        }
        className={isScrolled ? "bg-white" : "border-b-0 bg-transparent text-white"}
        linkColor={isScrolled ? "text-black" : "text-white"}
      />
      <div className="lg:h-[36rem] xl:h-[47.575rem]">
        <div className="relative bg-[url('/assets/images/courier/courier-bg.jpeg')] bg-cover after:absolute after:inset-0 after:z-10 after:bg-black/45 after:content-[''] lg:h-[36rem] xl:h-[48rem]">
          <div className="mx-auto flex flex-col md:flex md:flex-row lg:gap-12 lg:pt-[3.125rem] xl:max-w-[72rem] xl:pt-0">
            <div className="z-50 flex flex-col gap-4 px-4 text-white md:w-1/2 lg:mt-28 xl:mt-80 xl:px-0">
              <div>
                <h1 className="text-center text-2xl font-semibold md:text-start lg:text-6xl">
                  Every day
                  <br />
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] bg-clip-text text-transparent">
                    is Payday!
                  </span>
                </h1>
              </div>
              <div className="text-sm lg:text-base xl:text-lg">
                <p>
                  Make deliveries and pick-ups,
                  <br /> and get paid twice!
                </p>
              </div>
            </div>
            <div className="relative z-20 overflow-hidden md:w-1/2 lg:h-[32rem] lg:overflow-visible xl:h-[44rem]">
              <Image
                src="/assets/images/courier/side-hustle.png"
                className="absolute left-12 top-24 h-auto max-w-[20rem] xl:left-24 xl:top-56 xl:max-w-[32rem]"
                alt="ecocan mobile app"
                width={700}
                height={900}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
