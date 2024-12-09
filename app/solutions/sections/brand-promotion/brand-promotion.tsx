import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import CheckList from "@/components/contents/consumer/components/checklist";
import ImageTextOverlay from "@/components/contents/courier/components/imageText";
import { ReusableAccordion } from "@/components/shared/accordion";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import StyledText from "@/components/shared/styled-text";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import { alphaMale, beachBottleTall, ecomarket } from "@/lib/imageIndex";
import Image from "next/image";
import React from "react";
import EconsumersCare from "./components/econsumers-care";

const accordionItems = [
  {
    id: "item-1",
    question: "ECOCAN security codes",
    answer:
      "Unlock the digital power of your packaging, by transforming them from traditional physical assets, into digitally connected resources, for direct engagement with consumers.",
  },
  {
    id: "item-2",
    question: "ECOCAN TnT",
    answer:
      "We’ll instantly alert you every time a customer engages with your products, detailing exactly when and where it happens. Plus, with advanced data analytics tools, the TnT will generate dynamic performance reports on all interactions. You can then use these insights to take your business to the next level.",
  },
  {
    id: "item-3",
    question: "ECOCAN DRS",
    answer:
      "Cutting your negative environmental impact is just the beginning. Get the full picture—know who, when and where your empties are returned for recycling.",
  },
  {
    id: "item-4",
    question: "ECOCAN Market",
    answer:
      "We don’t just spark your customers’ interest and leave them hanging—we close the deal! Our Marketplace lets them buy their favourite drinks from you. While ECOuriers handle the deliveries and pick-ups, ensuring a seamless experience from start to finish",
  },
];

export default function BrandPromotion() {
  return (
    <div className="space-y-24">
      <TextWithComponent
        title="Consumer engagement"
        description={
          <div className="w-4/5 space-y-4">
            <p>
              With ECOCAN’s intelligent solutions, you can now directly engage
              with your customers through personalized, incentivized, and
              gamified campaigns— Most affordably. Then Sit back and watch as
              this targeted engagement boosts your sales and transforms your
              customer interactions into tangible results.
            </p>
            <p>
              Your beverage packaging isn’t just a one-time consumable. With our
              help, you can transform it into a powerful consumer engagement
              platform, and marketing billboard.
            </p>
          </div>
        }
      />
      <ImageAndItem
        className="md:flex-row-reverse items-center"
        image={
          <Image
            src="/assets/images/solutions/male.svg"
            alt="male office guy"
            width={500}
            height={100}
          />
        }
        item={
          <div className="w-11/12">
            <ReusableAccordion items={accordionItems} />
          </div>
        }
      />
      <EconsumersCare/>
    </div>
  );
}
