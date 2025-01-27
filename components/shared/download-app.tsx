import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, LucideArrowRight, LucideDownload } from "lucide-react";
import clsx from "clsx";

interface AppStoreButtonProps {
  playStoreUrl: string;
  appStoreUrl: string;
  className?: string;
  showArrow?: boolean;
  arrow?: React.ReactNode;
  buttonText?: string;
}

const AppStoreButton = ({
  playStoreUrl,
  appStoreUrl,
  className,
  buttonText = "Download App",
  showArrow = false,
  arrow = <LucideDownload className="ml-4" />,
}: AppStoreButtonProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const detectDevice = () => {
    // Only run on client side
    if (typeof window === "undefined") return null;

    const userAgent = window.navigator.userAgent.toLowerCase();

    // iOS detection
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    // Android detection
    const isAndroid = /android/.test(userAgent);

    return isIOS ? "ios" : isAndroid ? "android" : "desktop";
  };

  const handleClick = () => {
    const device = detectDevice();

    switch (device) {
      case "ios":
        window.location.href = appStoreUrl;
        break;
      case "android":
        window.location.href = playStoreUrl;
        break;
      default:
        // On desktop, open a dialog or redirect to a landing page
        window.open(playStoreUrl, "_blank");
    }
  };

  if (!isClient) {
    return null; // Prevent hydration errors
  }

  return (
    <>
      <Button
        variant="ghost"
        onClick={handleClick}
        className={clsx(
          `rounded-full bg-transparent text-primary hover:bg-transparent h-12 py-3 px-0 text-base font-light underline underline-offset-[6px] hover:text-primary`,
          className
        )}
      >
        <span className="relative z-[999]">{buttonText}</span>
        {showArrow && arrow}
      </Button>
    </>
  );
};

export default AppStoreButton;
