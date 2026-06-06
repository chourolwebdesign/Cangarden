"use client";

import Image from "next/image";
import { VALUES } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Values() {
  return (
    <section id="werte" className="relative overflow-hidden py-28 md:py-36">
      {/* Subtle backdrop image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          aria-hidden="true"
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />
      </div>

      <div className="container-luxe relative z-10">
        <SectionHeading
          eyebrow="Warum Can Garten"
          title="Werte, auf die Sie"
          highlight="bauen können."
          description="Unser Anspruch ist nicht der nächste Auftrag, sondern Ihr dauerhaftes Vertrauen. Diese Prinzipien leiten jedes Projekt."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            // Make the last (5th) card span on lg for balance
            const isLast = i === VALUES.length - 1;
            return (
              <Reveal
                key={value.title}
                direction="up"
                delay={i * 0.07}
                className={isLast ? "lg:col-span-1" : ""}
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/8 bg-charcoal/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold/25 hover:bg-charcoal">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/5 text-gold transition-all duration-500 group-hover:bg-gold/10 group-hover:shadow-gold-glow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl text-ivory md:text-2xl">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/55">
                    {value.description}
                  </p>
                  <span className="pointer-events-none absolute -right-6 -top-8 font-serif text-8xl text-white/[0.03] transition-colors duration-500 group-hover:text-gold/5">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            );
          })}

          {/* CTA card filling the grid */}
          <Reveal direction="up" delay={VALUES.length * 0.07} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center gap-4 rounded-3xl border border-gold/20 bg-gold-gradient/5 p-8 glass-gold">
              <h3 className="font-serif text-2xl text-ivory md:text-3xl">
                Bereit für Ihr Traumprojekt?
              </h3>
              <p className="max-w-md text-sm text-ivory/65">
                Lassen Sie uns über Ihre Vision sprechen. Unverbindlich,
                persönlich und auf höchstem Niveau.
              </p>
              <a href="#kontakt" className="btn-gold mt-2 w-fit">
                Beratung anfragen
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
