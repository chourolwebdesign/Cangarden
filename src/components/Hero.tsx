"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star, ShieldCheck, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function Hero() {
  const ease = [0.22, 1, 0.36, 1] as const;

  const badges = [
    { icon: Star, text: "4,9 / 5 Sterne" },
    { icon: ShieldCheck, text: "Über 15 Jahre Erfahrung" },
    { icon: MapPin, text: COMPANY.regionShort },
  ];

  return (
    <section id="top" className="relative">
      <div className="relative min-h-[88vh] w-full overflow-hidden">
        {/* Real project photo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-kenburns">
            <Image
              src="/projects/garten-rollrasen.jpg"
              alt="Gepflegte Gartenanlage mit frischem Rollrasen, Natursteinpflaster und blühendem Baum"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* Natural green overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/90 via-forest-800/70 to-forest-700/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-forest-900/20" />
        </div>

        <div className="container-w relative flex min-h-[88vh] flex-col justify-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider3 text-cream backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-fern" />
            Garten- &amp; Landschaftsbau aus Meisterhand
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] text-white drop-shadow-sm sm:text-5xl md:text-6xl"
          >
            Ihr Partner für Garten- und Landschaftsbau
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/90"
          >
            Pflasterarbeiten, Zaunbau, Gartenpflege und Rollrasen – zuverlässig,
            professionell und termingerecht.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#kontakt" className="btn-primary group bg-fern hover:bg-fern/90 text-forest-900">
              Kostenloses Angebot anfordern
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#referenzen" className="btn-light">
              Referenzen ansehen
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <span
                  key={b.text}
                  className="flex items-center gap-2 text-sm font-medium text-cream/90"
                >
                  <Icon className="h-4 w-4 text-fern" />
                  {b.text}
                </span>
              );
            })}
          </motion.div>
        </div>

        {/* Quick-call bar (mobile) */}
        <a
          href={`tel:${COMPANY.phoneHref}`}
          className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-forest shadow-lift sm:hidden"
        >
          <Phone className="h-4 w-4" /> {COMPANY.phone}
        </a>
      </div>
    </section>
  );
}
