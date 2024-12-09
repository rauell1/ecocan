import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import Image from "next/image";
import React from "react";

const normalFeatures = [
  "Limited performance analytics",
  "Can be easily copied/imitated",
  "No supply chain tracking capability",
  "Limited targeting & remarketing",
  "Cannot be modified post printing",
];
export default function NormalQR() {
  return (
    <div>
      <TextWithCards
        title={
          <div className="text-center">
            <h2 className="text-[#FF4D07] text-lg">
              Normal QR code
            </h2>
            <p className="text-white text-sm font-medium tracking-wide">
              Every code is the same
            </p>
          </div>
        }
        customCard={
          <div className="">
            <Image
              src="/assets/images/solutions/normal-bottle.svg"
              alt="red ball"
              className="mx-auto"
              width={390}
              height={400}
            />
            {normalFeatures.map((item, index) => (
              <div className="flex items-center gap-2 mb-2 lg:w-3/4 mx-auto lg:ps-8" key={index}>
                <Image
                  src="/assets/images/solutions/red-ball.svg"
                  alt="red ball"
                  width={24}
                  height={24}
                />
                <p className="text-white text-sm font-medium tracking-wide">
                  {item}
                </p>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}
