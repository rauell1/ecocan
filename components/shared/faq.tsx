'use client';

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";

interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
}

export function FaqSection({ faqs, title = "Frequently Asked Questions (FAQs)" }: FaqSectionProps) {
  const [selectedItem, setSelectedItem] = useState("item-1");

  return (
    <section className="max-w-5xl mx-auto" id="faq">
      <ImageAndItem title={title} />
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        value={selectedItem}
        onValueChange={setSelectedItem}
      >
        {faqs.map((faq, index) => {
          const itemValue = `item-${index + 1}`;
          const isSelected = selectedItem === itemValue;

          return (
            <AccordionItem
              key={index}
              value={itemValue}
              className={`rounded-xl overflow-hidden shadow-lg border-2 border-transparent ${
                isSelected ? "border-primary border-2" : ""
              }`}
            >
              <AccordionTrigger className="flex justify-between items-center p-8 hover:bg-gray-50 w-full">
                <span className="text-xl font-medium text-left">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="p-8 bg-white">
                <p className="text-secondary text-lg">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}