"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Trust top-bar */}
      <div className="relative z-50 hidden bg-forest-900 text-cream/90 lg:block">
        <div className="container-w flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-sage-light" />
              {COMPANY.region}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-sage-light" />
              {COMPANY.hours}
            </span>
          </div>
          <a
            href={`tel:${COMPANY.phoneHref}`}
            className="flex items-center gap-2 font-semibold transition-colors hover:text-sage-light"
          >
            <Phone className="h-3.5 w-3.5 text-sage-light" />
            {COMPANY.phone}
          </a>
        </div>
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-stone/15 bg-cream/95 py-3 shadow-soft backdrop-blur-md"
            : "border-b border-transparent bg-cream/80 py-4 backdrop-blur-sm"
        }`}
      >
        <nav className="container-w flex items-center justify-between">
          <a href="#top" className="flex items-center" aria-label={COMPANY.name}>
            <Image
              src="/brand/can-logo.png"
              alt={`${COMPANY.name} Logo`}
              width={200}
              height={101}
              priority
              className="h-11 w-auto md:h-12"
            />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-bark/80 transition-colors hover:text-forest"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-fern transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href="#kontakt" className="btn-primary !py-3 text-sm">
              Angebot anfordern
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="text-forest lg:hidden"
            aria-label="Menü öffnen"
          >
            <Menu className="h-7 w-7" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-cream lg:hidden"
          >
            <div className="container-w flex items-center justify-between py-4">
              <Image
                src="/brand/can-logo.png"
                alt={`${COMPANY.name} Logo`}
                width={180}
                height={91}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Menü schließen"
                className="text-forest"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1 px-7">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="border-b border-stone/15 py-4 font-display text-2xl font-semibold text-forest-900"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="btn-primary mt-8 w-full"
              >
                Kostenloses Angebot anfordern
              </a>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="mt-4 flex items-center justify-center gap-2 font-semibold text-forest"
              >
                <Phone className="h-4 w-4" /> {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
