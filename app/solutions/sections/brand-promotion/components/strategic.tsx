import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";

export default function Strategic() {
  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
      <ImageAndItem
        className="items-center gap-12"
        image={
          <Image
            src="/assets/images/solutions/strategic.svg"
            alt="male office guy"
            width={500}
            height={100}
          />
        }
        item={
          <div className="w-11/12">
            <TextWithComponent
              title="Strategic Approach"
              description="One size might fit all in fashion, but rarely in marketing! Luckily, ECOCAN--™s dynamic approach enables you to tailor your outreach 
to specific audiences based on Demographic, Geography, Psychographics, and Context. Empowering you to adapt to their preferences, evolve with their needs, and change with the market"
            />
          </div>
        }
      />
    </div>
  );
}
