import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import CheckList from "@/components/contents/consumer/components/checklist";
import ImageTextOverlay from "@/components/contents/courier/components/imageText";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import React from "react";

const steps = [
    {
      id: 1,
      step: <div className="font-light">The value of illicit trade is estimated at USD 8 Billion, with 60% of total alcohol sales being illicit! </div>,
    },
    {
      id: 2,
      step: <div className="font-light">To sell on ECOCAN Market</div>,
    },
    {
      id: 3,
      step: <div className="font-light">To list your drinks on ECOCAN Market</div>,
    },
  ];


export default function GlobalCountryExample() {
  return (
    <div className="flex gap-12 max-w-[69.375rem]">
      <div className="w-3/5">
        <Card className="bg-[#F6C92D] p-6 h-[26.25rem] rounded-2xl border-none">
          <CardHeader className="px-0 text-xl font-semibold">Global</CardHeader>
          <CardDescription className="text-white font-light text-base">
            The annual global value of counterfeit and pirated goods is
            estimated at USD 2.8 trillion. Beyond the obvious health and safety
            risks, this leads to the loss of over USD 270 billion in tax revenue
            annually, and 5.5 million legitimate jobs are lost each year{" "}
          </CardDescription>
        </Card>
      </div>
      <ImageTextOverlay
        item={
          <div>
            <TextWithCards
              className="text-white w-full"
              title="In Kenya for example:"
              description={<><CheckList items={steps} className="items-center"/></>}
            />
          </div>
        }
        className="bg-[url('/assets/images/solutions/bottles-in-bucket.png')] flex items-center after:bg-black/60"
      />
    </div>
  );
}
