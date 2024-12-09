"use client"

import { useRouter } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import NavigationBar from '@/components/shared/navbar/navbar';
import { useScroll } from '@/lib/useScroll';
import { notFound } from 'next/navigation';
import { sectionComponents, SectionType } from '../sections';

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

  // Get the component for this section
  const SectionComponent = sectionComponents[params.section as SectionType];

  return (
    <div>
      <NavigationBar
        className={isScrolled ? "bg-white" : "bg-transparent backdrop-blur-xl"}
        logoSrc="/assets/images/ecocan-logo.svg"
      />
      <div>
        <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0 pt-24">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={() => router.push('/solutions')} className="cursor-pointer">
                    Solutions
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {params.section.split('-').map(word =>
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
        </div>
        
        <div>
          <SectionComponent />
        </div>
      </div>
    </div>
  );
}
