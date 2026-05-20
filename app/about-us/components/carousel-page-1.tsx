import React from "react"

export default function CarouselPage1() {
  return (
    <div className="relative min-h-screen bg-black bg-[url('/assets/images/about/about-hero.svg')] bg-center bg-no-repeat after:absolute after:inset-0 after:z-10 after:bg-black/60 after:opacity-70 after:content-[''] lg:bg-cover">
      <div className="mx-auto flex min-h-[100vh] max-w-[72rem] items-center">
        <div className="z-50 px-4 text-white xl:px-0">
          <h1 className="text-center text-5xl font-semibold md:text-start xl:text-[4rem]">
            Empowering Kenyan consumers. <br />
            <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] bg-clip-text text-transparent">
              To recycle and thrive
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}
