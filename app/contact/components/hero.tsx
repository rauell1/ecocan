"use client"

import NavigationBar from '@/components/shared/navbar/navbar'
import { useScroll } from '@/lib/useScroll';
import React from 'react'
import ContactForm from './contact-form';

export default function ContactHero() {
    const isScrolled = useScroll();
  return (
    <>
      <NavigationBar
        logoSrc={isScrolled ? "/assets/images/ecocan-logo.svg": "/assets/images/ecocan-logo-alt.svg"}
        className={
          isScrolled
            ? "bg-white"
            : "bg-transparent text-white border-b-0 "
        }
        linkColor={isScrolled ? "text-black" : "text-white"}
      />
      <div className="bg-[url('/assets/images/about/about-hero.png')] min-h-screen lg:bg-contain xl:bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/50 after:opacity-70 after:z-10">
        <div className="xl:max-w-[72rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12 lg:pt-[3.125rem] xl:pt-0">
          <div className="flex flex-col gap-4 lg:mt-28 xl:mt-60 px-4 xl:px-0 text-white z-50 w-1/2">
            <h1 className="lg:text-6xl text-2xl text-center md:text-start font-semibold">
              Contact us.
            </h1>
          </div>
          <div className="w-1/2">
            <div className="lg:h-32 xl:h-[40rem] lg:w-full ms-auto relative overflow-hidden lg:overflow-visible z-40 items-center flex">
              <ContactForm title="Leave us a message" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
