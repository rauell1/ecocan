import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionItemData {
  id: string
  question: React.ReactNode
  answer: React.ReactNode
}

interface ReusableAccordionProps {
  items: AccordionItemData[]
  className?: string
  defaultOpenItems?: string[]
}

export function ReusableAccordion({ items, className, defaultOpenItems }: ReusableAccordionProps) {
  return (
    <Accordion
      type="multiple"
      defaultValue={defaultOpenItems || (items[0]?.id ? [items[0].id] : [])}
      className={className}
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="w-full">
          <AccordionTrigger className="text-start text-xl">{item.question}</AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
