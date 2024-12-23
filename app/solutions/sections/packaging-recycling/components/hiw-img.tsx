import clsx from "clsx";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useState } from "react";
import { LucidePlus, LucidePlusCircle, LucideX } from "lucide-react";

const tooltipContent = [
  {
    id: 1,
    content:
      "ECO-producers purchase & utilise recycled bottles to package new products hence increasing their resource efficiency, & cutting cost of production",
    path: "/assets/images/solutions/recycle-icon.svg",
  },
  {
    id: 2,
    content:
      "ECO-Producers print ECOCAN Security Codes onto eligible products, and attach applicable deposit money. They then inform ECOCAN of the volumes they place on the market",
    path: "/assets/images/solutions/industry-icon.svg",
  },
  {
    id: 3,
    content:
      "Eligible products carrying ECOCAN Security Codes & deposit money are then delivered to retailers for sale",
    path: "/assets/images/solutions/shop-icon.svg",
  },
  {
    id: 4,
    content:
      "ECOnsumers purchase eligible products paying Actual price + refundable deposit amount",
    path: "/assets/images/solutions/cart-icon.svg",
  },
  {
    id: 5,
    content:
      "After enjoying the drink, ECOnsumers return empties to ECO-Stations to reclaim the deposit money.",
    path: "/assets/images/solutions/building-icon.svg",
  },
  {
    id: 6,
    content:
      "ECOuriers pick up retuned empties and drop them off to ECO-Recyclers",
    path: "/assets/images/solutions/cycle-icon.svg",
  },
  {
    id: 7,
    content:
      "ECO-Recyclers process the empties into new bottles ready for filling fresh drinks. Hence reducing reliance on virgin material, cutting CO2 emissions & energy consumption",
    path: "/assets/images/solutions/warehouse-icon.svg",
  },
];

interface IconWrapperProps {
  className?: string;
  content: string;
  imagePath: string;
}

const IconWrapper = ({ className, content, imagePath }: IconWrapperProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={clsx(
              className,
              "p-1 absolute rounded-full shadow-md hover:shadow-xl cursor-pointer group bg-white"
            )}
          >
            <div className="p-1 shadow-md rounded-full group-hover:bg-primary/20">
              <Image
                src={imagePath}
                alt="icon"
                className="p-1"
                width={32}
                height={32}
              />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          sideOffset={10}
          className="w-[220px] text-xs text-start"
        >
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default function HiwImage() {
  const positions = [
    "top-[5.5rem] left-16",
    "-top-4 left-[51.5%] -translate-x-1/2",
    "top-[5.5rem] right-8 -translate-x-1/2",
    "top-1/2 -right-2 -translate-y-1/2",
    "bottom-[5.5rem] right-8 -translate-x-1/2",
    "-bottom-4 left-[52%] -translate-x-1/2",
    "bottom-[5.75rem] left-[4.5rem]",
  ];

  const [clickedIcons, setClickedIcons] = useState({
    depositTransfer1: false,
    depositPayment: false,
    depositTransfer2: false,
  });

  const toggleIcon = (key: keyof typeof clickedIcons) => {
    setClickedIcons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="w-fit mx-auto relative">
      <Image
        src="/assets/images/solutions/works-circle.svg"
        alt="how it works"
        className="mx-auto"
        width={640}
        height={615}
      />
      {tooltipContent.map((item, index) => (
        <IconWrapper
          key={item.id}
          className={positions[index]}
          content={item.content}
          imagePath={item.path}
        />
      ))}
      <div className="absolute top-12 right-[30%] cursor-pointer">
        <div className="flex items-center gap-2 group">
          <p className={clsx(
            "text-xs transition-opacity duration-200",
            clickedIcons.depositTransfer1 ? "opacity-100" : "opacity-0"
          )}>
            Deposit <br/>transfer
          </p>
          <div 
            onClick={() => toggleIcon('depositTransfer1')}
            className="rounded-full bg-[#B2B2B2] p-1"
          >
            {clickedIcons.depositTransfer1 ? (
              <LucideX className="w-5 h-5 text-[#757575]" />
            ) : (
              <LucidePlus className="w-5 h-5 text-[#757575] rotate-180" />
            )}
          </div>
        </div>
      </div>

      {/* Second plus icon */}
      <div className="absolute top-1/3 right-[7%] cursor-pointer">
        <div className="flex items-center gap-2">
          <p className={clsx(
            "text-xs transition-opacity duration-200",
            clickedIcons.depositPayment ? "opacity-100" : "opacity-0"
          )}>
            Deposit <br/>payment
          </p>
          <div 
            onClick={() => toggleIcon('depositPayment')}
            className="rounded-full bg-[#B2B2B2] p-1"
          >
            {clickedIcons.depositPayment ? (
              <LucideX className="w-5 h-5 text-[#757575]" />
            ) : (
              <LucidePlus className="w-5 h-5 text-[#757575]" />
            )}
          </div>
        </div>
      </div>

      {/* Third plus icon */}
      <div className="absolute top-[63%] right-[8%] cursor-pointer">
        <div className="flex items-center gap-2">
          <p className={clsx(
            "text-xs transition-opacity duration-200",
            clickedIcons.depositTransfer2 ? "opacity-100" : "opacity-0"
          )}>
            Deposit <br/>transfer
          </p>
          <div 
            onClick={() => toggleIcon('depositTransfer2')}
            className="rounded-full bg-[#B2B2B2] p-1"
          >
            {clickedIcons.depositTransfer2 ? (
              <LucideX className="w-5 h-5 text-[#757575]" />
            ) : (
              <LucidePlus className="w-5 h-5 text-[#757575]" />
            )}
          </div>
        </div>
      </div>

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="absolute top-1/2 -translate-y-1/2 left-[52%] -translate-x-1/2 p-4 rounded-full bg-white shadow-lg hover:shadow-xl group cursor-pointer">
              <div className="p-4 rounded-full bg-white shadow-lg">
                <div className="p-2 rounded-full bg-white shadow-lg group-hover:bg-primary/20">
                  <Image
                    src="/assets/images/solutions/ecocan-logo.svg"
                    alt="how it works"
                    className="px-1 py-3"
                    width={85}
                    height={85}
                  />
                </div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            sideOffset={10}
            className="w-[220px] text-xs text-start"
          >
            <p>
              Producers attach ECOCAN Security codes onto eligible products
              during production, and attach applicable deposit amount. They then
              inform ECOCAN of the volumes they intend to place on the market
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Image
        src="/assets/images/solutions/legend.svg"
        alt="how it works"
        className="absolute bottom-0 -right-36"
        width={123}
        height={144}
      />
    </div>
  );
}
