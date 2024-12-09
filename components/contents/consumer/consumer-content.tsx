"use client";

import React from "react";
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import HyperLink from "@/components/shared/hyperlink/hyperlink";

import TextWithComponent from "./components/text-with-component";
import { FaqSection } from "./components/faq";
import WhiteBgCard from "@/components/shared/white-bg-card";
import CustomCard from "@/components/shared/text-with-cards/custom-card";
import WasteLitter from "@/app/solutions/sections/brand-protection/components/waste-litter";
import IdentifyGenuine from "./components/identify-genuine";
import News from "./components/news";
import ReturnEmpties from "./components/return-empties";
import BuyOnline from "./components/buy-online";
import Exclusive from "./components/exclusive";
import Newsletter from "./components/newsletter";
import CtaCardComponent from "./components/cta-card";
import TapTap from "./components/tap-tap";
import GetStarted from "./components/get-started";
import WhatIsEcocan from "./components/what-is-ecocan";
import CtaCard from "@/components/shared/cta-card/cta-card";
import EnergyEfficiency from "./components/energy-efficiency";

export default function ConsumerContent() {
  return (
    <>
      <div className="">
        <div className="max-w-[69.375rem] mx-auto pb-24 py-8 px-4 xl:px-0">
          <GetStarted />
        </div>
        <div className="bg-[#F3F3F6] py-24 ">
          <div className="max-w-[69.375rem] mx-auto py-8 px-4 xl:px-0">
            <TapTap />
          </div>
        </div>
        <div className="bg-white py-24">
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

      <div className="max-w-[69.375rem] mx-auto space-y-24 px-4 xl:px-0">
        <WasteLitter />
        <EnergyEfficiency />
      </div>
      <div className="w-screen pb-24 md:hidden">
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
