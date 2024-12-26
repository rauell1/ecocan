import CheckList from "@/components/contents/consumer/components/checklist";
import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";

const steps = [
  {
    id: 1,
    icon: (
      <div>
        <Image
          src="/assets/images/solutions/qr-code.svg"
          width={50}
          height={50}
          alt="icon"
        />
      </div>
    ),
    step: (
      <div>
        <h2 className="font-semibold text-2xl">Environmental Impact</h2>
        <p className="font-normal text-base leading-6 text-left text-secondary w-full">
          Reduces waste sent to landfills, decreases litter, as well as GHGs
          emission from raw material extraction
        </p>
      </div>
    ),
  },
  {
    id: 2,
    icon: (
      <div>
        <Image
          src="/assets/images/solutions/bottle.svg"
          width={50}
          height={50}
          alt="icon"
        />
      </div>
    ),
    step: (
      <div>
        <h2 className="font-semibold text-2xl">Energy Efficiency</h2>
        <p className="font-normal text-base leading-6 text-left text-secondary w-full">
          Requires less energy compared to producing products from virgin raw
          materials i.e., recycling aluminium cans requires only 5% of energy
          needed to make new cans
        </p>
      </div>
    ),
  },
  {
    id: 3,
    icon: (
      <div>
        <Image
          src="/assets/images/solutions/trend.svg"
          width={50}
          height={50}
          alt="icon"
        />
      </div>
    ),
    step: (
      <div>
        <h2 className="font-semibold text-2xl">Sustainability</h2>
        <p className="font-normal text-base leading-6 text-left text-secondary w-full]">
          Promotes resource conservation by continuously reusing materials. For
          example, recycling PET bottles reduces need to drill crude oil to make
          new plastic bottles
        </p>
      </div>
    ),
  },
  {
    id: 4,
    icon: (
      <div>
        <Image
          src="/assets/images/solutions/trend.svg"
          width={50}
          height={50}
          alt="icon"
        />
      </div>
    ),
    step: (
      <div>
        <h2 className="font-semibold text-2xl">Economic Advantage</h2>
        <p className="font-normal text-base leading-6 text-left text-secondary w-full">
          Reduces manufacturing costs i.e beverage producers can save upto 40%
          of packaging costs, thus sell their products more affordably
        </p>
      </div>
    ),
  },
];

export default function ClosedLoop() {
  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
      <TextWithComponent
        title="Why Closed-Loop Recycling"
        description={
          <div className="lg:w-11/12 text-secondary">
            Closed-loop recycling refers to a sustainable process whereby used
            bottles are recycled into new bottles of the same material value
            i.e. PET empties are recycled to manufacture new PET bottles. And
            not otherwise downcycled into lesser quality products like plastic
            basins, building blocks or cabro bricks. Which cause more
            environmental harm like contributing to micro-plastic leakage &
            CO2e. Closed-loop recycling is the true circular economy with many
            benefits including;
          </div>
        }
        component={
          <ImageAndItem
            className="lg:flex-row-reverse gap-12 items-center"
            item={
              <TextWithComponent
                component={
                  <>
                    <CheckList items={steps} className="items-start gap-2" />
                    <p className="text-secondary mt-8">
                      So next time you recycle, ensure it is closed loop
                      recycling, that you don&apos;t end up doing more harm, when
                      your intentions are noble
                    </p>
                  </>
                }
              />
            }
            image={
              <Image
                src="/assets/images/solutions/closed-loop.svg"
                alt="three empty glass bottles"
                width={540}
                height={540}
              />
            }
          />
        }
      />
    </div>
  );
}
