<!-- From: /Users/albinsalihu/Downloads/ekaweb-main/AGENTS.md -->
# EKA Facility Management Website - Agent Guide

## Project Overview

This is a **German B2B company website** for EKA Facility Management (owned by Elias Pobietzka), a facility management service provider based in Wolfenbüttel, Germany. The website is built as a static site using Astro and is specifically designed for the German market with full DSGVO (GDPR) compliance.

**Domain:** https://eka-facility.de  
**Language:** German (de_DE)  
**Target Audience:** Property management companies, large enterprises, real estate investors, commercial landlords, industrial companies, municipalities

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | [Astro](https://astro.build/) | ^4.4.0 |
| Language | TypeScript | Strict mode (`astro/tsconfigs/strict`) |
| Styling | Vanilla CSS (CSS Variables) | - |
| Form Backend | [Web3Forms](https://web3forms.com/) | - |
| Hosting | [Netlify](https://netlify.com) | Node 20 |
| Image Optimization | Sharp | ^0.33.2 |
| Sitemap | @astrojs/sitemap | ^3.0.5 |

## Project Structure

```
├── public/                      # Static assets (copied as-is to dist)
│   ├── images/                  # Image assets
│   │   └── logo.jpg             # Company logo
│   ├── favicon.svg              # Site favicon
│   ├── robots.txt               # SEO robots config
│   └── .htaccess                # Apache server config
├── src/
│   ├── components/              # Reusable Astro components
│   │   ├── Header.astro         # Fixed header with navigation & mobile menu
│   │   ├── Footer.astro         # Site footer with links & target groups
│   │   ├── Hero.astro           # Landing hero section with CTA
│   │   ├── Services.astro       # Services grid display (4 cards)
│   │   ├── TrustBar.astro       # Statistics, target groups & trust signals
│   │   ├── ContactForm.astro    # Web3Forms contact form
│   │   └── CookieBanner.astro   # DSGVO cookie consent banner
│   ├── layouts/
│   │   └── BaseLayout.astro     # Base HTML layout with SEO meta & schema
│   ├── pages/                   # File-based routing
│   │   ├── index.astro          # Homepage
│   │   ├── impressum.astro      # Legal imprint (TMG compliant)
│   │   ├── datenschutz.astro    # Privacy policy (DSGVO)
│   │   └── danke.astro          # Form success page
│   ├── data/
│   │   └── company.js           # Central company data configuration
│   ├── styles/
│   │   └── global.css           # Global CSS with design tokens
│   └── env.d.ts                 # Astro types reference
├── astro.config.mjs             # Astro configuration
├── netlify.toml                 # Netlify deployment & security headers
├── tsconfig.json                # TypeScript paths configuration
├── package.json                 # NPM manifest (type: module)
├── .env.example                 # Example env with WEB3FORMS_KEY
└── README.md                    # Human-readable project docs
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

### Build Output

The build generates a static site in the `dist/` folder:
- `index.html` - Homepage
- `impressum.html` - Legal imprint
- `datenschutz.html` - Privacy policy
- `danke.html` - Form success page
- `assets/` - CSS/JS assets with hashed filenames
- `images/` - Static images
- `sitemap-index.xml` - Auto-generated sitemap

## Key Configuration Files

### 1. Company Data (`src/data/company.js`)

**This is the central configuration file for all business data.** All components import from here. When modifying company information, edit this file:

```javascript
export const COMPANY = {
  name: 'EKA Facility Management',
  owner: 'Elias Pobietzka',
  legalForm: 'Einzelunternehmen',
  address: { street: 'Weberstr. 3', zip: '38300', city: 'Wolfenbüttel', country: 'Deutschland' },
  contact: { phone: '+49 176 41239007', phoneRaw: '+4917641239007', email: 'info@eka-fm.de', whatsapp: '+49 176 41239007', whatsappLink: 'https://wa.me/4917641239007' },
  tax: { vatId: 'DE123456789', taxNumber: '12345/67890' },
  registration: { court: 'Amtsgericht Braunschweig', number: 'HRA 12345' },
  web: { url: 'https://eka-facility.de', domain: 'eka-facility.de' },
  social: { linkedin: '', xing: '' }
};

export const SERVICES = [...];      // 4 service offerings with benefits & icons
export const STATS = [...];         // Trust bar statistics
export const TARGET_GROUPS = [...]; // Target customer groups
```

**⚠️ IMPORTANT PLACEHOLDERS:**
- `COMPANY.tax.vatId` - Currently placeholder (`DE123456789`), needs real VAT ID
- `COMPANY.tax.taxNumber` - Currently placeholder (`12345/67890`)
- `COMPANY.registration.number` - Currently placeholder (`HRA 12345`)
- `STATS` array values - Need real business statistics

### 2. Astro Config (`astro.config.mjs`)

- **Output:** Static (`output: 'static'`)
- **Site URL:** https://eka-facility.de
- **Sitemap:** Auto-generated with weekly changefreq, filters out 404 pages
- **Build:** HTML minification and CSS optimization enabled (`compressHTML: true`)
- **Build format:** `file` (outputs `.html` files instead of folders)
- **Assets folder:** `assets`

### 3. Netlify Config (`netlify.toml`)

**Security Headers (Important for DSGVO compliance):**
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- Content-Security-Policy configured
- Cache-Control headers for `/assets/*` (1 year) and `/images/*` (30 days)

**Redirects:**
- `/kontakt` → `/#kontakt` (301)
- `/leistungen` → `/#leistungen` (301)

**Environment:**
- Node.js 20
- Build command: `npm run build`
- Publish directory: `dist`

### 4. TypeScript Config (`tsconfig.json`)

Path aliases configured:
- `@/*` → `./src/*`
- `@components/*` → `./src/components/*`
- `@layouts/*` → `./src/layouts/*`
- `@assets/*` → `./src/assets/*`

Note: `src/assets/` does not currently exist in the project; images are in `public/images/`.

## Design System

### Brand Colors

Defined as CSS custom properties in `global.css`:

```css
--brand-1: #103959;        /* Primary: Dark Blue */
--brand-2: #ac0451;        /* Secondary: Magenta/Pink */
--white: #ffffff;

/* Extended variants */
--brand-1-light: #1a4d73;
--brand-1-dark: #0a2640;
--brand-2-light: #c41565;
--brand-2-dark: #8a0342;
```

### Component Patterns

All components follow these conventions:
1. **Scoped styles:** Each component has its own `<style>` block
2. **CSS BEM naming:** `.component__element--modifier`
3. **CSS variables:** Use design tokens from `global.css`
4. **Accessibility:** ARIA labels, semantic HTML, focus indicators, skip link
5. **Responsive:** Mobile-first with breakpoints at 640px, 768px, 1024px

### Button Classes (from global.css)

```css
.btn                    /* Base button */
.btn--primary          /* Magenta background */
.btn--secondary        /* Blue background */
.btn--outline          /* Bordered */
.btn--outline-light    /* Bordered white (for dark bg) */
.btn--small            /* Smaller padding */
.btn--large            /* Larger padding */
```

## DSGVO/GDPR Compliance

This website implements German data protection requirements:

### Cookie Banner (`CookieBanner.astro`)
- Stores consent in `localStorage` (key: `eka_cookie_consent`)
- Three categories: Necessary (required), Analytics, Marketing
- Consent version tracking for invalidation (`COOKIE_VERSION = '1.0'`)
- Re-openable via footer link (dispatches `openCookieSettings` custom event)
- Floating reopen button appears after consent is given

**Integration:** Analytics/marketing scripts only load after consent via `window.cookieConsent` object and `cookieConsentUpdated` event.

### Contact Form
- Web3Forms backend (GDPR compliant, EU servers)
- Required privacy checkbox with link to Datenschutz
- Bot protection via honeypot field (`botcheck`)
- No data stored on Netlify (form handled client-side)
- Access key is hardcoded in `ContactForm.astro` and also present in `.env.example`

### Environment Variable

On Netlify, set:
```
WEB3FORMS_KEY=your_web3forms_access_key
```

## SEO Implementation

### BaseLayout provides:
- Semantic HTML5 structure
- Meta tags (title, description, Open Graph, Twitter)
- Canonical URLs
- LocalBusiness Schema.org JSON-LD (hardcoded geo coords for Wolfenbüttel)
- Sitemap link
- Robots meta control
- Preconnect to `api.web3forms.com`

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

## Legal Pages

### Impressum (`impressum.astro`)
Required by German TMG (Telemediengesetz):
- Company name, legal form, owner
- Complete address
- Contact details (phone, email, WhatsApp)
- VAT ID (USt-IdNr.) - **PLACEHOLDER, MUST UPDATE**
- Disclaimer texts (Haftung für Inhalte/Links)
- Streitschlichtung / ODR platform notice
- Bildnachweise and Verbraucherinformation

### Datenschutz (`datenschutz.astro`)
DSGVO-compliant privacy policy covering:
- Data controller information
- Processing purposes and legal basis (Art. 6 DSGVO)
- Web3Forms data processing
- LocalStorage usage for cookies
- User rights (Auskunft, Löschung, etc.)
- Cookie settings button that dispatches `openCookieSettings`

## Development Guidelines

### Adding New Pages

1. Create `.astro` file in `src/pages/`
2. Use `BaseLayout` with proper title/description
3. Include `Header`, `Footer`, `CookieBanner` components via slots
4. Add semantic `<section>` elements with ARIA labels
5. Follow the existing legal-page styling pattern for text-heavy pages

### Modifying Content

**Business data:** Edit `src/data/company.js`  
**Services:** Update `SERVICES` array in `company.js`  
**Stats:** Update `STATS` array in `company.js`  
**Styles:** Prefer CSS variables from `global.css`  
**Images:** Add to `public/images/` (use WebP/AVIF when possible)

### Important Image References

| Component | Image Path | Notes |
|-----------|------------|-------|
| Header | `/images/logo.jpg` | Fallback text logo on error |
| Footer | `/images/logo.jpg` | Fallback text logo on error |
| Hero | `/images/hero.jpeg` | Eager loading, 600x500 |
| Services | `/images/leistung1.jpeg` to `/images/leistung4.jpeg` | Lazy loading, fallback SVG icons |
| BaseLayout OG | `/images/hero.jpeg` | Open Graph default image |

### Code Style

- Use TypeScript interfaces for props
- Components use `.astro` extension
- CSS uses BEM methodology
- German language for all user-facing content
- English acceptable for code comments
- No JavaScript framework (React/Vue/Svelte) is used
- Client-side scripts are written as vanilla JS inside `<script>` tags in components

## Testing

**There is currently no testing framework configured in this project.** There are no unit tests, integration tests, or end-to-end tests.

If tests are needed, you would need to install a testing framework (e.g., Vitest for unit tests, Playwright for E2E) as there is no existing test infrastructure.

## Deployment

### Automatic (Recommended)
1. Push to Git repository
2. Connect repository in Netlify
3. Build settings auto-detected from `netlify.toml`
4. Deploys on every push

### Environment Variables Required on Netlify
```
WEB3FORMS_KEY=your_access_key_from_web3forms
```

### Manual Deploy
```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## Common Tasks

### Update Company Information
Edit `src/data/company.js` - changes apply to all components automatically.

### Replace Logo
Replace `public/images/logo.jpg` - keep similar dimensions (180x50px display size in header).

### Update Services
Modify the `SERVICES` array in `src/data/company.js`. The `Services.astro` component maps images via `serviceImages` object:
```javascript
const serviceImages = {
  'facility-management': '/images/leistung1.jpeg',
  'gebaeudereinigung': '/images/leistung2.jpeg',
  'gartenpflege': '/images/leistung3.jpeg',
  'winterdienst': '/images/leistung4.jpeg'
};
```

### Add Analytics
1. Uncomment/load analytics script in `CookieBanner.astro` `loadAnalytics()` function
2. Wrap in consent check: `if (window.cookieConsent?.analytics) { ... }`
3. The contact form already includes a `gtag` conversion tracking example

### Fix Form Not Working
1. Verify `WEB3FORMS_KEY` is set in Netlify environment variables
2. Confirm recipient email in Web3Forms dashboard
3. Check browser console for errors
4. The redirect URL is set to `${COMPANY.web.url}/danke`

## Security Considerations

- Security headers configured in `netlify.toml`
- Content-Security-Policy restricts external resources
- No server-side code (static export)
- Form validation on client and server (Web3Forms)
- No sensitive data in repository (though `.env.example` contains a sample Web3Forms key)
- Honeypot field (`botcheck`) in contact form

## Performance Targets

Lighthouse goals:
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

Optimizations in place:
- Static HTML export
- CSS minification
- HTML compression
- Lazy loading images (except hero)
- Preconnect to api.web3forms.com
- System font stack (no external fonts)

## Important Notes

1. **German Language Only** - All UI text is in German
2. **Legal Compliance** - Impressum and Datenschutz are legally required in Germany
3. **Placeholder Data** - VAT ID, tax number, registration number, and some statistics need real values before production
4. **Cookie Consent** - Must remain functional; blocking scripts depend on it
5. **Web3Forms** - Contact form requires valid API key and confirmed recipient email
6. **No Tests** - This project has no automated testing setup

---

Last updated: April 2026
