import HyperLink from "@/components/shared/hyperlink/hyperlink";
import Timeline from "@/components/shared/timeline";
import React from "react";

const timelineData = {
  title: "Recycling is cooperation",
  subtitle: (
    <p className="font-light">We all have a role to play in the ECOmmunity:</p>
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
    <Timeline
      className="bottom-[22.5%]"
      title={timelineData.title}
      subtitle={timelineData.subtitle}
      items={timelineData.items}
    />
  );
}
