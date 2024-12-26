import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import PrimaryButton from "@/components/shared/primary-btn";
import React from "react";
import TextWithComponent from "../../consumer/components/text-with-component";
import Image from "next/image";

export default function AvailRvm() {
  return (
    <section className="lg:pb-24" id="">
      <div className="max-w-[72rem] mx-auto">
        <ImageAndItem
          className="lg:flex-row-reverse gap-6 lg:gap-12 items-center"
          image={
            <Image
              src="/assets/images/eco-station/avail-rvm.svg"
              alt="RVM"
              className="object-cover"
              priority
              width={540}
              height={540}
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
                <p className="pt-8 pb-12">
                  If over 100 ECOnsumers return empties to you every day, we can
                  help set up an <span className="font-semibold">ECOcan.</span> To
                  boost your efficiency, and offer ECOnsumers unforgettable
                  recycling experience. That they&apos;ll keep coming back. And
                  spend more!
                </p>
              }
              component={
                <PrimaryButton
                  buttonText="Learn more"
                  buttonLink="/eco-friendly-cans"
                  className="hover:bg-primary mt-auto"
                />
              }
            />
          }
        />
      </div>
    </section>
  );
}
