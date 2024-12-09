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
    title: "The built-in, machine learning Eco-scanner ensures reliable, fast, and convenient product authentication in under 3 seconds.",
  },
  {
    title: "And the integrated AI-powered verification technology ensures that only valid ECOCAN security codes are decoded.",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    title: "After product authentication, the verification process can be leveraged to engage ECOnsumers with personalized marketing campaigns.",
  },
  {
    title: "Through EcocanApp’s customizable product carousel, and traceability passports, ECOnsumers enjoy a unique and interactive brand.",
  },
];

export default function EcocanAppFeatures() {
  return (
    <div className="mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 text-right">
          <FeatureList items={leftFeatures} />
        </div>
        <div className="md:w-1/3">
          <Image
            src="/assets/images/solutions/ecocan-app.svg"
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
      <div className="relative h-[6rem] w-[12rem] mx-auto overflow-hidden">
        <Image
          src="/assets/images/solutions/red-ball.svg"
          alt="ECOCAN Authentication"
          width={47}
          height={47}
          className="w-auto h-auto absolute -top-10 -right-2"
        />
      </div>
    </div>
  );
}
