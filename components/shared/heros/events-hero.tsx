
"use client"
import React, { useEffect, useState } from "react";
import NavigationBar from "../navbar/navbar";
import HeroForm from "../hero-form/hero-form";

export default function EventsHero() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
      <div className="lg:h-[36rem] xl:h-[47.575rem]">
        <div className="bg-[url('/assets/images/events/events-hero-bg.jpeg')] bg-center bg-cover mb-6 lg:mb-0 min-h-[24.735rem] flex items-center md:block md:h-[32.5625rem] lg:h-[35.875rem] xl:h-[46.85rem] relative after:absolute after:inset-0 after:content-[''] after:bg-black/70 after:opacity-70 after:z-10">
          <div className="h-full flex items-center">
            <div className="w-full xl:max-w-[69.375rem] z-[9998] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12 lg:pt-[3.125rem] xl:pt-0">
              <div className="flex flex-col gap-4 lg:mt-28 xl:mt-96 md:w-1/2 px-4 xl:px-0 text-white z-50">
                <div>
                  <h1 className="xl:text-6xl text-5xl text-start font-semibold">
                    <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                    The{" "}Gig
                    </span>
                  </h1>
                </div>
                <div>
                  <p className="tracking-wide text-sm lg:text-base xl:text-lg text-white  text-start my-5 xl:my-10">
                    Make it memorable, leave a lasting ECO-green<br/> impression, and
                    you&apos;ll be unforgettable!
                  </p>
                </div>
              </div>
              {/* <div className="lg:h-40 xl:h-[40rem] xl:w-5/12 ms-auto relative overflow-hidden lg:overflow-visible z-40 items-center flex">
                <HeroForm title="Let's grow together" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
