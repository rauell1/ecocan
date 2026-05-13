import React from "react"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { LucideArrowRight, LucideX } from "lucide-react"
import ImageAndItem from "@/components/shared/image-and-item/image-and-item"
import { ItemList } from "../contents/courier/components/ItemList"
import Image from "next/image"
import HyperLink from "@/components/shared/hyperlink/hyperlink"
import clsx from "clsx"
import ScanqrPopup from "./scan-qr"
import AppStoreButton from "./download-app"

const howToData = [
  {
    id: 1,
    title: (
      <p className="text-[0.9375rem] font-normal text-muted-foreground">
        Create an EcocanApp account and customize your ECOCAN ID
      </p>
    ),
  },
  {
    id: 2,
    title: (
      <p className="text-[0.9375rem] font-normal text-muted-foreground">
        Participate in the <span className="font-medium">ECOCAN DRS</span> and{" "}
        <span className="font-medium">Brand Protection</span> programmes
      </p>
    ),
  },
  {
    id: 3,
    title: (
      <p className="text-[0.9375rem] font-normal text-muted-foreground">
        Support ECO-friendly brands with your purchases on{" "}
        <span className="font-medium">ECOCAN Market</span>
      </p>
    ),
  },
]

export default function JoinEcommunity({
  className,
  showArrow = true,
  join = "Join ECOmmunity",
}: {
  className?: string
  showArrow?: boolean
  join?: string
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={clsx(
            `h-[3rem] rounded-full border border-white bg-transparent px-8 py-3 text-white hover:bg-transparent`,
            className
          )}
        >
          <span className="relative z-[999]">{join}</span>
          {showArrow && <LucideArrowRight className="ml-2" />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[9999]">
        <ImageAndItem
          image={
            <div>
              <Image
                src="/assets/images/consumer/community-1.svg"
                alt="buy online with ecocan"
                width={205}
                height={146}
                className="z-[9996] mx-auto hidden cursor-pointer transition-all duration-700 hover:scale-125 lg:block"
              />
              <Image
                src="/assets/images/consumer/community-2.svg"
                alt="buy online with ecocan"
                width={439}
                height={311}
                className="z-[9995] -my-8 mx-auto hidden cursor-pointer transition-all duration-700 hover:scale-105 lg:block"
              />
              <Image
                src="/assets/images/consumer/community-3.svg"
                alt="buy online with ecocan"
                width={292}
                height={207}
                className="z-[9996] mx-auto hidden cursor-pointer transition-all duration-700 hover:scale-110 lg:block"
              />
            </div>
          }
          item={
            <div className="grid h-full space-y-6 bg-white p-6 lg:rounded-[24px]">
              <div className="flex justify-between">
                <h2 className="text-[2rem] font-bold text-eco-dark">Who Are We</h2>
                <AlertDialogCancel className="ms-auto w-fit border-none text-eco-dark/50 hover:bg-transparent hover:text-eco-dark">
                  <LucideX />
                </AlertDialogCancel>
              </div>
              <h2 className="text-eco-dark/70">
                We are an ECO-friendly COmmunity, united by a shared vision of a healthy planet,
                free from pollution & counterfeits, and brimming with limitless opportunities to
                thrive. Our sustainability bond is anchored on meaningful cooperation, connection,
                and belonging.
              </h2>
              <div className="space-y-2 font-semibold text-eco-dark">
                <p>
                  Join us by closing the <span className="text-primary">ECO-loop</span> with 3 easy
                  steps:
                </p>
              </div>
              {howToData.map((data) => (
                <ItemList key={data.id} title={data.title} id={data.id} />
              ))}
              <div className="space-y-4 text-muted-foreground">
                <p>
                  And we&apos;ll ensure to recognise and reward your ECO-friendly efforts. With
                  Deposit money, exclusive Recycling coupons, Sustainability discounts, and
                  Red-Carpet experience. To promote sustainable consumption
                </p>
              </div>
              <div>
                <AppStoreButton
                  className="h-12 w-full bg-primary font-medium text-white no-underline hover:bg-primary hover:text-white"
                  playStoreUrl="https://play.google.com/store/apps/details?id=com.superapp.ecocanapp"
                  appStoreUrl="https://apps.apple.com/app/6502695438"
                  buttonText="Get Started"
                />
              </div>
            </div>
          }
        />
      </AlertDialogContent>
    </AlertDialog>
  )
}
