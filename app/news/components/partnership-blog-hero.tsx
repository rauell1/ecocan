import Image from "next/image"
import { ArrowRight } from "lucide-react"

const BLUR_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwYTFhMGYiLz48L3N2Zz4="

export default function PartnershipBlogHero() {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl lg:flex lg:h-[28rem]"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden lg:h-full lg:w-1/2">
        <Image
          src="/assets/images/blog/partnership.jpg"
          alt="Finnpartnership invests in ECOCAN"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
          placeholder="blur"
          blurDataURL={BLUR_URL}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 lg:to-black/20" />

        {/* Featured badge */}
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
          style={{
            background: "rgba(74,222,128,0.15)",
            backdropFilter: "blur(8px)",
            color: "#4ade80",
            border: "1px solid rgba(74,222,128,0.3)",
          }}
        >
          Featured
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-7 lg:w-1/2 lg:p-10">
        <p
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Funding · 2023
        </p>
        <h2
          className="mb-4 font-bold leading-tight text-white"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
        >
          Finnpartnership invests in ECOCAN.
        </h2>
        <p className="mb-7 text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
          ECOCAN secures grant funding to pilot its traceability and recycling technologies in
          Kenya, backed by Finnpartnership&apos;s commitment to African innovation.
        </p>
        <a
          href="#"
          className="inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-200 hover:gap-3"
          style={{
            background: "rgba(74,222,128,0.12)",
            border: "1px solid rgba(74,222,128,0.25)",
            color: "#4ade80",
          }}
        >
          Read more <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}
