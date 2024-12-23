"use client";

import React, { useEffect, useState } from "react";
import NavigationBar from "../navbar/navbar";
import HyperLink from "../hyperlink/hyperlink";
import EcostationForm from "../hero-form/hero-form";

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
        logoSrc={
          isScrolled
            ? "/assets/images/ecocan-logo.svg"
            : "/assets/images/ecocan-logo-alt.svg"
        }
        className={
          isScrolled ? "bg-white" : "bg-transparent text-white border-b-0 "
        }
        linkColor={isScrolled ? "text-black" : "text-white"}
      />
      <div className="lg:h-[36rem] xl:h-[47.575rem]">
        <div className="bg-[url('/assets/images/eco-station/eco-station-hero.svg')] bg-center bg-cover mb-6 lg:mb-0 min-h-[24.735rem] flex items-center md:block md:h-[32.5625rem] lg:h-[35.875rem] xl:h-[46.85rem] relative after:absolute after:inset-0 after:content-[''] after:bg-black/50 after:opacity-70 after:z-10">
          <div className="h-full flex items-center">
            <div className="w-full xl:max-w-[72rem] z-[9998] mx-auto lg:h-40 xl:h-[40rem] lg:flex lg:flex-row lg:gap-12 lg:items-center">
              <div className="flex flex-col gap-4 lg:pt-0 lg:w-1/2 px-4 xl:px-0 text-white lg:space-y-4">
                <div>
                  <h1 className="xl:text-[4rem] text-5xl text-start font-semibold">
                    Every day is
                    <br />
                    <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] text-transparent bg-clip-text">
                      Pay day
                    </span>
                  </h1>
                </div>
                <div className="text-base xl:text-xl">
                  <p className="tracking-wide text-white text-start">
                    List your shop as an{" "}
                    <HyperLink link="ECO-station" href="#faq" />
                    , and increase your sales, earn extra income on the
                    side, and enjoy unmatched visibility
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex lg:w-1/2 z-[9998] self-center">
                <EcostationForm title="Let's grow together" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
