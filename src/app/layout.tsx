import type { Metadata, Viewport } from "next";
import { Cinzel, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/data";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://can-gartenbau.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY.name} | Außenanlagen auf höchstem Niveau`,
    template: `%s | ${COMPANY.short}`,
  },
  description:
    "Exklusive Pflasterarbeiten, hochwertiger Zaunbau, professionelle Gartenpflege und perfekter Rollrasen für anspruchsvolle Kunden. Meisterhafte Qualität und deutsche Präzision.",
  keywords: [
    "Garten- und Landschaftsbau",
    "Pflasterarbeiten",
    "Zaunbau",
    "Gartenpflege",
    "Rollrasen",
    "Naturstein",
    "Düsseldorf",
    "Premium Gartenbau",
    "Luxus Außenanlagen",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Außenanlagen auf höchstem Niveau`,
    description:
      "Exklusive Pflasterarbeiten, Zaunbau, Gartenpflege und Rollrasen für anspruchsvolle Kunden.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name}`,
    description:
      "Exklusive Pflasterarbeiten, Zaunbau, Gartenpflege und Rollrasen für anspruchsvolle Kunden.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  image: `${siteUrl}/og.jpg`,
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
  priceRange: "€€€€",
  areaServed: "Nordrhein-Westfalen",
  description:
    "Premium Garten- und Landschaftsbau: Pflasterarbeiten, Zaunbau, Gartenpflege und Rollrasen.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${cinzel.variable} ${playfair.variable} ${manrope.variable}`}
    >
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
