import React from "react";
import { ArrowRightCircle, LucideArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
}

const FeatureCard = ({ title, description, imageSrc }: FeatureProps) => (
  <div className="bg-tranparent text-white">
    <div className="overflow-hidden rounded-[2rem]">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full lg:h-72 object-cover"
        width={100}
        height={100}
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-sm mb-2">{title}</h3>
      <p className="text-[#B3B3B3] text-sm font-light">{description}</p>
      <Button
        variant="ghost"
        className="hover:bg-transparent hover:text-white px-0 group"
      >
        Learn More
        <LucideArrowUpRight className="ml-2 group-hover:scale-125"/>
      </Button>
    </div>
  </div>
);

export default function Optimize() {
  return (
    <div className="bg-[#2F313F] p-8 my-24">
      <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
        {/* <div className="flex justify-between">
          <Image
            src="/assets/images/producer/green-ball.svg"
            alt="green ball"
            width={32}
            height={32}
            className="w-auto h-auto"
          />
          <Image
            src="/assets/images/producer/green-ball.svg"
            alt="green ball"
            width={32}
            height={32}
            className="w-auto h-auto"
          />
        </div> */}
        <div className="text-center mb-6">
          <h2 className="text-[2rem] bg-gradient-to-br from-[#228B22] via-[#4AC63F] to-[#0000001A] text-transparent bg-clip-text font-semibold">
            Optimise the value of{" "}
            <span className="bg-gradient-to-bl from-[#4AC63F] via-[#FFDD4C] to-[#4AC63F]  text-transparent bg-clip-text">
              your packaging
            </span>
          </h2>
          <p className="text-white text-sm">
            With ECOCAN, a bottle is more than just a bottle
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <FeatureCard
            title="Transform ordinary packaging into digitally connected assets"
            description="We'll help unlock the digital power of your beverage containers, by enabling individual item-unit traceability across the entire market, in real-time! This prevents counterfeiting and diversion activities, as well as offer you unmatched market intelligence"
            imageSrc="/assets/images/producer/optimize-1.svg"
          />
          <FeatureCard
            title="Convert them into low-cost yet expansive, marketing channels"
            description="Your packaging is more than a one-time consumable; we'll convert it into a dynamic marketing platform, for directly engaging with your customers through personalized campaigns. In return, you'll gain actionable insights to enhance your operations"
            imageSrc="/assets/images/producer/optimize-2.svg"
          />
          <FeatureCard
            title="Increase their resource efficiency, and cut your environmental impact"
            description="Through reuse and recycling via the ECOCAN DRS, we'll tell you exactly what individual packaging has been collected and recycled, when and where. We'll also ensure regulators know about your ECO-friendly efforts"
            imageSrc="/assets/images/producer/optimize-3.svg"
          />
          <FeatureCard
            title="Closed-loop recycling"
            description="We directly offer a service for automated bottle washing and quality inspection. Deploying top-of-the-line PAC Swiss bottle washers, and Krones Electronic Bottle Inspector (E.B.I.). That we deliver most hygienic and palletised washed glass bottles ready for reuse"
            imageSrc="/assets/images/producer/optimize-4.svg"
          />
        </div>
        <div className="w-full flex items-center justify-center ">
          <p className="text-white text-lg font-semibold leading-[1.5125rem] text-center mb-4">
            Only ECOCAN can offer you this level of insight, security,
            efficiency and <br />
            sustainability. And we say this with Absolute Confidence! Prove us
            wrong
          </p>
        </div>
      </div>
    </div>
  );
}
