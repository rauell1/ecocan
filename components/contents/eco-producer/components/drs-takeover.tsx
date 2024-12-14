import CtaCard from "@/components/shared/cta-card/cta-card";
import React from "react";
import { Button } from "@/components/ui/button";
import { LucideArrowUpLeft, LucideArrowUpRight } from "lucide-react";
import TextWithComponent from "../../consumer/components/text-with-component";
import DrsPopup from "./drs-popup";

export default function DrsTakeover() {
  return (
    <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
      <CtaCard
        className="bg-[url('/assets/images/producer/drs-takeover.svg')] py-8 bg-cover rounded-[2rem] p-8 lg:ps-12 lg:mb-24"
        item={
          <TextWithComponent
            title={
              <h2 className="text-black text-[2.5rem] mb-3">
                DRS takeover
              </h2>
            }
            description={
              <div>
                <p className="text-black">
                Due to its efficacy, the Nordic-design DRS is rapidly <br/>becoming a near universal...
                </p>
              </div>
            }
            component={
              <DrsPopup/>
            }
          />
        }
      />
    </div>
  );
}
