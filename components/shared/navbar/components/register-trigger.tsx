import React from "react"
import Image from "next/image"

interface RegistrationDropDownProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  icon: string
  description?: string
}

const RegistrationDropDownTrigger = React.forwardRef<HTMLDivElement, RegistrationDropDownProps>(
  ({ label, icon, description, className, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <div className="flex items-center gap-2">
          <Image
            src={icon}
            alt={`${label} icon`}
            className="grayscale group-focus:grayscale-0"
            width={16}
            height={16}
          />
          <span className="text-muted-foreground group-focus:font-medium group-focus:text-primary">
            {label}
          </span>
        </div>
        <p className="ps-6 text-xs text-muted-foreground">{description}</p>
      </div>
    )
  }
)

RegistrationDropDownTrigger.displayName = "RegistrationDropDownTrigger"
export default RegistrationDropDownTrigger
