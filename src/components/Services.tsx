"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Services() {
  return (
    <section id="leistungen" className="relative bg-cream py-20 md:py-28">
      <div className="container-w">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Alles für Ihren Außenbereich – aus einer Hand"
          description="Vier Kernbereiche, ein Anspruch: saubere, fachgerechte Arbeit, auf die Sie sich verlassen können."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} direction="up" delay={(i % 2) * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone/15 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-forest shadow-soft">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-sm font-semibold uppercase tracking-wide2 text-moss">
                      {service.short}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-bold text-forest-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-bark/70">
                      {service.description}
                    </p>

                    <ul className="mt-5 grid grid-cols-2 gap-2.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-bark/75">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-light/60 text-forest">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#kontakt"
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-forest transition-colors hover:text-moss"
                    >
                      Anfrage zu {service.title}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
