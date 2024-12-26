import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";
import TextWithComponent from "../../consumer/components/text-with-component";
import PrimaryButton from "@/components/shared/primary-btn";

export default function Avail() {
  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
      <ImageAndItem
        className="items-center lg:flex-row-reverse gap-12 lg:gap-0"
        image={
          <Image
            src="/assets/images/events/rvm.svg"
            alt="ECOCAN RVM"
            priority
            width={540}
            height={100}
            className="ms-auto"
          />
        }
        item={
          <TextWithComponent
            title={
              <h2>
                We&apos;ll avail{" "}
                <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] text-transparent bg-clip-text">
                  ECOcans
                </span>
              </h2>
            }
            description={
              <div className="w-11/12 space-y-6">
                <div>
                  By teaming up with us, the turnout will be massive for sure;
                  and you&apos;ll sell more drinks, meaning empties will be
                  plenty to collect. So, to boost collection efficiency and give
                  your fans an unforgettable recycling experience, we&apos;ll
                  bring over our intelligent RVMs.
                </div>
                <div>
                  <PrimaryButton
                    buttonText="Learn more"
                    buttonLink="/drs-takeover"
                    className="hover:bg-primary"
                  />
                </div>
              </div>
            }
          />
        }
      />
    </div>
  );
}
