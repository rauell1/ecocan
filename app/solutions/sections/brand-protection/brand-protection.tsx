import React from "react";
import GlobalCountryExample from "./components/global-country-example";
import Image from "next/image";
import {
  serialized,
} from "@/lib/imageIndex";
import WasteLitter from "./components/waste-litter";
import Intervention from "./components/intervention";
import TnT from "./components/ecocan-tnt";
import SecurityCodes from "./components/security-codes";
import EcocanApp from "./components/ecocan-app";

export default function BrandProtection() {
  return (
    <div className="space-y-24">
      <GlobalCountryExample />
      {/* waste litter */}
      <WasteLitter />
      {/* much needed intervention */}
      <Intervention />
      {/* ecocan tnt */}
      <TnT />
      <SecurityCodes />
      <Image
        src={serialized}
        width={1000}
        height={1000}
        alt="serialized and non-serialized"
        className="w-full h-full shadow-lg rounded-2xl"
        priority
      />
      {/* more on the ecocan app */}
      <EcocanApp />
    </div>
  );
}
