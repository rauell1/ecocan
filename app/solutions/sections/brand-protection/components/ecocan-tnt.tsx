"use client";

import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import { LucideChevronRight, LucideChevronUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CheckList from "@/components/contents/consumer/components/checklist";

export default function TnT() {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="transition-all duration-300 ease-in-out"
    >
      <p className="text-[#23262fcc] font-light w-11/12">
        The <HyperLink link="ECOCAN Track and Trace" href="/" /> is a robust
        cloud-based platform, that disrupts counterfeit trade by enabling
        AI-intelligent authentication, and real-time end-to-end traceability of
        genuine products. The TnT further deploys advanced data analytics tools
        to process the extensive data it collects, offering deeper insights and
        control
      </p>
      <div className="flex items-center mt-2">
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(true)}
          className="text-black underline underline-offset-4 inline-flex items-center group transition-all duration-300 hover:bg-transparent text-lg font-normal px-0"
        >
          Show More
          <LucideChevronRight
            size={18}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </div>
    </motion.div>
  );

  const steps = [
    {
      id: 1,
      step: (
        <div className="font-light">
          ECO-producers are empowered with comprehensive product traceability
          capabilities, enabling them to monitor their products&apos;
          circulation across the entire market, in real-time. This aids in
          immediate detection of illegal counterfeit and product diversion
          activities, allowing swift remedial action.
        </div>
      ),
    },
    {
      id: 2,
      step: (
        <div className="font-light">
          ECO-recyclers and ECO-producers are further facilitated to monitor in
          real-time, the collection and recycling of their post-consumer
          packaging.
        </div>
      ),
    },
    {
      id: 3,
      step: (
        <div className="font-light">
          ECOnsumers on their part gain free access to the most reliable and
          convenient product verification technology. Which empowers them to
          easily identify genuine products, thus safeguard their health.
        </div>
      ),
    },
  ];

  const expandedContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center mb-4">
        <button
          onClick={() => setIsExpanded(false)}
          className="text-black underline underline-offset-4 inline-flex items-center group transition-all duration-300"
        >
          Show Less
          <LucideChevronUp
            size={18}
            className="ml-1 transition-transform duration-300 group-hover:-translate-y-1"
          />
        </button>
      </div>
      <div className="text-[#23262fcc] font-light space-y-4">
        <CheckList items={steps} />,
      </div>
    </motion.div>
  );
  return (
    <section id="tnt">
      <ImageAndItem
        className="gap-12"
        image={
          <Image
            src="/assets/images/solutions/tnt.svg"
            alt="beach bottle"
            width={1000}
            height={1000}
            className="w-full h-full rounded-[2rem]"
          />
        }
        item={
          <TextWithCards
            className="w-full"
            title="ECOCAN TnT"
            description={
              <AnimatePresence mode="wait">
                {isExpanded ? expandedContent : initialContent}
              </AnimatePresence>
            }
          />
        }
      />
    </section>
  );
}
