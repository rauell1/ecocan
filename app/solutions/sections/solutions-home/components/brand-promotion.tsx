"use client";

import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import PrimaryButton from "@/components/shared/primary-btn";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";

export default function BrandPromotion() {
  return (
    <div className="bg-white">
        <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0 py-8 lg:py-24">
          <ImageAndItem
            className="items-center gap-6 lg:gap-12 lg:flex-row-reverse"
            image={
              <Image
                src="/assets/images/solutions/brand-promotion.svg"
                alt="brand"
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
                    <h2>Brand Promotion</h2>
                  </div>
                }
                description={
                  <p className="md:w-11/12">
                    ECOCAN&apos;s robust and intelligent solutions enable direct
                    engagement with customers through personalized, incentivized,
                    and gamified campaigns— most affordably. That you can sit back
                    and watch this targeted marketing boost purchase of your genuine
                    drinks, promote your brand image, and increase customer loyalty
                  </p>
                }
                component={
                  <PrimaryButton
                    buttonIcon={<LucideArrowRight />}
                    buttonText="Learn more"
                    className="hover:bg-primary"
                    buttonLink="/solutions/brand-promotion"
                  />
                }
              />
            }
          />
        </div>
    </div>
  );
}
