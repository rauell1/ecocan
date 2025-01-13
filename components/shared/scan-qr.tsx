import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideX } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

export default function ScanqrPopup({
  className,
  join,
  showArrow = false,
  arrow = <LucideArrowRight className="ml-4" />,
  downloadTrigger = (
    <Button
      variant="ghost"
      className={clsx(
        `rounded-full bg-transparent text-primary hover:bg-transparent h-12 py-3 px-0 text-base font-light underline underline-offset-[6px] hover:text-primary`,
        className
      )}
    >
      <span className="relative z-[999]">{join}</span>
      {showArrow && arrow}
    </Button>
  ),
}: {
  className?: string;
  showArrow?: boolean;
  join?: string;
  arrow?: React.ReactNode;
  downloadTrigger?: React.ReactNode;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{downloadTrigger}</AlertDialogTrigger>
      <AlertDialogContent className="z-[9999] bg-white !w-fit !rounded-smooth-xl">
        <AlertDialogCancel className="hover:bg-transparent bg-transparent text-black/60 hover:text-black w-fit border-none ms-auto mb-5">
          <LucideX />
        </AlertDialogCancel>
        <Image
          src="/assets/images/consumer/qr-code.svg"
          alt="scan to download ecocan"
          width={400}
          height={400}
          className="mx-auto z-[9999] w-72 h-72 xl:w-[20rem]"
        />
        <p className="font-semibold text-[#23262Fcc] text-center text-3xl mt-5">
          Scan to download <br />
          EcocanApp
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );
}
