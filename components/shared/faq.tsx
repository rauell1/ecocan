"use client"

import React, { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ImageAndItem from "@/components/shared/image-and-item/image-and-item"
import { Button } from "../ui/button"

interface FaqItem {
  question: string
  answer: string | React.ReactNode
}

interface FaqSectionProps {
  faqs: FaqItem[]
  title?: string
  initialDisplayCount?: number
}

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions (FAQs)",
  initialDisplayCount = 3,
}: FaqSectionProps) {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined)
  const [showAll, setShowAll] = useState(false)

  const displayedFaqs = showAll ? faqs : faqs.slice(0, initialDisplayCount)

  const toggleDisplay = () => {
    setShowAll(!showAll)
    setSelectedItem(undefined)
  }

  return (
    <section className="mx-auto max-w-5xl" id="faq">
      <ImageAndItem title={title} />
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        value={selectedItem}
        onValueChange={setSelectedItem}
      >
        {displayedFaqs.map((faq, index) => {
          const itemValue = `item-${index + 1}`
          const isSelected = selectedItem === itemValue

          return (
            <AccordionItem
              key={index}
              value={itemValue}
              className={`overflow-hidden rounded-xl border-2 border-transparent shadow-lg ${
                isSelected ? "border-2 border-primary" : ""
              }`}
            >
              <AccordionTrigger className="flex w-full items-center justify-between p-8 hover:bg-gray-50">
                <span className="text-left text-xl font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="bg-white p-8">
                <p className="text-lg text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>

      {faqs.length > initialDisplayCount && (
        <div className="mt-6 text-center">
          <Button
            className="rounded-full bg-secondary/10 text-primary hover:bg-secondary/15 hover:text-primary/90"
            onClick={toggleDisplay}
          >
            {showAll ? "View Less" : "View More"}
          </Button>
        </div>
      )}
    </section>
  )
}
