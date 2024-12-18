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
import { ItemList } from "../contents/courier/components/ItemList";
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

export default function ScanqrPopup({
  className,
  join,
  showArrow = false,
  arrow = <LucideArrowRight className="ml-4"/>
}: {
  className?: string;
  showArrow?: boolean;
  join?: string;
  arrow?: React.ReactNode;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className={clsx(
            `rounded-full bg-transparent text-primary hover:bg-transparent h-[3rem] py-3 px-0 text-base font-light underline underline-offset-[6px] hover:text-primary`,
            className
          )}
        >
          <span className="relative z-[999]">{join}</span>
          {showArrow && arrow}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[9999] bg-white !w-fit">
        <AlertDialogCancel className="hover:bg-transparent bg-transparent text-black/60 hover:text-black w-fit border-none ms-auto">
          <LucideX />
        </AlertDialogCancel>
        <Image
          src="/assets/images/consumer/qr-code.svg"
          alt="scan to download ecocan"
          width={540}
          height={540}
          className="mx-auto z-[9999]"
        />
        <p className="font-semibold text-[#23262Fcc] text-center text-3xl lg:text-5xl mt-5">Scan to download <br/>EcocanApp</p>
      </AlertDialogContent>
    </AlertDialog>
  );
}
