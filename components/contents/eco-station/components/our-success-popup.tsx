import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import PrimaryButton from "@/components/shared/primary-btn";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { LucideArrowRight, LucideArrowUpRight, LucideX } from "lucide-react";
import { join } from "path";
import React from "react";
import { ItemList } from "../../courier/components/ItemList";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function OurSuccessPopup() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="link" className="group px-0">
          Learn more{" "}
          <LucideArrowUpRight className="group-hover:scale-125 ml-2" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[9999] bg-white rounded-smooth-xl shadow-xl">
        <ImageAndItem
        className="flex-col"
          image={
            <Image
              src="/assets/images/eco-station/our-success-popup.svg"
              alt="buy online with ecocan"
              width={480}
              height={500}
              className="mx-auto relative z-[999] hidden lg:block"
            />
          }
          item={
            <div className="space-y-6 h-full grid rounded-smooth-xl p-5 relative z-[999]">
              <div className="flex justify-between">
                <AlertDialogCancel className="hover:bg-transparent bg-transparent text-black/60 hover:text-black w-fit border-none ms-auto">
                  <LucideX />
                </AlertDialogCancel>
              </div>
              <div>
                <div className="space-y-6">
                  <p>
                    {" "}
                    When you facilitate ECOnsumers to return eligible empties to
                    you, over 60% will most likely spend their deposit money
                    right back in your shop. They may proceed to spend their own
                    money to buy other ECO-products in stock. And if you&apso;ll
                    offer great service, for sure they will come back. Or buy
                    more from you on ECOCAN Market. Most certainly, they&apso;ll
                    spread a good word about you.
                  </p>
                  <p>
                    {" "}
                    ECO-Producers on their part will offer you great deals,
                    better terms, and efficient supplies of ECO-products via the
                    Ping function. To support your ECO-friendly efforts, and to
                    do business the right way.
                  </p>
                  <p>
                    {" "}
                    And while the ECOmmunity flocks to you, ECOCAN will help
                    optimize your operations by providing unmatched market
                    visibility, and valuable insights via the TnT. To improve
                    your decision-making, and boost your performance. This is
                    the power of meaningful cooperation; And leverage of
                    technology to create shared value; This, is the essence of
                    the ECOmmunity
                  </p>
                </div>
              </div>
            </div>
          }
        />
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 600"
            className="absolute top-0 z-50 hidden lg:block"
          >
            <path
              fill="#F6F6F6"
              fill-opacity="1"
              d="M0,0L1440,0L1440,300L0,600Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 530"
            className="absolute top-0 z-50 hidden md:block lg:hidden"
          >
            <path
              fill="#F6F6F6"
              fill-opacity="1"
              d="M0,300L600,0L600,600L0,600Z"
            ></path>
          </svg>
      </AlertDialogContent>
    </AlertDialog>
  );
}
