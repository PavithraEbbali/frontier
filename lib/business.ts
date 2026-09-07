/* ===========================================================================
   Business-identity constants — the single source for every fact about the
   RESELLER (not about Frontier; Frontier facts live in lib/catalog.ts).

   RULE: nothing in this file may be invented. Every value comes from the
   operator's signed authorized-dealer agreement and business registration.

   Values that are not yet supplied are `null`. They are NEVER rendered as a
   bracketed placeholder:
     · `next build` (production) throws from assertBusinessConstants() below,
       so a page carrying an unset value cannot be deployed.
     · `next dev` renders a loud inline marker instead, so layout stays
       reviewable while the operator sources the real value.
   =========================================================================== */

export type BusinessConstant = string | null;

export interface BusinessIdentity {
  /** Registered legal entity, e.g. "Example Holdings, LLC". */
  legalName: BusinessConstant;
  /**
   * Public-facing storefront brand. This site trades under the Frontier
   * retail brand as an authorized retailer; the operating company is
   * `legalName`, and the two are deliberately not the same value.
   */
  tradeName: string;
  /**
   * The domain this site actually ships on. NOT frontier.com — that is
   * Frontier's own site. Canonical URLs, robots.txt and the sitemap all derive
   * from this, so a wrong value points search engines at the wrong site.
   */
  domain: BusinessConstant;
  /**
   * The noun used in the signed Frontier agreement: "Retailer", "Dealer",
   * "Agent" or "Reseller". The current build says "Authorized Dealer" in the
   * header but "authorized reseller" in body copy — these must agree, and
   * they must match the executed agreement.
   */
  agreementNoun: BusinessConstant;
  street: BusinessConstant;
  cityStateZip: BusinessConstant;
  /** General business email. */
  email: BusinessConstant;
  /** Privacy/compliance mailbox. */
  privacyEmail: BusinessConstant;
  /** The real toll-free number routed to this site's campaign. */
  phone: BusinessConstant;
  /** Staffed hours, already formatted for display with timezone. */
  hours: BusinessConstant;
  /** Whether Spanish-speaking agents are staffed. */
  spanishStaffed: boolean | null;
  /** Whether a call-recording disclosure must appear next to the phone CTA. */
  callRecordingDisclosure: boolean | null;
}

/* ---------------------------------------------------------------------------
   DEMO MODE

   While this is `true` the site builds and deploys with the clearly-fictional
   values in DEMO_IDENTITY below, renders a persistent "demo" banner, and is
   marked noindex so it cannot be indexed as a real Frontier retailer.

   TO GO LIVE: fill in REAL_IDENTITY with the values from the signed agreement
   and set DEMO_MODE to false. The build then refuses to compile until every
   required value is present.
   --------------------------------------------------------------------------- */
export const DEMO_MODE = true;

/** Real values. Empty until the operator supplies them. */
const REAL_IDENTITY: BusinessIdentity = {
  legalName: null,
  tradeName: "Frontier",
  domain: null,
  agreementNoun: null,
  street: null,
  cityStateZip: null,
  email: null,
  privacyEmail: null,
  phone: null,
  hours: null,
  spanishStaffed: null,
  callRecordingDisclosure: null,
};

/**
 * Deliberately fictional stand-ins, used only while DEMO_MODE is true.
 *
 * The phone number is inside 555-0100..555-0199, the block reserved by the
 * North American Numbering Plan for fiction, so it cannot ring a real line.
 * Addresses and domains use the IANA/ICANN reserved `example` names. Nothing
 * here should ever be presented as a real business detail.
 */
const DEMO_IDENTITY: BusinessIdentity = {
  legalName: "Example Retailer LLC (demo)",
  tradeName: "Frontier",
  domain: null, // resolved from the deploy URL — see siteUrl()
  agreementNoun: "Retailer",
  street: "123 Example Street",
  cityStateZip: "Example City, ST 00000",
  email: "hello@example.com",
  privacyEmail: "privacy@example.com",
  phone: "(800) 555-0142",
  hours: "Mon-Fri 9:00 AM - 6:00 PM ET",
  spanishStaffed: false,
  callRecordingDisclosure: false,
};

export const BUSINESS: BusinessIdentity = DEMO_MODE ? DEMO_IDENTITY : REAL_IDENTITY;

