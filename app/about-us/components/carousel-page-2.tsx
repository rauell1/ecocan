import React from "react";
import WhoWeAre from "./who-we-are";

export default function CarouselPage2() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="max-w-[72rem] min-h-screen mx-auto flex items-center lg:my-0 lg:gap-12">
        <div className="px-4 xl:px-0 py-24 z-[999]">
          <WhoWeAre />
        </div>
      </div>
    </div>
  );
}
