"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import Image from "next/image";
import JoinEcommunity from "../../../shared/join-ecommunity";
import ScanqrPopup from "@/components/shared/scan-qr";
import AppStoreButton from "@/components/shared/download-app";

interface AccordionData {
  id: number;
  title: string;
  description: React.ReactNode;
}

const accordionData: AccordionData[] = [
  {
    id: 1,
    title: "Get EcocanApp today",
    description: (
      <div className="space-y-2 w-11/12">
        <div>
          <AppStoreButton
            className="h-0 font-normal"
            playStoreUrl="https://play.google.com/store/apps/details?id=com.superapp.ecocanapp"
            appStoreUrl="https://apps.apple.com/app/6502695438"
            buttonText="Download EcocanApp"
          />
          {" "}
          here, sign up in under 2 minutes, and start your sustainability
          journey today!
        </div>
        <div>
          {" "}
          After registration, you can join the exclusive{" "}
          <JoinEcommunity
            className="p-0 border-none text-primary text-base underline underline-offset-4 font-normal h-0"
            showArrow={false}
            join="ECOmmunity here"
          />
          , to enjoy jaw-dropping discounts, and VIP benefits.
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Scan to Authenticate",
    description: (
      <div className="space-y-2 w-11/12">
        <div>
          With ECO-scanner, you can easily and securely tell what&apos;s real
          from fake.
        </div>
        <div>
          Scan attached ECOCAN Security codes, and an authentication page will
          pop up. If it doesn&apos;t, it&apos;s a fake!{" "}
          <span className="text-red-500">DON&apos;T BUY IT!</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Return for recycling",
    description: (
      <div className="space-y-2 w-11/12">
        <div>
          After enjoying your drink, navigate to the nearest or your favourite{" "}
          <HyperLink link="ECO-Station" href="#faq" /> on{" "}
          <HyperLink link="ECOCAN Map" href="#faq" />
        </div>

        <div>
          While there, either hand your empties to{" "}
          <HyperLink link="Egents" href="#faq" />, or drop them into{" "}
          <HyperLink link="ECOcans" href="/#what_are_ecocans" />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Get paid, right away",
    description: (
      <div className="space-y-2 w-11/12">
        <div>
          Once your eligible empties are accepted, you&apos;ll get paid
          instantly, right into your ECO-wallet!
        </div>
        <div>
          Additionally, the App will inform you of the CO2e reduction & energy
          savings you&apos;ve made. And we&apos;ll reward your ECO-friendly
          efforts with exclusive discounts
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Your cash, Your call",
    description: (
      <div className="space-y-2 w-11/12">
        <div>
          You can order more drinks affordably from{" "}
          <span className="font-semibold">ECOCAN Market</span>, transfer
          deposits to friends, donate to charity, or cash out.
        </div>
        <div>
          Take a look at the EcocanApp{" "}
          <ScanqrPopup join="tutorial" className="h-0" /> for more!
        </div>
      </div>
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
        <AccordionItem key={item.id} value={`item-${item.id}`}>
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
          <AccordionContent className={`text-secondary text-sm lg:text-base`}>
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
