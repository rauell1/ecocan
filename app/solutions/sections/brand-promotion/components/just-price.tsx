import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import React from "react";
import JustPriceCards from "./just-price-cards";

export default function JustPrice() {
  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
      <TextWithComponent
        title={
          <div className="text-center lg:w-3/5 mx-auto">
            ECOnsumers care more than just the price
          </div>
        }
        description={<div className="text-center">They want to know:</div>}
        component={<JustPriceCards/>}
      />
    </div>
  );
}
