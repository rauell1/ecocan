"use client"

import { useRouter } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import HomeNavbar from "@/components/sections/home-navbar"
import HomeFooter from "@/components/sections/home-footer"
import { notFound } from "next/navigation"
import { sectionComponents, SectionType } from "../sections"
import { sectionConfigs } from "@/types/section"
import { LucideArrowLeft } from "lucide-react"
import { CORE_ROUTES, isValidSolutionSection } from "@/lib/site-contract"

interface SectionPageProps {
  params: {
    section: string
  }
}

export default function SectionPage({ params }: SectionPageProps) {
  const router = useRouter()

  // Validate that the section exists
  if (!isValidSolutionSection(params.section)) {
    notFound()
  }

  const SectionComponent = sectionComponents[params.section as SectionType]
  const sectionConfig = sectionConfigs[params.section] || {
    hasHeroLayout: false,
    breadcrumbStyle: {
      textColor: "text-gray-600",
      separatorColor: "text-gray-400",
    },
  }

  const BreadcrumbNav = () => (
    <Breadcrumb className="hidden border">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() => router.push(CORE_ROUTES.solutions)}
            className={`text-primary hover:text-primary z-[999] flex cursor-pointer items-center gap-2 rounded-full bg-white p-2 px-4`}
          >
            <LucideArrowLeft size={18} />
            Back to Solutions
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator
          className={`z-[999] ${sectionConfig.breadcrumbStyle?.separatorColor}`}
        />
        <BreadcrumbItem>
          <BreadcrumbPage className={`z-[999] ${sectionConfig.breadcrumbStyle?.textColor}`}>
            {params.section
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )

  return (
    <div style={{ background: "var(--c-bg)" }} className="min-h-screen text-[var(--c-text)]">
      {sectionConfig.hasHeroLayout ? (
        <div
          className="relative min-h-[75vh] overflow-hidden bg-right pb-8 lg:min-h-[90vh] lg:bg-center"
          style={{
            backgroundImage: `url(${sectionConfig.backgroundImage})`,
            backgroundSize: "cover",
          }}
        >
          {/* Light overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(245,247,245,0.18) 0%, rgba(245,247,245,0.85) 100%)",
              zIndex: 10,
            }}
          />
          <HomeNavbar onMenuToggle={() => {}} />
          <div className="relative z-[999] mx-auto max-w-[72rem] px-4 xl:px-0">
            <BreadcrumbNav />
            {sectionConfig.heroContent}
          </div>
        </div>
      ) : (
        <div>
          <HomeNavbar onMenuToggle={() => {}} />
          <div className="mx-auto max-w-[72rem] px-4 xl:px-0">
            <BreadcrumbNav />
          </div>
        </div>
      )}

      <div
        className={sectionConfig.hasHeroLayout ? "" : "mt-0"}
        style={{ background: "var(--c-bg)" }}
      >
        <SectionComponent />
        <HomeFooter />
      </div>
    </div>
  )
}
