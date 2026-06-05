"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
            "Hallo Can Garten, ich interessiere mich für ein Angebot."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Per WhatsApp kontaktieren"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-obsidian shadow-gold-glow"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
          <MessageCircle className="relative h-7 w-7" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-charcoal px-3 py-2 text-xs font-medium text-ivory opacity-0 shadow-luxe transition-opacity duration-300 group-hover:opacity-100 md:block">
            Schreiben Sie uns
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
