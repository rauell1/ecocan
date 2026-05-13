import React from "react"
import clsx from "clsx"

interface TextWithCardsProps {
  title?: React.ReactNode
  description?: React.ReactNode
  customCard?: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
}

export default function TextWithCards({
  title,
  description,
  subtitle,
  customCard,
  className,
}: TextWithCardsProps) {
  return (
    <div className="">
      <div className={clsx("space-y-6", className)}>
        <h2 className="text-3xl font-medium tracking-tight lg:text-5xl">{title}</h2>
        <div>
          <div>{subtitle}</div>
          <div className="text-base font-normal text-muted-foreground lg:text-xl">
            {description}
          </div>
        </div>
      </div>
      {customCard}
    </div>
  )
}
