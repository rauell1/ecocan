import React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import clsx from "clsx"
import Image from "next/image"
import { ExpandableContent } from "./expandable-content"

interface WhiteBgCardProps {
  title?: string
  content?: React.ReactNode
  className?: string
  iconPath: string
  footer?: React.ReactNode
  expandable?: boolean
  hasGradientBorder?: boolean
}

export const WhiteBgCard = ({
  iconPath,
  content,
  className = "",
  title,
  footer,
  expandable = false,
  hasGradientBorder = false,
}: WhiteBgCardProps) => {
  return (
    <div
      className={clsx(
        "relative h-fit rounded-smooth-lg",
        hasGradientBorder &&
          "from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] p-[2px] hover:bg-gradient-to-r",
        className
      )}
    >
      <Card
        className={clsx(
          "h-full overflow-hidden rounded-smooth-lg",
          hasGradientBorder ? "border-none bg-white" : "border-2"
        )}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">
            <Image src={iconPath} alt="green icon" className="h-12 w-12" width={50} height={40} />
            {title}
          </CardTitle>
        </CardHeader>
        <ExpandableContent
          className="px-4 font-light text-muted-foreground"
          expandable={expandable}
        >
          {content}
        </ExpandableContent>
        <CardFooter>{footer}</CardFooter>
      </Card>
    </div>
  )
}
