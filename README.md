# EKA Facility Management Website

Eine moderne, performante und DSGVO-konforme Unternehmenswebsite für EKA Facility Management.

## 🚀 Tech Stack

- **[Astro](https://astro.build/)** - Statischer Site Generator (SSG)
- **Vanilla CSS** - CSS-Variablen für Brand-Farben
- **Web3Forms** - Kontaktformular-Backend
- **Netlify** - Hosting & Deployment

## 📁 Projektstruktur

```
├── public/                 # Statische Assets
│   ├── images/            # Bilder (hier können Bilder ersetzt werden)
│   ├── favicon.svg        # Favicon
│   └── robots.txt         # SEO-Robots
├── src/
│   ├── components/        # Wiederverwendbare Komponenten
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── TrustBar.astro
│   │   ├── ContactForm.astro
│   │   └── CookieBanner.astro
│   ├── layouts/           # Layout-Komponenten
│   │   └── BaseLayout.astro
│   ├── pages/             # Seiten
│   │   ├── index.astro    # Startseite
│   │   ├── impressum.astro
│   │   ├── datenschutz.astro
│   │   └── danke.astro    # Erfolgsseite nach Formular
│   ├── data/              # Daten/Konfiguration
│   │   └── company.js     # Unternehmensdaten
│   └── styles/            # Globale Styles
│       └── global.css
├── astro.config.mjs       # Astro-Konfiguration
├── netlify.toml          # Netlify-Konfiguration
└── package.json
```

## 🎨 Brand-Farben

Die Brand-Farben sind als CSS-Variablen definiert:

```css
--brand-1: #103959;    /* Dunkelblau */
--brand-2: #ac0451;    /* Magenta/Pink */
--white: #ffffff;      /* Weiß */
```

## 🛠️ Lokale Entwicklung

### Voraussetzungen

- Node.js 18+ 
- npm oder yarn

### Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Website wird unter http://localhost:4321 angezeigt
```

### Build

```bash
# Produktions-Build erstellen
npm run build

# Build-Output befindet sich im dist/ Verzeichnis
```

## 🚀 Deployment auf Netlify

### Automatisches Deployment (empfohlen)

1. Repository auf GitHub/GitLab pushen
2. Netlify-Konto erstellen: https://app.netlify.com
3. "Add new site" → "Import an existing project"
4. Git-Provider auswählen und Repository verbinden
5. Build-Einstellungen (werden automatisch erkannt):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. "Deploy site"

### Environment Variables auf Netlify

Für das Kontaktformular muss folgende Umgebungsvariable gesetzt werden:

1. In Netlify: Site settings → Environment variables
2. Neuen Key hinzufügen:
   - Key: `WEB3FORMS_KEY`
   - Value: Ihr Web3Forms Access Key (von https://web3forms.com/)

### Manuelles Deployment

```bash
# Build erstellen
npm run build

# Mit Netlify CLI deployen
npx netlify deploy --prod --dir=dist
```

## 📧 Web3Forms Einrichtung

1. Auf https://web3forms.com/ registrieren
2. Access Key erstellen
3. Key in Netlify Environment Variables eintragen (siehe oben)
4. Empfänger-E-Mail bestätigen (Checkliste in Web3Forms)
5. Test-Submission durchführen

## 🖼️ Bilder verwalten

### Bilder ersetzen

Bilder werden aus dem Verzeichnis `/public/images/` geladen:

1. Neues Bild im gewünschten Format (WebP/AVIF empfohlen) vorbereiten
2. Bild in `/public/images/` kopieren
3. Dateiname entsprechend anpassen ODER Code aktualisieren

### Wichtige Bild-Platzhalter

| Datei | Verwendung | Status |
|-------|------------|--------|
| `hero-building.jpg` | Hero-Hintergrund | Platzhalter - ersetzen empfohlen |
| `og-default.jpg` | Social Sharing | Optional |

### Bildoptimierung

Bilder vor Upload komprimieren:
- **Online:** https://squoosh.app/
- **CLI:** `npm install -g sharp`

## ✅ DSGVO-Checkliste

- [x] Cookie-Banner mit Opt-Out implementiert
- [x] Datenschutzerklärung vollständig
- [x] Impressum vollständig (TMG-konform)
- [x] Kontaktformular mit Einwilligung
- [x] Web3Forms-Datenschutzhinweis
- [x] LocalStorage für Cookie-Einstellungen
- [x] Keine nicht-essenziellen Cookies vor Zustimmung
- [ ] **WICHTIG:** USt-IdNr. im Impressum aktualisieren (aktuell Platzhalter)
- [ ] **WICHTIG:** Reale KPIs in TrustBar eintragen (aktuell Platzhalter)

## 🔍 SEO-Optimierungen

- Semantisches HTML5
- Meta-Tags (Title, Description, Open Graph)
- Structured Data (LocalBusiness Schema)
- Sitemap-Generierung
- Robots.txt
- Canonical URLs
- Alt-Texte für Bilder

## ♿ Accessibility

- ARIA-Labels für Screen Reader
- Skip-Link zum Hauptinhalt
- Fokus-Indikatoren
- Semantische Überschriften-Hierarchie
- Kontrastreiche Farben (WCAG AA)
- Tastatur-Navigation

## 📱 Performance-Ziele

Zielwerte für Lighthouse:
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

### Optimierungen implementiert:

- Statischer Export (kein Server-Rendering nötig)
- Bild-Optimierung (WebP/AVIF)
- CSS-Minifizierung
- HTML-Komprimierung
- Lazy Loading für Bilder
- Preconnect für externe Ressourcen

## 📝 Anpassungen für Elias (nicht-technisch)

### Texte ändern

Texte werden in den Komponenten direkt oder in `src/data/company.js` definiert:

```javascript
// src/data/company.js
export const COMPANY = {
  name: 'EKA Facility Management',
  owner: 'Elias Pobietzka',
  // ... weitere Daten
};
```

### Bilder ändern

1. Neues Bild auf den Computer speichern
2. Datei in `/public/images/` kopieren (alte Datei ersetzen)
3. Netlify wird automatisch neu deployen (bei Git-Integration)

### Kontaktdaten aktualisieren

In `src/data/company.js` die entsprechenden Werte anpassen.

## 🐛 Troubleshooting

### Formular funktioniert nicht

1. WEB3FORMS_KEY in Netlify gesetzt?
2. Empfänger-E-Mail in Web3Forms bestätigt?
3. Browser-Konsole auf Fehler prüfen

### Bilder werden nicht angezeigt

1. Datei in `/public/images/` vorhanden?
2. Dateiname korrekt?
3. Groß-/Kleinschreibung beachten

### Build fehlschlägt

```bash
# Cache löschen und neu installieren
rm -rf node_modules dist
npm install
npm run build
```

## 📄 Lizenz

© 2026 EKA Facility Management – Alle Rechte vorbehalten

---

Bei Fragen oder Problemen: info@eka.de
