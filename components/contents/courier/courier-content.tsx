"use client";
import React, { useState } from "react";
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import CustomCard from "../../shared/text-with-cards/custom-card";
import ImageAndItem from "../../shared/image-and-item/image-and-item";
import Image from "next/image";
import { AccordionDemo } from "./components/accordion";
import { FaqSection } from "./components/faq";
import CtaCardComponent from "./components/sustainableHustle";
import ImageTextOverlay from "./components/imageText";
import { ReusableAccordion } from "@/components/shared/accordion";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import News from "../consumer/components/news";
import TextWithComponent from "../consumer/components/text-with-component";
import { ItemList } from "./components/ItemList";

const iconSize = 18;

const featureData = [
  {
    id: 1,
    name: "Make extra cash, Easy & Fast",
    question: (
      <p>
        <HyperLink link="Sign up" href="/" /> here to become an ECOurier, and
        start making money today!
      </p>
    ),
    icon: "/assets/images/eco-station/commission.svg",
  },
  {
    id: 2,
    name: "You are the boss!",
    question:
      "Hustle whenever you want, and earn as much as you need. It’s up to you",
    icon: "/assets/images/courier/boss.svg",
  },
  {
    id: 3,
    name: "Deliver however",
    question:
      "Fit pick-ups around your lifestyle; Walk, Cycle, Drive or even Crawl. Just avoid  fossil fuel",
    icon: "/assets/images/courier/deliver.svg",
  },
];

const howToData = [
  {
    id: 1,
    title: "Tell us a bit about yourself",
    description: (
      <p className="text-sm">
        <HyperLink link="Sign up here" href="/" /> and have your ID +/license
        ready
      </p>
    ),
  },
  {
    id: 2,
    title: "You'll need a smartphone",
    description: (
      <p className="text-sm">
        It&apos;d be easier to just shout instructions at you, but we
        can&apos;t. <br/>So, grab a working smartphone{" "}
      </p>
    ),
  },
  {
    id: 3,
    title: "Be mobile",
    description: (
      <p className="text-sm">
        Deliver however, but don&apos;t use fossil fuel. And don&apos;t keep<br/>
        ECOnsumers waiting
      </p>
    ),
  },
  {
    id: 4,
    title: "And have insurance",
    description: (
      <p className="text-sm">
        Let&apos;s keep the good times rolling! So get yourself covered,<br/> that we
        keep doing this. Together
      </p>
    ),
  },
];

const accordionItems = [
  {
    id: "item-1",
    question: "Be live during ‘our rush hours’",
    answer: (
      <p className="text-white font-light">
        We are unique and you can be too; we&apos;re busiest with pick-ups
        between 10:00 AM and 14:00 PM when other services go quiet. So, boost
        your earnings by going live at this time
      </p>
    ),
  },
  {
    id: "item-2",
    question: "Earn more with tips",
    answer: (
      <p className="text-white font-light">
        Be professional and nice, it doesn’t cost a thing. But if you are not it
        might cost you everything! ECOnsumers who appreciate your service can
        tip you
      </p>
    ),
  },
  {
    id: "item-3",
    question: "Deliver efficiently",
    answer: (
      <p className="text-white font-light">
        Bicycles are great for longer distances, while walking is perfect for
        short trips; but both are ECO-friendly and double as workouts. For
        Crawling... well…, if you want to stand out, why not?
      </p>
    ),
  },
  {
    id: "item-4",
    question: "Watch out for ECO-promotions",
    answer: (
      <p className="text-white/80 font-light">
        Every once in a while we may spoil you with bonuses and challenges, in
        recognition of your ECO-friendly hustle. So, keep an eye out for those
        sweet rewards!
      </p>
    ),
  },
];

export default function CourierContent() {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAccordionSelect = (id: number) => {
    setSelectedImage(id - 1);
  };
  return (
    <div className="space-y-24 py-8 max-w-[72rem] mx-auto px-4 xl:px-0">
      <TextWithCards
        title="Let’s drive your hustle forward"
        customCard={<CustomCard features={featureData} />}
      />

      {/* how to become an eco-courier */}
      <ImageAndItem
      className="items-center"
        image={
          <Image
            src="/assets/images/courier/courier-woman.svg"
            alt="eco-can courier"
            width={500}
            height={100}
            priority
          />
        }
        item={
          <TextWithComponent
            title="How to become an ECOurier"
            description="It's easy like Sunday Morning."
            component={howToData.map((data) => (
              <ItemList key={data.id} title={data.title} id={data.id} description={data.description} />
            ))}
          />
        }
      />

      {/* your hustle your rules */}
      <ImageAndItem
        image={
          <Image
            src="/assets/images/courier/hustle-rules.svg"
            alt="EcocanApp step"
            width={500}
            height={100}
          />
        }
        className="md:flex-row-reverse items-center"
        item={
          <div className="mr-12">
            <h2 className="font-semibold text-[2rem]">
              Your hustle, Your rules!
            </h2>
            <AccordionDemo onSelect={handleAccordionSelect} />
          </div>
        }
      />

      {/* image text */}
      <ImageTextOverlay
        className="bg-[url('/assets/images/courier/sustainable-hustle.svg')] lg:h-[39rem] flex items-center"
        item={
          <div className="w-5/6 mx-auto">
            <h2 className="text-[2rem] font-bold">Maximise your earnings</h2>
            <ReusableAccordion items={accordionItems} />
          </div>
        }
      />

      <News />

      {/* Faq section */}
      <FaqSection />

      {/* sustainable-hustle*/}
      <CtaCardComponent />
    </div>
  );
}
