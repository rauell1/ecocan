import React from "react";
import ImageAndItem from "./image-and-item/image-and-item";
import Image from "next/image";
import { ItemList } from "../contents/courier/components/ItemList";

interface HowToItem {
  id: number;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

interface HowToProps {
  itemsTitle: React.ReactNode;
  itemsSubtitle?: string;
  items: HowToItem[];
  imageSrc: string;
  imageAlt: string;
}

const HowTo: React.FC<HowToProps> = ({
  itemsTitle,
  itemsSubtitle,
  items,
  imageSrc,
  imageAlt,
}) => {
  const Item = () => (
    <div className="lg:w-[31.3rem] lg:h-[33.75rem] ms-auto flex flex-col justify-center">
      <div className="mt-1 mb-8">
        <p className="text-3xl lg:text-[2rem] font-medium pb-1">{itemsTitle}</p>
        <p className="lg:text-xl text-secondary font-light">{itemsSubtitle}</p>
      </div>
      {items.map((data) => (
        <ItemList
          key={data.id}
          title={data.title}
          description={data.description}
          id={data.id}
          icon={data.icon}
        />
      ))}
    </div>
  );

  return (
    <div className="py-8 lg:pt-24 lg:pb-36 bg-[#2F313F] text-white relative">
      <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
        <ImageAndItem
        className="lg:gap-12 xl:gap-0"
          item={<Item />}
          image={
            <Image
              src={imageSrc}
              className="w-full h-[33.5rem] hidden lg:block"
              width={500}
              height={100}
              alt={imageAlt}
            />
          }
        />
      </div>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="absolute bottom-0 z-50 hidden lg:block"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,80L1440,0L1440,340L0,340Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 120"
            className="absolute bottom-0 z-50 hidden md:block lg:hidden"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,100L600,0L600,600L0,600Z"
            ></path>
          </svg>
    </div>
  );
};

export default HowTo;
