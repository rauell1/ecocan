import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideX } from "lucide-react";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import { ItemList } from "../contents/courier/components/ItemList";
import Image from "next/image";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import clsx from "clsx";
import ScanqrPopup from "./scan-qr";
import AppStoreButton from "./download-app";

const howToData = [
  {
    id: 1,
    title: (
      <p className="text-secondary font-normal text-[0.9375rem]">
        Create an EcocanApp account and customize your ECOCAN ID
      </p>
    ),
  },
  {
    id: 2,
    title: (
      <p className="text-secondary font-normal text-[0.9375rem]">
        Participate in the <span className="font-medium">ECOCAN DRS</span> and{" "}
        <span className="font-medium">Brand Protection</span> programmes
      </p>
    ),
  },
  {
    id: 3,
    title: (
      <p className="text-secondary font-normal text-[0.9375rem]">
        Support ECO-friendly brands with your purchases on{" "}
        <span className="font-medium">ECOCAN Market</span>
      </p>
    ),
  },
];

export default function JoinEcommunity({
  className,
  showArrow = true,
  join = "Join ECOmmunity",
}: {
  className?: string;
  showArrow?: boolean;
  join?: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={clsx(
            `rounded-full bg-transparent border border-white text-white hover:bg-transparent h-[3rem] py-3 px-8`,
            className
          )}
        >
          <span className="relative z-[999]">{join}</span>
          {showArrow && <LucideArrowRight className="ml-2" />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[9999]">
        <ImageAndItem
          image={
            <div>
              <Image
                src="/assets/images/consumer/community-1.svg"
                alt="buy online with ecocan"
                width={205}
                height={146}
                className="mx-auto z-[9996] hidden lg:block hover:scale-125 transition-all cursor-pointer duration-700"
              />
              <Image
                src="/assets/images/consumer/community-2.svg"
                alt="buy online with ecocan"
                width={439}
                height={311}
                className="mx-auto z-[9995] hidden lg:block hover:scale-105 -my-8 transition-all cursor-pointer duration-700"
              />
              <Image
                src="/assets/images/consumer/community-3.svg"
                alt="buy online with ecocan"
                width={292}
                height={207}
                className="mx-auto z-[9996] hidden lg:block hover:scale-110 transition-all cursor-pointer duration-700"
              />
            </div>
          }
          item={
            <div className="space-y-6 bg-white h-full grid lg:rounded-smooth-xl p-5">
              <div className="flex justify-between">
                <h2 className="text-[2rem] text-[#23262Fcc] font-bold">
                  Who Are We
                </h2>
                <AlertDialogCancel className="hover:bg-transparent text-black/60 hover:text-black w-fit border-none ms-auto">
                  <LucideX />
                </AlertDialogCancel>
              </div>
              <h2 className="text-secondary">
                We are an ECO-friendly COmmunity, united by a shared vision of a
                healthy planet, free from pollution & counterfeits, and brimming
                with limitless opportunities to thrive. Our sustainability bond
                is anchored on meaningful cooperation, connection, and
                belonging.
              </h2>
              <div className="space-y-2 text-[#23262fcc] font-semibold">
                <p>
                  Join us by closing the{" "}
                  <span className="text-primary">ECO-loop</span> with 3 easy
                  steps:
                </p>
              </div>
              {howToData.map((data) => (
                <ItemList key={data.id} title={data.title} id={data.id} />
              ))}
              <div className="text-secondary space-y-4">
                <p>
                  And we&apos;ll ensure to recognise and reward your
                  ECO-friendly efforts. With Deposit money, exclusive Recycling
                  coupons, Sustainability discounts, and Red-Carpet experience.
                  To promote sustainable consumption
                </p>
              </div>
              <div>
                <AppStoreButton
                  className="bg-primary w-full hover:bg-primary font-medium text-white hover:text-white no-underline h-12"
                  playStoreUrl="https://play.google.com/store/apps/details?id=com.superapp.ecocanapp"
                  appStoreUrl="https://apps.apple.com/app/6502695438"
                  buttonText="Get Started"
                />
              </div>
            </div>
          }
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}
