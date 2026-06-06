import {
  Construction,
  Fence,
  Scissors,
  Sprout,
  PhoneCall,
  Ruler,
  HardHat,
  Handshake,
  ShieldCheck,
  Clock,
  BadgeEuro,
  MapPin,
  Recycle,
  ThumbsUp,
  type LucideIcon,
} from "lucide-react";

export type ServiceId =
  | "pflasterarbeiten"
  | "zaunbau"
  | "gartenpflege"
  | "rollrasen";

export const COMPANY = {
  name: "Can Garten- und Landschaftsbau",
  short: "Can GaLaBau",
  phone: "+49 170 1234567",
  phoneHref: "+491701234567",
  whatsapp: "491701234567",
  email: "maisonchourole@gmail.com",
  address: {
    street: "Gartenstraße 12",
    city: "40210 Düsseldorf",
    country: "Deutschland",
  },
  hours: "Mo – Fr: 07:30 – 18:00 Uhr",
  regionShort: "Nordrhein-Westfalen",
  region: "Düsseldorf, Neuss, Meerbusch, Krefeld & Umgebung",
  mapEmbed: "https://www.google.com/maps?q=D%C3%BCsseldorf%2C+Germany&output=embed",
};

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
  display?: string;
}

export const STATS: Stat[] = [
  { value: 15, suffix: "+", label: "Jahre Erfahrung" },
  { value: 750, suffix: "+", label: "Projekte realisiert" },
  { value: 100, suffix: "%", label: "Festpreis-Garantie" },
  { value: 49, display: "4,9", label: "Sterne Bewertung" },
];

export interface Service {
  id: ServiceId;
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: "pflasterarbeiten",
    title: "Pflasterarbeiten",
    short: "Einfahrten, Terrassen & Wege",
    description:
      "Vom soliden Unterbau bis zur letzten Fuge: Wir verlegen Einfahrten, Terrassen, Wege und Höfe sauber, eben und dauerhaft – in Naturstein, Beton oder Klinker.",
    features: ["Einfahrten", "Terrassen", "Wege & Treppen", "Fachgerechter Unterbau"],
    icon: Construction,
    image: "/projects/einfahrt-antik-sand.jpg",
  },
  {
    id: "zaunbau",
    title: "Zaunbau",
    short: "Zäune, Tore & Sichtschutz",
    description:
      "Stabile, langlebige Einfriedungen nach Maß. Ob Holz, Metall oder Doppelstabmatten – wir montieren Ihren Zaun fluchtgerecht und fest verankert.",
    features: ["Sichtschutz", "Gartenzäune", "Tore & Pforten", "Fundamente"],
    icon: Fence,
    image: "/projects/einfahrt-anthrazit.jpg",
  },
  {
    id: "gartenpflege",
    title: "Gartenpflege",
    short: "Pflege das ganze Jahr",
    description:
      "Zuverlässige Pflege, die Ihren Garten ganzjährig in Form hält. Heckenschnitt, Rasenpflege und saisonale Arbeiten – regelmäßig und gründlich.",
    features: ["Heckenschnitt", "Rasenpflege", "Beetpflege", "Saisonarbeiten"],
    icon: Scissors,
    image: "/projects/terrasse-grossformat.jpg",
  },
  {
    id: "rollrasen",
    title: "Rollrasen",
    short: "Sofort sattes Grün",
    description:
      "Ein gepflegter Rasen ab dem ersten Tag. Wir bereiten den Boden fachgerecht vor und verlegen hochwertigen Rollrasen für eine dichte, ebene Fläche.",
    features: ["Bodenvorbereitung", "Verlegung", "Bewässerung", "Anwuchspflege"],
    icon: Sprout,
    image: "/projects/garten-rollrasen.jpg",
  },
];

export type ProjectCategory = "einfahrt" | "terrasse" | "wege" | "garten";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  image: string;
  wide?: boolean;
}

export const PROJECT_FILTERS: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "Alle Projekte" },
  { id: "einfahrt", label: "Einfahrten" },
  { id: "terrasse", label: "Terrassen" },
  { id: "wege", label: "Wege & Treppen" },
  { id: "garten", label: "Garten & Rasen" },
];

export const PROJECTS: Project[] = [
  {
    id: "einfahrt-dunkel",
    title: "Einfahrt in Anthrazit",
    category: "einfahrt",
    categoryLabel: "Einfahrt",
    location: "Düsseldorf",
    image: "/projects/einfahrt-dunkel.jpg",
  },
  {
    id: "garten-rollrasen",
    title: "Gartenanlage mit Rollrasen",
    category: "garten",
    categoryLabel: "Garten & Rasen",
    location: "Meerbusch",
    image: "/projects/garten-rollrasen.jpg",
    wide: true,
  },
  {
    id: "einfahrt-antik-sand",
    title: "Antik-Pflaster Einfahrt",
    category: "einfahrt",
    categoryLabel: "Einfahrt",
    location: "Neuss",
    image: "/projects/einfahrt-antik-sand.jpg",
  },
  {
    id: "terrasse-grossformat",
    title: "Terrasse mit Großformatplatten",
    category: "terrasse",
    categoryLabel: "Terrasse",
    location: "Krefeld",
    image: "/projects/terrasse-grossformat.jpg",
  },
  {
    id: "terrasse-holzoptik",
    title: "Terrasse in Holzoptik",
    category: "terrasse",
    categoryLabel: "Terrasse",
    location: "Ratingen",
    image: "/projects/terrasse-holzoptik.jpg",
  },
  {
    id: "eingangstreppe",
    title: "Eingangstreppe & Podest",
    category: "wege",
    categoryLabel: "Treppe",
    location: "Kaarst",
    image: "/projects/eingangstreppe.jpg",
  },
  {
    id: "einfahrt-hellgrau",
    title: "Hofeinfahrt in Hellgrau",
    category: "einfahrt",
    categoryLabel: "Einfahrt",
    location: "Düsseldorf",
    image: "/projects/einfahrt-hellgrau.jpg",
  },
  {
    id: "weg-hauszugang",
    title: "Hauszugang & Gartenweg",
    category: "wege",
    categoryLabel: "Wege",
    location: "Neuss",
    image: "/projects/weg-hauszugang.jpg",
    wide: true,
  },
  {
    id: "hofeinfahrt-verbund",
    title: "Verbundpflaster Hofeinfahrt",
    category: "einfahrt",
    categoryLabel: "Einfahrt",
    location: "Willich",
    image: "/projects/hofeinfahrt-verbund.jpg",
  },
  {
    id: "pflaster-sandfarben",
    title: "Pflasterfläche im Sandton",
    category: "einfahrt",
    categoryLabel: "Einfahrt",
    location: "Korschenbroich",
    image: "/projects/pflaster-sandfarben.jpg",
  },
  {
    id: "einfahrt-anthrazit",
    title: "Geschwungene Einfahrt",
    category: "einfahrt",
    categoryLabel: "Einfahrt",
    location: "Meerbusch",
    image: "/projects/einfahrt-anthrazit.jpg",
  },
];

