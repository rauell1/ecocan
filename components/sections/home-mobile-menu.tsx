"use client"

import Link from "next/link"
import Image from "next/image"
import { X, Download } from "lucide-react"

interface HomeMobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const sectionLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "ECOmmunity", href: "#ecommunity" },
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
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }, 220)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-[280px] max-w-[88vw] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/[0.07] px-5 py-4">
          <Image
            src="/images/ecocan-logo.png"
            alt="ECOCAN"
            width={80}
            height={30}
            className="h-7 w-auto"
          />
          <button
            onClick={onClose}
            className="rounded-lg p-2 transition-colors hover:bg-black/[0.05]"
            aria-label="Close menu"
          >
            <X size={20} className="text-eco-dark" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 pt-4">
          {sectionLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleSectionClick(link.href)}
              className="w-full rounded-xl px-4 py-3 text-left text-[15px] font-medium text-eco-dark transition-colors hover:bg-black/[0.04] hover:text-primary"
            >
              {link.label}
            </button>
          ))}

          <div className="my-3 border-t border-black/[0.07]" />

          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-xl px-4 py-3 text-[15px] font-medium text-eco-dark/70 transition-colors hover:bg-black/[0.04] hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Sticky CTA */}
        <div className="border-t border-black/[0.07] p-5">
          <Link
            href="/download"
            onClick={onClose}
            className="pill-btn pill-btn-filled w-full justify-center text-[15px]"
          >
            <Download size={17} />
            Download ECOCAN
          </Link>
        </div>
      </div>
    </>
  )
}
