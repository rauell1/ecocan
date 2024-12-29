import HyperLink from "@/components/shared/hyperlink/hyperlink";
import Image from "next/image";

const logos = [
  {
    name: "Business Finland",
    url: "/assets/images/about/support-4.svg",
  },
  {
    name: "FINNPARTNERSHIP",
    url: "/assets/images/about/support-6.svg",
  },
  {
    name: "YPB",
    url: "/assets/images/about/support-1.svg",
  },
  {
    name: "Pure Recycle",
    url: "/assets/images/about/support-2.svg",
  },
  {
    name: "NEFCO",
    url: "/assets/images/about/support-5.svg",
  },
];

const Partners = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="flex w-full flex-col items-center justify-center px-4 md:px-8 gap-4">
        <h2 className="text-4xl font-bold text-[#23262fcc]">
          And join other disruptors
        </h2>
        <p className="lg:w-1/2 lg:text-center mx-auto text-[#777E90]">
          Building on our collaborative spirit, you&apos;ll join these strategic
          partners, who are instrumental to bringing our aspirations to
          fruition. Cheers to them, or as we say in Finland;{" "}
          <span className="text-primary">hölökyn kölökyn!</span>
        </p>
        <div className="grid grid-cols-3 gap-x-6 md:grid-cols-5">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.url}
              className="h-11 w-36 px-2"
              width={1000}
              height={1000}
              alt={`${logo.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
