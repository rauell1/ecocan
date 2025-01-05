import React from "react";

interface ItemListProps {
    id: number | string ;
    title?: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode
  }
  
  export const ItemList: React.FC<ItemListProps> = ({ id, title, description }) => (
    <div className="flex flex-row mb-4 gap-3">
      <div>
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#228B22] via-[#4ac63fcf] to-[#FFDD4C] rounded-full">
          <span className="text-xs text-white leading-none">{id}</span>
        </div>
      </div>
      <div className="pt-0">
        <span className="lg:text-lg text-secondary font-medium">{title}</span>
        <span className="text-secondary">{description}</span>
      </div>
    </div>
  );