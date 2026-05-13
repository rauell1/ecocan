import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import React from "react";
import TextWithComponent from "../../consumer/components/text-with-component";
import CheckList from "../../consumer/components/checklist";
import Image from "next/image";

const steps = [
  {
    id: 1,
    step: <div>Segregation-at-source</div>,
  },
  {
    id: 2,
    step: <div>Clean-loop collection</div>,
  },
  {
    id: 3,
    step: <div>Closed-loop Recycling</div>,
  },
];

export default function Matters() {
  return (
    <ImageAndItem
      className="md:flex-row-reverse items-center"
      item={
        <TextWithComponent
          title={
            <h2 className="bg-gradient-to-r from-[#228B22] via-[#FFDD4C] to-[#FFDD4C] text-transparent bg-clip-text capitalize mb-2">
              That which matters
            </h2>
          }
          description={
            <div className="space-y-8">
              <p>
                You already know what they mean, but they mean most to us. So
                we--™ve developed technology to facilitate their implementation.
              </p>
              <p>
                And we expect you to also uphold them, if you want a gig with
                us.
              </p>
            </div>
          }
          component={
            <CheckList
              items={steps}
              className="items-center text-primary font-semibold"
            />
          }
        />
      }
      image={
        <Image
          src="/assets/images/recycler/woman-followers.svg"
          alt="ecocan woman"
          width={500}
          height={100}
        />
      }
    />
  );
}
