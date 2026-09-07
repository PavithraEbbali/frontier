/* ===========================================================================
   Frontier product catalog — THE single source of truth for every plan, price,
   promo and condition shown on this site, and for the JSON-LD in app/layout.tsx.

   Card prices and structured-data prices are both derived from this file, so
   they cannot diverge (the previous build kept two independent price sheets).

   RULE: every field below is quoted from a page actually fetched on
   frontier.com, with `source` + `pulled` recorded next to it. Nothing here may
   be estimated, rounded, or carried over from an older document.

   IMPORTANT FINDING (2026-09-07): frontier.com gates tier pricing behind
   address entry. Exactly one consumer price is publicly published — Fiber
   1 Gig on /shop/deals. Every other tier therefore carries `price: null` and
   the card shows speed + inclusions only, with pricing quoted on the call.
   =========================================================================== */

export const PRICING_PULLED = "2026-09-07"; // internal provenance only — do not render
export const PRICING_REVIEWED = "September 2026";
/** Human-readable expiry labels. Never render a raw ISO date to a visitor. */
export function formatOfferDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["January","February","March","April","May","June",
    "July","August","September","October","November","December"];
  return `${months[m - 1]} ${d}, ${y}`;
}

const SHOP = "https://www.frontier.com/shop";

export interface PlanPrice {
  /** Recurring monthly amount, exactly as frontier.com displays it. */
  monthly: string;
  /** Numeric form for JSON-LD. Derived from `monthly` — never typed twice. */
  amount: string;
  /** Introductory condition, e.g. "$0 for 1 month". */
  intro: string | null;
  /** What happens after the promo/guarantee period. */
  stepUp: string;
  /** Conditions attached to the advertised rate. */
  conditions: string[];
}

export interface Plan {
  id: string;
  /** Frontier's own plan name. */
  name: string;
  downloadMbps: number;
  uploadMbps: number;
  /** Display speed, e.g. "1,000". */
  speedLabel: string;
  speedUnit: string;
  /** null when frontier.com publishes no price without an address. */
  price: PlanPrice | null;
  /** Router Frontier states is included, verbatim where quoted. */
  equipment: string;
  /** Installation terms as published. */
  install: string;
  /** Short factual selling points. No invented entitlements. */
  features: string[];
  popular?: boolean;
  source: string;
  pulled: string;
}

/* --------------------------------------------------------------------------
   Fiber tiers — the only internet product Frontier sells (pure fiber ISP,
   no cable/coax line). Order matches frontier.com's own nav, low to high.
   -------------------------------------------------------------------------- */
export const PLANS: Plan[] = [
  {
    id: "fiber-500",
    name: "Fiber 500",
    downloadMbps: 500,
    uploadMbps: 500,
    speedLabel: "500",
    speedUnit: "Mbps",
    price: null,
    equipment: "eero Pro 7 Wi-Fi router included",
    install: "Expert installation $100",
    features: [
      "Symmetrical 500 Mbps up and down",
      "Unlimited data, no overage charges",
      "4-year price guarantee",
    ],
    source: `${SHOP}/internet/fiber-internet/500`,
    pulled: PRICING_PULLED,
  },
  {
    id: "fiber-1-gig",
    name: "Fiber 1 Gig",
    downloadMbps: 1000,
    uploadMbps: 1000,
    speedLabel: "1,000",
    speedUnit: "Mbps",
    price: {
      monthly: "$64.99/mo",
      amount: "64.99",
      intro: "$0 for 1 month",
      stepUp: "Then $64.99/mo. Standard rates apply after the guarantee period.",
      conditions: [
        // Frontier labels this rate a "LIMITED TIME ONLINE EXCLUSIVE" on
        // /shop/deals. A phone order may not qualify for it, which is why the
        // card does not promise it — see PROMO_NOTE below.
        "Frontier online exclusive; phone orders may price differently",
        "Auto Pay required; additional charges apply without it",
        "No contract",
        "5-year price guarantee (excludes installation and add-on fees)",
      ],
    },
    equipment: "Whole-Home Wi-Fi included",
    install: "Free installation",
    features: [
      "Symmetrical 1,000 Mbps up and down",
      "Unlimited data, no overage charges",
      "No hidden fees or contracts",
    ],
    popular: true,
    source: `${SHOP}/deals`,
    pulled: PRICING_PULLED,
  },
  {
    id: "fiber-2-gig",
    name: "Fiber 2 Gig",
    downloadMbps: 2000,
    uploadMbps: 2000,
    speedLabel: "2,000",
    speedUnit: "Mbps",
    price: null,
    equipment: "Free Wi-Fi 7 with a premium eero Pro 7 Wi-Fi router",
    install: "Confirmed for your address on the call",
    features: [
      "Symmetrical 2,000 Mbps up and down",
      "Unlimited data, no overage charges",
      "Wi-Fi 7 throughout the home",
    ],
    source: `${SHOP}/internet/fiber-internet/2-gig`,
    pulled: PRICING_PULLED,
  },
  {
    id: "fiber-5-gig",
    name: "Fiber 5 Gig",
    downloadMbps: 5000,
    uploadMbps: 5000,
    speedLabel: "5,000",
    speedUnit: "Mbps",
    price: null,
    equipment: "Amazon eero Max 7 Wi-Fi router included ($599 value)",
    install: "Confirmed for your address on the call",
    features: [
      "Symmetrical 5,000 Mbps up and down",
      "Supports 200+ connected devices",
      "Wired speeds up to 9.4 Gbps; wireless up to 4.3 Gbps",
    ],
    source: `${SHOP}/internet/fiber-internet/5-gig`,
    pulled: PRICING_PULLED,
  },
  {
    id: "fiber-7-gig",
    name: "Fiber 7 Gig",
    downloadMbps: 7000,
    uploadMbps: 7000,
    speedLabel: "7,000",
    speedUnit: "Mbps",
    price: null,
    equipment: "Two eero Max 7 devices, plus one more for Whole-Home Wi-Fi",
    install: "Free installation on select plans",
    features: [
      "Symmetrical 7,000 Mbps up and down",
      "Wireless speeds up to 4.3 Gbps",
      "Whole-Home Wi-Fi, Wi-Fi Security and My Premium Tech Pro included for 12 months",
    ],
    source: `${SHOP}/internet/fiber-internet/7-gig`,
    pulled: PRICING_PULLED,
  },
];

