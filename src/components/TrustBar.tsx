"use client";

import Counter from "./ui/Counter";
import { STATS } from "@/lib/data";

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-16 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-stone/15 bg-stone/15 shadow-lift md:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center gap-1 bg-white px-4 py-7 text-center"
          >
            <span className="font-display text-3xl font-bold text-forest md:text-4xl">
              {stat.display ? (
                stat.display
              ) : (
                <Counter value={stat.value} suffix={stat.suffix} />
              )}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide2 text-bark/55 md:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
