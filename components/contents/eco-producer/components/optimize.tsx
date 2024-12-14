import React from "react";
import { ArrowRightCircle, LucideArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HyperLink from "@/components/shared/hyperlink/hyperlink";

interface FeatureProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
}

const FeatureCard = ({ title, description, imageSrc }: FeatureProps) => (
  <div className="bg-tranparent text-white">
    <div className="overflow-hidden rounded-smooth-xl">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full lg:h-72 object-cover"
        width={100}
        height={100}
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-[#B3B3B3] font-light">{description}</p>
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
    <div className="bg-[#2F313F] py-8 lg:p-8 lg:my-24">
      <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-[2rem] bg-gradient-to-br from-[#228B22] via-[#4AC63F] to-[#0000001A] text-transparent bg-clip-text font-semibold">
            Optimise the value of{" "}
            <span className="bg-gradient-to-bl from-[#4AC63F] via-[#FFDD4C] to-[#4AC63F]  text-transparent bg-clip-text">
              your packaging
            </span>
          </h2>
          <p className="text-secondary lg:text-xl">
            With ECOCAN, a bottle is more than just a bottle
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <FeatureCard
            title="Transform them into digitally connected assets"
            description="We'll help unlock the digital power of your beverage containers, by enabling individual item-unit traceability across the entire market, in real-time! This prevents counterfeiting and diversion activities, as well as offer you unmatched market intelligence"
            imageSrc="/assets/images/producer/optimize-1.svg"
          />
          <FeatureCard
            title="Convert them into low-cost marketing channels"
            description="Your packaging is more than a one-time consumable; we'll convert it into a dynamic marketing platform, for directly engaging with your customers through personalized campaigns. In return, you'll gain actionable insights to enhance your operations"
            imageSrc="/assets/images/producer/optimize-2.svg"
          />
          <FeatureCard
            title="Minimise their environmental footprint"
            description="Through reuse and recycling via the ECOCAN DRS, we'll tell you exactly what individual packaging has been collected and recycled, when and where. We'll also ensure regulators know about your ECO-friendly efforts"
            imageSrc="/assets/images/producer/optimize-3.svg"
          />
          <FeatureCard
            title="Increase their resource efficiency"
            description={
              <div>
                We offer a direct service for automated glass bottle washing and quality inspection. Deploying top-of-the-line <HyperLink link="PAC Swiss" href="/"/> washers, and <HyperLink link="Krones Linantronic" href="/"/>  E.B.I. To deliver most hygienic washed bottles. Affordably
              </div>
            }
            imageSrc="/assets/images/producer/optimize-4.svg"
          />
        </div>
      </div>
    </div>
  );
}
