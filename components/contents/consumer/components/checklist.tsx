import React from "react"
import Image from "next/image"
import clsx from "clsx"

interface CheckListItem {
  id: number | string
  step?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
}

interface CheckListProps {
  items: CheckListItem[]
  className?: string
  defaultImageSrc?: string
}

const CheckList: React.FC<CheckListProps> = ({
  items,
  className,
  defaultImageSrc = "/assets/images/consumer/checkmark.svg",
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <div className={clsx("mt-5 flex", className)} key={index}>
          <div>
            <div className="flex h-12 w-12 items-center justify-center">
              {item.icon ? (
                item.icon
              ) : (
                <Image
                  src={defaultImageSrc}
                  alt="checklist"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              )}
            </div>
          </div>
          <div>
            <div className="text-base font-medium lg:text-lg">{item.step}</div>
            <div className="text-base text-muted-foreground">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CheckList
