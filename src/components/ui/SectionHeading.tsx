"use client";

import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <Reveal direction="up">
        <span className={`eyebrow ${light ? "text-sage-light" : "text-moss"}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-sage-light" : "bg-fern"}`} />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal direction="up" delay={0.08}>
        <h2
          className={`max-w-3xl text-balance font-display text-3xl font-bold leading-[1.15] sm:text-4xl md:text-[2.75rem] ${
            light ? "text-white" : "text-forest-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16}>
          <p
            className={`max-w-2xl text-base leading-relaxed md:text-lg ${
              light ? "text-white/80" : "text-bark/70"
            } ${isCenter ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
