import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";

export default function SecurityCodes() {
  return (
    <div className="bg-white rounded-xl h-[34rem] flex flex-col px-8 justify-center">
      <div className="flex justify-between">
          <h2 className="text-[1.75rem] font-semibold text-[#23262fcc]">
            ECOCAN Security Codes
          </h2>
          <Image src="/assets/images/all/red-ball.svg" alt="ecocan red ball" width={40} height={40}/>
      </div>
      <ImageAndItem
        className="items-center"
        image={
          <Image
            src="/assets/images/solutions/security-codes.svg"
            alt="ecocan security codes"
            width={800}
            height={100}
          />
        }
        item={
          <div className="space-y-6 text-[#23262fcc]">
            <p>
              <HyperLink href="/" link="ECOCAN Security Codes" /> are
              serialized, blockchain-compatible, anti-copy codes. Which are only
              printed onto packaging of genuine eligible products.{" "}
            </p>
            <p>
              To ensure each product is unique, is digitally connected, and can
              be traced. ECOnsumers can scan these codes with their ECO-scanners
              to authenticate the products in under 3 seconds.
            </p>
            <div>
              <HyperLink link="Learn more" href="/" />
            </div>
          </div>
        }
      />
    </div>
  );
}
