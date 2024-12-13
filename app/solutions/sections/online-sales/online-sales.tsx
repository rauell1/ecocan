import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import CheckList from "@/components/contents/consumer/components/checklist";
import ImageTextOverlay from "@/components/contents/courier/components/imageText";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import StyledText from "@/components/shared/styled-text";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import {
  beachBottleTall,
  ecomarket,
} from "@/lib/imageIndex";
import Image from "next/image";
import React from "react";

const steps = [
  {
    id: 1,
    step: (
      <div className="font-light">
        Go to ECO-market section on EcocanApp, or the ECOCAN website
      </div>
    ),
  },
  {
    id: 2,
    step: (
      <div className="font-light">
        Browse through the wide selection of ECO-products
      </div>
    ),
  },
  {
    id: 3,
    step: (
      <div className="font-light">
        Select your favourite drinks, and preferred delivery or pickup option
      </div>
    ),
  },
  {
    id: 4,
    step: (
      <div className="font-light">
        Add existing ECOnsumer benefits to discount your bill
      </div>
    ),
  },
  {
    id: 5,
    step: (
      <div className="font-light">
        Pay balance with your ECOCAN credits, and wait for delivery
      </div>
    ),
  },
];

const stepsTwo = [
  {
    id: 1,
    step: (
      <div className="font-light">
        <HyperLink link="Register here" href="/" /> to become an ECO-Producer
      </div>
    ),
  },
  {
    id: 2,
    step: (
      <div className="font-light">
        After onboarding, we’ll tailor our systems just for you
      </div>
    ),
  },
  {
    id: 3,
    step: (
      <div className="font-light">
        Then update your product profiles on ECOCAN Market
      </div>
    ),
  },
  {
    id: 4,
    step: <div className="font-light">That’s all. You are good to go </div>,
  },
];

const howToData = [
  {
    id: 1,
    title: "You’ll be helping reduce packaging litter in the environment",
  },
  {
    id: 2,
    title:
      "Combat illicit trade by depriving counterfeit criminals of their primary source of packaging",
  },
  {
    id: 3,
    title:
      "And increasing the usefulness of used packaging which are recycled to make new bottles ",
  },
  {
    id: 4,
    title:
      "Therefore, reducing CO2e emissions, significantly curbing global warming and climate change",
  },
  {
    id: 5,
    title:
      "And we will make sure your recycling experience is most convenient, and pleasantly unforgettable.",
  },
];

export default function OnlineSales() {
  return (
    <div className="space-y-24">
      <TextWithComponent
        title="Online Sales"
        description={
          <div className="w-4/5 space-y-4">
            <p>
              <HyperLink link="ECOCAN Market" href="/" /> is an online platform
              that conveniently connects ECOstations selling genuine eligible
              drinks, with ECOnsumers seeking authentic affordable drinks. With
              ECOuriers on-the-go, the products are delivered swiftly and
              sustainably. Wherever. Whenever!
            </p>
            <p>
              Or if ECOnsumers are up for some exercise, they can easily
              navigate on ECOCAN Map to their preferred ECO-station, to pick up
              their pre-ordered favourite drinks
            </p>
          </div>
        }
      />
      <ImageAndItem
        className="md:flex-row-reverse items-center"
        image={
          <ImageTextOverlay
            item={
              <>
                <TextWithCards
                  className="text-white w-full"
                  title="To make a purchase:"
                  description={
                    <>
                      <CheckList items={steps} />
                    </>
                  }
                />
              </>
            }
            className="bg-[url('/assets/images/solutions/sky.jpeg')] after:opacity-0 py-[2.25rem]"
          />
        }
        item={
          <TextWithCards
            className="w-full"
            title="To sell on ECOCAN Market:"
            description={
              <div>
                <StyledText>
                  <HyperLink link="Register here" href="/" /> to list your shop
                  as an ECO-station
                </StyledText>
                <StyledText>Sign the ECO-partnership agreement</StyledText>
                <StyledText>Update your profile on ECOCAN Market</StyledText>
                <StyledText>
                  Set your status “live”, and start selling
                </StyledText>
                <StyledText>While accepting empties</StyledText>
              </div>
            }
          />
        }
      />
      {/* purchase on eco-can market */}
      <div className="bg-white shadow-lg ps-8 rounded-2xl overflow-hidden">
        <ImageAndItem
          className="md:flex-row-reverse"
          image={
            <div className="relative w-[42.5rem] h-[27.5rem] overflow-hidden">
              <Image
                src={ecomarket}
                alt="eco-can market app"
                width={1000}
                height={1000}
                className="w-full h-full absolute top-[5rem] left-[5rem] object-cover object-left-top rounded-xl"
              />
            </div>
          }
          item={
            <TextWithCards
              className="w-full"
              title="To list your drinks on ECOCAN Market:"
              description={
                <div>
                  <StyledText>
                    <HyperLink link="Register here" href="/" /> to become an
                    ECO-Producer
                  </StyledText>
                  <StyledText>
                    After onboarding, we’ll tailor our systems just for you
                  </StyledText>
                  <StyledText>
                    Then update your product profiles on ECOCAN Market
                  </StyledText>
                  <StyledText>That’s all. You are good to go  </StyledText>
                </div>
              }
            />
          }
        />
      </div>
      {/* small deeds */}
      <ImageAndItem
        className="gap-12"
        image={
          <Image
            src={beachBottleTall}
            alt="beach bottle"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        }
        item={
          <TextWithCards
            className="w-full"
            title="We live in a world of Super Convenience"
            subtitle={
              <p className="text-xl">And we’ll help you make the most of it</p>
            }
            description={
              <div>
                <StyledText>
                  Promote ECOnsumers loyalty by treating them to convenient and
                  pocket friendly online purchases
                </StyledText>
                <StyledText>
                  And delight them with affordable and fast deliveries, right to
                  their doorsteps
                </StyledText>
                <StyledText>
                  Boost your visibility across our platforms with in-app
                  optimisation tools. And watch sales grow
                </StyledText>
                <StyledText>
                  Elaborately recycle your empties. And the ECO-community will
                  support you with more purchases
                </StyledText>
                <StyledText>
                  Improve your sales efficiency with actionable performance
                  data, from the ECOCAN TnT platform
                </StyledText>
                <StyledText>
                  <HyperLink link="EcocanApp" href="/" /> further engages
                  ECOnsumers by incentivising and gamifying the marketplace
                  experience with{" "}
                  <HyperLink link="Recycling Coupons" href="/" />,{" "}
                  <HyperLink link="Loyalty discounts" href="/" />, <br />
                  <HyperLink link="Red Carpet treats" href="/" />, and other
                  rewards, for ECOnsumers.
                </StyledText>
              </div>
            }
          />
        }
      />
    </div>
  );
}
