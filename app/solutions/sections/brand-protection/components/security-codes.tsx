import React from "react";
import SecurityCodesSlider from "./security-codes-slider";
import Advantages from "./advantages";

export default function SecurityCodes() {
  return (
    <div className="bg-[#2F313F] flex flex-col px-8 justify-center py-24">
      <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0 space-y-24">
        <SecurityCodesSlider/>
        <Advantages/>
      </div>
    </div>
  );
}
