import CtaCard from "@/components/shared/cta-card/cta-card";
import React from "react";
import TextWithComponent from "./text-with-component";
import { Button } from "@/components/ui/button";
import { LucideArrowUpLeft, LucideArrowUpRight } from "lucide-react";

export default function EnergyEfficiency() {
  return (
    <div>
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
                <Button
                  variant="ghost"
                  className="bg-transparent hover:bg-transparent border-white text-white hover:text-white rounded-full h-[3rem] py-3 px-0 relative after:absolute after:h-[1px] after:w-3/4 after:left-0 after:bottom-2 after:bg-white after:content-[''] after:z-10 text-base"
                >
                  Learn more
                  <LucideArrowUpRight className="ml-2 group-hover:scale-125 transition-all"/>
                </Button>
              </div>
            }
          />
        }
      />
    </div>
  );
}
