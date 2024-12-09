import Image from "next/image";
import React from "react";

export default function Download() {
  return (
    <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0 bg-[url('/assets/images/solutions/download-bg.svg')] hidden lg:h-[43.75rem] lg:flex flex-col justify-center">
      <div className="ms-5">
        <h1 className="text-white text-5xl font-semibold">
          ECOCAN, your unfair <br />
          advantage
        </h1>
        <div className="flex gap-5 mt-20">
          <Image
            src="/assets/images/solutions/playstore.svg"
            alt="download on playstore"
            className="cursor-pointer"
            priority
            width={170}
            height={100}
          />
          <Image
            src="/assets/images/solutions/appstore.svg"
            alt="download on playstore"
            className="cursor-pointer"
            priority
            width={162}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
