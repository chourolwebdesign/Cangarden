"use client";

import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-5 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <Reveal direction="up">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold/60" />
          <span className="heading-eyebrow">{eyebrow}</span>
          <span className="h-px w-8 bg-gold/60" />
        </div>
      </Reveal>
      <Reveal direction="up" delay={0.08}>
        <h2 className="max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-ivory sm:text-5xl md:text-6xl">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gradient-gold italic">{highlight}</span>
            </>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16}>
          <p
            className={`max-w-2xl text-base leading-relaxed text-ivory/55 md:text-lg ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
