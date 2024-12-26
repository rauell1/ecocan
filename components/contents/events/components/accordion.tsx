"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import StyledText from "@/components/shared/styled-text";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

interface AccordionData {
  id: number;
  title: string;
  description: React.ReactNode;
}


const accordionData: AccordionData[] = [
  {
    id: 1,
    title: "Prevent ticket counterfeiting",
    description: (
      <div className="space-y-4">
        <p>
          Our systems are designed for maximum security with real time
          traceability. Leverage this to secure your ticket sales with
          serialised <HyperLink link="ECOCAN Security codes" href="/solutions/brand-protection#security-codes" />.
          The <HyperLink link="TnT" href="/solutions/brand-protection#tnt" /> will then monitor entry
          verification, and instantly alert of any irregularities
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Offer VIP Experience",
    description: (
      <>
        Together, we can roll out the Red Carpet for ECOnsumers, offering them
        priority access, allowing them to pre-order their drinks, maybe spoil
        them with a complimentary bottle, and so much more
      </>
    ),
  },
  {
    id: 3,
    title: "Streamline fan engagement",
    description: (
      <>
        Keep fans informed with proactive updates sent directly to their
        EcocanApp inbox.
      </>
    ),
  },
  {
    id: 4,
    title: "No more tech glitches",
    description: (
      <>
        High demand for your Bomb gig should be exciting, not stressful due to
        digital systems crashes! The TnT is built for reliability, ensuring
        smooth, anxiety-free access for fans. And peace of mind for you, even
        for the biggest events.
      </>
    ),
  },
];

export function AccordionDemo({
  onSelect,
}: {
  onSelect: (id: number) => void;
}) {
  const [openItem, setOpenItem] = useState("item-1");

  const handleItemClick = (id: number) => {
    onSelect(id);
    setOpenItem(`item-${id}`);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={openItem}
      onValueChange={(value) => setOpenItem(value)}
    >
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          value={`item-${item.id}`}
          className=""
        >
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center">
              <Image
                src="/assets/images/consumer/checkmark.svg"
                alt="checklist"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div className="w-full">
              <AccordionTrigger
                onClick={() => handleItemClick(item.id)}
                className={`text-xl`}
              >
                {item.title}
              </AccordionTrigger>
            </div>
          </div>
          <AccordionContent className="text-secondary text-base lg:w-10/12">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
