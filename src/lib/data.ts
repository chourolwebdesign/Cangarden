import {
  Layers,
  Fence,
  Leaf,
  Sprout,
  Award,
  Ruler,
  Clock,
  MessageCircleHeart,
  Recycle,
  type LucideIcon,
} from "lucide-react";

export type ServiceId = "pflasterarbeiten" | "zaunbau" | "gartenpflege" | "rollrasen";

export interface Service {
  id: ServiceId;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image: string;
}

export const COMPANY = {
  name: "Can Garten- und Landschaftsbau",
  short: "Can Garten",
  phone: "+49 170 1234567",
  phoneHref: "+491701234567",
  whatsapp: "491701234567",
  email: "maisonchourole@gmail.com",
  address: {
    street: "Gartenstraße 12",
    city: "40210 Düsseldorf",
    country: "Deutschland",
  },
  hours: "Mo – Fr: 08:00 – 18:00 Uhr",
  // Düsseldorf map embed
  mapEmbed:
    "https://www.google.com/maps?q=D%C3%BCsseldorf%2C+Germany&output=embed",
};

export const STATS = [
  { value: 500, suffix: "+", label: "Projekte" },
  { value: 10, suffix: "+", label: "Jahre Erfahrung" },
  { value: 98, suffix: "%", label: "Kundenzufriedenheit" },
];

export const SERVICES: Service[] = [
  {
    id: "pflasterarbeiten",
    title: "Pflasterarbeiten",
    tagline: "Naturstein & Präzision",
    description:
      "Premium-Wege, Einfahrten und Terrassen aus edlem Naturstein. Millimetergenau verlegt, für ein Ergebnis, das Generationen überdauert.",
    features: ["Einfahrten", "Terrassen", "Wege & Plätze", "Naturstein"],
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "zaunbau",
    title: "Zaunbau",
    tagline: "Schutz mit Stil",
    description:
      "Moderne und zeitlose Zaun- und Sichtschutzlösungen. Klare Linien, hochwertige Materialien und makellose Verarbeitung.",
    features: ["Sichtschutz", "Designzäune", "Tore & Eingänge", "Metall & Holz"],
    icon: Fence,
    image:
      "https://images.unsplash.com/photo-1621873495884-845a939892d4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "gartenpflege",
    title: "Gartenpflege",
    tagline: "Gepflegt das ganze Jahr",
    description:
      "Professionelle Pflege, die Ihren Garten in jeder Saison perfekt erscheinen lässt. Diskret, zuverlässig und mit Liebe zum Detail.",
    features: ["Heckenschnitt", "Rasenpflege", "Saisonpflege", "Baumschnitt"],
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "rollrasen",
    title: "Rollrasen",
    tagline: "Sofort makellos grün",
    description:
      "Perfekter Premium-Rollrasen für sofortige, makellose Rasenflächen. Dichter Wuchs, sattes Grün – ab dem ersten Tag.",
    features: ["Bodenvorbereitung", "Verlegung", "Bewässerung", "Anwuchspflege"],
    icon: Sprout,
    image:
      "https://images.unsplash.com/photo-1558904541-c19784525cf4?auto=format&fit=crop&w=1400&q=80",
  },
];

export interface Project {
  id: string;
  title: string;
  category: ServiceId;
  categoryLabel: string;
  location: string;
  year: string;
  description: string;
  image: string;
  span?: boolean;
  beforeAfter?: { before: string; after: string };
}

