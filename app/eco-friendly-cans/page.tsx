"use client"

import HomeNavbar from "@/components/sections/home-navbar"
import HomeFooter from "@/components/sections/home-footer"
import React from "react"
import Heading from "./components/heading"
import Operational from "./components/operational"
import Security from "./components/security"
import Economic from "./components/economic"

export default function DrsTakeOver() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#050705" }}>
      <HomeNavbar onMenuToggle={() => {}} />
      <div className="space-y-0 pt-[3.275rem]">
        <Heading />
        <Operational />
        <Security />
        <Economic />
      </div>
      <HomeFooter />
    </div>
  )
}
