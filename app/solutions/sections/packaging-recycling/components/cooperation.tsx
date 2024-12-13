import Timeline from "@/components/shared/timeline";
import React from "react";

const timelineData = {
  title: <div className="text-white">Recycling is cooperation</div>,
  subtitle: (
    <p className="font-light text-white">
      We all have a role to play in the ECOmmunity:
    </p>
  ),
  items: [
    {
      image: "/assets/images/solutions/cooperation-1.svg",
      title: "System Administration",
      description:
        "ECOCAN sets up the ECO-system, and develops the technology to administer the Deposit Refund System, ECOCAN Market and for Brand protection",
    },
    {
      image: "/assets/images/solutions/cooperation-2.svg",
      title: "Product Eligibility",
      description:
        "ECO-Producers apply the requisite deposit incentive to encourage empties collection, and print ECOCAN Security Codes onto product packaging to safeguard their integrity",
    },
    {
      image: "/assets/images/solutions/cooperation-3.svg",
      title: "Marketplace Activity",
      description:
        "ECOnsumers authenticate products before purchase by scanning ECOCAN Security codes. And return eligible empties to ECO-stations for recycling, and  reclaim deposit money",
    },
    {
      image: "/assets/images/solutions/cooperation-4.svg",
      title: "Empties Recycling",
      description:
        "ECO-stations accept eligible empties and issue deposit incentive. ECOuriers then handle deliveries and pick-ups, while ECO-Recyclers process empties, completing the cycle",
    },
  ],
};

export default function Cooperation() {
  return (
    <div className="bg-[#2F313F] py-8 lg:py-24 relative">
      <Timeline
        className="bottom-[22.5%]"
        title={timelineData.title}
        subtitle={timelineData.subtitle}
        items={timelineData.items}
      />
      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="absolute bottom-0 z-50 hidden lg:block"
          >
            <path
              fill="#F6F6F6"
              fill-opacity="1"
              d="M0,80L1440,0L1440,340L0,340Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 120"
            className="absolute bottom-0 z-50 hidden md:block lg:hidden"
          >
            <path
              fill="#F6F6F6"
              fill-opacity="1"
              d="M0,100L600,0L600,600L0,600Z"
            ></path>
          </svg>
    </div>
  );
}
