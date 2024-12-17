"use client"

import { useRouter } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import NavigationBar from '@/components/shared/navbar/navbar';
import { useScroll } from '@/lib/useScroll';
import { notFound } from 'next/navigation';
import { sectionComponents, SectionType } from '../sections';
import { sectionConfigs } from '@/types/section';
import { LucideArrowLeft } from 'lucide-react';

interface SectionPageProps {
  params: {
    section: string;
  }
}

export default function SectionPage({ params }: SectionPageProps) {
  const router = useRouter();
  const isScrolled = useScroll();

  // Validate that the section exists
  if (!Object.keys(sectionComponents).includes(params.section)) {
    notFound();
  }

  const SectionComponent = sectionComponents[params.section as SectionType];
  const sectionConfig = sectionConfigs[params.section] || {
    hasHeroLayout: false,
    breadcrumbStyle: {
      textColor: 'text-gray-600',
      separatorColor: 'text-gray-400'
    }
  };


  const BreadcrumbNav = () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink 
            onClick={() => router.push('/solutions')} 
            className={`cursor-pointer z-[999] flex items-center gap-2 bg-white rounded-full text-primary hover:text-primary p-2 px-4`}
          >
            <LucideArrowLeft size={18}/>
            Back to Solutions
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className={`z-[999] ${sectionConfig.breadcrumbStyle?.separatorColor}`} />
        <BreadcrumbItem>
          <BreadcrumbPage className={`z-[999] ${sectionConfig.breadcrumbStyle?.textColor}`}>
            {params.section.split('-').map(word =>
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );

  return (
    <div>
      {sectionConfig.hasHeroLayout ? (
        <div 
          className="min-h-[75vh] pb-8 lg:min-h-[90vh] bg-right lg:bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/70 lg:after:bg-black/60 after:opacity-70 after:z-10"
          style={{
            backgroundImage: `url(${sectionConfig.backgroundImage})`,
            backgroundSize: 'cover',
          }}
        >
          <NavigationBar
            className={isScrolled ? "bg-white" : "bg-transparent text-white backdrop-blur-none"}
            logoSrc={isScrolled ? "/assets/images/ecocan-logo.svg": "/assets/images/ecocan-logo-alt.svg"}
          />
          <div className="max-w-[72rem] mx-auto px-4 xl:px-0 pt-24">
            <BreadcrumbNav />
            {sectionConfig.heroContent}
          </div>
        </div>
      ) : (
        <div>
          <NavigationBar
            className={isScrolled ? "bg-white" : "bg-transparent"}
            logoSrc="/assets/images/ecocan-logo.svg"
          />
          <div className="max-w-[72rem] mx-auto px-4 xl:px-0 pt-24">
            <BreadcrumbNav />
          </div>
        </div>
      )}
      
      <div className={sectionConfig.hasHeroLayout ? "" : "mt-8"}>
        <SectionComponent />
      </div>
    </div>
  );
}
