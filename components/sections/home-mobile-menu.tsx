"use client";

import Link from "next/link";
import { X, Download } from "lucide-react";

interface HomeMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollEnabled: boolean;
}

const sectionLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "ECOmmunity", href: "#ecommunity" },
  { label: "Investors", href: "#investors" },
  { label: "Impact", href: "#impact" },
  { label: "FAQ", href: "#faq" },
];

const pageLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "News", href: "/news" },
];

export default function HomeMobileMenu({
  isOpen,
  onClose,
  scrollEnabled,
}: HomeMobileMenuProps) {
  const handleSectionClick = (href: string) => {
    onClose();
    // Unlock body scroll regardless of scrollEnabled state
    document.body.style.overflow = "";
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full z-50 w-[300px] max-w-[90vw] bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/8">
          <span className="font-bold text-eco-dark text-[17px]">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-black/5 transition-colors"
            aria-label="Close menu"
          >
            <X size={22} className="text-eco-dark" />
          </button>
        </div>

        <nav className="px-6 pt-6 flex flex-col gap-1">
          <p className="text-[11px] uppercase tracking-widest text-eco-dark/40 font-semibold mb-2">
            On this page
          </p>
          {sectionLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleSectionClick(link.href)}
              className="w-full text-left py-3 px-3 rounded-lg text-[16px] font-medium text-eco-dark hover:bg-primary/8 hover:text-primary transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          <div className="my-4 border-t border-black/8" />

          <p className="text-[11px] uppercase tracking-widest text-eco-dark/40 font-semibold mb-2">
            Pages
          </p>
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="py-3 px-3 rounded-lg text-[16px] font-medium text-eco-dark hover:bg-primary/8 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-black/8">
          <Link
            href="/download"
            onClick={onClose}
            className="pill-btn pill-btn-filled w-full justify-center text-base active:scale-95 transition-transform"
          >
            <Download size={18} />
            Download ECOCAN App
          </Link>
        </div>
      </div>
    </>
  );
}
