import HyperLink from "@/components/shared/hyperlink/hyperlink";
import React from "react";

export default function Experts() {
  return (
    <div className="h-[29rem] lg:h-[14.75rem] mx-auto bg-cover bg-center relative bg-[url('/assets/images/events/sustainable_experts.jpeg')]">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-[2.5rem] lg:text-5xl leading-[3.631rem] font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#228B22] via-[#FFDD4C] to-[#FFDD4C] mb-4">
          We are sustainability experts
        </h1>
        <p className="text-white/80 text-lg lg:text-xl lg:w-3/5 mx-auto font-normal leading-[24.2px] tracking-[-0.02em] text-center">
          While the fans revel in your memorable ECO-Event, and you enjoy the
          peace of mind knowing things are running smoothly. We&apos;ll be working
          diligently behind the scenes to ensure eligible empties are
          efficiently collected through the{" "}
          <HyperLink link="ECOCAN DRS" href="/solutions/packaging-recycling" />, and sent for closed-loop
          recycling.
        </p>
      </div>
    </div>
  );
}
