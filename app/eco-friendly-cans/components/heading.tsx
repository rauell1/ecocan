import TextWithComponent from "@/components/contents/consumer/components/text-with-component"
import Image from "next/image"
import React from "react"

export default function Heading() {
  return (
    <section className="relative" id="eco_friendly_cans">
      <div className="relative z-[999] mx-auto max-w-[72rem] px-4 py-8 lg:pb-36 lg:pt-44 xl:px-0">
        <TextWithComponent
          title="ECO-friendly cans"
          description={
            <p className="lg:w-3/4">
              ECOcans make bottle returns easy for everyday shoppers in Kenya. At ECO-Stations, they
              speed up recycling, prevent fake return claims, and help communities keep streets
              cleaner while unlocking digital rewards.
            </p>
          }
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        className="absolute top-0 z-50 hidden lg:block"
      >
        <path fill="#F6F6F6" fillOpacity="1" d="M0,0L1440,0L1440,00L0,100Z"></path>
      </svg>
      <Image
        src="/assets/images/eco-station/green-rectangles.svg"
        alt="green rectangles"
        className="absolute -left-3 top-6 z-[997] hidden lg:block xl:top-16"
        width={500}
        height={109}
      />
    </section>
  )
}
