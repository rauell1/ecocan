import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import { ReusableAccordion } from "@/components/shared/accordion";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";

const accordionItems = [
  {
    id: "item-1",
    question: (
      <div className="text-white">
        To protect our planet
      </div>
    ),
    answer: (
      <div className="">
        Unlock the digital power of your packaging, by transforming them from traditional physical assets, into digitally connected resources, for direct engagement with consumers.
      </div>
    ),
  },
  {
    id: "item-2",
    question: (
      <div className="text-white">
        Preserve life
      </div>
    ),
    answer: (
      <div className="">
        We&apos;ll instantly alert you every time a customer engages with your products, detailing exactly when and where it happens. Plus, with advanced data analytics tools, the TnT will generate dynamic performance reports on all interactions. You can then use these insights to take your business to the next level.
      </div>
    ),
  },
  {
    id: "item-3",
    question: (
      <div className="text-white">
        And support communities
      </div>
    ),
    answer: (
      <div className="">
        ECOnsumers tell us about what they like, why they like it, what they want more of, and where and when they engage. This lets us deliver personalized advertising tailored to their exact preferences..
      </div>
    ),
  },
  {
    id: "item-4",
    question: (
      <div className="text-white">
        While promoting economic sustainability
      </div>
    ),
    answer: (
      <div className="">
        We enhance the resource efficiency of product packaging; by optimising its value. And facilitate reclamation of lost market shares, plus acquisition of new markets
      </div>
    ),
  },
];

export default function CarouselPage3() {
  return (
    <div className="min-h-screen bg-[#2F313F]">
      <div className="max-w-[72rem] mx-auto min-h-screen flex items-center">
        <div className="px-4 xl:px-0 py-24 space-y-12 z-[999]">
          <ImageAndItem
            title={
              <h2
                className={`bg-gradient-to-r my-2 from-[#228B22] via-[#FFDD4CCF] to-[#FFDD4C] text-transparent bg-clip-text font-semibold text-3xl`}
              >
                COmmitted to a  mission
              </h2>
            }
            className="gap-12 items-center"
            image={
              <Image
                src="/assets/images/about/board-char.svg"
                alt="community of people on ground"
                width={540}
                height={540}
                priority
              />
            }
            item={
              <TextWithComponent
                description={<ReusableAccordion items={accordionItems} />}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
