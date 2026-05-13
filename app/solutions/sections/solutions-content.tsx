"use client";

import React from "react";
import NavigationBar from "@/components/shared/navbar/navbar";
import { useScroll } from "@/lib/useScroll";
import SolutionsHome from "./solutions-home/solutions-home";

export default function SolutionsContent() {
  const isScrolled = useScroll();
  return (
    <>
      <NavigationBar
        logoSrc={
          isScrolled
            ? "/assets/images/ecocan-logo.svg"
            : "/assets/images/ecocan-logo-alt.svg"
        }
        className={
          isScrolled ? "bg-card" : "bg-transparent text-white border-b-0 "
        }
        linkColor={isScrolled ? "text-black" : "text-white"}
      />
      {/* our offering */}
      <div>
        <div className="bg-[url('/assets/images/solutions/solution-hero.svg')] min-h-[28rem] flex flex-col items-center justify-center lg:h-[44rem] bg-cover bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/65 after:z-10">
          <div className="max-w-[1280px] w-full mx-auto px-6 z-50 text-center">
            <p className="section-overline text-white/70 mb-6">Our offering</p>
            <h1
              className="text-white font-bold mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
            >
              Smart Sustainable Solutions
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed">
              We seamlessly connect the physical and digital worlds in a manner
              that is most sustainable to our planet, and to the life it nurtures.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-background">
        <div className="">
          <SolutionsHome />
        </div>
      </div>
    </>
  );
}
