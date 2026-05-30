"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface HomeNavbarProps {
  onMenuToggle: () => void
}

const navLinks = [
  { label: "Home", href: "/", isPage: true },
  { label: "How It Works", href: "#how-it-works", isPage: false },
  { label: "ECOmmunity", href: "#ecommunity", isPage: false },
  { label: "Marketplace", href: "/ecocan-market", isPage: true },
  { label: "About", href: "/about-us", isPage: true },
  { label: "Contact", href: "/contact", isPage: true },
]

export default function HomeNavbar({ onMenuToggle }: HomeNavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    // Force Light theme on client mount
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    navLinks.forEach((link) => {
      if (!link.isPage) {
        const id = link.href.slice(1)
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      }
    })

    return () => {
      navLinks.forEach((link) => {
        if (!link.isPage) {
          const id = link.href.slice(1)
          const el = document.getElementById(id)
          if (el) observer.unobserve(el)
        }
      })
    }
  }, [])

  const handleSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage: boolean) => {
    if (isPage) return // Let standard next/link handles it

    e.preventDefault()

    // Smooth scrolling that works nicely with Lenis
    if ((window as any).lenis) {
      ;(window as any).lenis.scrollTo(href, { offset: -80, duration: 1.2 })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }

    setMobileOpen(false)
  }

  const toggleMobile = () => {
    setMobileOpen((v) => !v)
    onMenuToggle()
  }

  return (
    <header
      className="fixed left-0 right-0 top-0 z-[100] transition-all duration-500"
      style={{
        background: scrolled ? "rgba(245, 247, 245, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(13, 18, 13, 0.08)" : "none",
      }}
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-center px-6 py-4 md:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <span className="font-serif-luxury mr-2 text-xl font-bold tracking-wider text-[var(--c-text)]">
            ECOCAN
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = !link.isPage && activeSection === link.href.slice(1)

            if (link.isPage) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 text-[14px] font-medium tracking-wide text-[var(--c-text-muted)] transition-all duration-300 hover:text-[var(--c-text)]"
                >
                  {link.label}
                </Link>
              )
            }

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSection(e, link.href, false)}
                className={`relative py-2 text-[14px] font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-[var(--c-green)]"
                    : "text-[var(--c-text-muted)] hover:text-[var(--c-text)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-[-2px] left-0 right-0 h-[1.5px] rounded-full bg-[var(--c-green)]" />
                )}
              </a>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/download"
            className="hover:border-[var(--c-green)]/20 hover:bg-[var(--c-green)]/10 hidden rounded-full border border-[var(--c-border-dark)] bg-[var(--c-surface)] px-6 py-2 text-[13px] font-medium text-[var(--c-text)] backdrop-blur-md transition-all duration-300 hover:text-[var(--c-green)] md:flex"
          >
            Download App
          </Link>
          <button
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-lg p-2.5 text-[var(--c-text-muted)] hover:bg-[var(--c-surface)] hover:text-[var(--c-text)] lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="bg-[var(--c-bg)]/95 border-t border-[var(--c-border)] px-6 pb-8 pt-4 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = !link.isPage && activeSection === link.href.slice(1)

              if (link.isPage) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="relative rounded-xl px-4 py-3.5 text-sm font-semibold text-[var(--c-text-muted)] transition-all duration-300 hover:bg-[var(--c-surface)] hover:text-[var(--c-text)]"
                  >
                    {link.label}
                  </Link>
                )
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSection(e, link.href, false)}
                  className={`relative rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-l-2 border-[var(--c-green)] bg-[var(--c-green-dim)] text-[var(--c-green)]"
                      : "text-[var(--c-text-muted)] hover:bg-[var(--c-surface)] hover:text-[var(--c-text)]"
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
