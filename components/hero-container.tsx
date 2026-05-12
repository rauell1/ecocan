"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabContent } from "@/lib/tabContent";
import { DEFAULT_HOME_TAB, isValidHomeTab } from "@/lib/site-contract";

export default function HeroContainer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || DEFAULT_HOME_TAB;

  const handleTabChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", value);
    
    router.push(`?${newParams.toString()}`, { scroll: false });
  };

  const activeTab = isValidHomeTab(currentTab) ? currentTab : DEFAULT_HOME_TAB;

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
          <TabsList className="bg-card border-border rounded-full">
            {Object.keys(tabContent).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-full w-[5.575rem] md:w-36 text-muted-foreground text-[0.6875rem] md:text-base z-50"
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
          <TabsList className="bg-card border-border rounded-full">
            {Object.keys(tabContent).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-full w-[5.575rem] md:w-36 text-muted-foreground text-xs md:text-base z-50"
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
