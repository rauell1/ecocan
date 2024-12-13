import CtaCard from "@/components/shared/cta-card/cta-card";
import React from "react";
import { Button } from "@/components/ui/button";
import { LucideArrowUpLeft, LucideArrowUpRight } from "lucide-react";
import TextWithComponent from "../../consumer/components/text-with-component";

export default function DrsTakeover() {
  return (
    <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
      <CtaCard
        className="bg-[url('/assets/images/producer/drs-takeover.svg')] py-8 bg-cover rounded-[2rem] ps-12 mb-24"
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
              <div className="flex gap-4 group relative">
                <Button
                  variant="link"
                  className="px-0"
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
