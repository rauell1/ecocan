import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import HyperLink from "../hyperlink/hyperlink";
import Link from "next/link";

type FooterItem =
  | { type: "logo"; src: string; alt: string }
  | { type: "text" }
  | {
      type: "social";
      links: { href: string; src: string; alt: string }[];
    }
  | { type: "link"; href: string; content: string }
  | { type: "input"; placeholder: string };

type FooterColumn = {
  title: React.ReactNode;
  items: FooterItem[];
};

const footerData: FooterColumn[] = [
  {
    title: null,
    items: [
      {
        type: "logo",
        src: "/assets/images/logo-curved.svg",
        alt: "Company Logo",
      },
      {
        type: "text",
      },
      {
        type: "social",
        links: [
          {
            href: "https://facebook.com",
            src: "/assets/icons/facebook-brands-solid.svg",
            alt: "Facebook",
          },
          {
            href: "https://twitter.com",
            src: "/assets/icons/twitter-brands-solid.svg",
            alt: "Twitter",
          },
          {
            href: "https://instagram.com",
            src: "/assets/icons/instagram-brands-solid.svg",
            alt: "Instagram",
          },
          {
            href: "https://linkedin.com",
            src: "/assets/icons/linkedin-brands-solid.svg",
            alt: "LinkedIn",
          },
        ],
      },
    ],
  },
  {
    title: <Link href="/">Home</Link>,
    items: [
      { type: "link", href: "/about-us", content: "About us" },
      { type: "link", href: "/solutions", content: "Solutions" },
      { type: "link", href: "/blog", content: "Blog" },
      { type: "link", href: "/contact", content: "Contact us" },
    ],
  },
  {
    title: "Support",
    items: [
      { type: "link", href: "#", content: "Customer support" },
      { type: "link", href: "#", content: "Privacy policy" },
    ],
  },
  {
    title: "JOIN OUR COMMUNITY🔥",
    items: [{ type: "input", placeholder: "Enter your email" }],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2F313F] px-4 xl:px-0">
      <div className="xl:max-w-[69.375rem] mx-auto grid py-[6.25rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {footerData.map((column, index) => (
          <div key={index}>
            {column.title && (
              <h3 className="font-semibold mb-4 text-[#E6E8EC]">{column.title}</h3>
            )}
            {column.items.map((item, itemIndex) => {
              switch (item.type) {
                case "logo":
                  return (
                    <div key={itemIndex} className="mb-4">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={180}
                        height={84}
                      />
                    </div>
                  );
                case "social":
                  return (
                    <div key={itemIndex} className="flex space-x-4 mb-4 gap-3">
                      {item.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-800"
                        >
                          <Image
                            src={link.src}
                            alt={link.alt}
                            width={24}
                            height={24}
                          />
                        </a>
                      ))}
                    </div>
                  );
                case "link":
                  return (
                    <div key={itemIndex} className="gap-8">
                      <a
                        href={item.href}
                        className="block mb-4 text-[#888D92] hover:text-gray-500 gap-8"
                      >
                        {item.content}
                      </a>
                    </div>
                  );
                case "input":
                  return (
                    <div
                      key={itemIndex}
                      className="mb-4 border border-[#E6E8EC] rounded-full flex items-center"
                    >
                      <Input
                        placeholder="Enter your email"
                        className="text-[#E6E8EC] bg-transparent border-none rounded-full focus:outline-none focus:border-none focus:ring-0"
                      />
                      <Image
                        src="/assets/icons/right-arrow.svg"
                        className="m-2"
                        alt="right chevron arrow"
                        width={32}
                        height={32}
                      />
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto py-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600">
        <span>© 2024 Ecocan. All Rights Reserved.</span>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-gray-800">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-800">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
