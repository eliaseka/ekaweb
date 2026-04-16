# EKA Facility Management Website - Agent Guide

## Project Overview

This is a **German B2B company website** for EKA Facility Management (Elias Pobietzka), a facility management service provider based in Wolfenbüttel, Germany. The website is built as a static site using Astro and is specifically designed for the German market with full DSGVO (GDPR) compliance.

**Domain:** https://eka-facility.de  
**Language:** German (de_DE)  
**Target Audience:** Property management companies, large enterprises, real estate investors, commercial landlords, industrial companies, municipalities

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | [Astro](https://astro.build/) | ^4.4.0 |
| Language | TypeScript | Strict mode |
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
│   │   ├── Header.astro         # Fixed header with navigation
│   │   ├── Footer.astro         # Site footer
│   │   ├── Hero.astro           # Landing hero section
│   │   ├── Services.astro       # Services grid display
│   │   ├── TrustBar.astro       # Statistics/trust indicators
│   │   ├── ContactForm.astro    # Web3Forms contact form
│   │   └── CookieBanner.astro   # DSGVO cookie consent
│   ├── layouts/
│   │   └── BaseLayout.astro     # Base HTML layout with SEO meta
│   ├── pages/                   # File-based routing
│   │   ├── index.astro          # Homepage
│   │   ├── impressum.astro      # Legal imprint (TMG compliant)
│   │   ├── datenschutz.astro    # Privacy policy (DSGVO)
│   │   └── danke.astro          # Form success page
│   ├── data/
│   │   └── company.js           # Central company data configuration
│   └── styles/
│       └── global.css           # Global CSS with design tokens
├── astro.config.mjs             # Astro configuration
├── netlify.toml                 # Netlify deployment & security headers
├── tsconfig.json                # TypeScript paths configuration
└── package.json
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
  address: { street: 'Weberstr. 3', zip: '38300', city: 'Wolfenbüttel' },
  contact: { phone: '+49 5331 123456', email: 'info@eka.de', ... },
  tax: { vatId: 'DE123456789', ... },  // PLACEHOLDER - needs update
  web: { url: 'https://eka-facility.de', ... }
};

export const SERVICES = [...];  // Service offerings
export const STATS = [...];     // Trust bar statistics (PLACEHOLDERS)
export const TARGET_GROUPS = [...];  // Target customer groups
```

**⚠️ IMPORTANT PLACEHOLDERS:**
- `COMPANY.tax.vatId` - Currently placeholder, needs real VAT ID
- `STATS` array values - Need real business statistics

### 2. Astro Config (`astro.config.mjs`)

- **Output:** Static (`output: 'static'`)
- **Site URL:** https://eka-facility.de
- **Sitemap:** Auto-generated with weekly changefreq
- **Build:** HTML minification and CSS optimization enabled

### 3. Netlify Config (`netlify.toml`)

**Security Headers (Important for DSGVO compliance):**
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Content-Security-Policy configured
- Permissions-Policy for camera/microphone/geolocation

**Redirects:**
- `/kontakt` → `/#kontakt`
- `/leistungen` → `/#leistungen`

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
4. **Accessibility:** ARIA labels, semantic HTML, focus indicators
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
- Consent version tracking for invalidation
- Re-openable via footer link

**Integration:** Analytics/marketing scripts only load after consent via `window.cookieConsent` object and `cookieConsentUpdated` event.

### Contact Form
- Web3Forms backend (GDPR compliant, EU servers)
- Required privacy checkbox with link to Datenschutz
- Bot protection via honeypot field
- No data stored on Netlify (form handled client-side)

### Required Environment Variable

On Netlify, set:
```
WEB3FORMS_KEY=your_web3forms_access_key
```

## SEO Implementation

### BaseLayout provides:
- Semantic HTML5 structure
- Meta tags (title, description, Open Graph, Twitter)
- Canonical URLs
- LocalBusiness Schema.org JSON-LD
- Sitemap link
- Robots meta control

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
- Contact details (phone, email)
- VAT ID (USt-IdNr.) - **PLACEHOLDER, MUST UPDATE**
- Disclaimer texts (Haftung für Inhalte/Links)

### Datenschutz (`datenschutz.astro`)
DSGVO-compliant privacy policy covering:
- Data controller information
- Processing purposes and legal basis
- Web3Forms data processing
- LocalStorage usage for cookies
- User rights (Auskunft, Löschung, etc.)

## Development Guidelines

### Adding New Pages

1. Create `.astro` file in `src/pages/`
2. Use `BaseLayout` with proper title/description
3. Include `Header`, `Footer`, `CookieBanner` components
4. Add semantic `<section>` elements with ARIA labels

### Modifying Content

**Business data:** Edit `src/data/company.js`  
**Services:** Update `SERVICES` array in company.js  
**Styles:** Prefer CSS variables from `global.css`  
**Images:** Add to `public/images/` (use WebP/AVIF when possible)

### Code Style

- Use TypeScript interfaces for props
- Components use `.astro` extension
- CSS uses BEM methodology
- German language for all user-facing content
- English acceptable for code comments

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
Replace `public/images/logo.jpg` - keep similar dimensions (180x50px display size).

### Update Services
Modify the `SERVICES` array in `src/data/company.js`.

### Add Analytics
1. Uncomment/load analytics script in `CookieBanner.astro` `loadAnalytics()` function
2. Wrap in consent check: `if (window.cookieConsent?.analytics) { ... }`

### Fix Form Not Working
1. Verify `WEB3FORMS_KEY` is set in Netlify environment variables
2. Confirm recipient email in Web3Forms dashboard
3. Check browser console for errors

## Security Considerations

- Security headers configured in `netlify.toml`
- Content-Security-Policy restricts external resources
- No server-side code (static export)
- Form validation on client and server (Web3Forms)
- No sensitive data in repository

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
- Lazy loading images
- Preconnect to api.web3forms.com

## Important Notes

1. **German Language Only** - All UI text is in German
2. **Legal Compliance** - Impressum and Datenschutz are legally required in Germany
3. **Placeholder Data** - VAT ID and statistics need real values before production
4. **Cookie Consent** - Must remain functional; blocking scripts depend on it
5. **Web3Forms** - Contact form requires valid API key and confirmed recipient email

---

Last updated: February 2026
