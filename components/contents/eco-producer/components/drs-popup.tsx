import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LucideArrowUpRight, LucideX } from "lucide-react";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import PrimaryButton from "@/components/shared/primary-btn";
import Image from "next/image";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import TextWithComponent from "../../consumer/components/text-with-component";
import JoinEcommunity from "../../../shared/join-ecommunity";
import RegisterPopup from "@/components/shared/register-popup";

export default function DrsPopup() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex gap-4 group relative">
          <Button variant="link" className="px-0">
            Learn more
            <LucideArrowUpRight className="ml-2 group-hover:scale-125 transition-all" />
          </Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[9999] bg-white">
        <AlertDialogCancel className="hover:bg-transparent text-black/60 hover:text-black w-fit border-none ms-auto">
          <LucideX />
        </AlertDialogCancel>
        <div className="space-y-24">
            <ImageAndItem
              className="gap-12 lg:flex-row-reverse items-center"
              image={
                <Image
                  src="/assets/images/producer/drs-large.svg"
                  alt="buy online with ecocan"
                  width={540}
                  height={540}
                  className="mx-auto z-[9999]"
                />
              }
              item={
                <TextWithComponent
                  title="DRS takeover"
                  description="The Nordic-design DRS is rapidly becoming a near universal feature of the 
            Developed Markets’ recycling landscape; with 18 countries across Europe, America’s and Oceania having already established nationwide collection systems (2023). And many others have passed legislation, or are in advanced talks to set up one before 2030."
                />
              }
            />
            <TextWithComponent
              title="But developing markets have been left behind"
              description={
                <div className="space-y-8">
                  <p>
                    ECOCAN is at the forefront of championing this DRS revolution in
                    developing markets, particularly in Africa where it is needed
                    the most. But numerous bottlenecks have been hindering
                    implementation, until now. Leveraging our advanced technologies
                    and extensive recycling experience, we&apos;ve overcome most of
                    those prohibitive barriers. And tailored a Nordic-design DRS to
                    the developing markets&apos; environment; Made it over 80%
                    cheaper to set up; Slashed administration cost by millions of
                    dollars; Significantly optimised systems security; And enhanced
                    its scalability, leveraging existent infrastructure & networks.
                  </p>
                  <p>
                    Curious how we&apos;ve archived this? Join{" "}
                    <RegisterPopup
                      showArrow={false}
                      join="the ECOmmunity"
                      className="text-primary px-0 text-xl"
                    />{" "}
                    to find out!
                  </p>
                </div>
              }
            />
        </div>
        <Image
          src="/assets/images/producer/drs-popup-img.svg"
          alt="drs-takeover"
          width={100}
          height={180}
          className="w-full h-full"
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}
