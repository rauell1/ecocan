import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

interface TimelineItem {
  image: string;
  title: string;
  description?: React.ReactNode;
}

interface TimelineProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ title, subtitle, items, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const lineHeight = `calc(100% - ${items.length > 1 ? '4rem' : '2rem'})`;

  return (
    <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
      <h2 className="text-3xl md:text-5xl font-bold mb-2">{title}</h2>
      <p className="lg:text-xl text-secondary my-6 lg:my-12">{subtitle}</p>

      <div className="relative hidden md:block">
        <div 
          className={clsx(
            "absolute left-[45%] md:left-[40%] top-0 w-[1px] bg-white transform -translate-x-1/2",
            className
          )}
          style={{ height: lineHeight }}
        ></div>

        {items.map((item, index) => (
          <div 
            key={index} 
            className="group relative mb-8 hover:cursor-pointer"
            onMouseEnter={() => setActiveIndex(index)}
          >
            {/* Container for the entire row */}
            <div className="flex items-stretch">
              {/* Left side with image */}
              <div className="w-2/5 md:pr-8">
                <div className="relative md:w-11/12">
                  <div className="w-full h-36 md:h-[12.5rem] rounded-smooth lg:rounded-smooth-lg overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={clsx(
                        "object-cover object-bottom transition-all duration-300",
                        activeIndex === index ? "" : "grayscale"
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Connector dot */}
              <div className="absolute left-[45%] md:left-[40%] top-0 -translate-x-1/2">
                <div className={clsx(
                  "w-3 h-3 bg-white transition-transform duration-300",
                  activeIndex === index ? "scale-150" : ""
                )}></div>
              </div>

              {/* Right side with content */}
              <div className="w-3/5">
                <div className="w-10/12 ms-auto md:mx-auto transition-colors duration-300">
                  <h3 className={clsx(
                    "font-bold mb-2 transition-colors duration-300 lg:w-2/5",
                    activeIndex === index ? "text-white" : "text-white/70"
                  )}>
                    {item.title}
                  </h3>
                  <div className={clsx(
                    "font-light transition-colors duration-300 text-sm lg:text-base",
                    activeIndex === index ? "text-white" : "text-white/70"
                  )}>
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;