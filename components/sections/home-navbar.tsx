"use client"

import { useRef } from "react"
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
  { label: "For Producers", href: "/solutions", scroll: false },
  { label: "Investors", href: "#investors", scroll: true },
  { label: "About", href: "/about-us", scroll: false },
]

export default function HomeNavbar({ onMenuToggle }: HomeNavbarProps) {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      ref={navRef}
      className="fixed left-0 right-0 top-0 z-50"
      style={{
        height: 64,
        // Dark bar — ALWAYS. No scroll-state toggle.
        // Matches ANC / Nexora reference exactly.
        background: "rgba(8,12,9,0.75)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center px-6">
        {/* Logo — white version always */}
        <Link
          href={pathname === "/" ? "#hero" : "/"}
          onClick={(e) => {
            if (pathname === "/")
              handleSectionClick(e as React.MouseEvent<HTMLAnchorElement>, "#hero")
          }}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/assets/images/ecocan-logo-alt.svg"
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
                className="cursor-pointer text-[14px] font-medium text-white/60 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-white/60 transition-colors duration-200 hover:text-white"
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
            className="hidden rounded-full border border-white/30 px-5 py-2 text-[13.5px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-eco-dark md:inline-flex"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            Download App
          </Link>
          <button
            onClick={onMenuToggle}
            className="rounded-lg p-2 text-white/70 transition-colors hover:text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  )
}
