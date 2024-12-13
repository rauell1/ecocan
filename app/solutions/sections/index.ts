import BrandPromotion from './brand-promotion/brand-promotion';
import BrandProtection from './brand-protection/brand-protection';
import PackagingRecycling from './packaging-recycling/packaging-recycling';
// Import other section components...

export const sectionComponents = {
  'brand-protection': BrandProtection,
  'brand-promotion' : BrandPromotion,
  'packaging-recycling': PackagingRecycling
} as const;

export type SectionType = keyof typeof sectionComponents;