import HyperLink from "@/components/shared/hyperlink/hyperlink"
import Timeline from "@/components/shared/timeline"
import React from "react"

const timelineData = {
  title: "Returning eligible empties",
  subtitle: (
    <div className="md:w-11/12">
      Return empties of{" "}
      <span className="font-medium">
        Aluminium cans, PET plastics, Glass bottles and beverage Cartons{" "}
      </span>
      carrying ECOCAN Security codes listed on the ECOCAN Market.{" "}
      <HyperLink link="See the current Kenya list" href="/ecocan-market#product-list" />
    </div>
  ),
  items: [
    {
      image: "/assets/images/consumer/verify.svg",
      title: "Verify eligibility",
      description:
        "The empties should be intact, not compacted nor deformed. And with ECOCAN security codes clearly visible & readable. Verify them by scanning with EcocanApp",
    },
    {
      image: "/assets/images/consumer/egents.svg",
      title: "Return to ECO-Station agents",
      description: (
        <>
          They verify your ECOCAN ID before accepting empties, then transfer the refundable deposit
          to your ECO-wallet. Find your nearest{" "}
          <HyperLink href="/contact" link="ECO-Station support team here" />.
        </>
      ),
    },
    {
      image: "/assets/images/consumer/recycle.svg",
      title: "Or recycle via ECOCANs",
      description:
        "Show your ECOCAN ID to the scanners located at the front of the devise, place your empties into the infeed, then complete the session. And you’ll immediately receive applicable deposit money directly into your ECO-wallet",
    },
    {
      image: "/assets/images/consumer/how.svg",
      title: "SO how does this green-tech ECO-system really work?",
      description: <HyperLink href="/solutions/packaging-recycling" link="Learn more" />,
    },
  ],
}

export default function ReturnEmpties() {
  return (
    <div className="relative bg-[#2F313F] py-8 text-white lg:py-24">
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
        <path fill="#F3F3F6" fillOpacity="1" d="M0,80L1440,0L1440,340L0,340Z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 120"
        className="absolute bottom-0 z-50 hidden md:block lg:hidden"
      >
        <path fill="#F3F3F6" fillOpacity="1" d="M0,100L600,0L600,600L0,600Z"></path>
      </svg>
    </div>
  )
}
