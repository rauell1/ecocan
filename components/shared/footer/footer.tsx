import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { CORE_ROUTES } from "@/lib/site-contract";

const Footer = () => {
  return (
    <footer className="bg-[#20222C] px-4 py-16 text-white">
      <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
        {/* Logo */}
        <div className="mb-14">
          <Image
            src="/assets/images/logo-curved-white.svg"
            alt="Ecocan Logo"
            width={236}
            height={84}
            className="mx-auto opacity-95"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 mb-14">
          {/* Home Links */}
          <div className="col-span-10 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Home</h3>
            <ul className="space-y-3 text-gray-300/90">
              <li>
                <Link href={CORE_ROUTES.home} className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.solutions} className="transition-colors hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.about} className="transition-colors hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.contact} className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Data and Privacy */}
          <div className="col-span-10 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Data and Privacy</h3>
            <ul className="space-y-3 text-gray-300/90">
              <li>
                <Link href={CORE_ROUTES.home} className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.contact} className="transition-colors hover:text-white">
                  Customer support
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Socials */}
          <div className="col-span-10 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Our Socials</h3>
            <div className="grid grid-cols-3 gap-2 w-fit">
              <Link href="https://facebook.com/EcocanAfrica" target="_blank" rel="noreferrer" className="w-fit transition-opacity hover:opacity-80">
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://twitter.com/EcocanAfrica" target="_blank" rel="noreferrer" className="w-fit transition-opacity hover:opacity-80">
                <Image
                  src="/assets/icons/X.svg"
                  alt="Twitter"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://www.instagram.com/ecocanafrica?igsh=eHEycmVwYnV3OGR2" target="_blank" rel="noreferrer" className="w-fit transition-opacity hover:opacity-80">
                <Image
                  src="/assets/icons/Instagram.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-fit transition-opacity hover:opacity-80">
                <Image
                  src="/assets/icons/tiktok.svg"
                  alt="TikTok"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-fit transition-opacity hover:opacity-80">
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://www.youtube.com/@EcocanAfrica" target="_blank" rel="noreferrer" className="w-fit transition-opacity hover:opacity-80">
                <Image
                  src="/assets/icons/youtube.svg"
                  alt="YouTube"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-10 md:col-span-4">
            <h3 className="text-xl font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-300/90 mb-4">
              Subscribe to stay green and join our ECOcommunity to stay up to
              date.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/10 text-white placeholder:text-gray-300 rounded-l-full focus-visible:ring-1 focus-visible:ring-primary"
              />
              <button className="bg-primary text-white px-6 rounded-r-full transition-colors hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 mb-14">
          {/* Kenya Office */}
          <div className="col-span-10 md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/images/kenya.png"
                alt="kenyan flag"
                width={24}
                height={24}
              />
              <h3 className="text-xl font-semibold">Kenya Office</h3>
            </div>
            <div className="flex items-start gap-2">
              <Image
                src="/assets/icons/location.svg"
                alt="GDPR Compliant"
                width={16}
                height={16}
              />
              <div>
                <p className="text-gray-300/90">Plessey House, Boricho rd,</p>
                <p className="text-gray-300/90">P.O.BOX 5686-00100</p>
                <p className="text-gray-300/90 mb-2">Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Image
                src="/assets/icons/email.svg"
                alt="GDPR Compliant"
                width={16}
                height={16}
              />
              <p className="text-gray-300/90">info@ecocanafrica.com</p>
            </div>
            <div className="flex items-start gap-2">
              <Image
                src="/assets/icons/phone.svg"
                alt="GDPR Compliant"
                width={16}
                height={16}
              />
              <p className="text-gray-300/90">+254738203770 / +254740376074</p>
            </div>
          </div>

          {/* Finland Office */}
          <div className="col-span-10 md:col-span-3 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/images/finland.png"
                alt="finnish flag"
                width={24}
                height={24}
              />
              <h3 className="text-xl font-semibold">Finland Office</h3>
            </div>
            <div className="flex items-start gap-2">
              <Image
                src="/assets/icons/location.svg"
                alt="GDPR Compliant"
                width={16}
                height={16}
              />
              <div className="self-start">
                <p className="text-gray-300/90">Korkeavuorenkatu 7c 49</p>
                <p className="text-gray-300/90">00140 Helsinki, Finland</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Image
                src="/assets/icons/email.svg"
                alt="GDPR Compliant"
                width={16}
                height={16}
              />
              <p className="text-gray-300/90">info@ecocanafrica.com</p>
            </div>
            <div className="flex items-start gap-2">
              <Image
                src="/assets/icons/phone.svg"
                alt="GDPR Compliant"
                width={16}
                height={16}
              />
              <p className="text-gray-300/90">+358440816059 / +358408470927</p>
            </div>
          </div>
          <div className="col-span-10 md:col-span-4 gap-4 lg:gap-0 grid grid-cols-2">
            <Image
              src="/assets/images/gdpr-badge.svg"
              alt="GDPR Compliant"
              width={160}
              height={190}
            />
            <Image
              src="/assets/images/odpc-badge.svg"
              alt="ODPC Compliance Bagde"
              width={160}
              height={190}
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300/90">
          <p>© {new Date().getFullYear()} ECOCAN. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
