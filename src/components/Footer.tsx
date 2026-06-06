import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 pt-16 text-cream/80">
      <div className="container-w">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fern font-display text-lg font-bold text-forest-900">
                C
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-white">Can GaLaBau</span>
                <span className="text-[10px] uppercase tracking-wider3 text-cream/50">
                  Garten- &amp; Landschaftsbau
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Ihr zuverlässiger Partner für Pflasterarbeiten, Zaunbau,
              Gartenpflege und Rollrasen in {COMPANY.regionShort}.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wide2 text-white">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream/65 transition-colors hover:text-fern">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wide2 text-white">Leistungen</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#leistungen" className="text-sm text-cream/65 transition-colors hover:text-fern">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wide2 text-white">Kontakt</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={`tel:${COMPANY.phoneHref}`} className="flex items-center gap-3 text-sm text-cream/65 transition-colors hover:text-fern">
                  <Phone className="h-4 w-4 text-fern" /> {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-cream/65 transition-colors hover:text-fern">
                  <Mail className="h-4 w-4 text-fern" /> {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream/65">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-fern" />
                <span>{COMPANY.address.street}<br />{COMPANY.address.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="leaf-divider opacity-30" />

        <div className="flex flex-col items-center justify-between gap-4 py-7 md:flex-row">
          <p className="text-xs text-cream/45">
            © {year} {COMPANY.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-xs text-cream/45">
            <a href="#" className="transition-colors hover:text-fern">Impressum</a>
            <a href="#" className="transition-colors hover:text-fern">Datenschutz</a>
            <a href="#" className="transition-colors hover:text-fern">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
