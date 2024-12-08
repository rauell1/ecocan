"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";

const faqData = [
  {
    question: "What is Ecocan and how do I recycle?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How often do I do returns?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "How much can I earn with Ecocan?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    question: "Why should I recycle?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
];

export function FaqSection() {
  const [selectedItem, setSelectedItem] = useState("item-1");

  return (
    <div className="max-w-4xl mx-auto">
      <ImageAndItem title="Frequently Asked Questions (FAQs)"/>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        value={selectedItem}
        onValueChange={setSelectedItem}
      >
        {faqData.map((faq, index) => {
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
                <span className="text-lg font-medium text-left ">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="p-8 bg-white">
                <p className="text-gray-600 w-4/5">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
