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
import clsx from "clsx";

const content = [
  {
    title: "1. One-way PET plastics",
    description:
      "ECO-Recyclers sort them by colour, clean, then shred them into small pieces called flakes. The floatation technique is used to separate flakes from other materials based on density. Subsequently, the flakes are melted, then cooled into food-grade pellets which are used to make new PET bottles.",
  },
  {
    title: "2. One way glass bottles",
    description:
      "The bottles are sorted by colour, cleaned, and crushed into small pieces called cullet. That are mixed with sand, soda ash, and limestone, and melted in a furnace at about 1,700°C. Molten glass is moulded into new bottles, which are gradually cooled to prevent cracking.",
  },
  {
    title: "3. Aluminium cans",
    description:
      "Aluminium cans are sorted using magnets or eddy current separators, cleaned, shredded and melted in a furnace at a high temperatures of around 660°C. Molten aluminium is poured into moulds to create blocks called ingots. Which are rolled into thin sheets that are cut and shaped into new cans.",
  },
];

export default function ProcessPopup({
  className,
  showArrow = false,
  join = "eligble",
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
            `rounded-full bg-transparent text-primary hover:bg-transparent h-[3rem] py-3 px-0 text-base font-light underline underline-offset-[6px] hover:text-primary`,
            className
          )}
        >
          <span className="relative z-[999]">{join}</span>
          {showArrow && <LucideArrowRight className="ml-2" />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[9999] bg-[url('/assets/images/solutions/process-bg.svg')] bg-cover bg-center min-h-screen !max-w-[100vw] !rounded-none">
        <AlertDialogCancel className="hover:bg-transparent bg-transparent text-white/60 hover:text-white w-fit border-none ms-auto">
          <LucideX />
        </AlertDialogCancel>
        <div className="md:w-[420px] h-fit space-y-4 p-4 rounded-smooth-lg bg-white/20 text-white mx-auto">
          <h2 className="font-bold text-xl">1. One-way PET plastics</h2>
          <p className="text-[0.7875rem] xl:text-base">ECO-Recyclers sort them by colour, clean, then shred them into small pieces called flakes. The floatation technique is used to separate flakes from other materials based on density. Subsequently, the flakes are melted, then cooled into food-grade pellets which are used to make new PET bottles.</p>
        </div>
        <Image 
        src="/assets/images/solutions/recycle-img.svg"
        alt=""
        className="mx-auto w-[6.2rem] xl:w-[10rem] hidden lg:block"
        width={163}
        height={163}
        />
        <div className="lg:flex">
            <div className="md:w-[420px] h-fit space-y-4 p-4 rounded-smooth-lg bg-white/20 text-white mx-auto my-4 lg:my-0">
              <h2 className="font-bold text-xl">2. One way glass bottles</h2>
              <p className="text-[0.7875rem] xl:text-base">The bottles are sorted by colour, cleaned, and crushed into small pieces called cullet. That are mixed with sand, soda ash, and limestone, and melted in a furnace at about 1,700°C. Molten glass is moulded into new bottles, which are gradually cooled to prevent cracking.</p>
            </div>
            <div className="md:w-[420px] h-fit space-y-4 p-4 rounded-smooth-lg bg-white/20 text-white mx-auto">
              <h2 className="font-bold text-xl">3. Aluminium cans</h2>
              <p className="text-[0.7875rem] xl:text-base">Aluminium cans are sorted using magnets or eddy current separators, cleaned, shredded and melted in a furnace at a high temperatures of around 660°C. Molten aluminium is poured into moulds to create blocks called ingots. Which are rolled into thin sheets that are cut and shaped into new cans.</p>
            </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