// Vorher/Nachher – Beispiel. Für echte Paare bitte zusammengehörige
// Vorher- und Nachher-Fotos desselben Projekts einsetzen.
export const BEFORE_AFTER = {
  before: "/projects/pflaster-sandfarben.jpg",
  after: "/projects/einfahrt-antik-sand.jpg",
  title: "Einfahrt – von der Vorbereitung zur fertigen Fläche",
  description:
    "Tragfähiger Unterbau, exakte Verlegung und saubere Randeinfassung – so entsteht eine Einfahrt, die viele Jahre hält.",
};

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Kostenlose Beratung",
    description:
      "Wir kommen zu Ihnen vor Ort, hören zu und schauen uns die Gegebenheiten genau an – unverbindlich und kostenfrei.",
    icon: PhoneCall,
  },
  {
    step: "02",
    title: "Planung & Festpreis",
    description:
      "Sie erhalten einen klaren Plan und ein transparentes Festpreis-Angebot. Keine versteckten Kosten.",
    icon: Ruler,
  },
  {
    step: "03",
    title: "Saubere Ausführung",
    description:
      "Unser eingespieltes Team arbeitet zuverlässig, ordentlich und termingerecht – mit eigenem Maschinenpark.",
    icon: HardHat,
  },
  {
    step: "04",
    title: "Abnahme & Übergabe",
    description:
      "Gemeinsame Endabnahme, sauberer Arbeitsplatz und ein Ergebnis, das Sie weiterempfehlen.",
    icon: Handshake,
  },
];

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const VALUES: Value[] = [
  {
    title: "Über 15 Jahre Erfahrung",
    description:
      "Gewachsenes Handwerk und ein Team, das sein Fach versteht – aus der Region, für die Region.",
    icon: ShieldCheck,
  },
  {
    title: "Termintreue",
    description: "Vereinbarte Termine halten wir ein. Verbindlich und planbar.",
    icon: Clock,
  },
  {
    title: "Festpreis-Garantie",
    description:
      "Transparente Angebote zum Festpreis. Was wir vereinbaren, gilt.",
    icon: BadgeEuro,
  },
  {
    title: "Saubere Arbeit",
    description:
      "Ordentliche Baustellen und ein besenreiner Arbeitsplatz – während und nach dem Projekt.",
    icon: ThumbsUp,
  },
  {
    title: "Regional verwurzelt",
    description:
      "Kurze Wege, persönliche Ansprechpartner und ein guter Ruf in der Nachbarschaft.",
    icon: MapPin,
  },
  {
    title: "Nachhaltige Materialien",
    description:
      "Langlebige, hochwertige Materialien und fachgerechte Entsorgung.",
    icon: Recycle,
  },
];

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  service: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Familie Becker",
    location: "Meerbusch",
    rating: 5,
    service: "Pflasterarbeiten",
    quote:
      "Unsere neue Einfahrt ist absolut sauber verlegt. Termine wurden eingehalten, die Baustelle war jeden Abend ordentlich. Man merkt, dass hier echte Profis am Werk sind.",
  },
  {
    name: "Michael Hoffmann",
    location: "Düsseldorf",
    rating: 5,
    service: "Terrasse",
    quote:
      "Vom Angebot bis zur Übergabe alles transparent und zum vereinbarten Festpreis. Die Terrasse ist makellos geworden. Klare Empfehlung für die ganze Region.",
  },
  {
    name: "Familie Yılmaz",
    location: "Neuss",
    rating: 5,
    service: "Rollrasen & Pflege",
    quote:
      "Der Rollrasen sah vom ersten Tag an perfekt aus und die Beratung war ehrlich und kompetent. Wir lassen unseren Garten jetzt regelmäßig pflegen.",
  },
  {
    name: "Sabine Krüger",
    location: "Krefeld",
    rating: 5,
    service: "Zaun & Einfahrt",
    quote:
      "Zuverlässig, freundlich und gründlich. Der neue Zaun steht bombenfest und die Einfahrt ist ein echter Blickfang. Gerne wieder!",
  },
];

export const SERVICE_AREAS = [
  "Düsseldorf",
  "Neuss",
  "Meerbusch",
  "Krefeld",
  "Ratingen",
  "Kaarst",
  "Willich",
  "Korschenbroich",
];

export const NAV_LINKS = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];
