"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { VALUES, COMPANY } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="ueber-uns" className="relative bg-cream py-20 md:py-28">
      <div className="container-w">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image collage */}
          <Reveal direction="right">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-stone/15 shadow-card">
                <Image
                  src="/projects/eingangstreppe.jpg"
                  alt="Sauber gesetzte Eingangstreppe aus Naturstein"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-cream shadow-lift sm:block">
                <div className="relative aspect-square">
                  <Image
                    src="/projects/terrasse-holzoptik.jpg"
                    alt="Terrasse in Holzoptik"
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -left-4 top-6 hidden rounded-2xl bg-forest px-5 py-4 text-cream shadow-lift sm:block">
                <p className="font-display text-3xl font-bold">15+</p>
                <p className="text-xs uppercase tracking-wide2 text-cream/80">
                  Jahre Erfahrung
                </p>
              </div>
            </div>
          </Reveal>

          {/* Text + values */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Über uns"
              title="Ein eingespieltes Team, das sein Handwerk versteht"
              description="Wir sind ein bodenständiger Garten- und Landschaftsbau-Betrieb mit festem Stamm an Mitarbeitern und eigenem Maschinenpark. Diese Firma macht saubere Arbeit – und weiß genau, was sie tut."
            />

            <div className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {VALUES.map((value, i) => {
                const Icon = value.icon;
                return (
                  <Reveal key={value.title} direction="up" delay={i * 0.05}>
                    <div className="flex gap-3.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sage-light/50 text-forest">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-bold text-forest-900">
                          {value.title}
                        </h3>
                        <p className="mt-0.5 text-sm leading-relaxed text-bark/65">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#kontakt" className="btn-primary">
                Jetzt Angebot anfordern
              </a>
              <span className="flex items-center gap-2 text-sm font-medium text-bark/70">
                <Check className="h-4 w-4 text-fern" strokeWidth={3} />
                Kostenlos &amp; unverbindlich für {COMPANY.regionShort}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
