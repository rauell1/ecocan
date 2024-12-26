import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ScanqrPopup from "../../scan-qr";
import clsx from "clsx";
import RegistrationDropDownTrigger from "./register-trigger";
import RegisterPopup from "../../register-popup";
import EcostationForm from "../../hero-form/hero-form";
import EcoProducerForm from "../../eco-producer-form";
import EcoEventsForm from "../../eco-events-form";

type DropdownItem = {
  id: string;
  label: string;
  icon: string;
  description: string;
  component: React.ComponentType<any>;
  form?: React.ReactNode;
};

const dropdownItems: DropdownItem[] = [
  {
    id: 'download',
    label: 'Download App',
    icon: '/assets/icons/download.svg',
    description: 'To avoid counterfeits, and protect planet',
    component: ScanqrPopup,
  },
  {
    id: 'eco-station',
    label: 'ECO-Station',
    icon: '/assets/icons/shop.svg',
    description: 'Make money while facilitating recycling',
    component: RegisterPopup,
    form: <EcostationForm className="mx-auto lg:w-[33.125rem]" />
  },
  {
    id: 'eco-producer',
    label: 'ECO-Producer',
    icon: '/assets/icons/producer.svg',
    description: 'Promote sales, brand image, and regulatory compliance',
    component: RegisterPopup,
    form: <EcoProducerForm />
  },
  {
    id: 'eco-events',
    label: 'ECO-Events',
    icon: '/assets/icons/events.svg',
    description: 'Elevate your gig to next level',
    component: RegisterPopup,
    form: <EcoEventsForm />
  },
  {
    id: 'support',
    label: 'Support',
    icon: '/assets/icons/events.svg',
    description: 'Contact support',
    component: RegisterPopup,
    form: <EcoEventsForm />
  }
];

export function RegisterDropdown({ isScrolled }: { isScrolled: Boolean }) {
  const renderDropdownItem = (item: DropdownItem) => {
    const Component = item.component;
    const trigger = (
      <RegistrationDropDownTrigger
        label={item.label}
        icon={item.icon}
        description={item.description}
      />
    );

    return (
      <DropdownMenuItem
        key={item.id}
        asChild
        className="focus:bg-[#F3F3F6] cursor-pointer group px-2 py-2 rounded-smooth-sm"
      >
        <div onClick={(e) => e.preventDefault()} className="z-[9999]">
          <Component
            downloadTrigger={trigger}
            trigger={trigger}
            form={item.form}
          />
        </div>
      </DropdownMenuItem>
    );
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          className={clsx(
            "rounded-full h-7 xl:h-8 text-black hover:text-primary bg-white hover:bg-white",
            isScrolled
              ? "bg-primary text-white hover:bg-primary hover:text-white"
              : "bg-white"
          )}
        >
          Register
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 z-[9999] p-6 rounded-smooth-sm border-none">
        <DropdownMenuGroup className="space-y-4">
          {dropdownItems.map(renderDropdownItem)}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}