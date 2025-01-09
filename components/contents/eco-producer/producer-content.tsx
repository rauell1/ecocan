"use client";

import React from "react";
import Optimize from "./components/optimize";
import CtaCard from "@/components/shared/cta-card/cta-card";
import TextWithComponent from "../consumer/components/text-with-component";
import DoMore from "./components/do-more";
import BeyondBasics from "./components/beyond-basics";
import HowToJoin from "./components/how-to-join";
import Efficiency from "./components/efficiency";
import DepositRefundSystem from "../recycler/components/drs";
import DrsTakeover from "./components/drs-takeover";
import RegisterPopup from "@/components/shared/register-popup";
import EcoProducerForm from "@/components/shared/eco-producer-form";
import Faq from "./components/faq";

export default function ProducerContent() {
  return (
    <div className="w-full">
      <div className="space-y-24 py-8 max-w-[72rem] mx-auto px-4 xl:px-0">
        <DoMore />
        <BeyondBasics />
        <HowToJoin />
      </div>
      <Optimize />
      <Efficiency />
      <DepositRefundSystem />
      <DrsTakeover />
      <div className="space-y-24 py-8 max-w-[72rem] mx-auto px-4 xl:px-0">
        {/* faq */}
        <Faq/>

        {/* call to action */}

        <CtaCard
          className="bg-[url('/assets/images/recycler/recycler-bg.svg')] ps-8 lg:ps-[7.25rem] h-[30.125rem] bg-cover bg-center items-center"
          item={
            <TextWithComponent
              title={
                <p className="text-white text-[2.5rem]">
                  Highest Quality
                  <br />
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">
                    Recyclate
                  </span>
                </p>
              }
              description={
                <p className="text-white mt-4">
                  Segregated-at-source, and <br />
                  clean-loop recycled
                </p>
              }
              component={<RegisterPopup join="Join ECOmmunity" className="bg-[#FFDD4C] hover:bg-[#FFDD4C] w-3/5 text-black hover:text-black no-underline font-medium" form={<EcoProducerForm />}  showArrow={true}/>}
            />
          }
        />
      </div>
    </div>
  );
}
