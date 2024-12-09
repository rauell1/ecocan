import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import Image from "next/image";
import React from "react";

const normalFeatures = [
  "Advanced performance analytics",
  "Cannot be faked",
  "Advanced targeting & remarketing",
  "Anti-counterfeiting monitoring",
  "Tracking & Tracing through the supply chain",
  "Content can be modified post printing",
  "Reliable authentication in under 3 seconds",
];
export default function EcocanQR() {
  return (
    <div>
      <TextWithCards
        title={
          <div className="text-center">
            <h2 className="text-primary text-lg">
            ECOCAN Security codes
            </h2>
            <p className="text-white text-sm font-medium tracking-wide">
              Every code is unique
            </p>
          </div>
        }
        customCard={
          <div>
            <Image
              src="/assets/images/solutions/ecocan-bottle.svg"
              alt="red ball"
              className="mx-auto"
              width={400}
              height={400}
            />
            {normalFeatures.map((item, index) => (
              <div className="flex items-center gap-2 mb-2 lg:w-3/4 mx-auto lg:ps-8" key={index}>
                <Image
                  src="/assets/images/solutions/green-ball.svg"
                  alt="green ball"
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
