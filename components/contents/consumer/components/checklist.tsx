import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface CheckListItem {
  id: number | string;
  step?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

interface CheckListProps {
  items: CheckListItem[];
  className?: string;
  defaultImageSrc?: string;
}

const CheckList: React.FC<CheckListProps> = ({
  items,
  className,
  defaultImageSrc = "/assets/images/consumer/checkmark.svg",
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <div className={clsx("flex mt-5", className)} key={index}>
          <div>
            <div className="w-12 h-12 flex items-center justify-center">
              {item.icon ? (
                item.icon
              ) : (
                <Image
                  src={defaultImageSrc}
                  alt="checklist"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              )}
            </div>
          </div>
          <div>
            <div className="text-base lg:text-lg font-medium">{item.step}</div>
            <div className="text-secondary text-base font-light">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckList;
