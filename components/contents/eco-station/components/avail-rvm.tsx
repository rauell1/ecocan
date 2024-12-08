import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import PrimaryButton from "@/components/shared/primary-btn";
import React from "react";
import TextWithComponent from "../../consumer/components/text-with-component";
import Image from "next/image";

export default function AvailRvm() {
  return (
    <div className="pb-24">
      <div className="max-w-[69.375rem] mx-auto">
        <ImageAndItem
          className="lg:flex-row-reverse gap-6 lg:gap-12 items-center"
          image={
            <Image
              src="/assets/images/consumer/rvm.svg"
              alt="RVM"
              className="object-cover rounded-3xl w-full h-full"
              priority
              width={1000}
              height={1000}
            />
          }
          item={
            <TextWithComponent
              title={
                <div>
                  Re-imagined recycling; <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#228B22] via-[#4AC63F] to-[#FFDD4C]">
                    From Ooh... to Wow!
                  </span>
                </div>
              }
              description={
                <p className="lg:w-[29.375rem]">
                  If over 100 ECOnsumers return empties to you every day, we can
                  help set up an <HyperLink link="ECOCAN R.V.M." href="/" /> To
                  boost your efficiency, and offer ECOnsumers unforgettable
                  recycling experience. That they&apos;ll keep coming back. And
                  spend more!
                </p>
              }
              component={
                <PrimaryButton
                  buttonText="Learn more"
                  buttonLink="/"
                  className="hover:bg-primary"
                />
              }
            />
          }
        />
      </div>
    </div>
  );
}