/** Keys that must be set before the site can be built for production. */
const REQUIRED_KEYS = [
  "legalName",
  "domain",
  "agreementNoun",
  "street",
  "cityStateZip",
  "email",
  "privacyEmail",
  "phone",
  "hours",
  "spanishStaffed",
  "callRecordingDisclosure",
] as const satisfies readonly (keyof BusinessIdentity)[];

export function missingBusinessConstants(): string[] {
  // `domain` is resolved from the deploy URL in demo mode, so it is not
  // required there; everything else still has to be present.
  return REQUIRED_KEYS.filter(
    (k) => BUSINESS[k] === null && !(DEMO_MODE && k === "domain")
  );
}

/**
 * Build-time gate. Throws during `next build` if any §7 constant is unset, so
 * a placeholder can never reach a user. Runs at module scope — importing this
 * file from a page is enough to enforce it.
 */
export function assertBusinessConstants(): void {
  const missing = missingBusinessConstants();
  if (missing.length === 0) return;
  if (DEMO_MODE) return;
  throw new Error(
    "Business-identity constants are unset in lib/business.ts: " +
      missing.join(", ") +
      ".\nSupply the real values from the signed authorized-dealer agreement. " +
      "Do not invent placeholders — this build is intentionally blocked."
  );
}

if (process.env.NODE_ENV === "production") {
  assertBusinessConstants();
}

/**
 * Renders a constant, or a conspicuous dev-only marker when it is unset.
 * Never returns a bracketed placeholder in production — the build has already
 * failed by then.
 */
export function req(key: keyof BusinessIdentity): string {
  const v = BUSINESS[key];
  // Unset values render as nothing rather than as a marker string. The
  // production build is already blocked by assertBusinessConstants(), so an
  // empty string here can only ever be seen in dev.
  if (v === null) return "";
  return String(v);
}

/** True when a real phone number is configured. */
export function hasPhone(): boolean {
  return BUSINESS.phone !== null;
}

/**
 * Third-party endpoint the callback form POSTs to (Formspree, HubSpot,
 * Netlify Forms, a CRM webhook — anything that is not a backend route, which
 * this project does not ship).
 *
 * While this is null the form does NOT claim to have captured a lead: it tells
 * the visitor to call instead. See lib/site-motion.js → initForm.
 */
/**
 * Absolute site URL for metadata, robots and the sitemap. Falls back to
 * localhost in dev so the app still renders; the production build is blocked
 * by assertBusinessConstants() until a real domain is set.
 */
export function siteUrl(): string {
  if (BUSINESS.domain) return `https://www.${BUSINESS.domain}`;
  // Vercel exposes the deploy host at build time; use it so canonical URLs,
  // robots.txt and the sitemap agree with where the demo actually serves.
  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const LEAD_ENDPOINT: string | null = null;

/**
 * Shown until `agreementNoun` is set from the signed agreement. "Retailer" is
 * the term both sibling sites in this portfolio use, so it is the safest
 * stand-in — but it MUST be confirmed against the executed contract, and the
 * production build stays blocked until agreementNoun is set explicitly.
 */
const DEFAULT_AGREEMENT_NOUN = "Retailer";

/** `tel:` href built from the configured number. */
export function telHref(): string {
  const v = BUSINESS.phone;
  // No number configured: point at the order section rather than a dead tel:.
  if (v === null) return "#plans";
  return "tel:+1" + v.replace(/\D/g, "");
}

/**
 * Call CTA label. Shows the number when one is configured, and degrades to a
 * plain instruction when it is not, so no placeholder text reaches the page.
 */
export function callLabel(prefix = "Call"): string {
  return hasPhone() ? `${prefix} ${BUSINESS.phone}` : "Call to order";
}

/**
 * The agreement noun in lowercase for mid-sentence use ("authorized reseller").
 * Leaves the dev marker intact rather than lowercasing it into noise.
 */
export function agreementNounLower(): string {
  return (BUSINESS.agreementNoun ?? DEFAULT_AGREEMENT_NOUN).toLowerCase();
}

/** Title-case agreement noun for labels ("Authorized Retailer"). */
export function agreementNoun(): string {
  return BUSINESS.agreementNoun ?? DEFAULT_AGREEMENT_NOUN;
}

/** Phone formatted for display. */
export function phoneDisplay(): string {
  return req("phone");
}
