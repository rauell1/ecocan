import React from "react";
import Image from "next/image";
import StyledText from "@/components/shared/styled-text";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

type FeatureItem = {
  title: string;
};

const FeatureList: React.FC<{ items: FeatureItem[]; startIndex?: number }> = ({
  items,
  startIndex = 1,
}) => (
  <ul className="space-y-12">
    {items.map((item, index) => (
      <li key={index}>
        <h3 className={`${nunitoSans.className}`}>
          {startIndex + index}. {item.title}
        </h3>
      </li>
    ))}
  </ul>
);

const leftFeatures: FeatureItem[] = [
  {
    title:
      "It is a take-back collection instrument for used empties. Whereby a refundable fee is added onto the selling price of ECO-products at point of sale",
  },
  {
    title:
      "This fee assigns extrinsic financial value to genuine eligible empties, thereby transforming them from supposed waste, to resource",
  },
  {
    title:
      "ECOnsumers can reclaim this fee by returning eligible empties to ECO-Stations for recycling",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    title:
      "And if the purchasing ECOnsumer accidentally litters eligible empties, other ECOnsumers can pick them and return to ECO-Stations to claim the deposit",
  },
  {
    title:
      "The journey of the empties doesn’t end there. ECOuriers pick-up the empties from ECO-Stations, and drop them off to ECO-Recyclers for closed-loop recycling",
  },
  {
    title:
      "Material from recycled bottles is used to manufacture new bottles, hence reducing reliance on virgin materials, cutting CO2 emissions and lowering energy consumption",
  },
];

export default function HowItWorks() {
  return (
    <div className="mx-auto px-4">
      <h2 className="text-center text-3xl mb-8 font-semibold">
        So how does it really work?
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 text-right">
          <FeatureList items={leftFeatures} />
        </div>
        <div className="md:w-1/3">
          <Image
            src="/assets/images/solutions/works.svg"
            alt="ECOCAN Authentication"
            width={300}
            height={600}
            className="mx-auto"
          />
        </div>
        <div className="md:w-1/3">
          <div>
            <FeatureList items={rightFeatures} startIndex={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
