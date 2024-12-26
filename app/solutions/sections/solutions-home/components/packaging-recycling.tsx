"use client";

import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import PrimaryButton from "@/components/shared/primary-btn";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";

export default function PackagingRecycling() {
  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
      <ImageAndItem
        className="items-center gap-6 lg:gap-12"
        image={
          <Image
            src="/assets/images/solutions/packaging-recycling.svg"
            alt="packagin recycling"
            className="object-cover rounded-3xl"
            priority
            width={500}
            height={100}
          />
        }
        item={
          <TextWithComponent
            title={
              <div className="space-y-4">
                <h2>Packaging Recycling</h2>
              </div>
            }
            description={
              <p className="md:w-11/12">
                ECOCAN D.R.S is a circular economy platform, which streamlines
                extensive collection, and closed-loop recycling of genuine
                eligible empties. And ensures all stakeholders directly benefit
                for taking part. This green-tech ECO-system is the first fully
                digital DRS worldwide, which also mitigates product
                counterfeiting
              </p>
            }
            component={
              <PrimaryButton
                buttonIcon={<LucideArrowRight />}
                buttonText="Learn more"
                className="hover:bg-primary mt-8"
                buttonLink="/solutions/packaging-recycling"
              />
            }
          />
        }
      />
    </div>
  );
}
