import HyperLink from "@/components/shared/hyperlink/hyperlink";
import { Button } from "@/components/ui/button";
import { LucideArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SellMore() {
  return (
    <div className="pb-24">
      <div className="max-w-[69.375rem] mx-auto">
        <div className="bg-[url('/assets/images/eco-station/success-pride.svg')] bg-cover bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/50 after:opacity-50 after:-z-10 overflow-hidden z-50 rounded-[2rem] h-[33.75rem] flex flex-col justify-center">
          <div className="lg:w-1/2 text-center lg:text-start lg:ms-auto text-white z-20 mx-8">
            <h2 className="text-[2rem] lg:text-5xl font-semibold">
              Your success, our pride
            </h2>
            <p className="my-4 text-xl font-light">
              Our vision of re-imagining sustainability for the better extends
              to empowering communities to thrive. And this is reflected in our
              commitment to connect passionate entrepreneurs like yourself, with
              the ECO-friendly ECOmmunity, for sustainable commerce.
            </p>
            <Button variant="link" className="group px-0">Learn more <LucideArrowUpRight className="group-hover:scale-125 ml-2"/></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
