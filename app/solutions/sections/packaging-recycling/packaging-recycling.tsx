import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import { ItemList } from "@/components/contents/courier/components/ItemList";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";
import HowItWorks from "./components/how-it-works";
import Cooperation from "./components/cooperation";
import FunFacts from "./components/fun-facts";
import Heading from "./components/heading";
import SmallDeeds from "./components/small-deeds";
import Process from "./components/process";
import ClosedLoop from "./components/closed-loop";

export default function PackagingRecycling() {
  return (
    <>
      <div className="space-y-24 pb-24">
        <Heading />
        {/* <HowItWorks/> */}
      </div>
      {/* recycling is cooperation */}
      <Cooperation />
      <div>
        {/* small deeds */}
        <div className="bg-[#F6F6F6] pt-12 pb-36 space-y-24 relative">
          <Process/>
          <ClosedLoop/>
          <SmallDeeds />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="absolute bottom-0 z-50 hidden lg:block"
          >
            <path
              fill="white"
              fill-opacity="1"
              d="M0,80L1440,0L1440,340L0,340Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 120"
            className="absolute bottom-0 z-50 hidden md:block lg:hidden"
          >
            <path
              fill="white"
              fill-opacity="1"
              d="M0,100L600,0L600,600L0,600Z"
            ></path>
          </svg>
        </div>
        <FunFacts />
      </div>
    </>
  );
}
