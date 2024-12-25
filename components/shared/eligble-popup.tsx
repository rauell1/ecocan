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
import Image from "next/image";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import clsx from "clsx";

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
        Participate in the{" "}
        <HyperLink href="/solutions/packaging-recycling" link="ECOCAN DRS," />{" "}
        and{" "}
        <HyperLink href="/solutions/brand-protection" link="Brand Protection" />{" "}
        programmes
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

export default function EligblePopup({
  className,
  showArrow = false,
  join = "eligible",
}: {
  className?: string;
  showArrow?: boolean;
  join?: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className={clsx(
            `rounded-full bg-transparent text-primary hover:bg-transparent px-0 h-0 text-base font-light underline underline-offset-4 hover:text-primary`,
            className
          )}
        >
          <span className="relative z-[999]">{join}</span>
          {showArrow && <LucideArrowRight className="ml-2" />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[9999] bg-white">
        <AlertDialogCancel className="hover:bg-transparent bg-transparent text-black/60 hover:text-black w-fit border-none ms-auto">
          <LucideX />
        </AlertDialogCancel>
        <ImageAndItem
          className="lg:flex-row-reverse items-center"
          image={
            <Image
              src="/assets/images/eligble.svg"
              alt="buy online with ecocan"
              width={540}
              height={540}
              className="mx-auto z-[9999] hidden lg:block"
            />
          }
          item={
            <div className="h-full rounded-smooth-xl p-5">
              <div className="flex">
                <h2 className="text-[2rem] text-[#23262Fcc] font-bold">
                  These are beverages manufactured by legitimate producers,
                </h2>
              </div>
              <h2 className="font-light">
                That meet highest quality and safety standards, carry refundable
                deposit money, and have ECOCAN Security codes printed on their
                labels; which when scanned using the EcocanApp, an
                authentication page within the app reveals the product details
                and deposit money information. All eligible products are listed
                on ECOCAN Market
              </h2>
            </div>
          }
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}
