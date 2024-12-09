import React from 'react'
import Offering from './components/offering'
import BrandProtection from './components/brand-protection'
import BrandPromotion from './components/brand-promotion'
import PackagingRecycling from './components/packaging-recycling'
import Intersection from './components/intersection'
import Download from './components/download'

export default function SolutionsHome() {
  return (
    <div className="space-y-24 pt-24">
      <Offering/>
      <BrandProtection/>
      <BrandPromotion/>
      <PackagingRecycling/>
      <div className="bg-white py-24 space-y-24">
        <Intersection/>
        <Download/>
      </div>
    </div>
  )
}
