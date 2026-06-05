"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES, type Service } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const Icon = service.icon;

  return (
    <Reveal direction="up" delay={index * 0.08} className="perspective h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-charcoal shadow-card"
      >
        {/* Image */}
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

          {/* Floating 3D icon */}
          <div
            style={{ transform: "translateZ(60px)" }}
            className="absolute left-6 top-6"
          >
            <div className="glass-gold flex h-14 w-14 items-center justify-center rounded-2xl text-gold shadow-gold-glow transition-transform duration-500 group-hover:-translate-y-1">
              <Icon className="h-6 w-6" />
            </div>
          </div>

          <span className="absolute right-6 top-7 text-xs uppercase tracking-luxe text-gold/70">
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="flex flex-1 flex-col p-7"
        >
          <p className="heading-eyebrow mb-2">{service.tagline}</p>
          <h3 className="font-serif text-2xl font-medium text-ivory md:text-[1.7rem]">
            {service.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory/55">
            {service.description}
          </p>

          <ul className="mt-5 grid grid-cols-2 gap-2">
            {service.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-xs text-ivory/60"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-gold" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#kontakt"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            Mehr erfahren
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/25" />
      </motion.div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="leistungen" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-radial-fade opacity-60" />
      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Vier Disziplinen,"
          highlight="ein Anspruch."
          description="Von der ersten Skizze bis zum letzten Stein — wir gestalten Außenanlagen, die durch Präzision, Materialqualität und zeitlose Ästhetik überzeugen."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
