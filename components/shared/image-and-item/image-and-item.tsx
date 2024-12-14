import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface ImageAndItemProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  item?: React.ReactNode;
  image?: React.ReactNode;
  className?: string;
  mainClassName?: string;
  fDivClassName? : string;
}

export default function ImageAndItem({
  title,
  subtitle,
  description,
  fDivClassName,
  item,
  mainClassName,
  className,
  image,
}: ImageAndItemProps) {
  return (
    <div className="">
      <div className={clsx("lg:text-center", fDivClassName)}>
        <div className="text-3xl lg:text-5xl font-bold">{title}</div>
        <div
          className={clsx(
             "text-secondary my-4 lg:my-6 text-base lg:text-xl",
            mainClassName
          )}
        >
          {subtitle}
        </div>
        <div className="text-accent font-light lg:text-xl">{description}</div>
      </div>
      <div className={clsx("flex flex-col-reverse lg:flex-row", className)}>
        <div className="relative lg:w-1/2 my-auto">{image}</div>
        <div className="lg:w-1/2 space-y-4 me-auto w-full">{item}</div>
      </div>
    </div>
  );
}
