<!-- AGENTS.md for EKA Facility Management Website -->

# EKA Facility Management Website – Agent Guide

## Project Overview

This is a **German B2B static website** for **EKA Facility Management** (owner: Elias Pobietzka), a facility management service provider based in Wolfenbüttel, Germany. The site is built as a statically generated site using Astro and targets the German market with full DSGVO (GDPR) compliance.

- **Domain:** https://eka-facility.de
- **Language:** German (de_DE) for all user-facing content
- **Target Audience:** Property management companies, large enterprises, real estate investors, commercial landlords, industrial companies, municipalities

## Technology Stack

| Category | Technology | Version / Details |
|----------|------------|-------------------|
| Framework | [Astro](https://astro.build/) | ^4.4.0 |
| Output Mode | Static (`output: 'static'`) | No server-side rendering |
| Language | TypeScript | Strict mode (`astro/tsconfigs/strict`) |
| Styling | Vanilla CSS | CSS custom properties (design tokens) |
| Form Backend | [Web3Forms](https://web3forms.com/) | Client-side submission to `api.web3forms.com` |
| Image Optimization | Sharp | ^0.33.2 (devDependency) |
| Sitemap | @astrojs/sitemap | ^3.0.5 (auto-generated) |
| Hosting | [Netlify](https://netlify.com) | Node.js 20 |

## Project Structure

```
├── public/                      # Static assets (copied as-is to dist/)
│   ├── images/                  # Image assets
│   │   ├── logo.jpg             # Company logo (used in Header & Footer)
│   │   ├── hero.jpeg            # Hero section image
│   │   ├── leistung1.jpeg       # Service: Facility Management
│   │   ├── leistung2.jpeg       # Service: Gebäudereinigung
│   │   ├── leistung3.jpeg       # Service: Gartenpflege
│   │   └── leistung4.jpeg       # Service: Winterdienst
│   ├── favicon.svg              # Site favicon
│   ├── robots.txt               # SEO robots config
│   └── .htaccess                # Apache fallback config (redirects, caching, compression)
│
├── src/
│   ├── components/              # Reusable Astro components
│   │   ├── Header.astro         # Fixed header with top bar (phone, WhatsApp), logo, nav, mobile menu
│   │   ├── Footer.astro         # Site footer with brand, navigation, contact, target groups, legal links
│   │   ├── Hero.astro           # Landing hero section with CTA buttons
│   │   ├── Services.astro       # Services grid (4 cards from company.js data)
│   │   ├── TrustBar.astro       # Statistics, target groups, trust signals
│   │   ├── ContactForm.astro    # Web3Forms contact form with privacy checkbox
│   │   └── CookieBanner.astro   # DSGVO cookie consent banner with settings panel
│   ├── layouts/
│   │   └── BaseLayout.astro     # Base HTML layout with SEO meta, Schema.org JSON-LD, slots
│   ├── pages/                   # File-based routing (Astro convention)
│   │   ├── index.astro          # Homepage (Hero + Services + TrustBar + ContactForm)
│   │   ├── impressum.astro      # Legal imprint (TMG compliant)
│   │   ├── datenschutz.astro    # Privacy policy (DSGVO compliant)
│   │   └── danke.astro          # Form success page (noindex)
│   ├── data/
│   │   └── company.js           # Central company data configuration (see below)
│   ├── styles/
│   │   └── global.css           # Global CSS with design tokens, reset, utilities, buttons, cards
│   └── env.d.ts                 # Astro types reference
│
├── astro.config.mjs             # Astro configuration (site URL, sitemap, compression, minification)
├── netlify.toml                 # Netlify deployment, security headers, redirects, caching
├── tsconfig.json                # TypeScript strict config with path aliases
├── package.json                 # Dependencies and scripts
├── .env.example                 # Example environment variables (Web3Forms key)
└── README.md                    # Human-readable project documentation (German)
```

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev
# OR
npm start

# Create production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

### Build Output (dist/)

The build generates a static site in the `dist/` folder:
- `index.html` – Homepage
- `impressum.html` – Legal imprint
- `datenschutz.html` – Privacy policy
- `danke.html` – Form success page
- `assets/` – CSS/JS assets with hashed filenames
- `images/` – Static images
- `sitemap-index.xml` / `sitemap-0.xml` – Auto-generated sitemaps

## Key Configuration Files

### 1. Company Data (`src/data/company.js`)

**This is the single source of truth for all business data.** Every component imports from this file. When modifying company information, edit this file only.

Exported constants:
- `COMPANY` – name, owner, legalForm, address, contact (phone, email, WhatsApp), web URL, tax info (vatId, taxNumber), registration info, social links
- `SERVICES` – array of 4 service objects: `{ id, title, shortTitle, description, benefits[], icon }`
- `STATS` – array of statistics for the TrustBar: `{ value, label }` (e.g., "100+ Betreute Objekte")
- `TARGET_GROUPS` – array of strings (e.g., "Hausverwaltungen", "Großbetriebe")

**⚠️ Known Placeholders:**
- `COMPANY.tax.vatId` – currently `DE123456789` (placeholder, must be updated)
- `COMPANY.tax.taxNumber` – placeholder
- `COMPANY.registration.number` – placeholder (`HRA 12345`)
- `STATS` values – marketing placeholders ("100+", "15+", "50+", "24/7")

### 2. Astro Config (`astro.config.mjs`)

- `site: 'https://eka-facility.de'`
- `output: 'static'`
- `@astrojs/sitemap` integration with weekly changefreq, priority 0.7
- `compressHTML: true`
- `build.format: 'file'` (outputs `.html` files directly)
- Vite build: CSS minification and JS minification enabled

### 3. Netlify Config (`netlify.toml`)

**Build settings:**
- Command: `npm run build`
- Publish: `dist`
- Node version: 20

**Security Headers (DSGVO-relevant):**
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy` – restrictive policy allowing self, inline scripts/styles, images from self/data/https, and connect to `api.web3forms.com`

**Caching:**
- `/assets/*` → `public, max-age=31536000, immutable`
- `/images/*` → `public, max-age=2592000`

**Redirects:**
- `/kontakt` → `/#kontakt` (301)
- `/leistungen` → `/#leistungen` (301)

### 4. TypeScript Config (`tsconfig.json`)

- Extends `astro/tsconfigs/strict`
- Path aliases:
  - `@/*` → `./src/*`
  - `@components/*` → `./src/components/*`
  - `@layouts/*` → `./src/layouts/*`
  - `@assets/*` → `./src/assets/*`
- JSX: `react-jsx` with `jsxImportSource: "astro"`

## Design System

### Brand Colors (CSS Custom Properties in `global.css`)

```css
--brand-1: #103959;        /* Primary: Dark Blue */
--brand-2: #ac0451;        /* Secondary: Magenta/Pink */
--white: #ffffff;

--brand-1-light: #1a4d73;
--brand-1-dark: #0a2640;
--brand-2-light: #c41565;
--brand-2-dark: #8a0342;
```

### Extended Palette

Full gray scale (`--gray-50` to `--gray-900`), semantic colors (`--text-primary`, `--bg-secondary`, etc.), shadows, spacing scale (`--space-1` to `--space-24`), typography tokens, layout max-widths, and border radius tokens.

### Button Classes

```css
.btn                    /* Base button */
.btn--primary          /* Magenta background */
.btn--secondary        /* Blue background */
.btn--outline          /* Bordered dark */
.btn--outline-light    /* Bordered white (for dark bg) */
.btn--small            /* Smaller padding */
.btn--large            /* Larger padding */
```

### Utility Classes

- `.container` – max-width 1280px, responsive padding
- `.section` / `.section--alt` – vertical padding sections
- `.section-header` / `.section-title` / `.section-subtitle` – centered section headings
- `.card` – white card with shadow and hover lift
- `.sr-only` – screen-reader only
- `.skip-link` – accessibility skip navigation
- Animation utilities: `.animate-fade-in`, `.animate-fade-in-up`

### Component Conventions

1. **Scoped styles:** Each `.astro` component has its own `<style>` block
2. **CSS naming:** BEM-like methodology (`.component__element--modifier`)
3. **CSS variables:** All values reference design tokens from `global.css`
4. **Accessibility:** ARIA labels, semantic HTML, focus indicators (`:focus-visible`), skip link
5. **Responsive:** Mobile-first with breakpoints at 640px, 768px, 1024px

## DSGVO / GDPR Compliance

### Cookie Banner (`CookieBanner.astro`)

- Stores consent in `localStorage` (key: `eka_cookie_consent`)
- Three categories: **Necessary** (required, disabled), **Analytics** (opt-in), **Marketing** (opt-in)
- Consent version tracking (`COOKIE_VERSION = '1.0'`) for invalidation
- Re-openable via footer link (dispatches `openCookieSettings` event)
- Floating "Cookies" button appears bottom-left after consent is given
- Analytics/marketing scripts only load after consent via `window.cookieConsent` object and `cookieConsentUpdated` custom event

### Contact Form

- Backend: **Web3Forms** (GDPR compliant, EU servers)
- Access key is currently hardcoded in `ContactForm.astro`: `024bddb6-8019-44ed-bff2-69a1e2e8444f`
- Also defined in `.env.example` as `WEB3FORMS_KEY`
- Required privacy checkbox with link to `/datenschutz`
- Bot protection via honeypot field (`name="botcheck"`)
- Client-side fetch submission with success/error UI states
- Form redirects to `/danke` on success (configured via hidden `redirect` input)
- No data stored on Netlify (form handled entirely client-side via Web3Forms API)

### Legal Pages

- **Impressum** (`impressum.astro`) – TMG-compliant imprint with company details, contact, VAT ID, dispute resolution, liability disclaimers, copyright
- **Datenschutz** (`datenschutz.astro`) – DSGVO-compliant privacy policy covering data controller, processing purposes, Web3Forms data processing, cookies, user rights (Auskunft, Löschung, etc.)

## SEO Implementation

### BaseLayout provides:
- Semantic HTML5 structure (`<main>`, `<header>`, `<footer>`, `<section>`)
- Meta tags: title, description, author, robots, canonical, Open Graph, Twitter Cards
- `theme-color` and `msapplication-TileColor`
- **LocalBusiness Schema.org JSON-LD** with address, geo coordinates (52.1628, 10.5347), opening hours, price range, area served
- Sitemap link (`/sitemap-index.xml`)
- Preconnect to `api.web3forms.com`
- Skip link for accessibility

### Page Setup Pattern

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
const pageTitle = 'Page Title';
const pageDescription = 'Meta description';
---
<BaseLayout title={pageTitle} description={pageDescription}>
  <!-- Content -->
</BaseLayout>
```

## Page Architecture

### Homepage (`index.astro`)

Composed of sections in order:
1. `Header` (slot="header")
2. `Hero` – full-viewport hero with title, subtitle, two CTAs, hero image with decorative elements
3. `Services` – 4-column service cards from `company.js` with images, descriptions, benefits, CTAs
4. `TrustBar` – statistics grid, target group pills, trust signal cards (reliability, flexibility, transparency, quality)
5. `ContactForm` – two-column layout with contact methods (phone, WhatsApp, email, address) and Web3Forms form
6. `Footer` (slot="footer")
7. `CookieBanner` (slot="cookie-banner")

### Sub-pages (impressum, datenschutz, danke)

All follow the same pattern:
- `BaseLayout` with page-specific title/description
- `Header` (slot="header")
- `<section class="section legal-page">` with centered content (max-width 800px)
- `Footer` (slot="footer")
- `CookieBanner` (slot="cookie-banner")

## Code Style Guidelines

- **File extension:** `.astro` for components and pages
- **Language:** TypeScript with interfaces for props; German for all user-facing strings; English acceptable for code comments
- **Imports:** Use relative imports (e.g., `../data/company.js`) within src; path aliases are configured but not heavily used
- **Data flow:** All business data comes from `src/data/company.js`
- **Images:** Placed in `public/images/`; referenced with absolute paths (`/images/...`); use `loading="lazy"` except hero image which uses `loading="eager"`
- **Icons:** Inline SVGs (Lucide-style strokes) embedded directly in components; no icon library dependency
- **Scripts:** Client-side JavaScript lives inside `<script>` tags at the bottom of components; no external JS frameworks

## Testing

**No automated testing framework is currently configured.** There are no unit tests, integration tests, or end-to-end tests in the project.

If adding tests, consider:
- **Vitest** for unit testing (aligns with Astro/Vite ecosystem)
- **Playwright** for E2E testing of form submission flows and cookie consent behavior

## Deployment

### Automatic (Recommended)
1. Push to Git repository
2. Connect repository in Netlify
3. Build settings auto-detected from `netlify.toml`
4. Deploys on every push

### Environment Variables

On Netlify, the following should be set (though the Web3Forms key is currently hardcoded in the component):
```
WEB3FORMS_KEY=024bddb6-8019-44ed-bff2-69a1e2e8444f
```

### Manual Deploy
```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## Security Considerations

- Security headers configured in `netlify.toml` (CSP, frame options, XSS protection, referrer policy)
- `.htaccess` provides Apache fallback for security headers, HTTPS redirect, trailing slash removal, caching, and compression
- Content-Security-Policy restricts external resources; `connect-src` explicitly allows `https://api.web3forms.com`
- No server-side code (static export eliminates server attack surface)
- Form validation on client and via Web3Forms server
- No sensitive data in repository (tax info is placeholder)
- Honeypot field (`botcheck`) for basic bot protection

## Performance Optimizations

- Static HTML export (no hydration overhead)
- `compressHTML: true` and Vite minification
- Lazy loading for service card images
- Preconnect to `api.web3forms.com`
- Long-term cache headers for `/assets/*` and `/images/*`
- CSS reset and efficient CSS custom properties
- Print styles included in `global.css`

## Common Tasks

### Update Company Information
Edit `src/data/company.js` – changes apply to all components automatically.

### Replace Logo
Replace `public/images/logo.jpg` – keep similar dimensions (~180×50px display size in header, ~150×42px in footer).

### Update Services
Modify the `SERVICES` array in `src/data/company.js`. If adding a new service, also add:
- An entry to `serviceImages` mapping in `Services.astro`
- An entry to `icons` mapping in `Services.astro` (fallback icon)

### Add Analytics
1. Uncomment/load analytics script in `CookieBanner.astro` inside the `loadAnalytics()` function
2. The script checks `window.cookieConsent?.analytics` before tracking
3. The contact form also checks consent before firing `gtag('event', 'form_submit', ...)`

### Fix Form Not Working
1. Verify the Web3Forms access key in `ContactForm.astro` is valid
2. Confirm recipient email in Web3Forms dashboard
3. Check browser console for CSP or CORS errors
4. Verify `api.web3forms.com` is reachable from the user's browser

## Important Notes

1. **German Language Only** – All UI text is in German. Do not add English user-facing content.
2. **Legal Compliance** – Impressum and Datenschutz are legally required in Germany. Any structural changes to these pages must retain TMG/DSGVO coverage.
3. **Placeholder Data** – VAT ID (`DE123456789`), tax number, registration number, and statistics in TrustBar need real values before production use.
4. **Cookie Consent** – Must remain functional; analytics loading depends on it.
5. **Web3Forms** – Contact form requires a valid API key and confirmed recipient email. The key is currently hardcoded in `ContactForm.astro`.

---

Last updated: April 2026
