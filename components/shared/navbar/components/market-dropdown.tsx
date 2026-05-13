import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ScanqrPopup from "../../scan-qr";
import RegistrationDropDownTrigger from "./register-trigger";
import RegisterPopup from "../../register-popup";
import EcostationForm from "../../hero-form/hero-form";
import HyperLink from "../../hyperlink/hyperlink";
import Image from "next/image";
import Link from "next/link";

export function MarketDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link">ECOCAN Market</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 z-[9999] p-4 rounded-[20px] border border-border shadow-elevated">
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem className="focus:bg-eco-light hover:bg-eco-light cursor-pointer group px-3 py-2.5 rounded-xl">
            <Link href="/" className="flex gap-3 items-center w-full">
              <Image
                src="/assets/icons/map.svg"
                alt="mapicon"
                className="grayscale group-focus:grayscale-0"
                width={16}
                height={16}
              />
              <p className="no-underline text-eco-dark/70 group-focus:text-primary group-focus:font-medium text-[15px]">
                ECOCAN Map
              </p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-eco-light hover:bg-eco-light cursor-pointer group px-3 py-2.5 rounded-xl">
            <Link href="/ecocan-market" className="flex gap-3 items-center w-full">
              <Image
                src="/assets/icons/products.svg"
                alt="mapicon"
                className="grayscale group-focus:grayscale-0"
                width={16}
                height={16}
              />
              <p className="no-underline text-eco-dark/70 group-focus:text-primary group-focus:font-medium text-[15px]">
                ECO-Products
              </p>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
