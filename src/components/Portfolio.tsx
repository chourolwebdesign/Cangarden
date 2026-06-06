"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ZoomIn } from "lucide-react";
import {
  PROJECTS,
  PROJECT_FILTERS,
  type Project,
  type ProjectCategory,
} from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import BeforeAfterBlock from "./BeforeAfterBlock";

type Filter = ProjectCategory | "all";

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Project | null>(null);

  const filtered =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="referenzen" className="relative bg-linen py-20 md:py-28">
      <div className="container-w">
        <SectionHeading
          eyebrow="Referenzen"
          title="Projekte aus der Region – echte Arbeit, echte Ergebnisse"
          description="Ein Auszug aus unseren abgeschlossenen Arbeiten. Jedes Foto stammt von einer Baustelle, die wir selbst ausgeführt haben."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                filter === f.id
                  ? "border-forest bg-forest text-cream"
                  : "border-stone/25 bg-white text-bark/70 hover:border-forest/40 hover:text-forest"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          layout
          className="mt-10 grid auto-rows-[230px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.button
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActive(project)}
                className={`group relative overflow-hidden rounded-2xl border border-stone/15 bg-white text-left shadow-soft ${
                  project.wide ? "sm:col-span-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} – ${project.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm">
                  {project.categoryLabel}
                </span>
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-forest opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-cream/80">
                    <MapPin className="h-3.5 w-3.5" /> {project.location}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Before / After */}
        <div className="mt-16">
          <BeforeAfterBlock />
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-900/90 p-4 backdrop-blur-sm md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Schließen"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-forest shadow-soft transition-colors hover:bg-white"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-[16/10]">
                <Image
                  src={active.image}
                  alt={`${active.title} – ${active.location}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide2 text-moss">
                    {active.categoryLabel}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-forest-900">
                    {active.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-bark/60">
                    <MapPin className="h-4 w-4 text-moss" /> {active.location}
                  </p>
                </div>
                <a
                  href="#kontakt"
                  onClick={() => setActive(null)}
                  className="btn-primary shrink-0 !py-3 text-sm"
                >
                  Ähnliches anfragen
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
