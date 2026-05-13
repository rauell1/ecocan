import React from "react"
import { LucideArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MediaViewer from "@/components/media-viewer"

interface FeatureProps {
  title: string
  description: React.ReactNode
  imageSrc: string
  href: string
}

const FeatureCard = ({ title, description, imageSrc, href }: FeatureProps) => (
  <div className="bg-tranparent text-white">
    <div className="overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full object-cover lg:h-72"
        width={100}
        height={100}
      />
    </div>
    <div className="p-4">
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <div className="font-light text-[#B3B3B3]">{description}</div>
      <Link href={href}>
        <Button
          variant="ghost"
          className="group px-0 underline underline-offset-4 hover:bg-transparent hover:text-white"
        >
          Learn More
          <LucideArrowUpRight className="ml-2 group-hover:scale-125" />
        </Button>
      </Link>
    </div>
  </div>
)

export default function Optimize() {
  return (
    <div className="bg-[#2F313F] py-8 lg:my-24 lg:p-8">
      <div className="mx-auto max-w-[72rem] px-4 xl:px-0">
        <div className="mb-6 text-center">
          <h2 className="bg-gradient-to-br from-[#228B22] via-[#4AC63F] to-[#0000001A] bg-clip-text text-3xl font-semibold text-transparent lg:text-5xl">
            Optimise the value of{" "}
            <span className="bg-gradient-to-bl from-[#4AC63F] via-[#FFDD4C] to-[#4AC63F] bg-clip-text text-transparent">
              your packaging
            </span>
          </h2>
          <p className="my-8 text-muted-foreground lg:text-xl">
            With ECOCAN, a bottle is more than just a bottle
          </p>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <FeatureCard
            title="Transform them into digitally connected assets"
            description="We’ll help unlock the digital power of your ordinary bottles, by enabling item-unit traceability across the entire market, in real-time! To prevent counterfeiting and diversion attempts, as well as to offer you unmatched market intelligence"
            imageSrc="/assets/images/producer/optimize-1.svg"
            href="/solutions/brand-protection"
          />
          <FeatureCard
            title="Convert them into low-cost marketing channels"
            description="Your packaging is more than a one-time consumable; we’ll transform them into expansive & disruptive marketing assets, for direct customer engagement through personalized campaigns. In return, you'll gain actionable insights, and promote brand loyalty"
            imageSrc="/assets/images/producer/optimize-2.svg"
            href="/solutions/brand-promotion"
          />
          <FeatureCard
            title="Minimise their environmental footprint"
            description="Through reuse and recycling via the ECOCAN DRS, we’ll tell you exactly what packaging has been collected for recycling, when and where. We’ll also ensure regulators know about your ECO-friendly efforts"
            imageSrc="/assets/images/producer/optimize-3.svg"
            href="/solutions/packaging-recycling"
          />
          <FeatureCard
            title="Increase their resource efficiency"
            description={
              <div>
                We offer a direct service for automated glass bottle washing and quality inspection.
                Deploying top-of-the-line{" "}
                <MediaViewer
                  type="video"
                  title="PAC Swiss"
                  start={12}
                  source="https://www.youtube.com/embed/0QxeZ-r7vSE"
                />{" "}
                washers, and{" "}
                <MediaViewer type="pdf" title="Krones Linatronic" source="/documents/krones.pdf" />{" "}
                E.B.I. To deliver most hygienic washed bottles. Affordably
              </div>
            }
            imageSrc="/assets/images/producer/optimize-4.svg"
            href="/solutions/packaging-recycling#recycling_process"
          />
        </div>
        <p className="text-[2rem] font-semibold text-white lg:w-11/12">
          Only ECOCAN can offer you this level of insight, security, efficiency and sustainability.
          And we say this with Absolute Confidence!
        </p>
      </div>
    </div>
  )
}
