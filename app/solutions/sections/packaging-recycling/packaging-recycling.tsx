import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import { ItemList } from "@/components/contents/courier/components/ItemList";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import StyledText from "@/components/shared/styled-text";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import { alphaMale, beachBottleTall, ecostation } from "@/lib/imageIndex";
import Image from "next/image";
import React from "react";
import HowItWorks from "./components/how-it-works";
import Cooperation from "./components/cooperation";
import FunFacts from "./components/fun-facts";

const howToData = [
  {
    id: 1,
    title: "You’ll be helping reduce packaging litter in the environment",
  },
  {
    id: 2,
    title:
      "Combat illicit trade by depriving counterfeit criminals of their primary source of packaging",
  },
  {
    id: 3,
    title:
      "And increasing the usefulness of used packaging which are recycled to make new bottles ",
  },
  {
    id: 4,
    title:
      "Therefore, reducing CO2e emissions, significantly curbing global warming and climate change",
  },
  {
    id: 5,
    title:
      "And we will make sure your recycling experience is most convenient, and pleasantly unforgettable.",
  },
];

export default function PackagingRecycling() {
  return (
    <div className="space-y-24">
      <TextWithComponent
        title="Packaging Recycling"
        description={
          <div className="w-[81%] space-y-4">
            <p>
              ECOCAN D.R.S is a circular economy platform, which streamlines the
              extensive collection and recycling of{" "}
              <HyperLink link="genuine eligible empties" href="/" />. And
              ensures participants make money for taking part
            </p>
            <p>
              This is achieved by creating a marketplace for used empties, by
              conveniently connecting ECO-Producers and ECO-Recyclers seeking to
              ‘buy’ empties for reuse or recycling, with ECOnsumers who have the
              empties but lack access to the market
            </p>
          </div>
        }
      />
      <HowItWorks/>
      {/* recycling is cooperation */}
     <Cooperation/>
      {/* small deeds */}
      <ImageAndItem
      className="md:flex-row-reverse items-center"
        item={
          <TextWithComponent
            title="Small deeds, with BIG impacts"
            description="Whether your motivation for returning empties is to earn money, or because you are ecologically conscious:"
            component={howToData.map((data) => {
              return <ItemList id={data.id} title={data.title} key={data.id} />;
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
      <FunFacts/>
    </div>
  );
}
