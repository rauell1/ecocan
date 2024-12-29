import { Suspense } from "react";
import HeroContainer from "@/components/hero-container";
import Footer from "@/components/shared/footer/footer";

function LoadingHero() {
  return (
    <div className="w-full animate-pulse">
      <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-12 bg-gray-200 rounded-full mx-auto max-w-md"></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="bg-[#FAFAFA]">
        <Suspense fallback={<LoadingHero />}>
          <HeroContainer />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}