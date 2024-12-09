import CheckList from "@/components/contents/consumer/components/checklist";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import { computer } from "@/lib/imageIndex";
import { LucideChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const steps = [
  {
    id: 1,
    step: (
      <div className="font-light text-accent/80">
        ECOnsumers get free access to the most reliable and convenient product
        verification technology. Which empowers them to easily identify genuine
        products before purchase
      </div>
    ),
  },
  {
    id: 2,
    step: (
      <div className="font-light text-accent/80">
        ECO-Producers are equipped with comprehensive product traceability
        platform, allowing them to monitor their products’ movement across the
        entire market, in real-time. This aids in detecting illegal counterfeit
        and product diversion activities as they occur, enabling swift remedial
        action.
      </div>
    ),
  },
  {
    id: 3,
    step: (
      <div className="font-light text-accent/80">
        ECO-Recyclers and ECO-Producers can also monitor in real-time, the
        collection of their post-consumer packaging.
      </div>
    ),
  },
];

export default function TnT() {
  return (
    <>
        <ImageAndItem
          className="gap-12 items-center"
          image={
            <Image
              src={computer}
              alt="beach bottle"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          }
          item={
            <TextWithCards
              className="w-full"
              title="ECOCAN TnT"
              description={
                <div>
                  <p className="text-[#23262fcc] font-light w-11/12">
                    The <HyperLink link="ECOCAN Track and Trace" href="/" /> is a
                    robust cloud-based platform, that disrupts counterfeit trade by
                    enabling AI-intelligent authentication, and real-time end-to-end
                    traceability of genuine products. The TnT further deploys
                    advanced data analytics tools to process the extensive data it
                    collects, offering deeper insights and control
                  </p>
                  <div className="flex items-center mt-2">
                    <HyperLink
                      link="Learn More"
                      href="/"
                      className="text-[#000000bf] after:bg-[#000000bf]"
                    />
                    <LucideChevronRight size={18}/>
                  </div>
                </div>
              }
            />
          }
        />
        <p className="text-center font-semibold">The ECOCAN TnT is powered by our proprietary EcocanApp,<br/> ECOCAN Security codes, and the ECOCAN DRS</p>
    </>
  );
}
