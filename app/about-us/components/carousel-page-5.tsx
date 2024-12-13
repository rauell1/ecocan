import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";
import Partners from "./partners";
import PartnerUS from "./partner-us";
import Community from "./community";

export default function CarouselPage5() {
  return (
    <>
      <div className="bg-[#F6F6F6] relative">
        <div className="max-w-[69.375rem] mx-auto flex items-center">
          <PartnerUS/>
        </div>
          <Partners/>
          <Community/>
      </div>
    </>
  );
}
