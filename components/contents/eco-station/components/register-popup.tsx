import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideX } from "lucide-react";
import clsx from "clsx";
import EcommunityForm from "@/components/shared/ecommunity-form";


export default function RegisterPopup({
  className,
  join = "Sign-up",
  showArrow = false,
  form = <EcommunityForm title="Let's do Business the Right way"/>,
  arrow = <LucideArrowRight className="ml-4"/>
}: {
  className?: string;
  showArrow?: boolean;
  join?: string;
  form?: React.ReactNode;
  arrow?: React.ReactNode;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className={clsx(
            `rounded-full bg-transparent text-primary hover:bg-transparent px-0 text-base font-light underline underline-offset-[6px] hover:text-primary`,
            className
          )}
        >
          <span className="relative z-[999]">{join}</span>
          {showArrow && arrow}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[9999] !w-fit !rounded-smooth-lg xl:max-h-[90vh]">
        <AlertDialogCancel className="hover:bg-transparent bg-transparent text-black/60 hover:text-black w-fit border-none ms-auto">
          <LucideX />
        </AlertDialogCancel>
        {form}
      </AlertDialogContent>
    </AlertDialog>
  );
}
