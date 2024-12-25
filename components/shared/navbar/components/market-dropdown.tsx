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
      <DropdownMenuContent className="w-80 z-[9997] p-6 rounded-smooth-sm border-none">
        <DropdownMenuGroup className="space-y-4">
          <DropdownMenuItem className="focus:bg-[#F3F3F6] cursor-pointer group px-2 py-2 rounded-smooth-sm">
            <Link href="/" className="flex gap-2 items-center">
              <Image
                src="/assets/icons/map.svg"
                alt="mapicon"
                className="grayscale group-focus:grayscale-0"
                width={16}
                height={16}
              />
              <p className="no-underline text-secondary group-focus:text-primary group-focus:font-medium">
                ECOCAN Map
              </p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-[#F3F3F6] cursor-pointer group px-2 py-2 rounded-smooth-sm">
            <Link href="/ecocan-market" className="flex gap-2 items-center">
              <Image
                src="/assets/icons/products.svg"
                alt="mapicon"
                className="grayscale group-focus:grayscale-0"
                width={16}
                height={16}
              />
              <p className="no-underline text-secondary group-focus:text-primary group-focus:font-medium">
                ECO-Products
              </p>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
