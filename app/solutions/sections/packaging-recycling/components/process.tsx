import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ProcessPopup from "./process-popup";

export default function Process() {
  return (
    <section className="max-w-[72rem] mx-auto px-4 xl:px-0" id="recycling_process">
      <ImageAndItem
        className="items-center gap-12"
        image={
          <Image
            src="/assets/images/solutions/video.svg"
            alt="ecocan recycling process video"
            width={540}
            height={540}
          />
        }
        item={
          <TextWithComponent
            title="Recycling process"
            description={
              <div className="space-y-6">
                <p>
                  Returned re-usable glass bottles are meticulously processed by
                  ECOCAN in a closed-loop, using state of the art
                  fully-automatic{" "}
                  <HyperLink link="PAC Swiss bottle washers" href="/" />. And
                  undergo rigorous quality inspection with top-of-the-line{" "}
                  <HyperLink link="Krones Linantronic" href="/" /> empty bottle
                  inspectors (I.B.I).
                </p>
                <p>
                  To ensure ECO-products are safely refilled in the most
                  hygienic, and highest quality, 100% re-used glass bottles.
                </p>
                <ProcessPopup join="Read more"/>
              </div>
            }
          />
        }
      />
    </section>
  );
}
