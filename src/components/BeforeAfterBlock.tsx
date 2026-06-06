"use client";

import { Check } from "lucide-react";
import { BEFORE_AFTER } from "@/lib/data";
import BeforeAfter from "./BeforeAfter";
import Reveal from "./ui/Reveal";

const points = [
  "Tragfähiger, frostsicherer Unterbau",
  "Exakte, ebene Verlegung",
  "Saubere Randeinfassung & Verfugung",
];

export default function BeforeAfterBlock() {
  return (
    <div className="grid items-center gap-10 rounded-3xl border border-stone/15 bg-white p-6 shadow-card md:grid-cols-2 md:p-9">
      <Reveal direction="right">
        <BeforeAfter
          before={BEFORE_AFTER.before}
          after={BEFORE_AFTER.after}
          alt={BEFORE_AFTER.title}
        />
      </Reveal>
      <Reveal direction="left" delay={0.1}>
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide2 text-moss">
            Vorher / Nachher
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold text-forest-900 md:text-3xl">
            {BEFORE_AFTER.title}
          </h3>
          <p className="mt-4 leading-relaxed text-bark/70">
            {BEFORE_AFTER.description}
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-bark/80">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fern text-forest-900">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-bark/50">
            Ziehen Sie den Regler, um den Unterschied zu sehen.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
