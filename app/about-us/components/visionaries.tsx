import TextWithComponent from '@/components/contents/consumer/components/text-with-component'
import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import Image from 'next/image'
import React from 'react'

export default function Visionaries() {
  return (
    <div>
        <ImageAndItem
          className="gap-12 lg:flex-row-reverse items-center"
          image={
            <Image
              src="/assets/images/solutions/people.svg"
              alt="community of people on ground"
              width={540}
              height={540}
              priority
            />
          }
          item={
            <TextWithComponent
              description={
                <div>
                  <h2
                    className={`bg-gradient-to-r my-2 from-[#228B22] via-[#FFDD4C] to-[#FFDD4C] text-transparent bg-clip-text font-semibold text-3xl`}
                  >
                    Building a COmmunity <br /> of
                    visionaries{" "}
                  </h2>
                  <p>
                    Who envision a planet fee from pollution, safe for all the
                    life it sustains, and brimming with limitless opportunities
                    to thrive. Sounds like a Cinderella tale. But to us, the
                    change makers, disruptors, and go getters, it&apos;s an
                    achievable reality; when we bring communities together, and
                    empower them with intelligent tools to prosper
                  </p>
                </div>
              }
            />
          }
        />

    </div>
  )
}
