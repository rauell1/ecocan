import { LucideStar } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface TestimonialCardProps {
  image: string;
  name?: string;
  surname: string;
  testimony: string;
  title?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, surname, testimony, title }) => {
  return (
    <div className="max-w-[504px] rounded-xl overflow-hidden shadow-lg p-4 bg-[#6b6b7867]">
      <div className="flex items-center mb-4">
        <Image className="w-[2.5rem] h-[2.5rem] rounded-full mr-1" width={1000} height={1000} src={image} alt={`${name} ${surname}`} />
        <div className="text-base font-bold leading-5 text-white">
          {name} {surname}
        </div>
        <div className="flex ms-auto">
          <LucideStar size={18} className="text-[#FFDD4C] fill-[#FFDD4C]"/>
          <LucideStar size={18} className="text-[#FFDD4C] fill-[#FFDD4C]"/>
          <LucideStar size={18} className="text-[#FFDD4C] fill-[#FFDD4C]"/>
          <LucideStar size={18} className="text-[#FFDD4C] fill-[#FFDD4C]"/>
          <LucideStar size={18} className="text-[#FFDD4C] fill-[#FFDD4C]"/>
        </div>
      </div>
      <p className="text-white/60 text-sm font-normal leading-6 mb-4">
        {testimony}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-white/60 text-sm font-normal leading-5">{title}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;