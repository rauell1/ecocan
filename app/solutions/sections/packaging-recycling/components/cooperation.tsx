import Timeline from "@/components/shared/timeline";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const timelineData = {
  title: <div className="text-white">Recycling is cooperation</div>,
  subtitle: (
    <p className="font-light text-secondary">
      We all have a role to play in the ECO-system:
    </p>
  ),
  items: [
    {
      image: "/assets/images/solutions/cooperation-1.svg",
      title: "System Administration",
      description:
        "ECOCAN sets up the D.R.S and provides needed technology to administer the entire ECO-system. This green-tech platform brings together all actors across the packaging value chain, fostering ECO-friendly production, sustainable commerce, and responsible consumption",
    },
    {
      image: "/assets/images/solutions/cooperation-2.svg",
      title: "Product Eligibility",
      description:
        "ECO-Producers apply worthwhile deposit incentives, that attach extrinsic financial value onto empties that would otherwise be considered waste. This motivates ECOnsumers to return them to ECO-Stations after product consumption. Producers also  print ECOCAN Security codes onto product packaging to safeguard their integrity",
    },
    {
      image: "/assets/images/solutions/cooperation-3.svg",
      title: "Marketplace Activity",
      description:
        "ECOnsumers authenticate eligible products before purchase, thus starve counterfeit criminals of cashflow. And return eligible empties to ECO-Stations for recycling; to reclaim deposit money, preserve the environment, and deprive counterfeiters access to genuine empties. ECOnsumers also prioritise purchase of ECO-products to support sustainable commerce",
    },
    {
      image: "/assets/images/solutions/cooperation-4.svg",
      title: "Empties Recycling",
      description:
        "ECO-Stations accept returned eligible empties, and digitally refund applicable deposit incentives. Subsequently, ECOuriers on E-mobility efficiently handle pick-ups, while ECO-Recyclers process empties into new bottles, completing the closed-loop cycle",
    },
  ],
};

export default function Cooperation() {
  return (
    <div className="bg-[#2F313F] py-8 md:py-24 relative">
      <Timeline
        className="bottom-[22.5%]"
        title={timelineData.title}
        subtitle={timelineData.subtitle}
        items={timelineData.items}
      />
      {timelineData.items.map((item, index) => (
        <div key={index} className="mx-4 md:hidden">
          <div className="overflow-hidden rounded-smooth-lg">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full lg:h-72 object-cover"
              width={100}
              height={100}
            />
          </div>
          <div className="py-4">
            <h3 className="font-bold text-xl mb-2 text-white">{item.title}</h3>
            <p className="text-secondary font-light">{item.description}</p>
          </div>
        </div>
      ))}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        className="absolute bottom-0 z-50 hidden lg:block"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,80L1440,0L1440,340L0,340Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 120"
        className="absolute bottom-0 z-50 hidden md:block lg:hidden"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,100L600,0L600,600L0,600Z"
        ></path>
      </svg>
    </div>
  );
}
