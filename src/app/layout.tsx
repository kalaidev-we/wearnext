import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "WearNextFabs — Weaving What's Next | Textile & Manufacturing",
  description:
    "WearNextFabs is a premium textile engineering and apparel manufacturing platform. Custom fabric development, precision weaving, and full-package garment production for global brands.",
  keywords: [
    "WearNextFabs",
    "textile manufacturing",
    "apparel manufacturer",
    "custom fabric development",
    "weaving mill",
    "organic cotton",
    "cut make trim",
    "B2B textile sourcing",
    "AriseAgency"
  ],
  authors: [{ name: "WearNextFabs / AriseAgency" }],
  openGraph: {
    title: "WearNextFabs — Weaving What's Next",
    description:
      "A new perspective on materials, craftsmanship, and modern precision manufacturing. Commissioned by AriseAgency.",
    url: "https://wearnextfabs.com",
    siteName: "WearNextFabs",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "WearNextFabs Architectural Textile Weaving",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WearNextFabs — Weaving What's Next",
    description:
      "Premium textile digital experience and precision apparel manufacturing.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#F8F6F0] text-charcoal flex flex-col min-h-screen selection:bg-charcoal selection:text-[#F8F6F0]">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
