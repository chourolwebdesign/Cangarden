"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Check, MessageCircle, Clock } from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/data";
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
    const payload = Object.fromEntries(new FormData(form).entries());

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
    "w-full rounded-xl border border-stone/25 bg-cream px-4 py-3.5 text-[15px] text-ink placeholder:text-bark/40 outline-none transition-all duration-200 focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15";

  const contactItems = [
    { icon: Phone, label: "Telefon", value: COMPANY.phone, href: `tel:${COMPANY.phoneHref}` },
    { icon: Mail, label: "E-Mail", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    {
      icon: MapPin,
      label: "Anschrift",
      value: `${COMPANY.address.street}, ${COMPANY.address.city}`,
    },
    { icon: Clock, label: "Erreichbarkeit", value: COMPANY.hours },
  ];

  return (
    <section id="kontakt" className="relative bg-cream py-20 md:py-28">
      <div className="container-w">
        <SectionHeading
          eyebrow="Kontakt"
          title="Kostenloses Angebot anfordern"
          description="Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns innerhalb von 24 Stunden – persönlich und unverbindlich."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Form */}
          <Reveal direction="up">
            <div className="card p-7 md:p-9">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[440px] flex-col items-center justify-center gap-5 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-fern text-forest-900">
                    <Check className="h-9 w-9" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-forest-900">
                    Vielen Dank für Ihre Anfrage!
                  </h3>
                  <p className="max-w-sm text-bark/65">
                    Wir haben Ihre Nachricht erhalten und melden uns
                    schnellstmöglich persönlich bei Ihnen.
                  </p>
                  <button onClick={() => setStatus("idle")} className="btn-outline mt-2">
                    Weitere Anfrage senden
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-bark/80">
                        Name *
                      </label>
                      <input id="name" name="name" type="text" placeholder="Ihr Name" className={inputClass} autoComplete="name" />
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-bark/80">
                        Telefon
                      </label>
                      <input id="phone" name="phone" type="tel" placeholder="Ihre Telefonnummer" className={inputClass} autoComplete="tel" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-bark/80">
                        E-Mail *
                      </label>
                      <input id="email" name="email" type="email" placeholder="ihre@email.de" className={inputClass} autoComplete="email" />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-bark/80">
                        Leistung
                      </label>
                      <select id="service" name="service" defaultValue="" className={`${inputClass} appearance-none`}>
                        <option value="" disabled>Bitte wählen</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Sonstiges">Sonstiges</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-bark/80">
                      Ihr Anliegen *
                    </label>
                    <textarea id="message" name="message" rows={5} placeholder="Beschreiben Sie kurz Ihr Projekt – z. B. Fläche, Ort und Wunschtermin." className={`${inputClass} resize-none`} />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  {status === "error" && Object.keys(errors).length === 0 && (
                    <p className="text-sm text-red-600">
                      Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.
                    </p>
                  )}

                  <button type="submit" disabled={status === "loading"} className="btn-primary group w-full disabled:opacity-70">
                    {status === "loading" ? "Wird gesendet …" : (
                      <>
                        Angebot anfordern
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-bark/45">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung Ihrer Anfrage zu.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info column */}
          <Reveal direction="up" delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const inner = (
                    <div className="flex h-full items-start gap-3.5 rounded-2xl border border-stone/15 bg-white p-5 shadow-soft transition-colors hover:border-forest/30">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-light/50 text-forest">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide2 text-bark/45">{item.label}</p>
                        <p className="mt-0.5 text-sm font-medium text-ink">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href}>{inner}</a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>

              {/* Map */}
              <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl border border-stone/15 shadow-soft">
                <iframe
                  title="Standort auf der Karte"
                  src={COMPANY.mapEmbed}
                  className="h-full min-h-[220px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>

              {/* Service area */}
              <div className="rounded-2xl border border-stone/15 bg-white p-5 shadow-soft">
                <p className="flex items-center gap-2 text-sm font-semibold text-forest-900">
                  <MapPin className="h-4 w-4 text-moss" /> Unser Einzugsgebiet
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((city) => (
                    <span key={city} className="rounded-full bg-linen px-3 py-1 text-xs font-medium text-bark/70">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 font-semibold text-white shadow-soft transition-transform hover:scale-[1.01]"
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
