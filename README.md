# Can Garten- und Landschaftsbau — Premium Website

Ultra-premium, cinematic website for the German Garten- und Landschaftsbau
company **Can Garten- und Landschaftsbau**. Built to feel like a luxury
architecture studio: dark obsidian palette, elegant gold accents,
glassmorphism, and refined motion design.

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** (custom luxury design tokens)
- **Framer Motion** — scroll-triggered reveals, page motion, micro-interactions
- **Lenis** — buttery smooth scrolling (desktop, respects reduced-motion)
- **Three.js** — performance-minded floating premium paving stones in the hero
- **GSAP** — available for timeline-based animation extensions

## Features

- **Cinematic hero** — full-screen, parallax + Ken-Burns imagery, Three.js
  floating stone slabs with pointer parallax, animated headline, and elegant
  counter-animated statistics (500+ Projekte · 10+ Jahre · 98% Zufriedenheit).
- **Services** — four luxury service cards (Pflasterarbeiten, Zaunbau,
  Gartenpflege, Rollrasen) with 3D tilt, floating icons, and reveal animations.
- **Portfolio** — filterable masonry gallery, hover zoom + title reveal,
  before/after slider, and a lightbox with project details.
- **Testimonials** — auto-playing + manual carousel with 5-star ratings.
- **Werte** — trust & values grid (Meisterhafte Qualität, Deutsche Präzision,
  Termintreue, Individuelle Beratung, Nachhaltigkeit).
- **Contact** — premium validated form (with honeypot + API route),
  interactive Google Map, click-to-call, and WhatsApp CTAs.
- **Floating WhatsApp button**, sticky glass navbar, animated mobile menu.
- **SEO** — metadata, OpenGraph, JSON-LD LocalBusiness, sitemap & robots.
- **Accessibility** — semantic markup, focus states, ARIA, reduced-motion
  support. **Dark mode only**.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Configuration

- **Company data** (name, phone, email, address, map, services, projects,
  testimonials, values) lives in [`src/lib/data.ts`](src/lib/data.ts) — edit
  there to update all content.
- **Lead routing**: the contact form posts to `/api/contact`. Set the
  `CONTACT_WEBHOOK_URL` env var to relay leads to your email service / CRM
  (e.g. Resend, SendGrid, Make, Zapier). Without it, leads are logged.
- **Images** are loaded from Unsplash for the demo (configured in
  `next.config.mjs`). Replace with real project photography for production.

## Notes

The hero is designed to also support an 8K drone video background — drop a video
file in `public/` and swap the `<Image>` in `src/components/Hero.tsx` for a
`<video>` element with the image as the poster.
