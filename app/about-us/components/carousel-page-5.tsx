import React from "react";
import Partners from "./partners";
import PartnerUS from "./partner-us";
import Community from "./community";
import Footer from "@/components/shared/footer/footer";

export default function CarouselPage5() {
  return (
    <>
      <div className="bg-[#F6F6F6] relative">
        <div className="max-w-[72rem] mx-auto flex items-center">
          <PartnerUS/>
        </div>
          <Partners/>
          <Community/>
      </div>
      <Footer/>
    </>
  );
}
