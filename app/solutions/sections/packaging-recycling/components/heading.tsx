import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import FeaturesGrid from "@/components/shared/text-with-cards/custom-card";
import TickerCounter from "@/components/ui/ticker-counter";
import React from "react";

const consumerFeatures = [
  {
    id: 1,
    name: (
      <>
        <TickerCounter value={17000} label="PET bottles" />
      </>
    ),
    question: (
      <p className="font-normal text-secondary">
        are consumed every second globally, but 86% of used bottles are{" "}
        <span className="font-semibold">
          CARELESSLY LITTERED, DUMPED, OR BURNT IN OPEN AIR!
        </span>
      </p>
    ),
    icon: "/assets/images/solutions/pet-bottle.svg",
  },
  {
    id: 2,
    name: (
      <>
        <TickerCounter value={85000} label="Glass bottles" />
      </>
    ),
    question: (
      <p className="font-normal text-secondary">
        are used every hour, but 80% of empties are mismanaged; lack OF{" "}
        <span className="font-semibold">
          WILL TO RECYCLE PLAYS A MAJOR ROLE TO THIS CRISIS
        </span>
      </p>
    ),
    icon: "/assets/images/solutions/glass-bottle.svg",
  },
  {
    id: 3,
    name: (
      <>
        <TickerCounter value={40000} label="Aluminium bottles" />
      </>
    ),
    question: (
      <p className="font-normal text-secondary lg:w-11/12">
        are consumed everyday but 30% OF empties are mismanaged;{" "}
        <span className="font-semibold">INADEQUATE RECYCLING SYSTEMS</span> fuel
        this problem
      </p>
    ),
    icon: "/assets/images/solutions/aluminum.svg",
  },
];

export default function Heading() {
  return (
    <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
      <TextWithComponent
        title="Re-imagined Recycling"
        component={
          <div className="space-y-8">
            <FeaturesGrid
              features={consumerFeatures}
              gap="gap-4"
              className="bg-center p-4 flex flex-col justify-end overflow-hidden bg-[#F6F6F6]"
            />
            <div className="space-y-4 w-4/5 text-[#888D92]">
              <div>
                <HyperLink href="/" link="ECOCAN D.R.S"/> is the first fully digital DRS worldwide, which
                supports incentivised collection & closed-loop recycling of
                genuine eligible empties. And ensures participants directly
                benefit for taking part.
              </div>
              <p>
                This is achieved by creating a marketplace for used empties,
                conveniently connecting ECO-Producers and ECO-Recyclers seeking
                to buy back post-consumer empties for reuse or recycling, with
                ECOnsumers who are in possession of the empties, but lack access
                to the market
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
}
