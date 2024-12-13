import HyperLink from "@/components/shared/hyperlink/hyperlink";
import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <div className="pb-24">
      <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
        <div className="bg-[url('/assets/images/solutions/experience.svg')] bg-cover bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/50 after:opacity-50 after:-z-10 overflow-hidden z-50 rounded-smooth-lg lg:rounded-smooth-xl py-8 flex flex-col justify-center">
          <div className="lg:w-3/4 text-center mx-auto text-white z-20 lg:space-y-8">
            <Image
              src="/assets/images/solutions/ecocan-yellow.svg"
              alt="ecocan yellow logo"
              width={100}
              height={85}
              className="mx-auto"
            />
            <h2 className="text-3xl lg:text-5xl font-semibold">
              Unforgettable engagement experience
            </h2>
            <p className="mt-4 lg:w-3/4 mx-auto lg:text-lg font-light px-4 lg:px-0">
              Gift your customers early Christmas surprises to strengthen your
              brand and elevate their satisfaction. Through Sustainability
              discounts, Recycling coupons, and exclusive VIP experience in
              ECO-Events. And watch them scratch your back with increased
              purchases, and brand loyalty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
