import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import React from "react";
import FeaturesGrid from "@/components/shared/text-with-cards/custom-card";
import JoinEcommunity from "../../../shared/join-ecommunity";

const cardContent = [
  {
    id: 1,
    name: "Recycling Coupons",
    answer: (
      <div className="font-normal">
        Whenever you return 10 eligible empties for recycling, you&apos;ll get
        back the deposit money, + we&apos;ll reward you with up to 30% discount
        on your next ECO-purchase. Just activate your coupon while at the
        ECO-station, show the one-time coupon QR code to the Egent, and pay
        less!
      </div>
    ),
    icon: "/assets/images/consumer/coupons.svg",
    bgImg: "bg-[url('/assets/images/consumer/recycling-bg.svg')]",
  },
  {
    id: 2,
    name: "Sustainability discounts",
    answer: (
      <div className="font-normal ">
        <p>
          Before you buy an ECO-product, authenticate it using your ECO-scanner.
          And after enjoying the drink, return to ECO-stations the exact same
          empties you authenticated. And we&apos;ll reward you with up to a 50%
          loyalty discount on your next ECO-product purchase.
        </p>
      </div>
    ),
    icon: "/assets/images/consumer/discounts.svg",
    bgImg: "bg-[url('/assets/images/consumer/discounts-bg.svg')]",
  },
  {
    id: 3,
    name: "VIP treatment",
    answer: (
      <div className="font-normal">
        <p>
          We&apos;ll roll out the Red Carpet just for YOU! That you enjoy
          priority access to exclusive events + Valet parking. Skip the long
          queues by pre-ordering your drinks. Get exclusive behind-the-scenes
          content. And we might just spoil you by popping a complimentary drink!
        </p>
      </div>
    ),
    icon: "/assets/images/consumer/vip.svg",
    bgImg: "bg-[url('/assets/images/consumer/vip-bg.svg')]",
  },
];

export default function Exclusive() {
  return (
    <div className="bg-[#FAFAFA] bg-center bg-cover items-center py-12 lg:py-24">
      <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
        <TextWithCards
          title="Exclusive benefits for ECOnsumers"
          subtitle={
            <span className="bg-gradient-to-t text-2xl from-[#FFDD4C] to-[#4AC63F] text-transparent bg-clip-text font-semibold">
              You&apos;ll go bananas!
            </span>
          }
          description={
            <span>
              Enjoy unbelievably jaw dropping benefits by simply joining the{" "}
              <JoinEcommunity
                showArrow={false}
                className="text-primary text-xl font-normal border-none p-0 underline underline-offset-8"
                join="ECOmmunity"
              />
            </span>
          }
          className="mx-auto text-center"
          customCard={
            <FeaturesGrid
              features={cardContent}
              className="w-[90%] mx-auto lg:w-full bg-[position:0px_-100px] lg:bg-[position:0px_0px] h-[31.25rem] hover:bg-[position:0px_-100px] border lg:border-none transition-all bg-no-repeat rounded-3xl p-4 flex flex-col justify-end overflow-hidden lg:shadow-lg"
              gap="gap-4"
            />
          }
        />
      </div>
    </div>
  );
}
