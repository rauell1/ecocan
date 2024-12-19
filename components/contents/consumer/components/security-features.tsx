// SecurityFeatureCard.tsx
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LucideArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SecurityFeatureCardProps {
  number: string;
  title: string;
  description: React.ReactNode;
  className?: string;
  highlight?: string;
  cardHeaderStyles?: string;
}

export const SecurityFeatureCard = ({
  number,
  title,
  description,
  className,
  highlight,
  cardHeaderStyles,
}: SecurityFeatureCardProps) => {
  return (
    <Card
      className={clsx(
        "border-none rounded-xl overflow-hidden shadow-md hover:shadow-xl",
        className
      )}
    >
      <CardHeader className="pb-2">
        <div className={clsx("gap-4 ", cardHeaderStyles)}>
          <div className="relative w-10 h-10">
            <Image src={number} alt="number" width={100} height={100} />
          </div>
          <CardTitle className="text-xl font-medium">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-secondary">
          {description}
          {highlight && <span className="text-red-500"> {highlight}</span>}
        </p>
      </CardContent>
    </Card>
  );
};

// AIFeatureCard.tsx
interface AIFeatureCardProps {
  title: string;
  className?: string;
  buttonText?: string;
  buttonLink?: string;
  showImage?: Boolean;
}

export const AIFeatureCard = ({
  title,
  className,
  buttonText = "Learn more",
  buttonLink = "/solutions/brand-protection#security-codes",
  showImage = true
}: AIFeatureCardProps) => {
  return (
    <Link href={buttonLink}>
      <Card
        className={clsx(
          "rounded-xl overflow-hidden hover:shadow-lg text-white p-0 group hover:cursor-pointer",
          className
        )}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between">
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <LucideArrowUpRight
              size={32}
              className=" transition-transform group-hover:scale-125"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pb-0">
          <Button variant="link" className="text-sm p-0 text-white">{buttonText}</Button>
          {showImage && <div className="w-[14.375rem] relative">
            <Image
              src="/assets/images/consumer/ai-chip.svg"
              alt="AI Chip"
              width={100}
              height={200}
              className="w-full object-cover"
            />
          </div>}
        </CardContent>
      </Card>
    </Link>
  );
};

// SecurityFeatures.tsx
export const SecurityFeatures = () => {
  const features = [
    {
      number: "assets/images/consumer/number-1.svg",
      title: "Scan ECOCAN Security codes",
      description:
        "To easily and reliably verify the authenticity of eligible products, in under 3 seconds.",
    },
    {
      number: "assets/images/consumer/number-2.svg",
      title: "Instant Product Verification",
      description:
        "A landing page confirming product authenticity will appear, showing detailed product info, including deposit amount.",
    },
    {
      number: "assets/images/consumer/number-3.svg",
      title: "Real-Time Warnings",
      description:
        "If the product is fake or ineligible, you'll receive immediate warning alert.",
      highlight: "AVOID such products.",
    },
    {
      number: "assets/images/consumer/number-4.svg",
      title: "Water-tight security",
      description:
        "ECOCAN Security codes are designed to be tamper-proof, ensuring that imitations can not succeed.",
    },
    {
      number: "assets/images/consumer/number-5.svg",
      title: "Advanced Machine Learning",
      description:
        "EcocanApp's high-tech scanners instantly detect fakes, reliably protecting you from illicits and fraud.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature) => (
        <SecurityFeatureCard key={feature.number} {...feature} />
      ))}
      <AIFeatureCard
        title="AI-Enhanced protection"
        className="bg-primary hover:bg-primary/90"
      />
    </div>
  );
};

export default SecurityFeatures;
