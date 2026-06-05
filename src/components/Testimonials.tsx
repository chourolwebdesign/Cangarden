"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

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
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go, paused]);

  const active = TESTIMONIALS[index];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section id="stimmen" className="relative bg-carbon py-28 md:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Kundenstimmen"
          title="Vertrauen, das"
          highlight="verpflichtet."
          description="Was anspruchsvolle Kunden über die Zusammenarbeit mit Can Garten- und Landschaftsbau sagen."
        />

        <div
          className="relative mx-auto mt-16 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-charcoal p-9 shadow-card md:p-14">
            <Quote className="absolute right-10 top-10 h-16 w-16 text-gold/10" />

            <div className="relative min-h-[280px] md:min-h-[230px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-7"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-gold text-gold"
                      />
                    ))}
                  </div>

                  <blockquote className="font-serif text-xl font-light italic leading-relaxed text-ivory/90 md:text-[1.7rem] md:leading-snug">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gold/30">
                      <Image
                        src={active.image}
                        alt={active.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-ivory">{active.name}</p>
                      <p className="text-sm text-gold/70">{active.location}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              aria-label="Vorherige Stimme"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 text-ivory/70 transition-all hover:border-gold/50 hover:text-gold"
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
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-gold" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Nächste Stimme"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 text-ivory/70 transition-all hover:border-gold/50 hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
