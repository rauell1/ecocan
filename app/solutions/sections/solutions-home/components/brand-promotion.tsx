"use client"

import TextWithComponent from "@/components/contents/consumer/components/text-with-component"
import ImageAndItem from "@/components/shared/image-and-item/image-and-item"
import PrimaryButton from "@/components/shared/primary-btn"
import { LucideArrowRight } from "lucide-react"
import Image from "next/image"

export default function BrandPromotion() {
  return (
    <div>
      <div className="mx-auto max-w-[72rem] px-4 py-8 lg:py-24 xl:px-0">
        <ImageAndItem
          className="items-center gap-6 lg:flex-row-reverse lg:gap-12"
          image={
            <Image
              src="/assets/images/solutions/brand-promotion.svg"
              alt="brand"
              className="rounded-3xl object-cover"
              priority
              width={500}
              height={100}
            />
          }
          item={
            <TextWithComponent
              title={
                <div className="space-y-4">
                  <h2 className="font-semibold">Brand Promotion</h2>
                </div>
              }
              description={
                <p className="md:w-11/12">
                  ECOCAN&apos;s robust and intelligent solutions enable direct engagement with
                  customers through personalized, incentivized, and gamified campaigns - most
                  affordably. That you can sit back and watch this targeted marketing boost purchase
                  of your genuine drinks, promote your brand image, and increase customer loyalty
                </p>
              }
              component={
                <PrimaryButton
                  buttonIcon={<LucideArrowRight />}
                  buttonText="Learn more"
                  className="mt-8 hover:bg-primary"
                  buttonLink="/solutions/brand-promotion"
                />
              }
            />
          }
        />
      </div>
    </div>
  )
}
