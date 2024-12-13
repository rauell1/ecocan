import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideChevronRight, LucideX } from "lucide-react";
import HowTo from "@/components/shared/HowTo";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import PrimaryButton from "@/components/shared/primary-btn";
import { ItemList } from "../../courier/components/ItemList";
import Image from "next/image";
import HyperLink from "@/components/shared/hyperlink/hyperlink";

const howToData = [
  {
    id: 1,
    title: (
      <p className="text-[#404040] font-normal text-[0.9375rem]">
        Create an EcocanApp account, and customise your ECOCAN ID
      </p>
    ),
  },
  {
    id: 2,
    title: (
      <p className="text-[#404040] font-normal text-[0.9375rem]">
        Participate in the ECOCAN DRS, and Anti-counterfeit campaigns
      </p>
    ),
  },
  {
    id: 3,
    title: (
      <p className="text-[#404040] font-normal text-[0.9375rem]">
        Support ECO-friendly brands with your purchases on ECOCAN Market
      </p>
    ),
  },
];

const iconSize = 18;

export default function JoinEcommunity() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="rounded-full bg-transparent border border-white text-white hover:bg-transparent h-[3rem] py-3 px-8">
          <span className="relative z-[9999] text-base">Join ECOmmunity</span>
          <LucideArrowRight className="ml-2" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[9999]">
        <AlertDialogCancel className="hover:bg-transparent text-black/60 hover:text-black w-fit border-none">
          <LucideX />
        </AlertDialogCancel>
        <ImageAndItem
          className="items-center gap-6"
          image={
            <Image
              src="/assets/images/consumer/ecommunity-popup.svg"
              alt="buy online with ecocan"
              width={400}
              height={100}
              className="mx-auto z-[9999]"
            />
          }
          item={
            <div className="space-y-6">
              <h2 className="font-medium text-lg">
                We are an ECO-friendly community backed by sustainability,
                cooperation and responsibility.
              </h2>
              <div className="space-y-2 text-[#23262fcd] text-[0.9375rem]">
                <p>
                  Join the ECOmmunity by closing the{" "}
                  <HyperLink link="ECO loop" href="/" /> with these three easy
                  steps:
                </p>
              </div>
              {howToData.map((data) => (
                <ItemList key={data.id} title={data.title} id={data.id} />
              ))}
              <div className="text-center text-[#23262fcd] space-y-4 text-sm">
                <p>
                  And we&apos;ll make sure to recognise, and reward your
                  ECO-conscious efforts. With deposit money, exclusive recycling
                  coupons, loyalty discounts, and Red-Carpet experience at
                  ECO-events
                </p>
                <p>
                  One size never fits all! Customising your ECOCAN ID makes
                  things personalized, easier and quicker. So we can know each
                  other better. That we can serve you best. And, subscribe to
                  our newsletter to stay in the loop!
                </p>
              </div>
              <div>
                <PrimaryButton className="w-full" buttonText="Get started" />
              </div>
            </div>
          }
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}
