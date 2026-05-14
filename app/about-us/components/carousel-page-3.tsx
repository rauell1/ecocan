import React from "react"
import Visionaries from "./visionaries"
import Image from "next/image"

export default function CarouselPage3() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="mx-auto flex min-h-screen max-w-[72rem] items-center lg:my-0 lg:gap-12">
        <div className="z-[999] space-y-12 px-4 xl:px-0">
          <Visionaries />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 500"
        className="absolute bottom-0 z-50 hidden lg:block"
      >
        <path fill="#F6F6F6" fillOpacity="1" d="M0,450L1440,0L1440,500L0,500Z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 530"
        className="absolute bottom-0 z-50 hidden md:block lg:hidden"
      >
        <path fill="#F6F6F6" fillOpacity="1" d="M0,300L600,0L600,600L0,600Z"></path>
      </svg>
      <Image
        src="/assets/images/consumer/green-rectangles.svg"
        alt="green rectangles"
        className="absolute -right-4 z-[995] hidden w-[20.25rem] -rotate-12 xl:bottom-[55%] xl:block"
        width={100}
        height={100}
        priority
      />
    </div>
  )
}
