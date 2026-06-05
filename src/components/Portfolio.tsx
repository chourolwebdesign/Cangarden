"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, MapPin } from "lucide-react";
import { PROJECTS, type Project, type ServiceId } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import BeforeAfter from "./BeforeAfter";

type Filter = "all" | ServiceId;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Alle" },
  { id: "pflasterarbeiten", label: "Pflasterarbeiten" },
  { id: "zaunbau", label: "Zaunbau" },
  { id: "gartenpflege", label: "Gartenpflege" },
  { id: "rollrasen", label: "Rollrasen" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Project | null>(null);

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projekte" className="relative bg-carbon py-28 md:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Ausgewählte Projekte"
          title="Handwerk, das man"
          highlight="sehen kann."
          description="Eine Auswahl unserer realisierten Außenanlagen — jedes Projekt ein Unikat, geprägt von Detailtreue und kompromissloser Qualität."
        />

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`relative rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-wider2 transition-all duration-300 ${
                filter === f.id
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-white/10 text-ivory/55 hover:border-white/25 hover:text-ivory"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <motion.div
          layout
          className="mt-12 grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.button
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActive(project)}
                className={`group relative overflow-hidden rounded-2xl border border-white/8 text-left ${
                  project.span ? "sm:col-span-2 sm:row-span-1" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="heading-eyebrow">{project.categoryLabel}</span>
                  <h3 className="mt-1 font-serif text-2xl text-ivory">
                    {project.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-ivory/60">
                    <MapPin className="h-3 w-3" /> {project.location} · {project.year}
                  </p>
                </div>

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-obsidian/50 text-gold opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {project.beforeAfter && (
                  <span className="absolute left-5 top-5 rounded-full bg-gold/15 px-3 py-1 text-[10px] uppercase tracking-wider2 text-gold backdrop-blur-sm">
                    Vorher / Nachher
                  </span>
                )}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-obsidian/90 p-4 backdrop-blur-lg md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-charcoal md:grid-cols-2"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Schließen"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-obsidian/70 text-ivory backdrop-blur-md transition-colors hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
                {active.beforeAfter ? (
                  <div className="flex h-full items-center p-4">
                    <BeforeAfter
                      before={active.beforeAfter.before}
                      after={active.beforeAfter.after}
                      alt={active.title}
                    />
                  </div>
                ) : (
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
              </div>

              <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
                <span className="heading-eyebrow">{active.categoryLabel}</span>
                <h3 className="font-serif text-3xl text-ivory md:text-4xl">
                  {active.title}
                </h3>
                <p className="flex items-center gap-2 text-sm text-ivory/60">
                  <MapPin className="h-4 w-4 text-gold" />
                  {active.location} · {active.year}
                </p>
                <div className="hairline my-1" />
                <p className="text-sm leading-relaxed text-ivory/65">
                  {active.description}
                </p>
                <a href="#kontakt" onClick={() => setActive(null)} className="btn-gold mt-4 w-fit !px-6 !py-3 text-xs">
                  Ähnliches Projekt anfragen
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
