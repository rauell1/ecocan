import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import WhiteBgCard from "@/components/shared/white-bg-card";
import React from "react";
import TextWithComponent from "./text-with-component";
import { LucideAward, LucideGem, LucideRecycle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const rvmContent = [
  {
    icon: <LucideRecycle />,
    iconPath: "/assets/images/all/scan.svg",
    content: (
      <div>
        <h2 className="font-bold text-xl text-black my-4">Verification</h2>
        <p className="text-sm lg:text-base">
          Located at selected ECO-Stations, ECOnsumers identify themselves with
          their ECOCAN ID, before placing empties into the in-feed. It then
          authenticates the empties by taking up to 1000 pictures/second, to
          verify them based on Security codes, shape, size, weight, material &
          barcode
        </p>
      </div>
    ),
  },
  {
    icon: <LucideAward />,
    iconPath: "/assets/images/all/cash.svg",
    content: (
      <div>
        <h2 className="font-bold text-xl text-black my-4">Refund</h2>
        <p className="text-sm lg:text-base">
          If the empties are eligible, ECOcans will accept them and calculate
          the deposit owed, which is then digitally refunded into ECO-wallets.
          If the empties are ineligible, they&apos;ll be rejected, and no
          deposit money will be issued. <br />
          Pure ECOcans are the first compacting, digital mini-RVMs in use
          worldwide
        </p>
      </div>
    ),
  },
  {
    icon: <LucideGem />,
    iconPath: "/assets/images/all/measure.svg",
    content: (
      <div>
        <h2 className="font-bold text-xl text-black my-4">Sustainability</h2>
        <p className="text-sm lg:text-base">
          The energy efficient Pure ECOcans are the world&apos;s smallest
          patented RVMs, yet equipped with even better capabilities than larger
          RVMs. i.e., digital deposit refund eliminates need for paper receipts;
          increasing refund efficiency, conserving our forests, and reducing
          receipt litter
        </p>
        <Button
          variant="ghost"
          className="px-0 font-bold underline hover:bg-transparent"
        >
          Learn more
        </Button>
      </div>
    ),
  },
];

export default function WhatIsEcocan() {
  return (
    <div className="relative bg-[#F3F3F6]">
      <div className="max-w-[69.375rem] mx-auto py-8 lg:pb-36 px-4 xl:px-0">
        <ImageAndItem
          className="lg:flex-row-reverse items-center gap-6 lg:gap-12"
          image={
            <Image
              src="/assets/images/consumer/rvm.svg"
              alt="Ecocan rvm"
              className="object-cover ms-auto"
              priority
              width={500}
              height={100}
            />
          }
          item={
            <TextWithComponent
              title={
                <div className="text-[#2F313F]">
                  What is an{" "}
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] text-transparent bg-clip-text">
                    ECOcan?
                  </span>
                </div>
              }
              description={
                <p>
                  The Pure <span className="font-medium">ECO</span>-friendly
                  trash <span className="font-medium">can</span> is an
                  intelligent waste collection bin, that automatically accepts
                  eligible empties returned for recycling, and digitally refunds
                  applicable deposit money into ECO-wallets
                </p>
              }
            />
          }
        />
        <TextWithCards
          customCard={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6 mt-12">
              {rvmContent.map((card, index) => (
                <WhiteBgCard
                  iconPath={card.iconPath}
                  className="border-none bg-white shadow-sm z-[9997]"
                  key={index}
                  content={card.content}
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
        <path
          fill="#FAFAFA"
          fill-opacity="1"
          d="M0,80L1440,0L1440,280L0,280Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 120"
        className="absolute bottom-0 z-50 hidden md:block lg:hidden"
      >
        <path
          fill="#FAFAFA"
          fill-opacity="1"
          d="M0,100L600,0L600,600L0,600Z"
        ></path>
      </svg>
      <Image
        src="/assets/images/consumer/green-rectangles.svg"
        alt="green rectangles"
        className="absolute bottom-0 -left-2 z-[9997] w-[20.25rem] hidden md:block"
        width={100}
        height={100}
      />
    </div>
  );
}
