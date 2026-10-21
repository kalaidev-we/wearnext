# WearNextFabs — Digital Experience & B2B Manufacturing Platform
> Concept: **“Weaving What's Next.”**  
> Commissioned by **AriseAgency** for **WearNextFabs**  
> Target Domain: [wearnextfabs.com](https://wearnextfabs.com/)

---

## 1. Executive Summary

WearNextFabs is a premium digital experience engineered to present WearNextFabs as a credible, modern textile and apparel manufacturing partner. It combines editorial aesthetics with the conversion usability of an international B2B platform.

### Core Conversion Goals
1. **Primary Conversion:** Formal Quotation Request via the 3-Step Interactive Quote Wizard (`/quote`).
2. **Secondary Conversions:**
   - Interactive Fabric Spec Discovery & Prefilled Inquiries (`/products`).
   - B2B Partnership Proposals for Mills, Brands, & Distributors (`/partner`).
   - Direct Factory Consultation & FAQ Accordion (`/contact`).

---

## 2. All Seven Required Pages Implemented

| Route | Page | Key Features & Architecture |
|---|---|---|
| `/` | **Home** | Skip-supported cinematic textile intro, editorial hero, featured fabrics grid with live filter tabs, about & capabilities teasers, asymmetric case studies, 4-stage manufacturing journey, partnership CTA, final conversion gateway. |
| `/about` | **About Us** | Verified company history, mission & vision, deep-dive into weaving and CMT capabilities, 4-point ASTM D5430 QC protocol, spectrophotometer color calibration, sustainable sourcing initiatives, operational milestone timeline. |
| `/products` | **Products** | Comprehensive fabric library with real-time text search and category filters, product cards with zoom effect, accessible modal with technical specs (GSM, composition, weave, width, shrinkage, suitable silhouettes), and "Enquire" CTAs prefilling the quote wizard. |
| `/work` | **Our Work** | Asymmetrical editorial portfolio with verified case studies (streetwear, corporate uniforms, luxury flax resortwear, executive shirting), challenge/solution breakdown, substantiated outcomes, and project modal views. |
| `/partner` | **Become a Partner** | Dedicated B2B collaboration portal covering fashion labels, yarn spinners, sourcing agencies, and distributors; onboarding workflow; fully validated partnership application form with reference tracking. |
| `/contact` | **Contact Us** | Verified contact channels, clearly identified facility placeholders, direct message form with server-side validation, and accessible keyboard-navigable FAQ accordion. |
| `/quote` | **Get a Quote** | Multi-step quote wizard with Step 1 (Requirements & volume tiers), Step 2 (Contact, specs, optional file upload with MIME/size validation), Step 3 (Summary review), unique reference generator (`WNF-2026-XXXX`), WhatsApp follow-up link, and print summary action. |

---

## 3. Creative Direction & Design System

The visual language balances editorial typography with industrial precision.

### Color Palette
- **Charcoal (`#20211F`)**: Deep foundation conveying confidence and industrial discipline.
- **Warm Linen (`#E8E1D5`)**: Natural textile tone evoking raw fibers, flax, and loom craftsmanship.
- **Off-White (`#F8F6F0`)**: Clean editorial paper-like canvas for high readability.
- **Muted Sage (`#9A9A82`)**: Subtle botanical accent highlighting sustainable processes and quality checks.
- **Soft Grey (`#D8D6CF`)**: Restrained borders and dividers.

### Typography
- **Headings (Editorial Serif):** *Cormorant Garamond* / *Playfair Display*
- **Body & UI (High-legibility Sans):** *Inter* / *Space Grotesk* for technical monospace accents.

---

## 4. Backend Endpoints & API Routes

All endpoints feature server-side validation, duplicate prevention, and clean response envelopes:

- `POST /api/quote`:
  - Validates mandatory project specs, volume, timeline, contact details, and consent.
  - Generates a unique tracking reference (e.g., `WNF-2026-4821`).
  - Logs structured record ready for PostgreSQL/Supabase insertion.
  - Dispatches email notification via Resend adapter (with safe fallback logging when unconfigured).
- `POST /api/partner`:
  - Validates partnership categories, company credentials, and collaboration scope.
  - Generates reference ID `PARTNER-WNF-2026-XXXX`.
- `POST /api/contact`:
  - Processes general inquiries and factory visits with reference code `CONTACT-WNF-2026-XXXX`.

---

## 5. Database Schema & Storage Setup

A complete PostgreSQL / Supabase schema is provided at `src/db/schema.sql`:
- `quotations`: Stores all client RFQs, tech-pack metadata, quantities, and timelines.
- `partnerships`: Stores commercial supplier and brand proposals.
- `contact_inquiries`: Stores customer inquiries and communication logs.

### Setting up with Supabase:
1. Create a project in [Supabase](https://supabase.com).
2. Paste and run `src/db/schema.sql` inside the Supabase SQL Editor.
3. In Supabase Storage, create a private bucket named `private-techpacks`.
4. Add your credentials to `.env.local`.

---

## 6. Local Development & Production Build

### Prerequisites
- Node.js LTS (v18.x, v20.x, or v24.x)
- npm or pnpm

### Commands
```bash
# Install dependencies
npm install

# Start local development server (runs at http://localhost:3000)
npm run dev

# Run production build and type-checking
npm run build

# Start production server
npm run start
```

---

## 7. Checklist: Client Assets & Facts Still Needed

Per client instructions, no facts or customer identities have been fabricated. Clearly marked placeholders exist for:

1. **Brand Identity:** Official SVG vector logo of WearNextFabs (currently utilizing approved editorial typography wordmark).
2. **Facility Location:** Exact street address, industrial park unit number, and registered headquarters location (currently demarcated as `[Client Facility Location Pending]`).
3. **Legal Entity:** Full registered legal company name (e.g. WearNextFabs Pvt. Ltd. / LLC).
4. **Direct Telephony:** Authorised corporate phone number and official WhatsApp business link.
5. **Accreditation Certificates:** High-resolution scans or registration numbers for GOTS, OEKO-TEX Standard 100, or ISO audits (currently noted as on file upon audit request).
6. **Production Metrics:** Any client-approved specific monthly meterages, loom counts, or export market percentages.
