import HyperLink from "@/components/shared/hyperlink/hyperlink";
import Image from "next/image";
import React from "react";

export default function SellMore() {
  return (
    <div className="pb-24">
      <div className="max-w-[69.375rem] mx-auto">
        <div className="bg-[url('/assets/images/eco-station/success-pride.svg')] bg-cover bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:-z-10 overflow-hidden z-50 rounded-[2rem] h-[27rem] flex flex-col justify-center">
          <div className="lg:w-1/2 mx-auto text-center lg:text-start lg:ms-auto text-white z-20 me-8">
            <h2 className="text-[2rem] font-semibold">
              Your success, our pride
            </h2>
            <p className="my-4 text-lg font-light">
              Our vision of re-imagining sustainability for the better extends
              to empowering communities to thrive. And this is reflected in our
              commitment to connect passionate entrepreneurs like yourself, with
              the ECO-friendly ECOmmunity, for sustainable commerce.
            </p>
            <HyperLink
              link="Learn more!"
              href="/"
              className="text-xl text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
