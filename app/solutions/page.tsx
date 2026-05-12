"use client";

import React from "react";
import SolutionsContent from "./sections/solutions-content";
import Footer from "@/components/shared/footer/footer";

export default function SolutionsPage() {
  return (
    <>
      <main className="bg-background">
        <SolutionsContent />
      </main>
      <Footer />
    </>
  );
}
