import Image from "next/image";
import React from "react";
import TextWithComponent from "../../consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import CheckList from "../../consumer/components/checklist";
import HyperLink from "@/components/shared/hyperlink/hyperlink";

const steps = [
  {
    id: 1,
    icon: (
      <div>
        <div className="w-[3.75rem] h-[3.75rem] shadow-lg bg-white  rounded-full flex items-center justify-center">
          <Image
            src="/assets/images/recycler/recycle_icon.svg"
            width={40}
            height={40}
            alt="icon"
            className="w-"
          />
        </div>
      </div>
    ),
    step: (
      <p className="mb-3 font-poppins text-lg font-semibold leading-6 text-left">
        Increased recycling rates
      </p>
    ),
    description:
      " You’re familiar with how difficult it is to capture empties circulated off-trade. But are also aware of the spellbinding magic of a worthwhile refundable deposit! So 1 + 1 = 2",
  },
  {
    id: 2,
    icon: (
      <div>
        <div className="w-[3.75rem] h-[3.75rem] shadow-lg bg-white  rounded-full flex items-center justify-center">
          <Image
            src="/assets/images/recycler/hour_glass_icon.svg"
            width={40}
            height={40}
            alt="icon"
          />
        </div>
      </div>
    ),
    step: (
      <p className="mb-3 font-poppins text-lg font-semibold leading-6 text-left">
        Highest purity empties
      </p>
    ),
    description:
      "Recycling is more of a quality than quantity question. And a DRS elaborately delivers non-contaminated recyclate with over 30% greater market value",
  },
  {
    id: 3,
    icon: (
      <div>
        <div className="w-[3.75rem] h-[3.75rem] shadow-lg bg-white  rounded-full flex items-center justify-center">
          <Image
            src="/assets/images/recycler/earth_icon.svg"
            width={40}
            height={40}
            alt="icon"
          />
        </div>
      </div>
    ),
    step: (
      <p className="mb-3 font-poppins text-lg font-semibold leading-6 text-left">
        Extended Producer Responsibility
      </p>
    ),
    description: (
      <p>
        A Nordic-design DRS is aligned with the{" "}
        <HyperLink link="‘Polluter Pays Principle’" href="/" />, and most
        effectively fulfils this mandate, ensuring everyone contributes{" "}
      </p>
    ),
  },
  {
    id: 4,
    icon: (
      <div>
        <div className="w-[3.75rem] h-[3.75rem] shadow-lg bg-white  rounded-full flex items-center justify-center">
          <Image
            src="/assets/images/recycler/gold_medal_icon.svg"
            width={40}
            height={40}
            alt="icon"
          />
        </div>
      </div>
    ),
    step: (
      <p className="mb-3 font-poppins text-lg font-semibold leading-6 text-left">
        It’s the Gold-Standard
      </p>
    ),
    description:
      "Endorsed by the United Nation, and European Union’s PPWR and SUP directives, a DRS is the only known take-back system that can collect over 90% of eligible empties, with top-notch quality",
  },
];

export default function DepositRefundSystem() {
  return (
    <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0 pb-24">
      <ImageAndItem
        className="gap-12 items-center"
        image={
          <>
            <h2 className="text-[1.85rem] font-semibold">
              Why a Deposit Refund System?
            </h2>
            <p className="my-2 text-accent/50">You&apos;re an expert, so we&apos;ll skip the 101</p>
            <Image
              src="/assets/images/recycler/drs.svg"
              width={500}
              height={100}
              priority
              alt="How to return eligible empties"
            />
          </>
        }
        item={
          <TextWithComponent
            component={<CheckList items={steps} className="items-start gap-5" />}
          />
        }
      />
    </div>
  );
}
