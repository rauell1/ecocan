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
      <p className="mb-3 w-3/4 font-light leading-7 text-left text-[#23262fcc]">
        Use <HyperLink href="/" link="EcocanApp" /> to reliably authenticate
        genuine drinks carrying{" "}
        <HyperLink href="/" link="ECOCAN security codes" />
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
      <p className="mb-3 w-3/4 font-light leading-7 text-left text-[#23262fcc]">
        After enjoying your drink, return empties to ECO-Stations for recycling,
        via the <HyperLink href="/" link="ECOCAN DRS" />
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
      <p className="mb-3 w-3/4 font-light leading-7 text-left text-[#23262fcc]">
        The <HyperLink href="/" link="ECOCAN TnT" /> enables real time
        monitoring of counterfeiting attemps
      </p>
    ),
  },
];

export default function Intervention() {
  return (
    <TextWithComponent
      title="Much needed intervention"
      description={
        <div className="w-3/5">
          <p>
            ECOCAN offers a suite of advanced technology solutions, to empower
            the ECOmmunity to effectively combat harmful counterfeit trade.
            These intelligent solutions provide high security, yet most
            affordable anti-counterfeit protection
          </p>
        </div>
      }
      component={
        <ImageAndItem
          className="md:flex-row-reverse items-center"
          image={
            <Image
              src="/assets/images/solutions/scan.svg"
              alt="ecocan scan"
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
