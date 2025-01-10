import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import React from "react";

const factData = [
  {
    title: <h1 className="text-lg">Energy Saver</h1>,
    description: (
      <p className="text-sm lg:w-10/12">
        And recycling just one aluminium can saves up to 95% of the energy
        needed to make a new can. In fact, the energy saved can power your TV
        for three (3) whole hours!
      </p>
    ),
    imagePath: "bg-[url('/assets/images/solutions/energy-saving.svg')]",
  },
  {
    title: <h1 className="text-lg">Zero Waste, Full Impact</h1>,
    description: (
      <p className="text-sm lg:w-10/12">
        100% of used aluminium cans can be recycled to make new ones, with zero
        waste! Incredible, right? So, return your used cans to the nearest
        ECO-Station for recycling!
      </p>
    ),
    imagePath: "bg-[url('/assets/images/solutions/zero-waste.png')]",
  },
  {
    title: <h1 className="text-lg">The Recycling Journey</h1>,
    description: (
      <p className="text-sm lg:w-10/12">
        ECOuriers pick up your cans and deliver them to ECO-Recyclers, who smelt
        them into ingots. These ingots are then pressed into thin sheets that
        are moulded into new cans, ensuring your next drink arrives in a fully
        recycled, <span className="text-primary">ECO</span>-friendly{" "}
        <span className="text-primary">can</span>, facilitated by{" "}
        <span className="text-primary">ECOCAN</span>.
      </p>
    ),
    imagePath: "bg-[url('/assets/images/solutions/recycling-journey.svg')]",
  },
];

export default function Aluminium() {
  return (
    <div>
      <ImageAndItem
        className="lg:gap-4 xl:gap-12"
        image={
          <div className="space-y-6 border lg:h-[34.375rem] xl:h-[40rem] p-4 rounded-3xl bg-[#D9D9D9] flex flex-col justify-end bg-[url('/assets/images/solutions/aluminium-cans-green.svg')] bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/30 after:opacity-70 after:z-10 overflow-hidden">
            <TextWithComponent
              className="bg-[#29292945] backdrop-blur-[2px] rounded-smooth overflow-hidden p-3 relative z-[999] text-white"
              title={<span className="text-3xl">Did You Know?</span>}
              description={
                <p className="text-white text-base">
                  That used aluminium cans are some of the most valuable scrap
                  materials in the whole world? And that they can be recycled
                  indefinitely without losing material value—yes, recycled
                  forever!
                </p>
              }
            />
          </div>
        }
        item={
          <>
            <div className="h-full grid gap-6">
              {factData.map((fact, index) => {
                return (
                  <div
                    key={index}
                    className={`rounded-smooth-lg flex flex-col justify-end p-3 ${fact.imagePath} bg-cover bg-center`}
                  >
                    <TextWithComponent
                      className="p-3 text-white bg-[#29292945] backdrop-blur-[1px] rounded-2xl"
                      title={fact.title}
                      description={
                        <span className="text-white">{fact.description}</span>
                      }
                    />
                  </div>
                );
              })}
            </div>
          </>
        }
      />
    </div>
  );
}
