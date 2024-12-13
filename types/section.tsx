import PromoHero from "@/app/solutions/sections/brand-promotion/components/hero";
import Hero from "@/components/hero";

// types/section.ts
export interface SectionConfig {
    hasHeroLayout: boolean;
    heroContent?: React.ReactNode;
    backgroundImage?: string;
    breadcrumbStyle?: {
        textColor: string;
        separatorColor: string;
      };
}

export const sectionConfigs: Record<string, SectionConfig> = {
    'brand-promotion': {
        hasHeroLayout: true,
        heroContent: (<PromoHero/>),
        backgroundImage: '/assets/images/solutions/brand-promotion-bg.svg',
        breadcrumbStyle: {
            textColor: 'text-white',
            separatorColor: 'text-white'
          },
    },
    'brand-protection': {
        hasHeroLayout: false
    },
    'packaging-recycling': {
        hasHeroLayout: false
    },
    // Add other section configs...
};