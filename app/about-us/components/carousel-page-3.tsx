import React from "react";
import Visionaries from "./visionaries";
import Image from "next/image";

export default function CarouselPage3() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="max-w-[72rem] min-h-screen  mx-auto flex items-center lg:my-0 lg:gap-12">
        <div className="px-4 xl:px-0 space-y-12 z-[999]">
          <Visionaries />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 500"
        className="absolute bottom-0 z-50 hidden lg:block"
      >
        <path
          fill="#F6F6F6"
          fillOpacity="1"
          d="M0,450L1440,0L1440,500L0,500Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 530"
        className="absolute bottom-0 z-50 hidden md:block lg:hidden"
      >
        <path
          fill="#F6F6F6"
          fillOpacity="1"
          d="M0,300L600,0L600,600L0,600Z"
        ></path>
      </svg>
      <Image
        src="/assets/images/consumer/green-rectangles.svg"
        alt="green rectangles"
        className="absolute xl:bottom-[55%]  -right-4 z-[995] w-[20.25rem] hidden xl:block -rotate-12"
        width={100}
        height={100}
      />
    </div>
  );
}
