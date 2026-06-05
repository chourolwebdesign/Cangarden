import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-carbon pt-20">
      <div className="container-luxe">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-bold tracking-wider2 text-ivory">
                CAN
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-luxe text-gold/70">
                Garten &amp; Landschaftsbau
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/45">
              Außenanlagen auf höchstem Niveau. Premium-Gartenbau mit deutscher
              Präzision und meisterhafter Qualität.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="heading-eyebrow mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/55 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-eyebrow mb-5">Leistungen</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#leistungen"
                    className="text-sm text-ivory/55 transition-colors hover:text-gold"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-eyebrow mb-5">Kontakt</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="flex items-center gap-3 text-sm text-ivory/55 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold/70" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-sm text-ivory/55 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 text-gold/70" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ivory/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <span>
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline" />

        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-xs text-ivory/35">
            © {year} {COMPANY.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-xs text-ivory/35">
            <a href="#" className="transition-colors hover:text-gold">
              Impressum
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Datenschutz
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
