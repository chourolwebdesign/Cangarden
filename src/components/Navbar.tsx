"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/5 py-3"
            : "border-b border-transparent py-5"
        }`}
      >
        <nav className="container-luxe flex items-center justify-between">
          <a
            href="#top"
            className="group flex flex-col leading-none"
            aria-label={COMPANY.name}
          >
            <span className="font-display text-lg font-bold tracking-wider2 text-ivory transition-colors group-hover:text-gold">
              CAN
            </span>
            <span className="text-[10px] uppercase tracking-luxe text-gold/70">
              Garten &amp; Landschaftsbau
            </span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-ivory/70 transition-colors hover:text-ivory"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="flex items-center gap-2 text-sm text-ivory/70 transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <a href="#kontakt" className="btn-gold !px-6 !py-3 text-xs">
              Angebot erhalten
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="text-ivory lg:hidden"
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-obsidian/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container-luxe flex items-center justify-between py-5">
              <span className="font-display text-lg tracking-wider2 text-ivory">
                CAN
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Menü schließen"
                className="text-ivory"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="border-b border-white/5 py-5 font-serif text-3xl text-ivory/90 transition-colors hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="btn-gold mt-8 w-full"
              >
                Kostenloses Angebot
              </a>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="mt-4 flex items-center justify-center gap-2 text-sm text-ivory/60"
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
