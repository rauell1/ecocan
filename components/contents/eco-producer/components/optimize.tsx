import React from "react";
import { LucideArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MediaViewer from "@/components/media-viewer";

interface FeatureProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  href: string;
}

const FeatureCard = ({ title, description, imageSrc, href }: FeatureProps) => (
  <div className="bg-tranparent text-white">
    <div className="overflow-hidden">
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
      <div className="text-[#B3B3B3] font-light">{description}</div>
      <Link href={href}>
        <Button
          variant="ghost"
          className="hover:bg-transparent hover:text-white px-0 group underline underline-offset-4"
        >
          Learn More
          <LucideArrowUpRight className="ml-2 group-hover:scale-125" />
        </Button>
      </Link>
    </div>
  </div>
);

export default function Optimize() {
  return (
    <div className="bg-[#2F313F] py-8 lg:p-8 lg:my-24">
      <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-5xl bg-gradient-to-br from-[#228B22] via-[#4AC63F] to-[#0000001A] text-transparent bg-clip-text font-semibold">
            Optimise the value of{" "}
            <span className="bg-gradient-to-bl from-[#4AC63F] via-[#FFDD4C] to-[#4AC63F]  text-transparent bg-clip-text">
              your packaging
            </span>
          </h2>
          <p className="text-secondary lg:text-xl my-8">
            With ECOCAN, a bottle is more than just a bottle
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <FeatureCard
            title="Transform them into digitally connected assets"
            description="We--™ll help unlock the digital power of your ordinary bottles, by enabling item-unit traceability across the entire market, in real-time! To prevent counterfeiting and diversion attempts, as well as to offer you unmatched market intelligence"
            imageSrc="/assets/images/producer/optimize-1.svg"
            href="/solutions/brand-protection"
          />
          <FeatureCard
            title="Convert them into low-cost marketing channels"
            description="Your packaging is more than a one-time consumable; we--™ll transform them into expansive & disruptive marketing assets, for direct customer engagement through personalized campaigns. In return, you'll gain actionable insights, and promote brand loyalty"
            imageSrc="/assets/images/producer/optimize-2.svg"
            href="/solutions/brand-promotion"
          />
          <FeatureCard
            title="Minimise their environmental footprint"
            description="Through reuse and recycling via the ECOCAN DRS, we--™ll tell you exactly what packaging has been collected for recycling, when and where. We--™ll also ensure regulators know about your ECO-friendly efforts"
            imageSrc="/assets/images/producer/optimize-3.svg"
            href="/solutions/packaging-recycling"
          />
          <FeatureCard
            title="Increase their resource efficiency"
            description={
              <div>
                We offer a direct service for automated glass bottle washing and quality inspection. Deploying top-of-the-line{" "}
                <MediaViewer
                  type="video"
                  title="PAC Swiss"
                  start={12}
                  source="https://www.youtube.com/embed/0QxeZ-r7vSE"
                />{" "}
                washers, and{" "}
                <MediaViewer
                  type="pdf"
                  title="Krones Linatronic"
                  source="/documents/krones.pdf"
                />{" "}
                E.B.I. To deliver most hygienic washed bottles. Affordably
              </div>
            }
            imageSrc="/assets/images/producer/optimize-4.svg"
            href="/solutions/packaging-recycling#recycling_process"
          />
        </div>
        <p className="text-[2rem] font-semibold lg:w-11/12 text-white">
          Only ECOCAN can offer you this level of insight, security, efficiency
          and sustainability. And we say this with Absolute Confidence!
        </p>
      </div>
    </div>
  );
}
