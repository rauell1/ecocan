"use client"

import React, { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import HyperLink from "@/components/shared/hyperlink/hyperlink"
import Image from "next/image"
import JoinEcommunity from "../../../shared/join-ecommunity"
import ScanqrPopup from "@/components/shared/scan-qr"
import AppStoreButton from "@/components/shared/download-app"

interface AccordionData {
  id: number
  title: string
  description: React.ReactNode
}

const accordionData: AccordionData[] = [
  {
    id: 1,
    title: "Get EcocanApp today",
    description: (
      <div className="w-11/12 space-y-2">
        <div>
          <AppStoreButton
            className="h-0 font-normal lg:hidden"
            playStoreUrl="https://play.google.com/store/apps/details?id=com.superapp.ecocanapp"
            appStoreUrl="https://apps.apple.com/app/6502695438"
            buttonText="Download EcocanApp"
          />
          <ScanqrPopup
            join="Download EcocanApp"
            className="hidden h-0 font-normal lg:inline-flex"
          />{" "}
          here, sign up in under 2 minutes, and start your recycling rewards journey today.
        </div>
        <div>
          {" "}
          After registration, you can join the exclusive{" "}
          <JoinEcommunity
            className="text-primary h-0 border-none p-0 text-base font-normal underline underline-offset-4"
            showArrow={false}
            join="ECOmmunity here"
          />
          , to enjoy local discounts and member-only recycling perks.
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Scan to Authenticate",
    description: (
      <div className="w-11/12 space-y-2">
        <div>
          With ECO-scanner, you can quickly tell genuine drinks from counterfeits before you pay.
        </div>
        <div>
          Scan the ECOCAN Security code. If an authentication page does not appear, it&apos;s likely
          fake. <span className="text-red-500">DON&apos;T BUY IT!</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Return for recycling",
    description: (
      <div className="w-11/12 space-y-2">
        <div>
          After enjoying your drink, navigate to the nearest or your favourite{" "}
          <HyperLink link="ECO-Station" href="#faq" /> on{" "}
          <HyperLink link="ECOCAN Map" href="#faq" />
        </div>

        <div>
          While there, either hand your empties to <HyperLink link="Egents" href="#faq" />, or drop
          them into <HyperLink link="ECOcans" href="/#faq" />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Get paid, right away",
    description: (
      <div className="w-11/12 space-y-2">
        <div>
          Once your eligible empties are accepted, your refund lands instantly in your ECO-wallet.
        </div>
        <div>
          The app also tracks your CO2e savings and gives extra coupons from partner shops in Kenya.
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Your cash, Your call",
    description: (
      <div className="w-11/12 space-y-2">
        <div>
          You can order more drinks affordably from{" "}
          <span className="font-semibold">ECOCAN Market</span>, transfer deposits to friends, donate
          to charity, or cash out to your preferred channel.
        </div>
        <div>
          Take a look at the EcocanApp <ScanqrPopup join="tutorial" className="h-0" /> for more!
        </div>
      </div>
    ),
  },
]

export function AccordionDemo({ onSelect }: { onSelect: (id: number) => void }) {
  const [openItem, setOpenItem] = useState("item-1")

  const handleItemClick = (id: number) => {
    onSelect(id)
    setOpenItem(`item-${id}`)
  }

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
            <div className="flex h-12 w-12 items-center">
              <Image
                src="/assets/images/consumer/checkmark.svg"
                alt="checklist"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <div className="w-full">
              <AccordionTrigger onClick={() => handleItemClick(item.id)} className={`text-xl`}>
                {item.title}
              </AccordionTrigger>
            </div>
          </div>
          <AccordionContent className={`text-muted-foreground text-sm lg:text-base`}>
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
