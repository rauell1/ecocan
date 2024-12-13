import Image from "next/image";
import React from "react";
import TextWithComponent from "../../consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import CheckList from "../../consumer/components/checklist";
import HyperLink from "@/components/shared/hyperlink/hyperlink";

const steps = [
  {
    id: 4,
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
    step: <p className="mb-3">Increased recycling rates</p>,
    description:
      " You’re familiar with how difficult it is to capture empties circulated off-trade. But are also aware of the spellbinding magic of a worthwhile refundable deposit! So 1 + 1 = 2",
  },
  {
    id: 3,
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
    step: <p className="mb-3">Highest purity empties</p>,
    description:
      "Recycling is more of a quality than quantity question. And a DRS elaborately delivers non-contaminated recyclate with over 30% greater market value",
  },
  {
    id: 2,
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
    step: <p className="mb-3">Extended Producer Responsibility</p>,
    description: (
      <p>
        A Nordic-design DRS is aligned with the &lsquo;Polluter Pays Principle&rsquo;, and
        most effectively fulfils this mandate. Our traceability technology
        optimises this capability
      </p>
    ),
  },
  {
    id: 1,
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
    step: <p className="mb-3">It&apos;s the Gold-Standard</p>,
    description: (
      <div>
        Endorsed by the UN, and EU&apos;s{" "}
        <HyperLink
          link="PPWR & SUP"
          href="https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en"
        />{" "}
        directives, a DRS is the only take-back system that can collect +90%
        empties. And ECOCAN has enhanced this efficacy via the TnT & EcocanApp
      </div>
    ),
  },
];

export default function DepositRefundSystem() {
  return (
    <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0 lg:pb-24 py-8">
      <ImageAndItem
        className="gap-12 items-center"
        title={<h2 className="text-start">Why a Deposit Refund System?</h2>}
        description={
          <p className="lg:my-8 text-secondary text-start">
            You&apos;re an expert, so we&apos;ll skip the 101
          </p>
        }
        image={
          <>
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
            component={
              <CheckList items={steps} className="items-start gap-5" />
            }
          />
        }
      />
    </div>
  );
}
