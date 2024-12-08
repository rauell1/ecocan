import React from "react";
import Image from "next/image";
import StyledText from "@/components/shared/styled-text";
import { Nunito_Sans } from "next/font/google";
import SecurityFeatures from "./security-features";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

type FeatureItem = {
  title: string;
  description: string;
};

const FeatureList: React.FC<{ items: FeatureItem[]; startIndex?: number }> = ({
  items,
  startIndex = 1,
}) => (
  <ul className="space-y-4">
    {items.map((item, index) => (
      <li key={index}>
        <h3 className={`font-bold text-lg ${nunitoSans.className}`}>
          {startIndex + index}. {item.title}
        </h3>
        <StyledText>
          <p className={`text-sm ${nunitoSans.className}`}>{item.description}</p>
        </StyledText>
      </li>
    ))}
  </ul>
);

const leftFeatures: FeatureItem[] = [
  {
    title: "Scan ECOCAN Security Codes",
    description:
      "Use the Eco-scanner to verify the authenticity of products by scanning security codes printed on genuine packaging.",
  },
  {
    title: "Instant Product Authentication",
    description:
      "A landing page confirms whether the product is authentic and provides detailed information, including its deposit amount.",
  },
  {
    title: "Real-Time Warnings",
    description:
      "If the product is ineligible or the code is fake, you'll receive an immediate warning notification. Do not buy the product.",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    title: "Uncopyable Security Codes",
    description:
      "ECOCAN Security Codes are designed to be tamper-proof, ensuring that imitations can't succeed.",
  },
  {
    title: "Advanced Machine Learning",
    description:
      "The Eco-scanner uses cutting-edge machine learning to detect fake codes and protect you from fraud.",
  },
];

export default function IdentifyGenuine() {
  return (
    <div className="mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-2">
          How to identify genuine products
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <Image
            src="/assets/images/consumer/identify-genuine.svg"
            alt="ECOCAN Authentication"
            width={300}
            height={600}
            className="mx-auto lg:mx-0"
          />
        </div>
        <div className="lg:w-3/4">
          <SecurityFeatures/>
        </div>
      </div>
    </div>
  );
}
