import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import { ItemList } from "@/components/contents/courier/components/ItemList";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";

const howToData = [
  {
    id: 1,
    title: "You’re also contributing to the fight against diseases, health hazards and safety risks associated with mismanaged post-consumer waste",
  },
  {
    id: 2,
    title:
      "You’re helping combat illicit trade by depriving counterfeit criminals of genuine used packaging",
  },
  {
    id: 3,
    title:
      "You’re optimising the usefulness of empties which are recycled into new bottles, hence reducing CO2e, and reliance on virgin materials",
  },
  {
    id: 4,
    title:
      "And ECOCAN will ensure that your recycling experience is most rewarding, convenient, and pleasantly unforgettable",
  },
];

export default function SmallDeeds() {
  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
      <ImageAndItem
        className="items-center gap-12"
        item={
          <TextWithComponent
            title={<div>Small deeds, <br/>with BIG impacts</div>}
            description="Whether your motivation for recycling is to protect the planet or to earn deposit money:"
            component={howToData.map((data) => {
              return <ItemList id={data.id} description={data.title} key={data.id} />;
            })}
          />
        }
        image={
          <Image
            src="/assets/images/solutions/small-deeds.svg"
            alt="eco station"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        }
      />
    </div>
  );
}
