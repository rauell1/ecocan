"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

interface HomeNavbarProps {
  scrollEnabled: boolean
  onMenuToggle: () => void
}

const sectionLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "ECOmmunity", href: "#ecommunity" },
  { label: "Investors", href: "#investors" },
  { label: "Impact", href: "#impact" },
]

const pageLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about-us" },
]

export default function HomeNavbar({ scrollEnabled, onMenuToggle }: HomeNavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const logoHref = pathname === "/" ? "#hero" : "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    // If scroll is still locked (hero animation not done), unlock first then scroll
    if (!scrollEnabled) {
      document.body.style.overflow = ""
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
      style={{ height: 72 }}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6">
        {/* Logo */}
        <Link
          href={logoHref}
          onClick={(e) => {
            if (pathname === "/") {
              handleSectionClick(e, "#hero")
            }
          }}
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/images/ecocan-logo.png"
            alt="ECOCAN"
            width={80}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span
            className={`hidden text-xs font-semibold uppercase tracking-[0.18em] transition-colors md:inline ${
              scrolled ? "text-eco-dark/80" : "text-white/80"
            }`}
          >
            Circular Bottle Ecosystem
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSectionClick(e, link.href)}
              className={`cursor-pointer text-[15px] font-medium transition-colors hover:text-primary ${
                scrolled ? "text-eco-dark" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <span className={`h-4 w-px ${scrolled ? "bg-eco-dark/20" : "bg-white/30"}`} />
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors hover:text-primary ${
                scrolled ? "text-eco-dark" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className={`pill-btn hidden !px-6 !py-2.5 text-sm font-semibold transition-all md:inline-flex ${
              scrolled
                ? "text-eco-dark hover:opacity-90"
                : "border border-white/60 text-white hover:bg-white hover:text-eco-dark"
            }`}
            style={scrolled ? { background: "hsl(48 100% 62%)", borderColor: "transparent" } : {}}
          >
            Download App
          </Link>
          <button
            onClick={onMenuToggle}
            className={`rounded-lg p-2 transition-colors lg:hidden ${
              scrolled ? "text-eco-dark" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}
