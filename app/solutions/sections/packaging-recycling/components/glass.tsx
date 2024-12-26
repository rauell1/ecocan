import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import React from "react";

const factData = [
  {
    title: <h1 className="text-lg">Energy savings</h1>,
    description: (
      <p className="text-sm lg:w-10/12">
        Recycling just <span className="font-bold">one glass bottle</span> saves
        enough energy to power your computer for over{" "}
        <span className="font-bold">30 minutes</span>
      </p>
    ),
    imagePath: "bg-[url('/assets/images/solutions/energy-saving.svg')]",
  },
  {
    title: <h1 className="text-lg">Lowers Carbon Emissions</h1>,
    description: (
      <p className="text-sm lg:w-10/12">
        Recycling a single glass bottle can reduce CO₂ emissions by around{" "}
        <span className="font-bold">0.5 kg</span>
      </p>
    ),
    imagePath: "bg-[url('/assets/images/solutions/zero-waste.svg')]",
  },
  {
    title: <h1 className="text-lg">Health</h1>,
    description: (
      <p className="text-sm lg:w-10/12">
        Glass bottles are completely natural packaging which contain no harmful
        chemicals, additives, nor impurities. This ensures contents are
        perfectly preserved as intended, most sustainably.
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
          <div className="space-y-6 border lg:h-[34.375rem] xl:h-[40rem] p-4 rounded-3xl bg-[#D9D9D9] flex flex-col justify-end bg-[url('/assets/images/solutions/aluminium-cans-green.svg')] bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/30 after:opacity-70 after:z-10 overflow-hidden">
            <TextWithComponent
              className="bg-[#29292945] backdrop-blur-[2px] rounded-xl overflow-hidden p-3 relative z-[999] text-white"
              title={<span className="text-3xl">Infinite Recycling</span>}
              description={
                <p className="text-white">
                  Like aluminium cans and PET chemical recycling, glass bottles
                  can be recycled indefinitely without degrading in quality.
                  Forever!
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
