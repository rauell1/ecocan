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
      <div className={clsx("text-center", fDivClassName)}>
        <h2 className="text-[2rem] font-bold">{title}</h2>
        <p
          className={clsx(
             "text-[#23262FCC] my-6",
            mainClassName
          )}
        >
          {subtitle}
        </p>
        <p className="text-accent font-light text-lg">{description}</p>
      </div>
      <div className={clsx("flex flex-col-reverse lg:flex-row", className)}>
        <div className="relative lg:w-1/2">{image}</div>
        <div className="lg:w-1/2 space-y-4 me-auto w-full">{item}</div>
      </div>
    </div>
  );
}