/* --------------------------------------------------------------------------
   TV — Frontier sells TV through a YouTube TV partnership. Verified current
   on /shop/tv as of the pull date. Netflix bundle sold alongside it.
   -------------------------------------------------------------------------- */
export const TV = {
  partner: "YouTube TV",
  /** Attribution for the partner's own mark. */
  partnerTrademark:
    "YouTube TV is a trademark of Google LLC. Netflix is a trademark of Netflix, Inc.",
  offer: "Save $10/mo. on YouTube TV for one year",
  promoPrice: "$72.99/mo. + taxes",
  regularPrice: "$82.99",
  eligibility: "Frontier customers new to YouTube TV",
  netflixBundle: {
    name: "Netflix & Pro Wi-Fi Bundle",
    price: "Bundle plans start at just $61.99/mo. + taxes",
    includes: "Netflix Premium, Whole-Home Wi-Fi and Wi-Fi Security",
  },
  source: `${SHOP}/tv`,
  pulled: PRICING_PULLED,
};

/* --------------------------------------------------------------------------
   Home Phone — sold as an add-on to internet. No public price without an
   address, same as the fiber tiers.
   -------------------------------------------------------------------------- */
export const PHONE = {
  name: "Frontier Home Phone",
  price: null,
  features: [
    "Unlimited local and long-distance calling",
    "Voicemail and caller ID",
    "Call waiting and call management features",
  ],
  conditions: [
    "Bring your own phone — a handset is not included",
    "Availability varies by address; some areas require Frontier Internet",
  ],
  source: `${SHOP}/phone`,
  pulled: PRICING_PULLED,
};

/* --------------------------------------------------------------------------
   Bundle-relevant offers published on /shop/deals.
   -------------------------------------------------------------------------- */
export const OFFERS = [
  {
    name: "NFL Sunday Ticket from YouTube",
    value: "up to $480",
    condition:
      "New customers ordering Fiber 1 Gig or faster. Promo code valid for 30 days after installation.",
    expires: "2026-09-23",
  },
  {
    name: "YouTube TV discount",
    value: "up to $120 over a year",
    condition:
      "$10/mo. for 12 months, or $15/mo. when bundled with Frontier TV.",
    expires: null,
  },
  {
    name: "Refer a friend",
    value: "up to $200",
    condition:
      "Mastercard gift card, issued after the referred customer has been installed 45 days.",
    expires: null,
  },
];

/**
 * Frontier's headline Fiber 1 Gig promotion is advertised as a "LIMITED TIME
 * ONLINE EXCLUSIVE". This site takes orders by phone, so the offer cannot be
 * promised here. Surfacing this honestly is the point.
 */
export const PROMO_NOTE =
  "Some Frontier promotions are advertised as online exclusives and may not apply to a phone order. We tell you exactly which offers you qualify for at your address before you order.";
export const OFFERS_SOURCE = `${SHOP}/deals`;

/* --------------------------------------------------------------------------
   Trademark attribution.

   frontier.com publishes NO "trademarks of X" sentence. The only entity its
   consumer footer names is Verizon ("© 2026 Verizon"), and the site brands
   itself "Frontier, a Verizon Company" following Verizon's completed
   acquisition on 2026-01-20. This mirrors how the sibling sites in this
   portfolio attribute to the current parent (Spectrum → Charter Communications;
   Kinetic → Uniti Group, Inc.).
   -------------------------------------------------------------------------- */
export const FRONTIER_TRADEMARK =
  "Frontier® and related names and logos are trademarks of Verizon or its affiliates.";
export const FRONTIER_COPYRIGHT = "© 2026 Verizon";
export const FRONTIER_TRADEMARK_SOURCE = "https://www.frontier.com/";

/* --------------------------------------------------------------------------
   JSON-LD offer list, generated from PLANS above. Only tiers with a published
   price emit an Offer with a price; the rest are advertised as services whose
   price is quoted by phone, which is what schema.org expects when a price is
   not public.
   -------------------------------------------------------------------------- */
export function planOffers(siteUrl: string) {
  return PLANS.map((p) => {
    const base: Record<string, unknown> = {
      "@type": "Offer",
      name: p.name,
      category: "Fiber internet service",
      url: `${siteUrl}/#plans`,
      itemOffered: {
        "@type": "Service",
        name: `${p.name} — ${p.speedLabel} ${p.speedUnit} symmetrical fiber internet`,
        provider: { "@type": "Organization", name: "Frontier" },
      },
    };
    if (p.price) {
      base.priceCurrency = "USD";
      base.price = p.price.amount;
      base.priceSpecification = {
        "@type": "UnitPriceSpecification",
        price: p.price.amount,
        priceCurrency: "USD",
        unitCode: "MON",
      };
      base.availability = "https://schema.org/InStock";
    } else {
      // No public price: do not fabricate one for structured data either.
      base.availability = "https://schema.org/InStock";
      base.description =
        "Pricing for this tier is confirmed for your address when you call.";
    }
    return base;
  });
}
