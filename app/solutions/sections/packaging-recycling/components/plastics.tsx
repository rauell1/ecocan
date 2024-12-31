import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import React from "react";

const factData = [
  {
    title: <h1 className="text-lg">Infinite recycling</h1>,
    description: (
      <p className="text-sm lg:w-10/12">
        1 PET bottle can be recycled upto 10 times using typical recycling
        techniques, but with chemical recycling, it can be{" "}
        <span className="font-bold">recycled forever!</span>
      </p>
    ),
    imagePath: "bg-[url('/assets/images/solutions/infinite.png')]",
  },
  {
    title: <h1 className="text-lg">Energy Savings</h1>,
    description: (
      <p className="text-sm lg:w-10/12">
        Recycling <span className="font-bold">1 ton</span> of PET bottles, saves
        approximately <span className="font-bold">14,000 kWh</span> of energy.
        This is enough energy to power your household for{" "}
        <span className="font-bold">1 full year!</span>
      </p>
    ),
    imagePath: "bg-[url('/assets/images/solutions/e-savings.svg')]",
  },
  {
    title: <h1 className="text-lg">Space Savings</h1>,
    description: (
      <p className="text-sm lg:w-10/12">
        PET recycling diverts empties from landfills, thereby saving upto{" "}
        <span className="font-bold">5.7 cubic yards</span> of landfill space for
        every <span className="font-bold">1 ton recycled</span>. This is enough
        land to set up a small garden, or a playhouse for kids
      </p>
    ),
    imagePath: "bg-[url('/assets/images/solutions/s-savings.svg')]",
  },
];

export default function Plastics() {
  return (
    <div>
      <ImageAndItem
        className="lg:gap-4 xl:gap-12"
        image={
          <div className="space-y-6 border lg:h-[34.375rem] xl:h-[40rem] p-4 rounded-3xl bg-[#D9D9D9] flex flex-col justify-end bg-[url('/assets/images/solutions/pet-bg.png')] bg-cover relative after:absolute after:inset-0 after:content-[''] after:bg-black/30 after:opacity-70 after:z-10 overflow-hidden">
            <TextWithComponent
              className="bg-[#29292945] backdrop-blur-[2px] rounded-smooth overflow-hidden p-3 relative z-[999] text-white"
              title={<span className="text-3xl">CO2e reduction</span>}
              description={
                <p className="text-white text-base">
                  Recycling 1 Kg of PET plastics reduces over{" "}
                  <span className="font-bold">80%</span> of Carbon emissions,
                  compared to producing the same PET bottles from virgin raw
                  materials
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
