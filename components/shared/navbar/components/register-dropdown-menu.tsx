import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ScanqrPopup from "../../scan-qr"
import clsx from "clsx"
import RegistrationDropDownTrigger from "./register-trigger"
import RegisterPopup from "../../register-popup"
import EcostationForm from "../../hero-form/hero-form"
import EcoProducerForm from "../../eco-producer-form"
import EcoEventsForm from "../../eco-events-form"
import ContactForm from "@/app/contact/components/contact-form"

type DropdownItem = {
  id: string
  label: string
  icon: string
  description: string
  component: React.ComponentType<any>
  form?: React.ReactNode
}

const dropdownItems: DropdownItem[] = [
  {
    id: "download",
    label: "Download App",
    icon: "/assets/icons/download.svg",
    description: "Verify drinks, recycle empties, and earn rewards",
    component: ScanqrPopup,
  },
  {
    id: "eco-station",
    label: "ECO-Station",
    icon: "/assets/icons/shop.svg",
    description: "Make money while facilitating recycling",
    component: RegisterPopup,
    form: <EcostationForm className="mx-auto lg:w-[33.125rem]" />,
  },
  {
    id: "eco-producer",
    label: "ECO-Producer",
    icon: "/assets/icons/producer.svg",
    description: "Promote sales, brand image, and regulatory compliance",
    component: RegisterPopup,
    form: <EcoProducerForm />,
  },
  {
    id: "eco-events",
    label: "ECO-Events",
    icon: "/assets/icons/events.svg",
    description: "Elevate your gig to next level",
    component: RegisterPopup,
    form: <EcoEventsForm />,
  },
  {
    id: "support",
    label: "Support",
    icon: "/assets/icons/events.svg",
    description: "Contact support",
    component: RegisterPopup,
    form: (
      <ContactForm
        title="Leave us a message"
        className="mx-auto border-none shadow-none lg:!mt-0 lg:w-[33.125rem]"
      />
    ),
  },
]

export function RegisterDropdown({ isScrolled }: { isScrolled: Boolean }) {
  const renderDropdownItem = (item: DropdownItem) => {
    const Component = item.component
    const trigger = (
      <RegistrationDropDownTrigger
        label={item.label}
        icon={item.icon}
        description={item.description}
      />
    )

    return (
      <DropdownMenuItem
        key={item.id}
        asChild
        className="focus:bg-eco-light hover:bg-eco-light group cursor-pointer rounded-xl px-3 py-2.5"
      >
        <div onClick={(e) => e.preventDefault()} className="z-[9999]">
          <Component downloadTrigger={trigger} trigger={trigger} form={item.form} />
        </div>
      </DropdownMenuItem>
    )
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          className={clsx(
            "h-auto rounded-full px-5 py-2 text-sm font-semibold transition-colors",
            isScrolled
              ? "bg-primary hover:bg-primary-dark text-white"
              : "text-eco-dark bg-white hover:bg-white/90"
          )}
        >
          Start with ECOCAN
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-border shadow-elevated z-[9999] w-80 rounded-[20px] border p-4">
        <DropdownMenuGroup className="space-y-1">
          {dropdownItems.map(renderDropdownItem)}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
