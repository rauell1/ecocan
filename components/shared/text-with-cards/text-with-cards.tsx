import React from "react";
import clsx from "clsx";

interface TextWithCardsProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  customCard?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export default function TextWithCards({
  title,
  description,
  subtitle,
  customCard,
  className
}: TextWithCardsProps) {
  return (
    <div className="">
      <div className={clsx("space-y-6", className)}>
        <h2 className="font-semibold text-5xl tracking-tight">{title}</h2>
        <div>
          <div>{subtitle}</div>
          <div className="text-xl text-secondary font-light">{description}</div>
        </div>
      </div>
      {customCard}
    </div>
  );
}
