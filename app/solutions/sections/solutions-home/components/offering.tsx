import React from "react";

export default function Offering() {
  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
      <div className="md:flex items-center">
        <div className="md:w-1/3 xl:w-1/2">
          <h2 className="text-5xl lg:w-1/2 leading-snug font-semibold text-center md:text-start">
            Our
            Offering
          </h2>
          <div className="text-[#777E90] md:hidden">
                <p className="text-sm text-center my-2">Brand protection | Brand promotion | Packaging recycling</p>
                <p className="text-center text-2xl font-semibold">All in one</p>
            </div>
        </div>
        <div className="hidden md:block w-10/12 lg:w-7/12 ms-auto h-[12.875rem]">
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
