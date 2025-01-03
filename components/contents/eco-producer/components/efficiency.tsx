import HyperLink from "@/components/shared/hyperlink/hyperlink";
import FeaturesGrid from "@/components/shared/text-with-cards/custom-card";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import React from "react";

const producerFeatures = [
  {
    id: 1,
    name: <p className="text-white">Reverse Logistics</p>,
    question: (
      <p className="text-white">
        We collect empties from a vast network of ECO-Stations. Where you also
        distribute your products for sale.
      </p>
    ),
    answer: (
      <div className="text-white space-y-4">
        <p>
          Why then not integrate our operations to harness tech-enabled reverse
          logistics? Hence eliminate duplicity of roles, cut costs & CO2e, and
          maximise our productivity?
        </p>
        <p>
          Our Just-In-Time pick-up functionality can as well streamline your
          distribution. And the TnT will offer real-time circulation visibility.
        </p>
        <p>
          Enhancing both our market intelligence, and fight against counterfeits
          & diversion
        </p>
      </div>
    ),
    icon: "/assets/images/producer/reverse-logistics.svg",
    bgImg: "bg-[url('/assets/images/producer/logistics-bg.png')]",
  },
  {
    id: 2,
    name: <p className="text-white">Electric Mobility</p>,
    question: (
      <>
        <p className="text-white">
          Environmental sustainability & Resource efficiency form the pulse of
          our heartbeat.
        </p>
      </>
    ),
    answer: (
      <div className="text-white space-y-4">
        <p>
          Thus, mitigating GHG emissions, minimising energy consumption, and
          cutting costs are our C.O.R.E
        </p>
        <p>
          To achieve this, we&apos;ve embraced e-mobility in our operations. And
          deploy AI to optimise our logistics routes. That we elevate Energy
          efficiency and enhance our output.
        </p>
        <p>With your reverse logistics partnership, we can do more!</p>
      </div>
    ),
    icon: "/assets/images/producer/mobility.svg",
    bgImg: "bg-[url('/assets/images/producer/mobility-bg.png')]",
  },
  {
    id: 3,
    name: <p className="text-white">Online Purchases</p>,
    question: (
      <p className="text-white">
        We live in a world of Super Convenience, where almost everything happens
        at the tap of a button. With our robust tech suite, we&apos;ll help you
        make the most of this.
      </p>
    ),
    answer: (
      <div className="text-white space-y-4">
        <p>
          And maximise your Allocative efficiency by Integrating your online
          commerce platforms with the ECOCAN Market. And order deliveries with
          our logistics network.
        </p>
        <p>
          Leverage targeted marketing to create personalised consumer
          experiences. And our Loyalty, Recycling & VIP programs to promote
          lasting conversions
        </p>
      </div>
    ),
    icon: "/assets/images/producer/online-purchases.svg",
    bgImg: "bg-[url('/assets/images/producer/online-puchase-bg.png')]",
  },
];

export default function Efficiency() {
  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0 py-8 lg:pb-24">
      <TextWithCards
        title="Re-imagined efficiency"
        description={
          <p className="w-4/5">
            Our vision of re-imagining sustainability for the better, centres on
            elevating Operational, Economic and Resource efficiency. Together,
            we can amplify this through meaningful partnerships.
          </p>
        }
        customCard={
          <FeaturesGrid
            features={producerFeatures}
            gap="gap-4"
            className="h-[28rem] lg:h-[33.25rem] xl:h-[41.25rem] bg-cover p-4 flex flex-col justify-end after:absolute after:inset-0 after:content-[''] after:bg-black/40 after:opacity-70 after:z-10 overflow-hidden bg-[position:-150px_0px] hover:bg-[position:-400px_0px] transition-all duration-1000"
          />
        }
      />
    </div>
  );
}
