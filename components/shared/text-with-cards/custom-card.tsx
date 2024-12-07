"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

interface Feature {
  id: number;
  name: React.ReactNode;
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

  const handleMouseEnter = (id: number) => {
    setExpandedFeature(id);
  };

  const handleMouseLeave = () => {
    setExpandedFeature(null);
  };

  return (
    <div className={`mt-8 grid w-full grid-cols-2 md:grid-cols-2 ${gap} lg:grid-cols-3`}>
      {features.map((feature) => {
        const isExpanded = expandedFeature === feature.id;
        return (
          <div
            key={feature.id}
            className={clsx(
              `text-left py-4 rounded-2xl ${feature.bgImg} relative`,
              'transition-all duration-300 ease-in-out',
              className
            )}
            onMouseEnter={() => handleMouseEnter(feature.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full h-16 overflow-hidden z-[999]">
              <Image
                src={feature.icon}
                alt={`${feature.name} icon`}
                className="w-auto"
                width={47}
                height={47}
              />
            </div>
            <div className="text-xl mb-1 font-bold z-[999]">
              {feature.name}
            </div>
            <div className="font-semibold max-w-sm text-sm z-[999]">
              {feature.question}
            </div>
            {feature.answer && (
              <div 
                className={clsx(
                  "mt-2 text-sm z-[999] transition-all duration-300",
                  isExpanded ? "opacity-100 max-h-full" : "opacity-0 max-h-0 overflow-hidden"
                )}
              >
                {feature.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesGrid;