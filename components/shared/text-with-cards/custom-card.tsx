"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/lib/useMediaQuery";

interface Feature {
  id: number;
  name?: React.ReactNode;
  question?: React.ReactNode;
  answer?: React.ReactNode;
  icon: string;
  bgImg?: string;
}

interface FeaturesGridProps {
  features: Feature[];
  className?: string;
  gap?: string;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  features,
  className,
  gap = "gap-1"
}) => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)") ?? false;
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = (id: number) => {
    setExpandedFeature(id);
  };

  const handleMouseLeave = () => {
    setExpandedFeature(null);
  };

  const FeatureCard = ({ feature }: { feature: Feature }) => {
    const isExpanded = expandedFeature === feature.id;
    
    return (
      <div
        className={clsx(
          `text-left p-4 rounded-smooth-lg lg:rounded-smooth-xl ${feature.bgImg} relative`,
          'transition-all duration-300 ease-in-out',
          'h-full',
          className
        )}
        onMouseEnter={() => handleMouseEnter(feature.id)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-[2.9375rem] h-[2.9375rem] overflow-hidden relative z-[999]">
          <Image
            src={feature.icon}
            alt={`${feature.name} icon`}
            className="w-full h-full"
            width={47}
            height={47}
          />
        </div>
        <div className="text-xl my-4 font-semibold relative z-[999]">
          {feature.name}
        </div>
        <div className="max-w-sm relative z-[999]">
          {feature.question}
        </div>
        <AnimatePresence>
          {isExpanded && feature.answer && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-2 relative z-[999] font-light overflow-hidden hidden lg:block"
            >
              {feature.answer}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-2 relative z-[999] font-light overflow-hidden lg:hidden">
          {feature.answer}
        </div>
      </div>
    );
  };

  if (!mounted) return null;

  if (isLargeScreen) {
    return (
      <div className={`mt-8 grid xl:w-[69.375rem] grid-cols-3 ${gap}`}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full mt-8">
      <div className="w-full overflow-hidden">
        <Carousel className="w-full">
          <div className="relative">
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature) => (
                <CarouselItem 
                  key={feature.id} 
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <FeatureCard feature={feature} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-8 right-20">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturesGrid;