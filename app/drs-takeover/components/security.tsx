import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import React from "react";
import SecurityAccordion from "./security-accordion";

export default function Security() {
  return (
    <div className="lg:pb-24">
      <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0 relative z-[999]">
        <TextWithComponent
          title={
            <span className="text-4xl">2. Security and technical efficiency</span>
          }
          description={
            <p className="lg:w-4/5">
              The Anti-fraud <HyperLink href="/" link="TnT"/> safeguards the integrity of ECOcans, combining
              advanced security features with optimized IoT functionality. To
              deliver maximum protection and value.
            </p>
          }
        />
        <SecurityAccordion/>
      </div>
    </div>
  );
}
