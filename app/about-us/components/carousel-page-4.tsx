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
        We only have one planet, and every action we take today affects our tomorrow
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
        In every way, and all forms. Embracing inclusively, safeguarding broadly, while uplifting holistically 
      </div>
    ),
  },
  {
    id: "item-3",
    question: (
      <div className="text-white">
        Support communities
      </div>
    ),
    answer: (
      <div className="">
        By empowering generations, building trust, igniting hope, and fostering possibilities
      </div>
    ),
  },
  {
    id: "item-4",
    question: (
      <div className="text-white">
        And promote sustainability
      </div>
    ),
    answer: (
      <div className="">
        Optimising the value we derive from natural resources, enhancing operational productivity, while supporting sustainable commerce. 
      </div>
    ),
  },
];

export default function CarouselPage4() {
  return (
    <div className="min-h-screen bg-[#2F313F]">
      <div className="max-w-[72rem] mx-auto min-h-screen flex items-center">
        <div className="px-4 xl:px-0 py-24 space-y-12 z-[999]">
          <ImageAndItem
            title={
              <h2
                className={`bg-gradient-to-r my-2 from-[#228B22] via-[#FFDD4CCF] to-[#FFDD4C] text-transparent bg-clip-text font-semibold text-3xl xl:text-5xl`}
              >
                We&apos;re on a mission
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
