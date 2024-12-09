import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

const factData = [
  {
    title: <h1 className="text-lg">Energy Saver</h1>,
    description: (
      <p className="text-sm">
        Recycling just one aluminum can saves up to 95% of the energy needed to
        make a new one. In fact, the energy saved could power your TV for three
        whole days!
      </p>
    ),
    imagePath: "/assets/images/solutions/energy-saver.svg",
  },
  {
    title: <h1 className="text-lg">Zero Waste, Full Impact</h1>,
    description: (
      <p className="text-sm">
        100% of collected aluminum cans can be used to make new ones, with zero
        waste. Incredible, right? So, return your used cans to the nearest
        ECO-station for recycling!
      </p>
    ),
    imagePath: "/assets/images/solutions/zero-waste.svg",
  },
  {
    title: <h1 className="text-lg">The Recycling Journey</h1>,
    description: (
      <p className="text-sm">
        ECO-couriers pick up your cans and deliver them to ECO-recyclers, who
        smelt them into ingots. These ingots are pressed into thin sheets to
        make new cans, ensuring your next Eco-product arrives in a fully
        recycled, eco-friendly container.
      </p>
    ),
    imagePath: "/assets/images/solutions/recycling.svg",
  },
];

export default function FunFacts() {
  return (
    <ImageAndItem
      className="gap-12"
      image={
        <div className="space-y-6">
          <Image
            src="/assets/images/solutions/woman-courier.svg"
            alt="woman courier"
            width={500}
            height={100}
            className="w-full"
          />
          <TextWithComponent
            title="Did You Know?"
            description="Used aluminum cans are some of the most valuable scrap materials in the world, and they can be recycled indefinitely without losing their value—yes, forever!"
          />
          <div className="flex justify-between">
            <Badge className="bg-[#ffde4c34] hover:bg-[#ffde4c34] text-[#FFDD4C]">
              Zero Waste Recycling
            </Badge>
            <Badge className="bg-[#4AC63F34] hover:bg-[#4AC63F34] text-primary">
              Eco-Friendly Packaging
            </Badge>
            <Badge className="bg-[#D9D9D9] text-accent hover:bg-[#D9D9D9]">
              Closed-Loop Sustainability
            </Badge>
          </div>
        </div>
      }
      item={
        <>
          {factData.map((fact, index) => {
            return (
              <ImageAndItem
                className="gap-6"
                key={index}
                image={
                  <Image
                    src={fact.imagePath}
                    alt="ecocan"
                    width={500}
                    height={100}
                  />
                }
                item={
                  <TextWithComponent
                    title={fact.title}
                    description={fact.description}
                  />
                }
              />
            );
          })}
        </>
      }
    />
  );
}
