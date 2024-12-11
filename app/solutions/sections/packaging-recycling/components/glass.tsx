import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
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
    imagePath: "bg-[url('/assets/images/solutions/energy-saving.svg')]",
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
    imagePath: "bg-[url('/assets/images/solutions/zero-waste.svg')]",
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
    imagePath: "bg-[url('/assets/images/solutions/recycling.svg')]",
  },
];

export default function Glass() {
  return (
    <div>
      <ImageAndItem
        className="gap-12"
        image={
          <div className="space-y-6 border h-[40rem] p-4 rounded-3xl bg-[#D9D9D9] flex flex-col justify-end bg-[url('/assets/images/solutions/aluminium-cans-green.svg')] bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/30 after:opacity-70 after:z-10 overflow-hidden">
            <TextWithComponent
              className="bg-[#29292945] backdrop-blur-[2px] rounded-xl overflow-hidden p-3 relative z-[999] text-white"
              title="Did You Know?"
              description={
                <p className="text-white">
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
                    className={`rounded-2xl flex flex-col justify-end p-3 ${fact.imagePath} bg-cover bg-center`}
                  >
                    <TextWithComponent
                      className="p-3 text-white bg-[#29292945] backdrop-blur-[2px] rounded-2xl"
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
