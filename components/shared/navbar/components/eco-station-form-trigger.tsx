import React from "react";
import Image from "next/image";

const EcoStationFormTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  return (
    <div ref={ref} {...props}>
      <div className="flex items-center gap-2">
        <Image
          src="/assets/icons/download.svg"
          alt=""
          className="grayscale group-focus:grayscale-0"
          width={16}
          height={16}
        />
        <span className="group-focus:text-primary group-focus:font-medium text-secondary">
          Eco-Station
        </span>
      </div>
      <p className="text-xs text-secondary px-6">
        Make money while facilitating recycling
      </p>
    </div>
  );
});

EcoStationFormTrigger.displayName = "EcoStationFormTrigger";
export default EcoStationFormTrigger;
