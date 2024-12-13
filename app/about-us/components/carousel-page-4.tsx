import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import { ReusableAccordion } from "@/components/shared/accordion";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";

const accordionItems = [
  {
    id: "item-1",
    question: "To protect our planet",
    answer:
      "Unlock the digital power of your packaging, by transforming them from traditional physical assets, into digitally connected resources, for direct engagement with consumers.",
  },
  {
    id: "item-2",
    question: "Preserve life",
    answer:
      "We'll instantly alert you every time a customer engages with your products, detailing exactly when and where it happens. Plus, with advanced data analytics tools, the TnT will generate dynamic performance reports on all interactions. You can then use these insights to take your business to the next level.",
  },
  {
    id: "item-3",
    question: "And support communities",
    answer:
      "ECOnsumers tell us about what they like, why they like it, what they want more of, and where and when they engage. This lets us deliver personalized advertising tailored to their exact preferences.",
  },
  {
    id: "item-4",
    question: "While promoting economic sustainability",
    answer:
      "We enhance the resource efficiency of product packaging; by optimising its value. And facilitate reclamation of lost market shares, plus acquisition of new markets",
  },
];

export default function CarouselPage4() {
  return (
    <div className="bg-[url('/assets/images/solutions/about-people-bg.svg')] min-h-screen lg:bg-cover bg-center bg-no-repeat bg-black relative after:absolute after:inset-0 after:content-[''] after:bg-black/70 lg:after:bg-black/20 after:opacity-70 after:z-10">
      <div className="max-w-[69.375rem] mx-auto min-h-screen flex items-center lg:items-end">
        <div className="px-4 xl:px-0 py-24 space-y-12 z-[999]">
         <TextWithComponent
         className="text-white"
          title="That shapes our identity"
          description={
            <div className="text-white lg:text-secondary lg:w-3/5">
              The ability to Re-imagine. Courage to disrupt. Formidable spirit of resilience. And a strong belief in meaningful cooperation. That&apos;s the essence of our DNA. Our <HyperLink href="/" link="SISU!"/> We pledge to uphold this. All the way.
            </div>
          }
         />
        </div>
      </div>
    </div>
  );
}
