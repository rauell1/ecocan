import React from "react"
import Image from "next/image"
import SecurityFeatures from "./security-features"

export default function IdentifyGenuine() {
  return (
    <div className="mx-auto">
      <div className="mb-8 text-center lg:mb-24">
        <h2 className="text-3xl font-medium lg:text-5xl">
          How to identify genuine drinks in Kenya
        </h2>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-1/3">
          <Image
            src="/assets/images/consumer/identify-genuine.svg"
            alt="ECOCAN Authentication"
            width={300}
            height={600}
            className="mx-auto h-full w-full lg:mx-0"
          />
        </div>
        <div className="lg:w-3/4">
          <SecurityFeatures />
        </div>
      </div>
    </div>
  )
}
