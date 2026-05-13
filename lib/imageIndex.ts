// ─── Legacy SVG / solution assets ────────────────────────────────────────────
export const beachBottle = "/assets/images/solutions/beach-bottle.svg"
export const beachBottleTall = "/assets/images/solutions/beach-bottle-tall.svg"
export const computer = "/assets/images/solutions/computer.svg"
export const ecostation = "/assets/images/eco-station/become-ecostation.svg"
export const ecomarket = "/assets/images/eco-market.png"
export const serialized = "/assets/images/solutions/serialized.svg"
export const ecocanMobile = "/assets/images/consumer/ecocan-app.svg"
export const alphaMale = "/assets/images/solutions/alpha-male.jpeg"
export const blogHero = "/assets/images/blog/hero.jpeg"
export const greenBall = "/assets/images/all/green-ball.svg"
export const redBall = "/assets/images/all/red-ball.svg"

// ─── Brand photography (public/assets/images/brand/) ─────────────────────────
// Usage: import { brandBottleJourney } from '@/lib/imageIndex';
//        <Image src={brandBottleJourney} alt="..." width={1320} height={743} />

export const brandImageIndex = {
  /** Top-down DRS cycle diagram  -  store → scan → recycle → courier → store */
  brandBottleJourney: "/assets/images/brand/bottle-journey.jpg",
  /** Eco-Station attendant scanning an empty bottle for a smiling consumer */
  brandReturnCounter: "/assets/images/brand/return-counter.jpg",
  /** Consumer holding green bottle + phone showing QR VERIFIED screen in-store */
  brandScanVerify: "/assets/images/brand/scan-verify.jpg",
  /** Retail partnership handshake outside Fresh Picks Collection Point */
  brandPartnerRetail: "/assets/images/brand/partner-retail.jpg",
  /** Kenya Fresh supermarket interior  -  beverage aisle with shoppers */
  brandSupermarketInt: "/assets/images/brand/supermarket-interior.jpg",
  /** Industrial recycling hub  -  sorted PET bales on conveyor belt */
  brandRecyclingHub: "/assets/images/brand/recycling-hub.jpg",
  /** Aerial sunset cityscape with glowing Ecocan green network overlay */
  brandInvestorAerial: "/assets/images/brand/investor-aerial.jpg",
  /** Courier loading electric cargo bike with empty bottles outside FreshMarket */
  brandEbikeCollection: "/assets/images/brand/ebike-collection.jpg",
  /** Brand protection split: FAKE bottle (dark) vs VERIFIED bottle (light) */
  brandCounterfeitAlert: "/assets/images/brand/counterfeit-alert.jpg",
} as const

export type BrandImageKey = keyof typeof brandImageIndex

export const brandBottleJourney = brandImageIndex.brandBottleJourney
export const brandReturnCounter = brandImageIndex.brandReturnCounter
export const brandScanVerify = brandImageIndex.brandScanVerify
export const brandPartnerRetail = brandImageIndex.brandPartnerRetail
export const brandSupermarketInt = brandImageIndex.brandSupermarketInt
export const brandRecyclingHub = brandImageIndex.brandRecyclingHub
export const brandInvestorAerial = brandImageIndex.brandInvestorAerial
export const brandEbikeCollection = brandImageIndex.brandEbikeCollection
export const brandCounterfeitAlert = brandImageIndex.brandCounterfeitAlert
