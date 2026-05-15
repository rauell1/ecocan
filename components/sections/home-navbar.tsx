"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

interface HomeNavbarProps {
  onMenuToggle: () => void
}

const navLinks = [
  { label: "How It Works", href: "#how-it-works", scroll: true },
  { label: "ECOmmunity", href: "#ecommunity", scroll: true },
  { label: "Impact", href: "#impact", scroll: true },
  { label: "Solutions", href: "/solutions", scroll: false },
  { label: "About", href: "/about-us", scroll: false },
]

export default function HomeNavbar({ onMenuToggle }: HomeNavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
      style={{
        height: 64,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(10,14,11,0.55)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center px-6">
        {/* Logo — left */}
        <Link
          href={pathname === "/" ? "#hero" : "/"}
          onClick={(e) => {
            if (pathname === "/")
              handleSectionClick(e as React.MouseEvent<HTMLAnchorElement>, "#hero")
          }}
          className="flex shrink-0 items-center"
        >
          <Image
            src={scrolled ? "/images/ecocan-logo.png" : "/assets/images/ecocan-logo-alt.svg"}
            alt="ECOCAN"
            width={96}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Nav links — centered */}
        <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.scroll ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className={`cursor-pointer text-[14px] font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-eco-dark/65 hover:text-eco-dark"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-eco-dark/65 hover:text-eco-dark"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA — right */}
        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <Link
            href="/download"
            className={`hidden rounded-full px-5 py-2 text-[13.5px] font-semibold transition-all duration-200 md:inline-flex ${
              scrolled
                ? "bg-primary text-white hover:bg-primary/90"
                : "border border-white/40 bg-white/10 text-white hover:bg-white hover:text-eco-dark"
            }`}
          >
            Download App
          </Link>
          <button
            onClick={onMenuToggle}
            className={`rounded-lg p-2 transition-colors lg:hidden ${
              scrolled ? "text-eco-dark" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  )
}
