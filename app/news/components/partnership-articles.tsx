"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Tiny dark-green SVG used while image loads
const BLUR_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwYTFhMGYiLz48L3N2Zz4="

interface Article {
  id: number
  title: string
  description: string
  date: string
  imageUrl: string
  tag?: string
}

const articles: Article[] = [
  {
    id: 1,
    title: "ECOCAN receives additional grant funding from Business Finland",
    description:
      "Supporting the market pilot of brand protection and recycling solutions across Kenya.",
    date: "Sept 2023",
    imageUrl: "/assets/images/blog/business-finland.png",
    tag: "Funding",
  },
  {
    id: 2,
    title: "Embassy of Finland in Kenya Strengthens Commitment to ECOCAN",
    description:
      "Finland's Deputy Ambassador to Kenya visited the ECOCAN offices to reaffirm the bilateral sustainability partnership.",
    date: "9 Dec, 2024",
    imageUrl: "/assets/images/blog/white-man.png",
    tag: "Diplomacy",
  },
  {
    id: 3,
    title: "ECOCAN collaborates with Australian-based Codeifai",
    description:
      "A 3-year partnership to enhance ECOCAN's brand protection and packaging recycling offering across Africa.",
    date: "June 2024",
    imageUrl: "/assets/images/blog/codefai.jpeg",
    tag: "Partnership",
  },
  {
    id: 4,
    title: "NEFCO approves conditional loan",
    description:
      "NEFCO, via its NOPEF instrument, approved a conditional loan to facilitate ECOCAN's technology pilot in Kenya.",
    date: "April 2024",
    imageUrl: "/assets/images/blog/nefco.png",
    tag: "Funding",
  },
  {
    id: 5,
    title: "ECOCAN onboards Savannah Brands to ECO-system",
    description:
      "Savannah Brands Limited, maker of Kenyan Originals cider, joins the ECO-system to enable bottle recycling in Kenya.",
    date: "July 2023",
    imageUrl: "/assets/images/blog/ko.png",
    tag: "Partnership",
  },
  {
    id: 6,
    title: "ECOCAN partners with Mr. Green Africa",
    description:
      "Kenya's leading plastics recycler signs MoU to join the ECO-system and facilitate PET bottle recycling.",
    date: "25 May, 2021",
    imageUrl: "/assets/images/blog/green.png",
    tag: "Partnership",
  },
]

const ArticleCard = ({ article }: { article: Article }) => (
  <article
    className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
    }}
  >
    {/* Image — using Next.js Image instead of CSS background-image */}
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={article.imageUrl}
        alt={article.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        placeholder="blur"
        blurDataURL={BLUR_URL}
        loading="lazy"
      />
      {/* Tag chip */}
      {article.tag && (
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
            color: "#4ade80",
            border: "1px solid rgba(74,222,128,0.25)",
          }}
        >
          {article.tag}
        </span>
      )}
    </div>

    {/* Content */}
    <div className="flex flex-1 flex-col p-5">
      <p
        className="mb-2 text-[11px] font-medium uppercase tracking-widest"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        {article.date}
      </p>
      <h3 className="mb-3 text-[16px] font-bold leading-snug text-white">{article.title}</h3>
      <p
        className="mb-4 flex-1 text-[13.5px] leading-relaxed"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {article.description}
      </p>
      <button
        className="flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-200"
        style={{ color: "#4ade80" }}
        aria-label={`Read more about ${article.title}`}
      >
        Read more{" "}
        <ArrowRight
          size={13}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>
    </div>
  </article>
)

export default function PartnershipArticles() {
  return (
    <div className="py-4">
      <h2 className="mb-8 text-2xl font-bold text-white">Partnership News</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
