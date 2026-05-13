"use client"

import React, { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

interface AccordionData {
  id: number
  title: string
  description: React.ReactNode
}

const accordionData: AccordionData[] = [
  {
    id: 1,
    title: "One-time deposit issuance",
    description: (
      <div className="w-11/12 space-y-2">
        <div>
          The blockchain-compatible TnT technology protects deposit refunds across the ECO-system,
          ensuring they are redeemed only once. With AI-enhanced real-time validation, deposits are
          accurately recorded, and instantly refunded to the rightful ECOnsumer, preventing
          front-end fraud.
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Empties devaluation",
    description: (
      <div className="w-11/12 space-y-2">
        Once empties are accepted, the attached ECOCAN Security codes are immediately
        &ldquo;killed&rdquo;/disabled to prevent duplicate verification. ECOcans then compact the
        empties on the spot, ensuring they cannot be redeemed twice. This is followed by uploading
        unique transaction IDs to the TnT database in real-time, providing airtight security against
        back-end fraud.
      </div>
    ),
  },
  {
    id: 3,
    title: "Stay on top of the game",
    description: (
      <div className="w-11/12 space-y-2">
        <div>
          With TnT diagnostics, you can conveniently monitor Pure ECOcans&apos; performance remotely
          from your mobile devices, receiving real-time status updates. This allows you to track
          daily usage, anticipate trends, and troubleshoot any issues ahead of time, keeping device
          uptime at its best.
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Actionable Operational insights",
    description: (
      <div className="w-11/12 space-y-2">
        Leverage TnT&apos;s data on usage patterns, daily activity, and weekly trends to streamline
        staffing and optimize operations. These insights also help shape effective in-store or
        external targeted marketing strategies
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
              <AccordionTrigger
                onClick={() => handleItemClick(item.id)}
                className={`text-start text-xl`}
              >
                {item.title}
              </AccordionTrigger>
            </div>
          </div>
          <AccordionContent className={`text-sm text-muted-foreground lg:text-base`}>
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
