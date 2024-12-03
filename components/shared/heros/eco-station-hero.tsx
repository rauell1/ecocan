"use client";

import React, { useEffect, useState } from "react";
import NavigationBar from "../navbar/navbar";
import HeroForm from "../hero-form/hero-form";
import HyperLink from "../hyperlink/hyperlink";

export default function EcoStationHero() {
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
        <div className="bg-[url('/assets/images/eco-station/eco-station-hero.svg')] bg-black lg:h-[36rem] xl:h-[46.85rem] lg:bg-contain xl:bg-cover bg-no-repeat relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:z-10">
          <div className="xl:max-w-[69.375rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12 lg:pt-[3.125rem] xl:pt-0">
            <div className="flex flex-col gap-4 lg:mt-28 xl:mt-60 md:w-1/2 px-4 xl:px-0 text-white z-50">
              <div>
                <h1 className="lg:text-6xl text-2xl text-center md:text-start font-semibold">
                  Side hustle,
                  <br /> without the
                  <br />
                  <span className="bg-gradient-to-br from-[#228B22] via-[#4AC63FCF] to-[#A6A6A6] text-transparent bg-clip-text">
                    hustle
                  </span>
                </h1>
              </div>
              <div className="text-sm lg:text-base xl:text-lg">
                <p className="tracking-wide text-white  text-center md:text-start">
                  List your shop as an <HyperLink link="ECO-station" href="/" />
                  , and increase <br /> your sales, earn extra income on the
                  side, and <br /> enjoy unmatched visibility
                </p>
              </div>
            </div>
            <div className="lg:h-40 xl:h-[40rem] xl:w-6/12 ms-auto relative overflow-hidden lg:overflow-visible z-[9999] items-center flex">
              <HeroForm title="Let's grow together" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
