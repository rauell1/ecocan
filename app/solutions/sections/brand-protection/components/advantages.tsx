import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import NormalQR from "./normal-qr";
import EcocanQR from "./ecocan-qr";

interface CustomSwitchProps {
  isActive: boolean;
  onToggle: (checked: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ isActive, onToggle }) => {
  return (
    <div className="relative">
      <Switch
        id="Ecocan Security Codes"
        className="w-[19rem] h-8 bg-gray-200 data-[state=checked]:bg-primary"
        checked={isActive}
        onCheckedChange={onToggle}
      />
      <div className="absolute inset-0 pointer-events-none flex items-center">
        <span
          className={`transition-all duration-200 text-sm font-medium w-full text-center
            ${isActive ? "text-white" : "translate-x-0 text-gray-600"}`}
        >
          {isActive ? "ECOCAN Security Codes" : "Normal QR Codes"}
        </span>
      </div>
    </div>
  );
};

export default function Advantages() {
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <TextWithCards
        title={
          <div className="text-white text-center">
            Advantages of ECOCAN Security Codes
          </div>
        }
        customCard={
          <div>
            <div className="text-center">
              <CustomSwitch isActive={isActive} onToggle={setIsActive} />
            </div>
            <div className="md:flex mt-6">
              <div
                className={`md:w-1/2 transition-all duration-300 ${
                  !isActive ? "" : "grayscale opacity-50"
                }`}
              >
                <NormalQR />
              </div>
              <div
                className={`md:w-1/2 transition-all duration-300 ${
                  isActive ? "" : "grayscale opacity-50"
                }`}
              >
                <EcocanQR />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
