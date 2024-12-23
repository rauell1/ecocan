import React from "react";
import { Button } from "../ui/button";
import { LucideDownload } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface PrimaryButtonProps {
  buttonText?: string;
  buttonIcon?: JSX.Element;
  buttonLink?: string;
  className?: string;
}

export default function PrimaryButton({
  buttonText = "Download App",
  buttonIcon,
  buttonLink = "/",
  className,
}: PrimaryButtonProps) {
  return (
    <Link href={buttonLink}>
      <Button
        className={clsx(
          "rounded-full relative h-[3rem] mx-auto md:mx-0 w-fit py-3 px-8 overflow-hidden text-white transition-all space-x-4 hover:bg-white",
          className
        )}
      >
        {buttonIcon}
        <span className="relative z-10 text-base">{buttonText}</span>
      </Button>
    </Link>
  );
}
