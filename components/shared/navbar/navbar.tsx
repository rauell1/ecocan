"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";
import { useScroll } from "@/lib/useScroll";
import { RegisterDropdown } from "./components/register-dropdown-menu";
import { MarketDropdown } from "./components/market-dropdown";
import { NAV_ROUTES } from "@/lib/site-contract";

interface NavigationBarProps {
  logoSrc: string;
  className?: string;
  linkColor?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  logoSrc,
  className,
  linkColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  const navSurfaceBaseClass = "border-b border-border/80 shadow-sm";
  let navSurfaceClass = "";

  if (isOpen) {
    navSurfaceClass = `bg-card ${navSurfaceBaseClass}`;
  } else if (isScrolled) {
    navSurfaceClass = `bg-card/95 backdrop-blur-md ${navSurfaceBaseClass}`;
  }

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-[9995] transition-all duration-500",
        navSurfaceClass,
        className
      )}
    >
      <div className="flex items-center justify-between flex-wrap max-w-[1280px] mx-auto px-6" style={{ height: 72 }}>
        {/* Logo — always links to homepage */}
        <Link
          href="/"
          className="flex items-center flex-shrink-0 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          aria-label="Go to ECOCAN homepage"
        >
          <Image
            src={logoSrc}
            alt="ECOCAN logo"
            width={46}
            height={46}
            className="w-auto h-full"
          />
        </Link>

        {/* Mobile hamburger */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex items-center px-3 py-2 rounded text-foreground hover:text-primary"
          >
            <svg
              className={`fill-current h-6 w-6 ${
                isScrolled ? "text-primary" : "hidden"
              } ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-6 w-6 ${
                isScrolled ? "text-primary" : "text-foreground"
              } ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div
          className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
            isOpen ? "block min-h-screen md:min-h-0" : "hidden max-h-none"
          }`}
        >
          <div className="text-sm flex md:flex-row flex-col items-center justify-center gap-6 ms-4">
            {NAV_ROUTES.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className={clsx(
                  "block md:inline-block text-center text-[15px] font-medium transition-colors duration-200",
                  isLinkActive(link.href) ? "text-primary" : linkColor,
                  "hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="text-center ms-auto flex-col md:flex-row flex items-center justify-center gap-4 md:pt-0 pt-5">
            <MarketDropdown />
            <RegisterDropdown isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
