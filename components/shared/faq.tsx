'use client';

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import { Button } from "../ui/button";

interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  initialDisplayCount?: number;
}

export function FaqSection({ faqs, title = "Frequently Asked Questions (FAQs)", initialDisplayCount = 3  }: FaqSectionProps) {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
  const [showAll, setShowAll] = useState(false);

  const displayedFaqs = showAll ? faqs : faqs.slice(0, initialDisplayCount);

  const toggleDisplay = () => {
    setShowAll(!showAll);
    setSelectedItem(undefined);
  };

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
        {displayedFaqs.map((faq, index) => {
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
      
      {faqs.length > initialDisplayCount && (
        <div className="mt-6 text-center">
          <Button
            className="text-primary hover:text-primary/90 rounded-full bg-secondary/10 hover:bg-secondary/15"
            onClick={toggleDisplay}
          >
            {showAll ? "View Less" : "View More"}
          </Button>
        </div>
      )}
    </section>
  );
}