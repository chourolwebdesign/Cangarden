import type { Metadata, Viewport } from "next";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/data";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bitter",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.cangartenlandschaftsbau.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY.name} | Ihr Partner für Garten- und Landschaftsbau`,
    template: `%s | ${COMPANY.short}`,
  },
  description:
    "Pflasterarbeiten, Zaunbau, Gartenpflege und Rollrasen – zuverlässig, professionell und termingerecht. Ihr erfahrener Garten- und Landschaftsbau-Betrieb in der Region.",
  keywords: [
    "Garten- und Landschaftsbau",
    "GaLaBau",
    "Pflasterarbeiten",
    "Zaunbau",
    "Gartenpflege",
    "Rollrasen",
    "Einfahrt pflastern",
    "Terrasse",
    "Flörsheim am Main",
    "Hofheim",
    "Frankfurt",
    "Wiesbaden",
    "Rhein-Main",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Garten- und Landschaftsbau`,
    description:
      "Pflasterarbeiten, Zaunbau, Gartenpflege und Rollrasen – zuverlässig, professionell und termingerecht.",
    images: [{ url: "/projects/garten-rollrasen.jpg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#2F4A36",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: COMPANY.name,
  image: `${siteUrl}/projects/garten-rollrasen.jpg`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressCountry: "DE",
  },
  areaServed: COMPANY.regionShort,
  description:
    "Garten- und Landschaftsbau: Pflasterarbeiten, Zaunbau, Gartenpflege und Rollrasen.",
  openingHours: "Mo-Fr 07:30-18:00",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${bitter.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
