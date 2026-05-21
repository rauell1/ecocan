"use client"

import HomeNavbar from "@/components/sections/home-navbar"
import HomeFooter from "@/components/sections/home-footer"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Search, SlidersHorizontal, ShieldCheck, Leaf, Recycle } from "lucide-react"
import Image from "next/image"

const categories = ["All Products", "Beverages", "Water", "Energy Drinks", "Juices", "Dairy"]

const products = [
  { name: "Tusker Lager", brand: "EABL", category: "Beverages", verified: true, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 5" },
  { name: "Dasani Water", brand: "Coca-Cola", category: "Water", verified: true, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 3" },
  { name: "Red Bull", brand: "Red Bull GmbH", category: "Energy Drinks", verified: true, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 8" },
  { name: "Minute Maid", brand: "Coca-Cola", category: "Juices", verified: true, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 4" },
  { name: "Highlands Water", brand: "Highlands", category: "Water", verified: true, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 3" },
  { name: "Fanta Orange", brand: "Coca-Cola", category: "Beverages", verified: true, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 5" },
  { name: "KCC Milk", brand: "KCC", category: "Dairy", verified: false, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 6" },
  { name: "Sprite", brand: "Coca-Cola", category: "Beverages", verified: true, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 5" },
  { name: "Monster Energy", brand: "Monster", category: "Energy Drinks", verified: true, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 8" },
  { name: "Tropical Heat", brand: "Local", category: "Juices", verified: false, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 3" },
  { name: "Pilsner Lager", brand: "EABL", category: "Beverages", verified: true, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 5" },
  { name: "Aquamist Water", brand: "Aquamist", category: "Water", verified: true, image: "/assets/images/ecocan-market/product-img.svg", deposit: "KES 3" },
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
      gsap.fromTo(cards,
        { opacity: 0, y: 28, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.06, ease: "power3.out" }
      )
    }
  }, [isLoading, activeCategory, searchQuery])

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCat = activeCategory === "All Products" || p.category === activeCategory
    return matchesSearch && matchesCat
  })

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{ background: "#050705" }}>
        <div className="text-center space-y-4">
          <div className="mx-auto h-12 w-12 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
          <p className="text-sm text-white/40 uppercase tracking-widest">Loading products</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden text-[#f5f5f5]" style={{ background: "#050705" }}>
      <HomeNavbar onMenuToggle={() => {}} />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px]" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.07) 0%, transparent 65%)" }} />

      {/* Hero header */}
      <div className="relative z-10 pt-32 pb-10 px-[clamp(1.25rem,4vw,3rem)] max-w-7xl mx-auto">
        <p className="section-overline text-emerald-400">Verified products</p>
        <h1
          className="font-serif-luxury text-luxury-gradient text-luxury-glow mb-4"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 0.98, letterSpacing: "-0.03em" }}
        >
          ECOCAN Market.
        </h1>
        <p className="text-[15px] text-white/55 max-w-lg mb-8">
          Browse verified recyclable drinks. Every product carries a serialized ECOCAN code — scan to confirm authenticity before purchasing.
        </p>

        {/* Stats chips */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { icon: ShieldCheck, label: "100% Verified" },
            { icon: Recycle, label: "Deposit Eligible" },
            { icon: Leaf, label: "Eco-Certified" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-emerald-400"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              <Icon size={13} strokeWidth={2} /> {label}
            </div>
          ))}
        </div>

        {/* Search + filter row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div
            className="flex items-center gap-3 rounded-full px-5 py-3 w-full sm:max-w-sm"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
          >
            <Search size={15} className="text-white/40 shrink-0" />
            <input
              type="text"
              placeholder="Search products or brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-white placeholder-white/30 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-white/50">
            <SlidersHorizontal size={14} /> <span>{filtered.length} products</span>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200"
              style={{
                background: activeCategory === cat ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${activeCategory === cat ? "rgba(34,197,94,0.35)" : "rgba(255,255,255,0.08)"}`,
                color: activeCategory === cat ? "#4ade80" : "rgba(255,255,255,0.55)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div ref={gridRef} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {filtered.length === 0 ? (
            <div className="col-span-full py-20 text-center text-white/40">
              <Recycle size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">No products found</p>
            </div>
          ) : (
            filtered.map((product, i) => (
              <div
                key={i}
                className="product-card group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.08) 0%, transparent 70%)", border: "1px solid rgba(34,197,94,0.15)" }} />

                {/* Verified badge */}
                {product.verified && (
                  <div className="absolute right-2 top-2 z-10">
                    <ShieldCheck size={14} className="text-emerald-400" />
                  </div>
                )}

                <div className="relative mb-3 flex items-center justify-center h-20">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={72}
                    height={72}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[12px] font-semibold text-white leading-tight mb-0.5">{product.name}</h3>
                <p className="text-[10px] text-white/40 mb-2">{product.brand}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-400">{product.deposit} deposit</span>
                  <span className="text-[9px] text-white/30 uppercase tracking-wider">{product.category}</span>
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
