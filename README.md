# Frontier Fiber — authorized retailer site

Next.js 16 (App Router, Turbopack) marketing site for an **independent authorized
retailer** of Frontier® fiber internet, TV and Home Phone. Phone-order conversion;
there is no checkout and no backend.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # see "Before deploying" — this fails by design until configured
```

---

## Before deploying — required

`npm run build` **intentionally fails** until the business-identity constants are
filled in. This is a guard, not a bug: it stops placeholder or empty values from
reaching a live page.

Open [`lib/business.ts`](lib/business.ts) and set every field in `BUSINESS`:

| Constant | What it is |
|---|---|
| `legalName` | Registered legal entity operating the site |
| `domain` | The domain this site ships on — **not** `frontier.com` |
| `agreementNoun` | "Retailer", "Dealer", "Agent" — must match the signed agreement |
| `street`, `cityStateZip` | Registered business address |
| `email`, `privacyEmail` | General and privacy/compliance mailboxes |
| `phone` | The toll-free number routed to this site |
| `hours` | Staffed hours, formatted for display, with timezone |
| `spanishStaffed` | `true` / `false` |
| `callRecordingDisclosure` | `true` / `false` |

Optional: `LEAD_ENDPOINT` in the same file, if a callback form is reintroduced.

The build error names exactly which values are still missing.

## Deploying to Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Next.js**. Build command, output dir and install command
   are all detected — no overrides needed, and no `vercel.json` is required.
3. No environment variables are needed. Configuration lives in `lib/business.ts`
   because these are public, rendered values, not secrets.
4. Set the production domain to the same value as `BUSINESS.domain`, so canonical
   URLs, `robots.txt` and the sitemap agree with where the site actually serves.

Deploys will fail until step "Before deploying" is done.

## Where things live

```
app/                    routes; legal pages, robots.ts, sitemap.ts
  layout.tsx            metadata + JSON-LD, generated from lib/
  globals.css           all styling, single stylesheet
components/             one component per section
lib/business.ts         WHO THE RETAILER IS  — required constants + build guard
lib/catalog.ts          WHAT FRONTIER SELLS  — every price/promo, each with a
                        frontier.com source URL and pull date
lib/site-motion.js      entrance animation only; no pinned or scrubbed scenes
public/assets/          imagery, served through next/image
```

### Two rules this codebase enforces

**Nothing about Frontier is invented.** Every price, speed, promo and condition in
`lib/catalog.ts` carries the `frontier.com` URL it came from and the date it was
pulled. Frontier gates most pricing behind an address, so only Fiber 1 Gig shows a
figure; the rest say pricing is confirmed on the call. Re-verify before each
campaign and update the pull date.

**Card prices and JSON-LD prices come from one source.** `lib/catalog.ts` feeds both
the visible cards and the structured data, so the two cannot drift apart.

## Content maintenance

Frontier changes offers often. When refreshing:

- Re-fetch `frontier.com/shop/deals`, `/shop/tv`, `/shop/phone` and each tier page.
- Update `PLANS`, `TV`, `PHONE`, `OFFERS` in `lib/catalog.ts` and bump
  `PRICING_PULLED` / `PRICING_REVIEWED`.
- Drop expired offers. Each entry has an `expires` field for this.
- Watch for offers marked **online exclusive** — those may not be claimable on a
  phone order. `PROMO_NOTE` discloses this; keep it accurate.

## Compliance notes

- The disclosure bar, the "Authorized Retailer" line under the logo, and the footer
  trademark block are what distinguish this site from Frontier's own. Do not remove
  them while the site uses Frontier branding.
- Trademark attribution follows frontier.com's current footer (`© 2026 Verizon`),
  post the January 2026 Verizon acquisition.
- Legal pages live under `app/` and render entirely from `lib/business.ts`.
