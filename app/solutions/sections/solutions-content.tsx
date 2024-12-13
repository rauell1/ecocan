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
          isScrolled ? "bg-white" : "bg-transparent text-white border-b-0 "
        }
        linkColor={isScrolled ? "text-black" : "text-white"}
      />
      {/* our offering */}
      <div className="lg:h-[36rem] xl:h-[40rem]">
        <div className="bg-[url('/assets/images/solutions/solution-hero.svg')] min-h-[28rem] flex flex-col items-center justify-center lg:h-[32rem] xl:h-[44rem] bg-cover bg-[-5px] relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:z-10">
          <div className="xl:max-w-[69.375rem] flex flex-col md:flex md:flex-row mx-auto lg:my-0 lg:gap-12">
            <div className="px-4 xl:px-0 text-white z-50 mx-auto">
              <div>
                <h1 className="xl:text-[4rem] text-5xl text-center font-semibold text-white">
                  Smart Sustainable Solutions
                </h1>
              </div>
              <div className="tracking-wide text-base xl:text-xl font-light text-white my-10 space-y-4">
                <p className="text-center w-3/5 mx-auto">
                  We seamlessly connect the physical and digital worlds in a
                  manner that is most sustainable to our planet, and to the life
                  it nurtures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="">
          <SolutionsHome />
        </div>
      </div>
    </>
  );
}
