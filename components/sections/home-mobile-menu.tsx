"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

interface HomeMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollEnabled: boolean;
}

const sectionLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Model", href: "#model" },
  { label: "For Investors", href: "#investors" },
  { label: "Sustainability", href: "#impact" },
];

const pageLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Solutions", href: "/solutions" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function HomeMobileMenu({ isOpen, onClose, scrollEnabled }: HomeMobileMenuProps) {
  useEffect(() => {
    // Only lock scroll if not already locked by hero transition
    if (isOpen && scrollEnabled) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen && scrollEnabled) {
      document.body.style.overflow = "";
    }
    return () => {
      if (scrollEnabled) document.body.style.overflow = "";
    };
  }, [isOpen, scrollEnabled]);

  const handleSectionClick = (href: string) => {
    onClose();
    if (!scrollEnabled) return;
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[320px] max-w-[85vw] bg-white shadow-elevated transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Image src="/images/ecocan-logo.png" alt="ECOCAN" width={70} height={28} className="h-7 w-auto" />
          <button onClick={onClose} className="p-2 text-eco-dark" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-0 overflow-y-auto max-h-[calc(100vh-80px)]">
          {/* Section anchors */}
          <p className="text-xs font-semibold uppercase tracking-widest text-eco-dark/40 px-4 py-2">On this page</p>
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleSectionClick(link.href); }}
              className="py-3 px-4 text-base font-medium text-eco-dark hover:bg-eco-light rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="my-4 border-t border-gray-100" />

          {/* Page links */}
          <p className="text-xs font-semibold uppercase tracking-widest text-eco-dark/40 px-4 py-2">Explore</p>
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="py-3 px-4 text-base font-medium text-eco-dark hover:bg-eco-light rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3">
            <Link
              href="/download"
              onClick={onClose}
              className="pill-btn pill-btn-filled w-full justify-center"
            >
              Download App
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="pill-btn pill-btn-outline w-full justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
