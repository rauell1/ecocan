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
    title: "Kenya: New Law On Sustainable Waste Management Enacted",
    description:
      "This legislation lays the foundation for the first nationwide Deposit Refund Scheme (DRS) in Africa, supporting comprehensive recycling.",
    date: "2 Mar, 2023",
    imageUrl: "/assets/images/blog/wind-turbine-sunset.svg",
    tag: "Policy",
  },
  {
    id: 2,
    title: "UN Treaty On Plastic Containers",
    description:
      "175 nations agree to develop a legally binding agreement on plastic pollution, prompting a major step towards reducing global plastic waste.",
    date: "25 May, 2021",
    imageUrl: "/assets/images/blog/plastic-waste.svg",
    tag: "Global",
  },
  {
    id: 3,
    title: "How ECOCAN Africa Is Helping Combat Counterfeits",
    description:
      "ECOCAN offers Supply-chain Traceability And Recycling as a Service — protecting consumers and the planet simultaneously.",
    date: "15 Feb, 2022",
    imageUrl: "/assets/images/blog/glass-recycling.svg",
    tag: "Impact",
  },
  {
    id: 4,
    title: "Governments' Climate Action Initiatives",
    description:
      "Governments worldwide are enacting laws to combat climate change, mandating eco-friendly practices across industries.",
    date: "17 Nov, 2021",
    imageUrl: "/assets/images/blog/wind-turbine-sky.svg",
    tag: "Policy",
  },
  {
    id: 5,
    title: "Green Economy Fostering Preservation",
    description:
      "A proactive approach aims to preserve the environment for future generations while fostering economic growth through sustainability.",
    date: "2 June, 2024",
    imageUrl: "/assets/images/blog/green-agriculture.svg",
    tag: "Economy",
  },
  {
    id: 6,
    title: "Community-Led Eco-Friendly Campaigns",
    description:
      "Communities worldwide are banding together through tree-planting campaigns and plastic clean-ups to fight climate change.",
    date: "30 May, 2021",
    imageUrl: "/assets/images/blog/plastic-caps.svg",
    tag: "Community",
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
    {/* Image */}
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

export default function Articles() {
  return (
    <div className="py-4">
      <h2 className="mb-8 text-2xl font-bold text-white">Sustainability News</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
