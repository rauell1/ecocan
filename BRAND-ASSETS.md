# 🖼️ Ecocan Brand Assets

> **Auto-update note:** This file is a living catalog. Run `npm run docs:update` after adding new images to regenerate this index. The GitHub Actions workflow will also commit updates automatically on every push to `main`.

---

## Brand Photography

All brand images live in `public/assets/images/brand/` and are exported from `lib/imageIndex.ts` for use with the Next.js `<Image />` component.

| Export Name | File | Scene | Used In |
|---|---|---|---|
| `brandBottleJourney` | `bottle-journey.jpg` | Top-down DRS loop diagram (store → scan → recycle → courier) | Hero, About, Solutions Home |
| `brandReturnCounter` | `return-counter.jpg` | Eco-Station attendant scanning empty bottle for consumer | Eco-Station, Consumer pages |
| `brandScanVerify` | `scan-verify.jpg` | Consumer scanning QR on green bottle — VERIFIED screen | Brand Protection, Consumer |
| `brandPartnerRetail` | `partner-retail.jpg` | Retail partnership handshake outside Fresh Picks Collection Point | About, Partners section |
| `brandSupermarketInt` | `supermarket-interior.jpg` | Kenya Fresh supermarket interior — beverage aisle with shoppers | Ecocan Market, Brand Promo |
| `brandRecyclingHub` | `recycling-hub.jpg` | Industrial recycling facility with sorted PET bales on conveyor | Packaging Recycling, Solutions |
| `brandInvestorAerial` | `investor-aerial.jpg` | Aerial sunset cityscape with Ecocan green network overlay | Investor/About hero, News |
| `brandEbikeCollection` | `ebike-collection.jpg` | Courier on electric cargo bike collecting empties outside FreshMarket | Courier, Solutions |
| `brandCounterfeitAlert` | `counterfeit-alert.jpg` | FAKE vs VERIFIED bottle split — brand protection visual | Brand Protection |

---

## Usage Example

```tsx
import Image from 'next/image';
import { brandBottleJourney, brandScanVerify } from '@/lib/imageIndex';

export default function HeroSection() {
  return (
    <section>
      <Image
        src={brandBottleJourney}
        alt="The Ecocan Deposit Return System cycle — purchase, return, collect, recycle"
        width={1320}
        height={743}
        priority
      />
    </section>
  );
}
```

---

## Image Dimensions & Format

| File | Approx. Dimensions | Format | Notes |
|---|---|---|---|
| `bottle-journey.jpg` | 1320 × 743 | JPEG | Landscape — white studio background |
| `return-counter.jpg` | 1600 × 900 | JPEG | Landscape — warm retail environment |
| `scan-verify.jpg` | 900 × 1200 | JPEG | Portrait — close-up hand hold |
| `partner-retail.jpg` | 1600 × 900 | JPEG | Landscape — outdoor supermarket |
| `supermarket-interior.jpg` | 1600 × 900 | JPEG | Landscape — wide aisle shot |
| `recycling-hub.jpg` | 1600 × 900 | JPEG | Landscape — industrial wide shot |
| `investor-aerial.jpg` | 1600 × 900 | JPEG | Landscape — aerial golden hour |
| `ebike-collection.jpg` | 1600 × 900 | JPEG | Landscape — street level courier |
| `counterfeit-alert.jpg` | 1600 × 900 | JPEG | Landscape — split FAKE/VERIFIED |

---

## Adding New Brand Assets

1. Place the file in `public/assets/images/brand/`.
2. Add a named export to `lib/imageIndex.ts` following the `brand*` naming convention.
3. Add a row to the **Brand Photography** table above.
4. Run `npm run docs:update` — or push to `main` and let the CI workflow commit the update.

---

## Legacy Assets

Older SVG and JPEG assets (pre-brand-shoot) remain in their original locations and are exported from `lib/imageIndex.ts` under their original names (`beachBottle`, `ecostation`, `alphaMale`, etc.). These are gradually being replaced by the brand photography above.

---

*Last updated: <!-- AUTO:TIMESTAMP -->*
