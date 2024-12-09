import Image from "next/image";
import React from "react";

export default function Intersection() {
  return (
    <div className="max-w-[69.375rem] mx-auto">
      <div className="lg:flex xl:rounded-3xl bg-[#F6F6F6] overflow-hidden items-center mx-auto">
        <div className="lg:w-1/2 hidden lg:block">
          <Image
            src="/assets/images/solutions/knot.svg"
            alt="white man collecting plastic"
            width={300}
            height={500}
            className="lg:w-full lg:h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 h-full lg:space-y-8 md:flex p-8 lg:p-0 lg:flex-col lg:items-center lg:justify-center gap-4 lg:gap-0">
          <div className="md:w-1/2 lg:w-5/6">
            <h2 className="text-2xl lg:text-[2rem] font-semibold">
              Intersection of Offering
            </h2>
            <ol className="text-sm lg:text-base my-4 list-decimal lg:space-y-4 lg:ps-4 text-[#888D92]">
              <li>
                Littering of used genuine bottles not only harms the
                environment, but also fuels counterfeit trade
              </li>
              <li>
                As criminals simply pick the discarded bottles, refill with fake
                products, which they resell as authentic
              </li>
              <li>
                And consumers will be unable to identify these illicits, as
                they&apos;ll appear identical to genuine drinks
              </li>
            </ol>
          </div>
          <div className="md:w-1/2 lg:w-5/6 lg:space-y-2">
            <Image
              src="/assets/images/solutions/balls.svg"
              className="hidden lg:block"
              alt="ecocan balls"
              width={350}
              height={100}
            />
            <h2 className="text-2xl lg:text-[2rem] font-semibold">
              Re-imagined Intervention
            </h2>
            <p className="text-[#888D92] text-sm lg:text-base my-4 lg:my-0">
              Personalised promotion of genuine brands; Empowering consumers
              with reliable technology to verify genuine products before
              purchase; And facilitating them to easily recycle empties after
              consumption, addresses both crises
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
