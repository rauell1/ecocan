import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import PrimaryButton from "@/components/shared/primary-btn";
import React from "react";
import TextWithComponent from "./text-with-component";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import HowTo from "@/components/shared/HowTo";
import { ItemList } from "../../courier/components/ItemList";
import { LucideX } from "lucide-react";

const howToData = [
  {
    id: 1,
    title: (
      <p className="text-[#404040] font-semibold text-sm">
        Get the EcocanApp today, and go to ECO-Market
      </p>
    ),
  },
  {
    id: 2,
    title: (
      <p className="text-[#404040] font-semibold text-sm">
        Scroll through our wide selection of ECO-products
      </p>
    ),
  },
  {
    id: 3,
    title: (
      <p className="text-[#404040] font-semibold text-sm">
        Order whatever you need, and pay with ECOCAN credits
      </p>
    ),
  },
  {
    id: 4,
    title: (
      <p className="text-[#404040] font-semibold text-sm">
        Add loyalty or recycling benefits to discount your bill
      </p>
    ),
  },
  {
    id: 5,
    title: (
      <p className="text-[#404040] font-semibold text-sm">
        After enjoying the drink, request for pick up of empty bottles
      </p>
    ),
  },
];

export default function BuyOnline() {
  return (
    <div className="bg-white">
      <div className="max-w-[72rem] mx-auto pt-24 pb-12 px-4 xl:px-0">
        <ImageAndItem
          className="gap-12 items-center"
          image={
            <Image
              src="/assets/images/consumer/buy-online-consumer.svg"
              alt="Online store"
              className="object-cover rounded-3xl bg-primary"
              priority
              width={500}
              height={100}
            />
          }
          item={
            <div className="w-4/5">
              <TextWithComponent
                title="Buy Online"
                description={
                  <p>
                    Discover new <HyperLink link="ECO-products" href="/" /> on
                    ECOCAN market, and place your order with just a few clicks.
                    After consumption, conveniently request for empties pick up
                    from your door, for recycling
                  </p>
                }
                component={
                  <>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="rounded-full bg-primary hover:bg-primary xl:h-[3.25rem] xl:py-3 xl:px-8 text-lg">
                          Learn more
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogCancel className="hover:bg-transparent text-black/60 hover:text-black w-fit border-none">
                         <LucideX/>
                        </AlertDialogCancel>
                        <ImageAndItem
                          className="items-center gap-6"
                          image={
                            <Image
                              src="/assets/images/consumer/buy-online-overlay.svg"
                              alt="buy online with ecocan"
                              width={500}
                              height={100}
                            />
                          }
                          item={
                            <div className="space-y-6">
                              <h2 className="font-semibold text-3xl">
                                It can&apos;t get better than this!
                              </h2>
                              <div className="space-y-2 text-[#23262fcd] text-[0.9375rem]">
                                <p className="">
                                  ECOCAN Market is the go-to digital market in
                                  your pocket. That facilitates affordable
                                  purchase and fast delivery of genuine drinks.
                                  As well as convenient pick-up of used empties,
                                  for recycling.
                                </p>
                              </div>
                              {howToData.map((data) => (
                                <ItemList
                                  key={data.id}
                                  title={data.title}
                                  id={data.id}
                                />
                              ))}
                              <div>
                                <PrimaryButton
                                  className="w-full"
                                  buttonText="Shop now"
                                />
                              </div>
                              <div className="text-center text-[#23262fcd] text-[0.9375rem]">
                                <p>
                                  As an ECO-friendly favour, you may allow us 60
                                  minutes to bundle your order with others for
                                  delivery. This helps reduce our carbon
                                  footprint, save energy, and boost efficiency.
                                </p>
                              </div>
                            </div>
                          }
                        />
                      </AlertDialogContent>
                    </AlertDialog>
                  </>
                }
              />
            </div>
          }
        />
      </div>
    </div>
  );
}
