import Image from "next/image";
import React from "react";

export default function Intersection() {
  return (
    <div className="max-w-[69.375rem] mx-auto">
      <div className="flex xl:rounded-3xl bg-[#F6F6F6] overflow-hidden items-center mx-auto">
        <div className="w-1/2">
          <Image
            src="/assets/images/solutions/knot.svg"
            alt="white man collecting plastic"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-full space-y-8 flex flex-col items-center justify-center ">
          <div className="w-5/6">
            <h2 className="text-[2rem] font-semibold">
              Intersection of Offering
            </h2>
            <ol className="my-4 list-decimal space-y-4 ps-4 text-[#888D92]">
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
          <div className="w-5/6 space-y-2">
            <Image
              src="/assets/images/solutions/balls.svg"
              alt=""
              width={350}
              height={100}
            />
            <h2 className="text-[2rem] font-semibold">
              Re-imagined Intervention
            </h2>
            <p className="text-[#888D92]">
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
