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
        url: "/assets/images/logo-curved.svg",
        width: 1200,
        height: 630,
        alt: "ECOCAN",
      },
    ],
    type: "website",
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
