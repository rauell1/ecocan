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
      <p className="font-normal text-[#42526B]">
        are consumed <span className="font-medium">every second</span> globally, but <span className="font-medium">86%</span> of used bottles are{" "}
        <span className="lowercase">
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
      <p className="font-normal text-[#42526B] lowercase">
        are used <span className="font-medium">every hour</span> worldwide, BUT <span className="font-semibold">80%</span> of empties are mismanaged; lack OF will TO RECYCLE Majorly contributes to this 
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
      <p className="font-normal text-[#42526B]">
        are consumed <span className="font-medium">everyday</span> but <span className="font-medium">30%</span> of empties are mismanaged;{" "}
        <span className="lowercase">INADEQUATE RECYCLING SYSTEMS</span> fuel
        this problem
      </p>
    ),
    icon: "/assets/images/solutions/aluminum.svg",
  },
];

export default function Heading() {
  return (
    <div className="bg-[#F6F6F6] pb-8 lg:py-24">
      <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
        <TextWithComponent
          title="Re-imagined Recycling"
          component={
            <div className="space-y-8">
              <FeaturesGrid
                features={consumerFeatures}
                gap="gap-4"
                className="bg-center p-4 flex flex-col justify-end overflow-hidden bg-white"
              />
              <div className="space-y-4 lg:w-5/6 text-[#888D92] lg:text-xl font-light">
                <p>
                  <span className="text-[#228B22]">ECOCAN D.R.S</span> is the <span className="font-medium">first fully digital DRS worldwide</span>, which
                  supports incentivised collection & closed-loop recycling of
                  genuine eligible empties. And ensures participants directly
                  benefit for taking part.
                </p>
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
    </div>
  );
}
