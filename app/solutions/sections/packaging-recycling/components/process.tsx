import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";
import ProcessPopup from "./process-popup";
import MediaViewer from "@/components/media-viewer";
import { Youtube } from "lucide-react";

export default function Process() {
  return (
    <section
      className="max-w-[72rem] mx-auto px-4 xl:px-0"
      id="recycling_process"
    >
      <ImageAndItem
        className="items-center gap-12"
        image={
          <MediaViewer
            type="video"
            title="Recycling Process Video"
            source="https://www.youtube.com/embed/9_7KM-2AhMs"
            start={48}
            end={98}
            trigger={
              <div className="relative">
                <Image
                  src="/assets/images/solutions/video.svg"
                  alt="Recycling Process Video"
                  width={540}
                  height={540}
                  className="cursor-pointer"
                />
                <Image
                  src="/assets/images/solutions/youtube.png"
                  alt="video icon"
                  width={100}
                  height={100}
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer text-black fill-red-500"
                />
              </div>
            }
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
                  <MediaViewer
                    type="video"
                    title="PAC Swiss bottle washers"
                    start={12}
                    source="https://www.youtube.com/embed/0QxeZ-r7vSE"
                  />
                  . And undergo rigorous quality inspection with top-of-the-line{" "}
                  <MediaViewer
                    type="pdf"
                    title="Krones Linatronic"
                    source="/documents/krones.pdf"
                  />{" "}
                  empty bottle inspectors (I.B.I). To ensure ECO-products are
                  safely refilled in the most hygienic, and highest quality,
                  100% re-used glass bottles.
                </p>
                <ProcessPopup join="Read more" />
              </div>
            }
          />
        }
      />
    </section>
  );
}
