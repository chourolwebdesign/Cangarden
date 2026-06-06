"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProps {
  before: string;
  after: string;
  alt: string;
}

export default function BeforeAfter({ before, after, alt }: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, percent)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-stone/15 shadow-card"
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After (base) */}
      <Image
        src={after}
        alt={`${alt} – nachher`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      <span className="absolute bottom-4 right-4 z-10 rounded-full bg-forest px-3 py-1 text-xs font-semibold text-cream">
        Nachher
      </span>

      {/* Before (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={before}
          alt={`${alt} – vorher`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <span className="absolute bottom-4 left-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest">
          Vorher
        </span>
      </div>

      {/* Handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Vorher-Nachher Vergleich"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
        className="absolute top-0 z-20 flex h-full cursor-ew-resize items-center"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-1 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]" />
        <div className="absolute left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-forest text-cream shadow-lift">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