export const PROJECTS: Project[] = [
  {
    id: "moderne-einfahrt",
    title: "Moderne Einfahrt",
    category: "pflasterarbeiten",
    categoryLabel: "Pflasterarbeiten",
    location: "Meerbusch",
    year: "2025",
    description:
      "Großformatige Natursteinplatten in anthrazit, präzise verlegt für eine repräsentative Auffahrt mit integrierter Entwässerung.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    span: true,
    beforeAfter: {
      before:
        "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=80",
      after:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
  },
  {
    id: "exklusive-terrasse",
    title: "Exklusive Terrasse",
    category: "pflasterarbeiten",
    categoryLabel: "Pflasterarbeiten",
    location: "Düsseldorf-Oberkassel",
    year: "2024",
    description:
      "Bodengleiche Terrasse aus hellem Naturstein mit nahtlosem Übergang zum Wohnbereich und integrierter Lounge-Zone.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "premium-gartenanlage",
    title: "Premium Gartenanlage",
    category: "gartenpflege",
    categoryLabel: "Gartenpflege",
    location: "Krefeld",
    year: "2025",
    description:
      "Komplette Neugestaltung mit kuratierter Bepflanzung, geschwungenen Wegen und einer gepflegten Rasenlandschaft.",
    image:
      "https://images.unsplash.com/photo-1558521958-0a228e77fc99?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "hochwertiger-zaunbau",
    title: "Hochwertiger Zaunbau",
    category: "zaunbau",
    categoryLabel: "Zaunbau",
    location: "Neuss",
    year: "2024",
    description:
      "Designsichtschutz aus pulverbeschichtetem Aluminium mit vertikaler Lamellenstruktur und integrierter Beleuchtung.",
    image:
      "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=1400&q=80",
    span: true,
  },
  {
    id: "rollrasen-villa",
    title: "Rollrasen Villa-Garten",
    category: "rollrasen",
    categoryLabel: "Rollrasen",
    location: "Ratingen",
    year: "2025",
    description:
      "1.200 m² Premium-Rollrasen mit professioneller Bodenvorbereitung und automatischer Bewässerungsanlage.",
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "naturstein-weg",
    title: "Naturstein-Wegeführung",
    category: "pflasterarbeiten",
    categoryLabel: "Pflasterarbeiten",
    location: "Kaarst",
    year: "2024",
    description:
      "Geschwungene Gartenwege aus changierendem Naturstein, eingebettet in eine üppige, mediterrane Bepflanzung.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=80",
  },
];

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Markus Waldmann",
    location: "Düsseldorf",
    rating: 5,
    quote:
      "Eine Verarbeitung auf absolutem Spitzenniveau. Die Terrasse ist ein Kunstwerk – jeder Stein sitzt perfekt. Deutsche Präzision, wie man sie sich wünscht.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Familie Brandt",
    location: "Meerbusch",
    rating: 5,
    quote:
      "Von der Beratung bis zur Fertigstellung absolut professionell. Termintreu, sauber und mit einem Auge fürs Detail, das seinesgleichen sucht.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sandra Hoffmann",
    location: "Krefeld",
    rating: 5,
    quote:
      "Unser Garten ist zum schönsten Raum unseres Hauses geworden. Der neue Rollrasen sah vom ersten Tag an makellos aus. Wir sind begeistert.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Thomas Reinhardt",
    location: "Neuss",
    rating: 5,
    quote:
      "Der Sichtschutzzaun ist ein echtes Designstatement. Hochwertige Materialien, perfekte Montage und ein Team, das mitdenkt. Klare Empfehlung.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
];

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const VALUES: Value[] = [
  {
    title: "Meisterhafte Qualität",
    description:
      "Jedes Projekt entsteht in Handwerkskunst auf Meisterniveau – kompromisslos und detailverliebt.",
    icon: Award,
  },
  {
    title: "Deutsche Präzision",
    description:
      "Millimetergenaue Planung und Ausführung. Standards, die Bestand haben.",
    icon: Ruler,
  },
  {
    title: "Termintreue",
    description:
      "Verbindliche Zeitpläne, die wir einhalten. Ihr Vertrauen ist unser Maßstab.",
    icon: Clock,
  },
  {
    title: "Individuelle Beratung",
    description:
      "Persönlich, ehrlich und auf Ihre Vision zugeschnitten – von Anfang bis Ende.",
    icon: MessageCircleHeart,
  },
  {
    title: "Nachhaltigkeit & Langlebigkeit",
    description:
      "Materialien und Methoden, die Umwelt schonen und Generationen überdauern.",
    icon: Recycle,
  },
];

export const NAV_LINKS = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Werte", href: "#werte" },
  { label: "Stimmen", href: "#stimmen" },
  { label: "Kontakt", href: "#kontakt" },
];
