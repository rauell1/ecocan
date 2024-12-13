"use client";

import React from "react";
import Image from "next/image";

import { FaqSection } from "./components/faq";
import WasteLitter from "@/app/solutions/sections/brand-protection/components/waste-litter";
import IdentifyGenuine from "./components/identify-genuine";
import News from "./components/news";
import ReturnEmpties from "./components/return-empties";
import Exclusive from "./components/exclusive";
import Newsletter from "./components/newsletter";
import CtaCardComponent from "./components/cta-card";
import TapTap from "./components/tap-tap";
import GetStarted from "./components/get-started";
import WhatIsEcocan from "./components/what-is-ecocan";
import EnergyEfficiency from "./components/energy-efficiency";

export default function ConsumerContent() {
  return (
    <>
      <div className="">
        <div className="max-w-[69.375rem] mx-auto lg:pb-24 py-8 px-4 xl:px-0">
          <GetStarted />
        </div>
        <div className="bg-[#F3F3F6] lg:py-24 ">
          <div className="max-w-[69.375rem] mx-auto py-8 px-4 xl:px-0">
            <TapTap />
          </div>
        </div>
        <div className="bg-white lg:py-24">
          <div className="max-w-[69.375rem] mx-auto py-8 px-4 xl:px-0">
            <IdentifyGenuine />
          </div>
        </div>
        <div className="bg-[#F3F3F6]">
          <ReturnEmpties />
          <WhatIsEcocan />
          <Exclusive />
        </div>
      </div>

      <div className="max-w-[69.375rem] mx-auto space-y-8 lg:space-y-24 px-4 xl:px-0">
        <WasteLitter />
        <EnergyEfficiency />
      </div>
      <div className="w-screen lg:pb-24 my-8 md:hidden">
        <Image
          src="/assets/images/consumer/mobile-cta.svg"
          alt="cta"
          className="w-full"
          width={100}
          height={100}
        />
      </div>

      <div className="max-w-[69.375rem] mx-auto space-y-24 px-4 xl:px-0">
        <News />
        {/* stay in the loop */}
        <Newsletter />
        <FaqSection />
        <CtaCardComponent />
      </div>
    </>
  );
}
