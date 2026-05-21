import TextWithComponent from "@/components/contents/consumer/components/text-with-component"
import HyperLink from "@/components/shared/hyperlink/hyperlink"
import React from "react"
import SecurityAccordion from "./security-accordion"

export default function Security() {
  return (
    <div className="lg:pb-24">
      <div className="relative z-[999] mx-auto max-w-[72rem] px-4 xl:px-0">
        <TextWithComponent
          title={<span className="text-4xl">2. Security and technical efficiency</span>}
          description={
            <p className="lg:w-4/5">
              The anti-fraud <HyperLink href="/solutions/brand-protection#tnt" link="TnT" /> secures
              every return event with reliable traceability. This helps shoppers trust reward
              payouts, while reducing counterfeit-linked abuse in local recycling flows.
            </p>
          }
        />
        <SecurityAccordion />
      </div>
    </div>
  )
}
