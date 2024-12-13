import React from "react";
import clsx from "clsx";

interface CtaCardProps {
  item?: React.ReactNode;
  className?: string;
  image?: React.ReactNode;
  itemClass?: string;
}

export default function CtaCard({ item, className, image, itemClass }: CtaCardProps) {
  return (
    <div>
      <div
        className={clsx("flex mx-auto lg:mt-[6.25rem] rounded-smooth-lg lg:rounded-smooth-xl", className)}
      >
        <div className={clsx("self-center z-50 lg:w-1/2", itemClass)}>{item}</div>
        <div className="z-50 lg:w-1/2">{image}</div>
      </div>
    </div>
  );
}
