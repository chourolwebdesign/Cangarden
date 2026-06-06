# Can Garten- und Landschaftsbau — Website

A premium, trustworthy website for the German Garten- und Landschaftsbau
company **Can Garten- und Landschaftsbau**. The design is bright, welcoming and
nature-focused — built to feel like an established, family-run craftsmanship
business, not a flashy agency. Visitors should think: *„Diese Firma macht
saubere Arbeit und weiß genau, was sie tut.“*

## Design Direction

- **Natural green palette** (forest, moss, fern, sage) with earthy clay/stone
  tones and warm cream/linen backgrounds — bright, light and welcoming.
- **Sturdy, classic typography**: Bitter (slab serif) headings + Inter body.
- **Real project photography throughout** — every image is from an actual
  completed job (`public/projects/`).
- Conversion- and trust-focused: phone number always visible, clear CTAs,
  process transparency, real references and customer voices.

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** (custom natural design tokens)
- **Framer Motion** for subtle, tasteful scroll reveals
- **Lenis** for smooth scrolling (desktop, respects reduced-motion)

## Sections

1. **Trust top-bar + sticky navbar** — region, hours, click-to-call, CTA.
2. **Hero** — large real project photo with a natural green overlay,
   headline *„Ihr Partner für Garten- und Landschaftsbau“*, CTAs
   (Kostenloses Angebot anfordern / Referenzen ansehen) and trust badges.
3. **Trust bar** — animated stats (15+ Jahre, 750+ Projekte, Festpreis, 4,9★).
4. **Leistungen** — Pflasterarbeiten, Zaunbau, Gartenpflege, Rollrasen with
   real photos and feature lists.
5. **So arbeiten wir** — 4-step process (Beratung → Planung/Festpreis →
   Ausführung → Übergabe).
6. **Referenzen** — filterable real-project gallery with lightbox **plus a
   Vorher/Nachher slider**.
7. **Über uns** — experience, values and trust factors with a photo collage.
8. **Kundenstimmen** — regional testimonials carousel (auto + manual).
9. **Kontakt** — validated form (with API route + honeypot), contact details,
   interactive map, **service-area list**, click-to-call and WhatsApp.
10. **Footer** + floating WhatsApp button.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Configuration

- **All content** (company data, services, projects, testimonials, process,
  values, service areas) lives in [`src/lib/data.ts`](src/lib/data.ts).
- **Project photos** are in [`public/projects/`](public/projects/). To add or
  swap references, drop in images and reference them in `data.ts`.
- **Lead routing**: the contact form posts to `/api/contact`. Set
  `CONTACT_WEBHOOK_URL` to relay leads to your email service / CRM
  (e.g. Resend, SendGrid, Make, Zapier). Without it, leads are logged.

## Notes for going live

- Replace the placeholder **phone, e-mail and address** in `src/lib/data.ts`.
- Add real **Zaunbau** photos (the current set is mostly Pflasterarbeiten).
- Provide true **Vorher/Nachher pairs** (same project) for the slider —
  configured in `BEFORE_AFTER` in `data.ts`.
- Fill in **Impressum / Datenschutz** (legally required in Germany).
