"use client"

import Link from "next/link"
import { X, Download } from "lucide-react"

interface HomeMobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const sectionLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "ECOmmunity", href: "#ecommunity" },
  { label: "Investors", href: "#investors" },
  { label: "Impact", href: "#impact" },
  { label: "FAQ", href: "#faq" },
]

const pageLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "News", href: "/news" },
]

export default function HomeMobileMenu({ isOpen, onClose }: HomeMobileMenuProps) {
  const handleSectionClick = (href: string) => {
    onClose()
    document.body.style.overflow = ""
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 200)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-50 h-full w-[300px] max-w-[90vw] bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="border-black/8 flex items-center justify-between border-b px-6 py-5">
          <span className="text-[17px] font-bold text-eco-dark">Menu</span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 transition-colors hover:bg-black/5"
            aria-label="Close menu"
          >
            <X size={22} className="text-eco-dark" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6 pt-6">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-eco-dark/40">
            On this page
          </p>
          {sectionLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleSectionClick(link.href)}
              className="hover:bg-primary/8 w-full cursor-pointer rounded-lg px-3 py-3 text-left text-[16px] font-medium text-eco-dark transition-colors hover:text-primary"
            >
              {link.label}
            </button>
          ))}

          <div className="border-black/8 my-4 border-t" />

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-eco-dark/40">
            Pages
          </p>
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="hover:bg-primary/8 rounded-lg px-3 py-3 text-[16px] font-medium text-eco-dark transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-black/8 absolute bottom-0 left-0 right-0 border-t p-6">
          <Link
            href="/download"
            onClick={onClose}
            className="pill-btn pill-btn-filled w-full justify-center text-base transition-transform active:scale-95"
          >
            <Download size={18} />
            Download ECOCAN App
          </Link>
        </div>
      </div>
    </>
  )
}
