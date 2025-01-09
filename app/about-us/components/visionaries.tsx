import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";

export default function Visionaries() {
  return (
    <div>
      <ImageAndItem
        className="gap-12 lg:flex-row-reverse items-center"
        image={
          <Image
            src="/assets/images/solutions/people.svg"
            alt="community of people on ground"
            width={540}
            height={540}
            priority
          />
        }
        item={
          <TextWithComponent
            title="Why We're Here"
            description={
              <h2
                className={`bg-gradient-to-r my-2 from-[#228B22] via-[#FFDD4C] to-[#FFDD4C] text-transparent bg-clip-text font-medium text-3xl`}
              >
                To support a COmmunity <br /> of visionaries{" "}
              </h2>
            }
            component={
              <div>
                <p className="lg:text-xl text-secondary">
                  Who envision and strive for a planet free from pollution, safe
                  for all the life it sustains, and brimming with limitless
                  opportunities to thrive. An achievable aspiration only when
                  communities work together, and are empowered with intelligent
                  technology to prosper
                </p>
              </div>
            }
          />
        }
      />
    </div>
  );
}
