import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import Image from "next/image";
import React from "react";

export default function Heading() {
  return (
    <section className="relative" id="eco_friendly_cans">
      <div className="py-8 lg:pb-36 lg:pt-44 max-w-[72rem] mx-auto px-4 xl:px-0 relative z-[999]">
        <TextWithComponent
          title="ECO-friendly cans"
          description={
            <p className="lg:w-3/4">
              ECOcans empower entrepreneurs with high foot traffic to enhance
              their productivity, and maximise customer satisfaction, most
              sustainably. Additionally, these smart cans are a powerful tool for promoting brand visibility, and fostering customer loyalty.
            </p>
          }
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        className="absolute top-0 z-50 hidden lg:block"
      >
        <path
          fill="#F6F6F6"
          fill-opacity="1"
          d="M0,0L1440,0L1440,00L0,100Z"
        ></path>
      </svg>
      <Image
        src="/assets/images/eco-station/green-rectangles.svg"
        alt="green rectangles"
        className="absolute top-6 xl:top-16 -left-3 z-[997] hidden lg:block"
        width={500}
        height={109}
      />
    </section>
  );
}
