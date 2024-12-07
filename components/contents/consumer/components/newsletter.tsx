import React from "react";
import TextWithComponent from "./text-with-component";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";

export default function Newsletter() {
  return (
    <ImageAndItem
      className="md:flex-row-reverse items-center max-w-[65rem] mx-auto"
      item={
        <TextWithComponent
          title="Stay in the loop"
          description={
            <p>
              Subscribe to our newsletter and stay updated
              <br /> with what&apos;s happening within the ECOmmunity.
            </p>
          }
          component={
            <div className="mb-4 border border-[#E6E8EC] bg-white rounded-full flex items-center w-4/5">
              <Input
                placeholder="Enter your email"
                className="text-[#777E90] border-none rounded-full focus:outline-none focus:border-none focus:ring-0"
              />
              <Image
                src="/assets/icons/right-arrow.svg"
                className="m-2"
                alt="right chevron arrow"
                width={32}
                height={32}
              />
            </div>
          }
        />
      }
      image={
        <div className="">
          <Image
            src="/assets/images/consumer/newsletter-img.svg"
            alt="multiple image"
            width={900}
            height={100}
            className="ms-auto"
          />
        </div>
      }
    />
  );
}
