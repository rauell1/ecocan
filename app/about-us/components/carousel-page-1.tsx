import React from "react";

export default function CarouselPage1() {
  return (
    <div className="bg-[url('/assets/images/about/about-hero.svg')] min-h-screen lg:bg-cover bg-center bg-no-repeat bg-black relative after:absolute after:inset-0 after:content-[''] after:bg-black/60 after:opacity-70 after:z-10">
      <div className="max-w-[69.375rem] mx-auto min-h-[100vh] flex items-center">
        <div className="px-4 xl:px-0 text-white z-50">
          <h1 className="xl:text-[4rem] text-5xl text-center md:text-start font-semibold">
            Empowering communities. <br />
            <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] text-transparent bg-clip-text">
              To shape the future
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
