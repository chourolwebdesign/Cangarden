"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

function initials(name: string) {
  const parts = name.replace("Familie ", "").trim().split(" ");
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 6500);
    return () => clearInterval(id);
  }, [go, paused]);

  const active = TESTIMONIALS[index];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -50 : 50 }),
  };

  return (
    <section id="stimmen" className="relative bg-linen py-20 md:py-28">
      <div className="container-w">
        <SectionHeading
          eyebrow="Kundenstimmen"
          title="Was unsere Kunden aus der Region sagen"
          description="Echtes Feedback von Auftraggebern, für die wir gepflastert, gepflegt und gebaut haben."
        />

        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl border border-stone/15 bg-white p-8 shadow-card md:p-12">
            <Quote className="absolute right-8 top-8 h-14 w-14 text-sage-light/60" />

            <div className="relative min-h-[260px] md:min-h-[210px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-clay text-clay" />
                    ))}
                  </div>

                  <blockquote className="font-display text-xl leading-relaxed text-forest-900 md:text-2xl">
                    „{active.quote}“
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest font-display text-base font-bold text-cream">
                      {initials(active.name)}
                    </span>
                    <div>
                      <p className="font-semibold text-forest-900">{active.name}</p>
                      <p className="text-sm text-bark/60">
                        {active.location} · {active.service}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-5">
            <button
              onClick={() => go(-1)}
              aria-label="Vorherige Stimme"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone/25 bg-white text-forest transition-colors hover:border-forest/40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Stimme ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-forest" : "w-2 bg-stone/30 hover:bg-stone/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Nächste Stimme"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone/25 bg-white text-forest transition-colors hover:border-forest/40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
