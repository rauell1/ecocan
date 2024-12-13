import HyperLink from "@/components/shared/hyperlink/hyperlink";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import React from "react";

export default function WhoWeAre() {
  return (
    <TextWithCards
      title="Who Are We?"
      subtitle={
        <p
          className={`bg-gradient-to-tr from-[#4AC63F] via-[#228B22] to-[#FFDD4C] text-transparent bg-clip-text text-3xl`}
        >
          We are catalysts of positive change
        </p>
      }
      description={
        <div className="mt-4 text-[#23262fcc] w-4/5 space-y-4">
          <p>
            Re-imagining sustainability for the better. Through our green-tech
            platform for comprehensive management of beverage products. That
            empowers and connects consumers, retailers, producers and recyclers,
            for sustainable commerce. This dynamic offering is powered by the{" "}
            <HyperLink link="ECOCAN TnT:" href="/" /> a revolutionary technology
            leveraging IoT, Blockchain, and AI. To enable reliable product
            authentication before purchase, facilitate elaborate empties
            recycling after consumption, and offer comprehensive insights and
            deep market intelligence. Giving stakeholders greater and
            unparalleled control.
          </p>
          <p>
            At the core of the TnT is our smart{" "}
            <HyperLink link="EcocanApp" href="/" />, robust , robust{" "}
            <HyperLink link="ECOCAN security codes" href="/" />, and the
            intricate <HyperLink link="ECOCAN DRS" href="/" />
          </p>
        </div>
      }
    />
  );
}
