import CheckList from "@/components/contents/consumer/components/checklist";
import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";

const steps = [
  {
    id: 1,
    icon: (
      <div>
        <Image
          src="/assets/images/solutions/qr-code.svg"
          width={50}
          height={50}
          alt="icon"
        />
      </div>
    ),
    step: (
      <p className="mb-3 w-4/5 font-light leading-7 text-left text-[#23262fcc]">
        EcocanApp enables reliable authentication of genuine beverages carrying ECOCAN Security codes, before purchase
      </p>
    ),
  },
  {
    id: 2,
    icon: (
      <div>
        <Image
          src="/assets/images/solutions/bottle.svg"
          width={50}
          height={50}
          alt="icon"
        />
      </div>
    ),
    step: (
      <p className="mb-3 w-4/5 font-light leading-7 text-left text-[#23262fcc]">
        After enjoying genuine drinks, the ECOmmunity can return eligible empties to the nearest ECO-Station for recycling, via the <HyperLink href="/" link="ECOCAN DRS" />
      </p>
    ),
  },
  {
    id: 3,
    icon: (
      <div>
        <Image
          src="/assets/images/solutions/trend.svg"
          width={50}
          height={50}
          alt="icon"
        />
      </div>
    ),
    step: (
      <p className="mb-3 w-4/5 font-light leading-7 text-left text-[#23262fcc]">
        The <HyperLink href="/" link="ECOCAN TnT" /> enables real time
        monitoring of counterfeiting attemps
      </p>
    ),
  },
];

export default function Intervention() {
  return (
    <TextWithComponent
      title="Re-imagined intervention"
      description={
        <div className="md:w-8/12">
          <p>
          ECOCAN offers a suite of advanced technology solutions, to empower the ECOmmunity to effectively combat counterfeits. This offering provides high-level security, most affordably.
          </p>
        </div>
      }
      component={
        <ImageAndItem
          className="lg:flex-row-reverse items-center"
          image={
            <Image
              src="/assets/images/solutions/intervention.svg"
              alt="ecocan scan"
              className="rounded-[2rem] ms-auto"
              width={500}
              height={100}
            />
          }
          item={
            <TextWithComponent
              component={
                <CheckList items={steps} className="items-start gap-5" />
              }
            />
          }
        />
      }
    />
  );
}
