"use client"

import TextWithComponent from '@/components/contents/consumer/components/text-with-component';
import ImageAndItem from '@/components/shared/image-and-item/image-and-item';
import PrimaryButton from '@/components/shared/primary-btn';
import { LucideArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function BrandProtection() {

  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
      <ImageAndItem
        className="items-center gap-6 lg:gap-12"
        image={
          <Image
            src="/assets/images/solutions/brand-protection.svg"
            alt="Online store"
            className="object-cover rounded-3xl me-auto"
            priority
            width={500}
            height={100}
          />
        }
        item={
          <TextWithComponent
            title={
              <div className="space-y-4">
                <h2 className='font-semibold'>Brand Protection</h2>
                <p className="text-base font-medium text-[#2F313F]">
                  ECOCAN TnT / ECOCAN DRS / ECOCAN Security codes / EcocanApp
                </p>
              </div>
            }
            description={
              <p className="md:w-11/12">
                30% of all beverages sold globally is illicit, and in Africa
                it&apos;s worse - 2 out of 5 drinks sold are fake! Consuming
                such harmful products leads to loss of life, harming of health,
                depriving value for money, and hurts legitimate trade. Good
                news? We can now put an end to this crisis, with ECOCAN
              </p>
            }
            component={
              <PrimaryButton
                buttonIcon={<LucideArrowRight />}
                buttonText="Learn more"
                className="hover:bg-primary mt-8"
                buttonLink="/solutions/brand-protection"
              />
            }
          />
        }
      />
    </div>
  );
}