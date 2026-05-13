import React from "react"
import Image from "next/image"
import clsx from "clsx"

interface ImageAndItemProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  description?: React.ReactNode
  item?: React.ReactNode
  image?: React.ReactNode
  className?: string
  mainClassName?: string
  fDivClassName?: string
}

export default function ImageAndItem({
  title,
  subtitle,
  description,
  fDivClassName,
  item,
  mainClassName,
  className,
  image,
}: ImageAndItemProps) {
  return (
    <div>
      <div className={clsx("lg:text-center", fDivClassName)}>
        <div className="text-3xl font-medium lg:text-5xl">{title}</div>
        <div
          className={clsx("my-4 text-base text-muted-foreground lg:my-6 lg:text-xl", mainClassName)}
        >
          {subtitle}
        </div>
        <div className="font-light text-accent lg:text-xl">{description}</div>
      </div>
      <div className={clsx("flex flex-col-reverse lg:flex-row", className)}>
        <div className="relative my-auto lg:w-[45%]">{image}</div>
        <div className="me-auto w-full space-y-4 lg:w-[55%]">{item}</div>
      </div>
    </div>
  )
}
