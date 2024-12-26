import HyperLink from "@/components/shared/hyperlink/hyperlink";
import React from "react";

export default function Experts() {
  return (
    <div className="h-[29rem] lg:h-[14.75rem] mx-auto bg-cover bg-center relative bg-[url('/assets/images/events/sustainable_experts.jpeg')]">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <p className="text-white/80 text-lg lg:text-xl lg:w-3/5 mx-auto font-normal leading-[24.2px] tracking-[-0.02em] text-center">
          Wherever there’re empties, we’re definitely there! And while the fans
          revel in your memorable ECO-Event, and you enjoy peace of mind knowing
          things are running smoothly. We’ll be working diligently behind the
          scenes to ensure eligible empties are efficiently collected through
          the{" "}
          <HyperLink link="ECOCAN DRS" href="/solutions/packaging-recycling" />,
          and sent for closed-loop recycling recycling.
        </p>
      </div>
    </div>
  );
}
