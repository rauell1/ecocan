import CheckList from "@/components/contents/consumer/components/checklist";
import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import { ecocanMobile } from "@/lib/imageIndex";
import Image from "next/image";
import React from "react";
import EcocanAppFeatures from "./ecocan-app-features";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function EcocanApp() {
  return (
    <div className="space-y-12">
      <div className={`text-center space-y-4 ${nunitoSans.className}`}>
          <h2 className="text-3xl font-bold">EcocanApp</h2>
          <p>
            EcocanApp is our proprietary, free to use, mobile application, enabling
            ECOnsumers to easily and reliably authenticate genuine products. <br/>By
            simply scanning the ECOCAN Security codes printed on eligible products’
            packaging, to ensure their authenticity{" "}
          </p>
      </div>
      <EcocanAppFeatures/>
    </div>
  );
}
