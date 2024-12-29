import React from "react";
import WasteLitter from "./components/waste-litter";
import Intervention from "./components/intervention";
import TnT from "./components/ecocan-tnt";
import SecurityCodes from "./components/security-codes";
import EcocanApp from "./components/ecocan-app";
import Heading from "./components/heading";

export default function BrandProtection() {
  return (
    <>
      <div className="space-y-12 lg:space-y-24">
        <Heading />
        <div className="max-w-[72rem] mx-auto px-4 xl:px-0 lg:space-y-24">
          <WasteLitter />
          <Intervention />
          <TnT />
        </div>
      </div>
      <div className="pt-24">
        <SecurityCodes />
        <EcocanApp />
      </div>
    </>
  );
}
