import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import clsx from "clsx";
import Image from "next/image";
import { ExpandableContent } from "./expandable-content";

interface WhiteBgCardProps {
  title?: string;
  content?: React.ReactNode;
  className?: string;
  iconPath: string;
  footer?: React.ReactNode;
  expandable?: boolean;
  hasGradientBorder?: boolean;
}

export const WhiteBgCard = ({
  iconPath,
  content,
  className = "",
  title,
  footer,
  expandable = false,
  hasGradientBorder = false,
}: WhiteBgCardProps) => {
  return (
    <div
      className={clsx(
        "relative rounded-smooth-lg h-fit",
        hasGradientBorder &&
          "p-[2px] hover:bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C]",
        className
      )}
    >
      <Card
        className={clsx(
          "rounded-smooth-lg overflow-hidden h-full",
          hasGradientBorder ? "border-none bg-white" : "border-2"
        )}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">
            <Image
              src={iconPath}
              alt="green icon"
              className="w-12 h-12"
              width={50}
              height={40}
            />
            {title}
          </CardTitle>
        </CardHeader>
        <ExpandableContent
          className="text-secondary font-light px-4"
          expandable={expandable}
        >
          {content}
        </ExpandableContent>
        <CardFooter>{footer}</CardFooter>
      </Card>
    </div>
  );
};
