import HyperLink from "@/components/shared/hyperlink/hyperlink";
import Timeline from "@/components/shared/timeline";
import React from "react";

const timelineData = {
  title: "How to return eligible empties",
  subtitle: (
    <div className="md:w-11/12">
      Only return empties of Aluminium cans, PET, Glass bottles and beverage
      cartons carrying ECOCAN Security codes. And are published on the ECOCAN
      website, and ECO-products section of EcocanApp.{" "}
      <HyperLink link="See list here" href="/" />
    </div>
  ),
  items: [
    {
      image: "/assets/images/consumer/verify.svg",
      title: "Verify eligibility",
      description:
        "The empties should be intact, not compacted nor deformed. And with ECOCAN security codes clearly visible. Authenticate them by scanning the attached codes",
    },
    {
      image: "/assets/images/consumer/egents.svg",
      title: "Return to Egents",
      description:
        "Then use ECOCAN Map to find the nearest ECO-Station, where Egents will verify your empties and digitally transfer the deposit into your ECO-Wallet. That you can spend as you please",
    },
    {
      image: "/assets/images/consumer/recycle.svg",
      title: "Or recycle via ECOCANs",
      description:
        "Scan your ECOCAN ID to the RVM, place your empties into the infeed, then complete the session. And you’ll immediately receive applicable deposits directly into your ECO-wallet",
    },
    {
      image: "/assets/images/consumer/how.svg",
      title: "SO how does this green-tech ECO-system really work?",
      description: <HyperLink href="/solutions/packaging-recycling" link="Learn more"/>
    },
  ],
};

export default function ReturnEmpties() {
  return (
    <div className="lg:py-24 py-8 bg-[#2F313F] text-white relative">
      <Timeline
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
              fill="#F3F3F6"
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
              fill="#F3F3F6"
              fill-opacity="1"
              d="M0,100L600,0L600,600L0,600Z"
            ></path>
          </svg>
    </div>
  );
}
