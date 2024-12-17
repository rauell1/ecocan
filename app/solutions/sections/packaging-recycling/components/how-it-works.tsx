import React from "react";
import Image from "next/image";
import StyledText from "@/components/shared/styled-text";
import { Nunito_Sans } from "next/font/google";
import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import HiwImage from "./hiw-img";

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
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0 hidden lg:block">
      <TextWithComponent
        className="text-center"
        title="So how does it really work?"
        description="Hover Over Icon To See More"
        component={
          <HiwImage/>
        }
      />
    </div>
  );
}
