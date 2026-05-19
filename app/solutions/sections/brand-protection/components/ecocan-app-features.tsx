import React from "react";
import Image from "next/image";
import StyledText from "@/components/shared/styled-text";
import clsx from "clsx";

type FeatureItem = {
  title: string;
};

const FeatureList: React.FC<{ items: FeatureItem[]; startIndex?: number; className?:string }> = ({
  items,
  className,
}) => (
  <div className="space-y-12">
    {items.map((item, index) => (
      <div key={index} className={clsx(`border w-3/5 text-center p-4`, className)}>
        <h3 className="font-nunito">
          {item.title}
        </h3>
      </div>
    ))}
  </div>
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
      <div className="grid md:grid-cols-3 items-center">
        <div className="border relative">
          <FeatureList items={leftFeatures} className="ms-auto"/>
        </div>
        <div className="relative h-[33.875rem]">
          <Image
            src="/assets/images/solutions/circular-mobile.svg"
            alt="ECOCAN Authentication"
            width={1000}
            height={600}
            className="mx-auto absolute top-0 left-5"
          />
        </div>
        <div className="">
          <div>
            <FeatureList items={rightFeatures} startIndex={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
