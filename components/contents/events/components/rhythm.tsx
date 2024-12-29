import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";
import TextWithComponent from "../../consumer/components/text-with-component";

export default function Rhythm() {
  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
      <ImageAndItem
        className="items-center gap-12"
        image={
          <Image
            src="/assets/images/events/club.svg"
            alt="Online store"
            priority
            width={500}
            height={100}
          />
        }
        item={
          <TextWithComponent
            className="lg:w-11/12 ms-auto"
            title={<div>That we keep the <br/> Rhythm Alive</div>}
            description={
              <div className="space-y-6">
                <div>
                  We&apos;ve rolled out the Red Carpet for ECOnsumers and
                  availed the ECOcans. You can as well sprinkle in a
                  surprise package.
                  That we create a truly immersive and unforgettable ECO-Event.
                  Exceeding your fans expectation.
                </div>
              </div>
            }
          />
        }
      />
    </div>
  );
}
