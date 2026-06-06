"use client";

import { PROCESS } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Process() {
  return (
    <section id="ablauf" className="relative bg-forest-900 py-20 md:py-28">
      <div className="absolute inset-0 bg-leaf-fade" />
      <div className="container-w relative">
        <SectionHeading
          light
          eyebrow="So arbeiten wir"
          title="In vier klaren Schritten zu Ihrem Projekt"
          description="Transparent, planbar und ohne böse Überraschungen – vom ersten Gespräch bis zur Übergabe."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step} direction="up" delay={i * 0.1}>
                <div className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:bg-white/[0.08]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fern text-forest-900">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-3xl font-bold text-white/15">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/70">
                    {step.description}
                  </p>

                  {i < PROCESS.length - 1 && (
                    <span className="absolute -right-3 top-12 hidden h-px w-6 bg-white/20 lg:block" />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
