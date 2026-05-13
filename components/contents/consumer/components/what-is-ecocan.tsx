import ImageAndItem from "@/components/shared/image-and-item/image-and-item"
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards"
import React from "react"
import TextWithComponent from "./text-with-component"
import { LucideAward, LucideGem, LucideRecycle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HyperLink from "@/components/shared/hyperlink/hyperlink"
import { WhiteBgCard } from "@/components/shared/white-bg-card"

const rvmContent = [
  {
    icon: <LucideRecycle />,
    iconPath: "/assets/images/all/scan.svg",
    content: (
      <div>
        <h2 className="my-4 text-xl font-bold text-black">Verification</h2>
        <p className="text-sm lg:text-base">
          Located at selected ECO-Stations, ECOnsumers identify themselves with their ECOCAN ID,
          before placing empties into the in-feed. It then authenticates the empties by taking up to
          1000 pictures/second, to verify them based on Security codes, shape, size, weight,
          material & barcode
        </p>
      </div>
    ),
  },
  {
    icon: <LucideAward />,
    iconPath: "/assets/images/all/cash.svg",
    content: (
      <div>
        <h2 className="my-4 text-xl font-bold text-black">Refund</h2>
        <p className="text-sm lg:text-base">
          If the empties are eligible, ECOcans will accept them and calculate the deposit owed,
          which is then digitally refunded into ECO-wallets. If the empties are ineligible,
          they&apos;ll be rejected, and no deposit money will be issued. <br />
          Pure ECOcans are{" "}
          <span className="font-medium">
            the first compacting, digital mini-RVMs in use worldwide
          </span>
        </p>
      </div>
    ),
  },
  {
    icon: <LucideGem />,
    iconPath: "/assets/images/all/measure.svg",
    content: (
      <div>
        <h2 className="my-4 text-xl font-bold text-black">Sustainability</h2>
        <p className="text-sm lg:text-base">
          The energy efficient Pure ECOcans are the world&apos;s smallest patented RVMs, yet
          equipped with even better capabilities than larger RVMs. i.e., digital deposit refund
          eliminates need for paper receipts; increasing refund efficiency, conserving our forests,
          and reducing receipt litter
        </p>
        <HyperLink
          href="/eco-friendly-cans"
          link="Learn more"
          className="font-semibold text-muted-foreground"
        />
      </div>
    ),
  },
]

export default function WhatIsEcocan() {
  return (
    <section className="relative bg-[#F3F3F6]" id="what_are_ecocans">
      <div className="mx-auto max-w-[72rem] px-4 py-8 lg:pb-36 xl:px-0">
        <ImageAndItem
          className="items-center gap-6 lg:flex-row-reverse lg:gap-12"
          image={
            <Image
              src="/assets/images/consumer/rvm.svg"
              alt="Ecocan rvm"
              className="ms-auto object-cover"
              priority
              width={540}
              height={540}
            />
          }
          item={
            <TextWithComponent
              title={
                <div className="text-[#2F313F]">
                  What is an{" "}
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] bg-clip-text text-transparent">
                    ECOcan?
                  </span>
                </div>
              }
              description={
                <p className="lg:w-10/12">
                  The Pure{" "}
                  <span className="bg-gradient-to-r from-[#228B22] to-[#4AC63FCF] bg-clip-text font-medium text-transparent">
                    ECO
                  </span>
                  -friendly trash{" "}
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] bg-clip-text font-medium text-transparent">
                    can
                  </span>{" "}
                  is an intelligent waste collection bin, that automatically accepts eligible
                  empties returned for recycling, and digitally refunds applicable deposit money
                  into ECO-wallets
                </p>
              }
            />
          }
        />
        <TextWithCards
          customCard={
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3 lg:gap-6">
              {rvmContent.map((card, index) => (
                <WhiteBgCard
                  iconPath={card.iconPath}
                  className="z-[997] border-none bg-white shadow-sm"
                  key={index}
                  content={card.content}
                  expandable={true}
                  hasGradientBorder={true}
                />
              ))}
            </div>
          }
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        className="absolute bottom-0 z-50 hidden lg:block"
      >
        <path fill="#FAFAFA" fillOpacity="1" d="M0,80L1440,0L1440,280L0,280Z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 120"
        className="absolute bottom-0 z-50 hidden md:block lg:hidden"
      >
        <path fill="#FAFAFA" fillOpacity="1" d="M0,100L600,0L600,600L0,600Z"></path>
      </svg>
      <Image
        src="/assets/images/consumer/green-rectangles.svg"
        alt="green rectangles"
        className="absolute -left-2 bottom-0 z-[997] hidden w-[20.25rem] md:block"
        width={100}
        height={100}
      />
    </section>
  )
}
