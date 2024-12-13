import React from "react";
import Image from "next/image";
import SecurityFeatures from "./security-features";






export default function IdentifyGenuine() {
  return (
    <div className="mx-auto">
      <div className="text-center mb-8 lg:mb-24">
        <h2 className="text-3xl lg:text-5xl font-semibold">
          How to identify genuine products
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <Image
            src="/assets/images/consumer/identify-genuine.svg"
            alt="ECOCAN Authentication"
            width={300}
            height={600}
            className="mx-auto lg:mx-0"
          />
        </div>
        <div className="lg:w-3/4">
          <SecurityFeatures/>
        </div>
      </div>
    </div>
  );
}
