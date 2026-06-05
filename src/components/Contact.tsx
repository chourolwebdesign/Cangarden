"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Check,
  MessageCircle,
  Clock,
} from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrors(json.errors ?? {});
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-gold/30";

  const contactItems = [
    {
      icon: Phone,
      label: "Telefon",
      value: COMPANY.phone,
      href: `tel:${COMPANY.phoneHref}`,
    },
    {
      icon: Mail,
      label: "E-Mail",
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
    },
    {
      icon: MapPin,
      label: "Showroom",
      value: `${COMPANY.address.street}, ${COMPANY.address.city}`,
      href: COMPANY.mapEmbed,
    },
    {
      icon: Clock,
      label: "Öffnungszeiten",
      value: COMPANY.hours,
    },
  ];

  return (
    <section id="kontakt" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Kontakt"
          title="Ihr Projekt beginnt"
          highlight="mit einem Gespräch."
          description="Fordern Sie Ihr kostenloses und unverbindliches Angebot an. Wir melden uns innerhalb von 24 Stunden bei Ihnen."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <Reveal direction="up">
            <div className="rounded-3xl border border-white/8 bg-charcoal p-8 shadow-card md:p-10">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center gap-5 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold shadow-gold-glow">
                    <Check className="h-9 w-9" />
                  </div>
                  <h3 className="font-serif text-2xl text-ivory">
                    Vielen Dank!
                  </h3>
                  <p className="max-w-sm text-sm text-ivory/60">
                    Ihre Anfrage ist bei uns eingegangen. Wir melden uns
                    schnellstmöglich persönlich bei Ihnen.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-ghost mt-2 !px-6 !py-3 text-xs"
                  >
                    Neue Anfrage
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider2 text-ivory/50">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Ihr Name"
                        className={inputClass}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-wider2 text-ivory/50">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Ihre Telefonnummer"
                        className={inputClass}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider2 text-ivory/50">
                        E-Mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ihre@email.de"
                        className={inputClass}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-wider2 text-ivory/50">
                        Leistung
                      </label>
                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" disabled className="bg-charcoal">
                          Bitte wählen
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-charcoal">
                            {s.title}
                          </option>
                        ))}
                        <option value="Sonstiges" className="bg-charcoal">
                          Sonstiges
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider2 text-ivory/50">
                      Ihr Anliegen *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Erzählen Sie uns von Ihrem Projekt …"
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {status === "error" && Object.keys(errors).length === 0 && (
                    <p className="text-sm text-red-400">
                      Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut
                      oder rufen Sie uns an.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-gold group mt-2 w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      "Wird gesendet …"
                    ) : (
                      <>
                        Kostenloses Angebot anfordern
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-ivory/35">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur
                    Bearbeitung Ihrer Anfrage zu.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info + Map */}
          <Reveal direction="up" delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex h-full items-start gap-4 rounded-2xl border border-white/8 bg-charcoal/60 p-5 transition-all duration-300 hover:border-gold/25">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider2 text-ivory/40">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-ivory/85">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Map */}
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/8">
                <iframe
                  title="Standort auf der Karte"
                  src={COMPANY.mapEmbed}
                  className="h-full min-h-[260px] w-full grayscale-[0.4] contrast-[1.1]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10" />
              </div>

              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl border border-gold/25 bg-gold/5 px-5 py-4 text-sm font-medium text-gold transition-all duration-300 hover:bg-gold/10"
              >
                <MessageCircle className="h-5 w-5" />
                Direkt per WhatsApp schreiben
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
