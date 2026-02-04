import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECOCAN",
  description:
    "We seamlessly connect the physical and digital worlds in a manner that is most sustainable to our planet, and to the life it nurtures",
  authors: [{ name: "ECOCAN" }],
  openGraph: {
    title: "ECOCAN",
    description:
      "We seamlessly connect the physical and digital worlds in a manner that is most sustainable to our planet, and to the life it nurtures",
    url: "https://ecocan.africa",
    siteName: "ECOCAN",
    images: [
      {
        url: "/ecocan-curve.png",
        width: 1200,
        height: 630,
        alt: "ECOCAN",
      },
    ],
    type: "website",
  },
  other: {
    "author": "ECOCAN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
