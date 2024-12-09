import CustomCard from "@/components/shared/text-with-cards/custom-card";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import React from "react";
import featureData from "./featureData";

export default function CatchTheWave() {
  return (
    <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
      <TextWithCards
        title="Catch the Wave"
        description={
          <>
            Seamlessly blend our cutting-edge green technology with your bomb
            creativity, for a recommendable
            <br /> fan cocktail. And a BIG win for the environment
          </>
        }
        customCard={
          <CustomCard
            features={featureData}
            className="bg-[#F3F3F6]"
            gap="gap-4"
          />
        }
      />
    </div>
  );
}
