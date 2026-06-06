import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://can-gartenbau.de";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#leistungen`, lastModified: now, priority: 0.8 },
    { url: `${base}/#projekte`, lastModified: now, priority: 0.8 },
    { url: `${base}/#werte`, lastModified: now, priority: 0.6 },
    { url: `${base}/#stimmen`, lastModified: now, priority: 0.6 },
    { url: `${base}/#kontakt`, lastModified: now, priority: 0.9 },
  ];
}
