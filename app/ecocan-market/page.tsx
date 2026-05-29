"use client"

import HomeNavbar from "@/components/sections/home-navbar"
import HomeFooter from "@/components/sections/home-footer"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Search, SlidersHorizontal, ShieldCheck, Leaf, Recycle } from "lucide-react"
import Image from "next/image"

const categories = ["All Products", "Beverages", "Water", "Energy Drinks", "Juices", "Dairy"]

const products = [
  {
    name: "Tusker Lager",
    brand: "EABL",
    category: "Beverages",
    verified: true,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 5",
  },
  {
    name: "Dasani Water",
    brand: "Coca-Cola",
    category: "Water",
    verified: true,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 3",
  },
  {
    name: "Red Bull",
    brand: "Red Bull GmbH",
    category: "Energy Drinks",
    verified: true,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 8",
  },
  {
    name: "Minute Maid",
    brand: "Coca-Cola",
    category: "Juices",
    verified: true,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 4",
  },
  {
    name: "Highlands Water",
    brand: "Highlands",
    category: "Water",
    verified: true,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 3",
  },
  {
    name: "Fanta Orange",
    brand: "Coca-Cola",
    category: "Beverages",
    verified: true,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 5",
  },
  {
    name: "KCC Milk",
    brand: "KCC",
    category: "Dairy",
    verified: false,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 6",
  },
  {
    name: "Sprite",
    brand: "Coca-Cola",
    category: "Beverages",
    verified: true,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 5",
  },
  {
    name: "Monster Energy",
    brand: "Monster",
    category: "Energy Drinks",
    verified: true,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 8",
  },
  {
    name: "Tropical Heat",
    brand: "Local",
    category: "Juices",
    verified: false,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 3",
  },
  {
    name: "Pilsner Lager",
    brand: "EABL",
    category: "Beverages",
    verified: true,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 5",
  },
  {
    name: "Aquamist Water",
    brand: "Aquamist",
    category: "Water",
    verified: true,
    image: "/assets/images/ecocan-market/product-img.svg",
    deposit: "KES 3",
  },
]

export default function EcocanMarket() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All Products")
  const [isLoading, setIsLoading] = useState(true)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!isLoading && gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".product-card")
      gsap.fromTo(
        cards,
        { opacity: 0, y: 28, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.06, ease: "power3.out" }
      )
    }
  }, [isLoading, activeCategory, searchQuery])

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCat = activeCategory === "All Products" || p.category === activeCategory
    return matchesSearch && matchesCat
  })

  if (isLoading) {
    return (
      <div
        className="flex min-h-screen animate-pulse items-center justify-center"
        style={{ background: "var(--c-bg)" }}
      >
        <div className="space-y-4 text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-[var(--c-green)] border-t-transparent" />
          <p className="text-sm uppercase tracking-widest text-[var(--c-text-muted)]">
            Loading products
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-[var(--c-text)]"
      style={{ background: "var(--c-bg)" }}
    >
      <HomeNavbar onMenuToggle={() => {}} />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.04) 0%, transparent 65%)",
        }}
      />

      {/* Hero header */}
      <div className="relative z-10 mx-auto max-w-7xl px-[clamp(1.25rem,4vw,3rem)] pb-10 pt-32">
        <p className="section-overline text-[var(--c-green)]">Verified products</p>
        <h1
          className="font-serif-luxury text-luxury-gradient text-luxury-glow mb-4"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 4rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
          }}
        >
          ECOCAN Market.
        </h1>
        <p className="mb-8 max-w-lg text-[15px] text-[var(--c-text-muted)]">
          Browse verified recyclable drinks. Every product carries a serialized ECOCAN code — scan
          to confirm authenticity before purchasing.
        </p>

        {/* Stats chips */}
        <div className="mb-8 flex flex-wrap gap-3">
          {[
            { icon: ShieldCheck, label: "100% Verified" },
            { icon: Recycle, label: "Deposit Eligible" },
            { icon: Leaf, label: "Eco-Certified" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-[var(--c-green)]"
              style={{
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.12)",
              }}
            >
              <Icon size={13} strokeWidth={2} /> {label}
            </div>
          ))}
        </div>

        {/* Search + filter row */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="flex w-full items-center gap-3 rounded-full px-5 py-3 sm:max-w-sm"
            style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)" }}
          >
            <Search size={15} className="text-[var(--c-text-muted)]/50 shrink-0" />
            <input
              type="text"
              placeholder="Search products or brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="placeholder-[var(--c-text-muted)]/40 flex-1 bg-transparent text-sm text-[var(--c-text)] focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
            <SlidersHorizontal size={14} /> <span>{filtered.length} products</span>
          </div>
        </div>

        {/* Category tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200"
              style={{
                background: activeCategory === cat ? "rgba(34,197,94,0.12)" : "rgba(13,18,13,0.04)",
                border: `1px solid ${activeCategory === cat ? "rgba(34,197,94,0.25)" : "var(--c-border)"}`,
                color: activeCategory === cat ? "var(--c-green)" : "var(--c-text-muted)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        >
          {filtered.length === 0 ? (
            <div className="text-[var(--c-text-muted)]/50 col-span-full py-20 text-center">
              <Recycle size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">No products found</p>
            </div>
          ) : (
            filtered.map((product, i) => (
              <div
                key={i}
                className="product-card group relative cursor-pointer overflow-hidden rounded-2xl bg-white p-4 transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid var(--c-border)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.04) 0%, transparent 70%)",
                    border: "1px solid rgba(34,197,94,0.12)",
                  }}
                />

                {/* Verified badge */}
                {product.verified && (
                  <div className="absolute right-2 top-2 z-10">
                    <ShieldCheck size={14} className="text-[var(--c-green)]" />
                  </div>
                )}

                <div className="relative mb-3 flex h-20 items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={72}
                    height={72}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-0.5 text-[12px] font-semibold leading-tight text-[var(--c-text)]">
                  {product.name}
                </h3>
                <p className="mb-2 text-[10px] text-[var(--c-text-muted)]">{product.brand}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[var(--c-green)]">
                    {product.deposit} deposit
                  </span>
                  <span className="text-[var(--c-text-muted)]/50 text-[9px] uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="py-16" />
      <HomeFooter />
    </div>
  )
}
