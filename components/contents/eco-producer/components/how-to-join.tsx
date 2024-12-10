import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";
import { ItemList } from "../../courier/components/ItemList";
import HyperLink from "@/components/shared/hyperlink/hyperlink";

const howToData = [
  {
    id: 1,
    icon: (
      <Image
        src="/assets/images/producer/one.png"
        width={23}
        height={23}
        alt="icon"
      />
    ),
    title: (
      <div>
        <HyperLink link="Register Here" href="/" /> and we&apos;ll revert ASAP
      </div>
    ),
    description: (
      <p className="text-sm mt-2 text-[#888D92]">
        With onboarding consultation, and walk through the <br/>
        legalities together
      </p>
    ),
  },
  {
    id: 2,
    icon: (
      <Image
        src="/assets/images/producer/two.png"
        width={23}
        height={23}
        alt="icon"
      />
    ),
    title: "After onboarding, we'll tailor our systems for you",
    description: (
      <p className="text-sm mt-2 text-[#888D92]">
       By customising Security codes for your brands, and set up TnT 
        <br/> and DRS profiles for your organisation
      </p>
    ),
  },
  {
    id: 3,
    icon: (
      <Image
        src="/assets/images/producer/three.png"
        width={23}
        height={23}
        alt="icon"
      />
    ),
    title: "Then digitally deliver the codes  to your printers",
    description: (
      <p className="text-sm mt-2 text-[#888D92]">
        For seamless printing onto your packaging using existing printing
        technology; no customisation needed
      </p>
    ),
  },
  {
    id: 4,
    icon: (
      <Image
        src="/assets/images/producer/four.png"
        width={23}
        height={23}
        alt="icon"
      />
    ),
    title: "And you are good to go!",
    description: (
      <p className="text-sm mt-2 text-[#888D92]">
        Sit back and let the TnT & DRS handle the rest; protecting your <br/>
        brand, enhancing efficiency, and promoting sustainability
      </p>
    ),
  },
];

export default function HowToJoin() {
  return (
    <div>
      <ImageAndItem
        className="items-center gap-6"
        image={
          <Image
            src="/assets/images/producer/ecommunity-two.svg"
            alt="buy online with ecocan"
            width={500}
            height={100}
          />
        }
        item={
          <div className="space-y-6">
            <h2 className="font-semibold text-3xl">
              How to join the ECOmmunity
            </h2>
            <p className="text-[#888D92]">It&apos;s easy like Sunday morning</p>
            {howToData.map((data) => (
              <ItemList
                key={data.id}
                title={data.title}
                description={data.description}
                id={data.id}
              />
            ))}
          </div>
        }
      />
    </div>
  );
}
