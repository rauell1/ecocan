import CtaCard from "@/components/shared/cta-card/cta-card";
import React from "react";
import TextWithComponent from "./text-with-component";
import { Button } from "@/components/ui/button";
import { LucideArrowUpRight } from "lucide-react";
import HyperLink from "@/components/shared/hyperlink/hyperlink";

export default function EnergyEfficiency() {
  return (
    <div className="hidden lg:block">
      <CtaCard
        className="bg-[url('/assets/images/consumer/energy-efficiency.svg')] h-[33.75rem] bg-cover bg-center rounded-[2rem] ps-12 mb-24"
        item={
          <TextWithComponent
            title={
              <h2 className="text-white text-[2.5rem] mb-3">
                Energy efficiency
              </h2>
            }
            description={
              <div className="space-y-4">
                <p className="text-white">
                  1. Did you know that recycling one (1) aluminium can saves
                  enough energy to power your TV for 3 whole hours? .
                </p>
                <p className="text-white">
                  2. And the recycling process only uses 5% of the energy needed to make a new can?.
                </p>
              </div>
            }
            component={
              <div className="flex gap-4 group relative">
                <HyperLink href="/solutions/packaging-recycling#fun-facts" link="Learn more" className="text-white hover:text-white font-medium"/>
              </div>
            }
          />
        }
      />
    </div>
  );
}
