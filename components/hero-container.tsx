"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabContent } from "@/lib/tabContent";

export default function HeroContainer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "ECOnsumer";

  const handleTabChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", value);
    
    router.push(`?${newParams.toString()}`, { scroll: false });
  };

  const isValidTab = (tab: string): boolean => {
    return Object.keys(tabContent).includes(tab);
  };

  const activeTab = isValidTab(currentTab) ? currentTab : "ECOnsumer";

  return (
    <>
      <Tabs 
        value={activeTab} 
        onValueChange={handleTabChange}
        className="w-full"
      >
        <div className="relative">
          {Object.entries(tabContent).map(([tab, { hero }]) => (
            <TabsContent key={tab} value={tab}>
              {hero}
            </TabsContent>
          ))}
        </div>
        <div className="justify-center items-center flex lg:pt-8">
          <TabsList className="bg-white border-[#E6E6E6] rounded-full">
            {Object.keys(tabContent).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-full w-[5.575rem] md:w-36 text-[#0000004D] text-[0.6875rem] md:text-base z-50"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(tabContent).map(([tab, { content }]) => (
          <TabsContent key={tab} value={tab}>
            <div className="mt-12">{content}</div>
          </TabsContent>
        ))}
        <div className="justify-center items-center flex py-8">
          <TabsList className="bg-white border-[#E6E6E6] rounded-full">
            {Object.keys(tabContent).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-full w-[5.575rem] md:w-36 text-[#0000004D] text-xs md:text-base z-50"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>
    </>
  );
}