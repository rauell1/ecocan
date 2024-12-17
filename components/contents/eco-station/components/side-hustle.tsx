import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";

export default function SideHustle() {
  return (
    <div className="lg:pb-24 pt-8 relative bg-white overflow-hidden">
      <div className="max-w-[72rem] mx-auto pb-24 px-4 xl:px-0">
        <ImageAndItem
          className="gap-12 items-center lg:flex-row-reverse"
          image={
            <Image
              src="/assets/images/courier/hustle-rules.svg"
              alt="EcocanApp step"
              className="ms-auto"
              width={500}
              height={100}
            />
          }
          item={
            <div className="space-y-6">
              <h2 className="font-bold text-3xl lg:text-5xl">
                Side hustle, without
                <br /> a hustle...
              </h2>
              <p className="text-secondary lg:text-xl font-light">
                While you record revenue growth for becoming an ECO-Station,
                we&apos;ll efficiently take care of empties logistics. Simply
                ping-us on your Egent App to request pick-up when you&apos;ve
                collected sufficient empties.
              </p>
              <div className="text-secondary lg:text-xl font-light">
                And the TnT will dispatch <HyperLink href="/" link="ECOuries" />{" "}
                on <HyperLink href="/" link="Electric mobility" /> just-in-time;
                boosting productivity, while cutting CO2e & energy consumption.
                You may also request for ECO-products supplies via this Ping
                function, with just a tap of a button.
              </div>
            </div>
          }
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        className="absolute bottom-0 z-50 hidden lg:block"
      >
        <path
          fill="#FAFAFA"
          fill-opacity="1"
          d="M0,80L1440,0L1440,280L0,280Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 120"
        className="absolute bottom-0 z-50 hidden md:block lg:hidden"
      >
        <path
          fill="#FAFAFA"
          fill-opacity="1"
          d="M0,100L600,0L600,600L0,600Z"
        ></path>
      </svg>
      <Image
        src="/assets/images/consumer/green-rectangles.svg"
        alt="green rectangles"
        className="absolute xl:bottom-20  -right-2 z-[9997] w-[20.25rem] hidden md:block"
        width={100}
        height={100}
      />
    </div>
  );
}
