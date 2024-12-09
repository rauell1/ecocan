import React from "react";

export default function Offering() {
  return (
    <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
      <div className="lg:flex items-center">
        <div className="lg:w-1/2">
          <h2 className="text-[2.5rem] font-semibold">
            Our <br />
            Offering
          </h2>
        </div>
        <div className="hidden lg:block w-1/2 h-[12.875rem]">
            <div className="bg-[url('/assets/images/solutions/offerings.svg')] bg-cover xl:w-[34.625rem] h-full bg-center bg-no-repeat flex items-center justify-center">
             <div className="text-[#777E90]">
                <p className="text-sm">Brand protection | Brand promotion | Packaging recycling</p>
                <p className="text-center text-2xl font-semibold">All in one</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
