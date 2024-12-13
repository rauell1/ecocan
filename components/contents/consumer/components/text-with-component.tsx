import PrimaryButton from "@/components/shared/primary-btn";
import clsx from "clsx";
import React from "react";

interface TextWithComponentProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  component?: React.ReactNode;
  className?: string;
}

export default function TextWithComponent({
  title,
  description,
  component,
  className,
}: TextWithComponentProps) {
  return (
    <>
      <div className={clsx("space-y-4", className)}>
        <div className="text-3xl lg:text-5xl font-semibold">{title}</div>
        <div className="text-secondary lg:text-xl">{description}</div>
        {component && <div className="mt-5">{component}</div>}
      </div>
    </>
  );
}
