import PrimaryButton from "@/components/shared/primary-btn"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogHero } from "@/lib/imageIndex"
import { LucideArrowRight } from "lucide-react"
import Image from "next/image"
import React from "react"

export default function BlogHero() {
  return (
    <div className="mx-auto items-center overflow-hidden rounded-2xl shadow-xl lg:flex lg:h-[32.25rem]">
      <div className="h-[20rem] border lg:h-full lg:w-1/2">
        <Image
          src={blogHero}
          alt="white man collecting plastic"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="p-4 lg:w-1/2 lg:p-8">
        <div className="mx-auto lg:w-4/5">
          <h2 className="text-[2.5rem] font-semibold">Kenya gazettes new EPR laws.</h2>
          <p className="my-4">Kenya becomes the Second Country in Africa to enact EPR...</p>
          <PrimaryButton
            buttonText="Read more"
            className="hover:bg-primary"
            buttonIcon={<LucideArrowRight />}
          />
        </div>
      </div>
    </div>
  )
}
