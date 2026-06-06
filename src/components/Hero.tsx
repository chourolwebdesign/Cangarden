"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Hero3D from "./Hero3D";
import Counter from "./ui/Counter";
import { STATS } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Cinematic background image with Ken Burns + parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80"
            alt="Modernes Luxus-Anwesen mit Natursteinpflasterung und gepflegtem Garten bei goldener Stunde"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/55 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-transparent to-obsidian/40" />
        <div className="absolute inset-0 bg-radial-fade" />
      </motion.div>

      {/* Three.js floating premium paving stones */}
      <Hero3D />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container-luxe relative z-20 flex flex-col items-center pt-24 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="glass-gold mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs uppercase tracking-wider2 text-gold/90">
            Premium Garten- &amp; Landschaftsbau
          </span>
        </motion.div>

        <h1 className="max-w-5xl font-serif text-[2.6rem] font-medium leading-[1.05] text-ivory text-shadow-luxe sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {"Außenanlagen auf".split(" ").map((word, i) => (
            <motion.span
              key={word}
              className="mr-3 inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.12, ease }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            className="text-gradient-gold italic"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease }}
          >
            höchstem Niveau.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/70 md:text-lg"
        >
          Exklusive Pflasterarbeiten, hochwertiger Zaunbau, professionelle
          Gartenpflege und perfekter Rollrasen für anspruchsvolle Kunden.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease }}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href="#kontakt" className="btn-gold group">
            Kostenloses Angebot erhalten
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#projekte" className="btn-ghost">
            Projekte ansehen
          </a>
        </motion.div>

        {/* Animated statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease }}
          className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-4 border-t border-white/10 pt-10"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-serif text-3xl font-semibold text-gradient-gold sm:text-4xl md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[11px] uppercase tracking-wider2 text-ivory/50 sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] uppercase tracking-luxe text-ivory/40">
          Entdecken
        </span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/25 p-1.5">
          <span className="h-2 w-1 animate-scroll-down rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
}
