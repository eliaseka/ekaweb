/**
 * Unternehmensdaten für EKA Facility Management
 * Zentrale Konfiguration für alle Komponenten
 */

export const COMPANY = {
  name: 'EKA Facility Management',
  owner: 'Elias Pobietzka',
  legalForm: 'Einzelunternehmen',
  address: {
    street: 'Weberstr. 3',
    zip: '38300',
    city: 'Wolfenbüttel',
    country: 'Deutschland'
  },
  contact: {
    phone: '+49 1522 6466267',
    phoneRaw: '+4915226466267',
    email: 'info@eka-fm.de',
    whatsapp: '+49 1522 6466267',
    whatsappLink: 'https://wa.me/4915226466267'
  },
  web: {
    url: 'https://eka-facility.de',
    domain: 'eka-facility.de'
  },
  tax: {
    vatId: 'DE123456789',
    taxNumber: '12345/67890'
  },
  registration: {
    court: 'Amtsgericht Braunschweig',
    number: 'HRA 12345' // Platzhalter - falls zutreffend
  },
  social: {
    // Falls vorhanden, hier ergänzen
    linkedin: '',
    xing: ''
  }
};

export const SERVICES = [
  {
    id: 'facility-management',
    title: 'Facility Management',
    shortTitle: 'FM',
    description: 'Ganzheitliche Gebäudebewirtschaftung für eine effiziente und wert-erhaltende Immobiliennutzung. Wir übernehmen die technische, kaufmännische und infrastrukturelle Betreuung Ihrer Objekte.',
    benefits: [
      'Reduzierung der Betriebskosten',
      'Werterhaltung der Immobilie',
      'Rechtssichere Dokumentation',
      '24/7 Notfallservice'
    ],
    icon: 'building'
  },
  {
    id: 'gebaeudereinigung',
    title: 'Gebäudereinigung',
    shortTitle: 'Reinigung',
    description: 'Professionelle Reinigungskonzepte für Bürogebäude, Gewerbeflächen und Industrieanlagen. Hygienische Sauberkeit, die überzeugt – zuverlässig und nachhaltig.',
    benefits: [
      'Hygienische Standards',
      'Umweltfreundliche Reinigungsmittel',
      'Flexible Einsatzzeiten',
      'Qualitätskontrollen'
    ],
    icon: 'sparkles'
  },
  {
    id: 'gartenpflege',
    title: 'Gartenpflege',
    shortTitle: 'Garten',
    description: 'Pflege von Außenanlagen für Unternehmen und Immobilien. Von der Rasenpflege bis zur kompletten Gartengestaltung – wir sorgen für ein repräsentatives Erscheinungsbild.',
    benefits: [
      'Ganzjährige Pflege',
      'Professionelle Beratung',
      'Nachhaltige Bewirtschaftung',
      'Saisonale Gestaltung'
    ],
    icon: 'leaf'
  },
  {
    id: 'winterdienst',
    title: 'Winterdienst',
    shortTitle: 'Winterdienst',
    description: 'Zuverlässige Räum- und Streudienste für sichere Wege und Zufahrten. Verlassen Sie sich auf unsere schnelle Reaktionszeit bei Schnee und Glätte.',
    benefits: [
      'Rund-um-die-Uhr Bereitschaft',
      'Rechtssichere Dokumentation',
      'Umweltfreundliche Streumittel',
      'Individuelle Räumkonzepte'
    ],
    icon: 'snowflake'
  }
];

export const STATS = [
  {
    value: '100+',
    label: 'Betreute Objekte'
  },
  {
    value: '15+',
    label: 'Jahre Erfahrung'
  },
  {
    value: '50+',
    label: 'Zufriedene Kunden'
  },
  {
    value: '24/7',
    label: 'Erreichbarkeit'
  }
];

export const TARGET_GROUPS = [
  'Hausverwaltungen',
  'Großbetriebe',
  'Immobilien-Investoren',
  'Gewerbevermieter',
  'Industrieunternehmen',
  'Kommunen & öffentliche Einrichtungen'
];
