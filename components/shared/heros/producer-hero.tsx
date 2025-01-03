"use client";
import React, { useEffect, useState } from "react";
import NavigationBar from "../navbar/navbar";

export default function ProducerHero() {
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
      <div>
        <div className="bg-[url('/assets/images/producer/hero.svg')] mb-6 lg:mb-0 min-h-[24.735rem] flex items-center md:block md:h-[32.5625rem] lg:h-[38.875rem] xl:h-[46.85rem] bg-[length:130%] lg:bg-[position:-100px_0px] relative after:absolute after:inset-0 after:content-[''] after:bg-black/10 after:z-10">
          <div className="h-full flex items-center max-w-[72rem] md:mx-auto px-4 xl:px-0">
            <div className="z-[990]">
              <div className="text-white z-50 space-y-1">
                <h1 className="md:text-6xl text-4xl font-semibold text-white">
                  Maximize Earnings,
                </h1>
                <div className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text md:text-[3rem] text-4xl py-2">
                  <span className="lg:text-[4.25rem] font-semibold">M</span>
                  <span className="lg:text-[4.0625rem] font-semibold">i</span>
                  <span className="lg:text-[3.9375rem] font-semibold">n</span>
                  <span className="lg:text-[3.8125rem] font-semibold">i</span>
                  <span className="lg:text-[3.6875rem] font-semibold">m</span>
                  <span className="lg:text-[3.5625rem] font-semibold">i</span>
                  <span className="lg:text-[3.4375rem] font-semibold">z</span>
                  <span className="lg:text-[3.3125rem] font-semibold">e</span>
                  <span className="lg:text-[3.1875rem] font-semibold"> </span>
                  <span className="lg:text-[3.0625rem] font-semibold">p</span>
                  <span className="lg:text-[2.9375rem] font-semibold">o</span>
                  <span className="lg:text-[2.8125rem] font-semibold">l</span>
                  <span className="lg:text-[2.6875rem] font-semibold">l</span>
                  <span className="lg:text-[2.5625rem] font-semibold">u</span>
                  <span className="lg:text-[2.4375rem] font-semibold">t</span>
                  <span className="lg:text-[2.3125rem] font-semibold">i</span>
                  <span className="lg:text-[2.1875rem] font-semibold">o</span>
                  <span className="lg:text-[2.0625rem] font-semibold">n</span>
                </div>
                <div className="tracking-wide text-base xl:text-lg text-white">
                  <p className="text-left">
                    With ECOCAN, it&apos;s not business as usual.
                  </p>
                  <p className="text-left">But <span className="text-primary">ECO</span>-smart business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
