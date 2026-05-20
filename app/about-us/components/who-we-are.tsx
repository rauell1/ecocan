import HyperLink from "@/components/shared/hyperlink/hyperlink"
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards"
import React from "react"

export default function WhoWeAre() {
  return (
    <TextWithCards
      title="Who Are We?"
      subtitle={
        <p
          className={`bg-gradient-to-tr from-[#4AC63F] via-[#228B22] to-[#FFDD4C] bg-clip-text text-3xl text-transparent`}
        >
          We are catalysts of positive change
        </p>
      }
      description={
        <div className="mt-4 space-y-4 text-[#23262fcc] lg:w-11/12">
          <p>
            We are building a consumer-first recycling ecosystem for Kenya. Our green-tech platform
            helps shoppers verify genuine drinks before purchase, then return empties after
            consumption for rewards. It also connects ECO-Stations, retailers, producers, couriers,
            and recyclers for practical circular commerce.
          </p>
          <p>
            At the core is the block-chain compatible{" "}
            <HyperLink link="ECOCAN TnT" href="/solutions/brand-protection#tnt" />, plus our smart{" "}
            <HyperLink link="EcocanApp" href="/solutions/brand-protection#ecocan-app" />, robust{" "}
            <HyperLink
              link="ECOCAN security codes"
              href="/solutions/brand-protection#security-codes"
            />
            , and the intricate{" "}
            <HyperLink link="ECOCAN DRS" href="/solutions/packaging-recycling" />
          </p>
        </div>
      }
    />
  )
}
