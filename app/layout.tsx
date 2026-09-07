import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import SiteMotion from "@/components/SiteMotion";
import { BUSINESS, DEMO_MODE, req, siteUrl } from '@/lib/business';
import { PLANS, planOffers } from "@/lib/catalog";

const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--nf-display", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--nf-body", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--nf-mono", display: "swap" });

const SITE = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Frontier® Fiber Internet — Authorized Retailer",
  description:
    "Order Frontier® 100% fiber-optic internet through Frontier® Fiber, an independent authorized reseller. Symmetrical speeds up to 7 Gig, no data caps, no annual contract. Call to confirm availability and pricing for your address.",
  keywords: [
    "Frontier fiber internet", "fiber optic internet", "gigabit internet", "symmetrical speeds",
    "no data caps", "Frontier reseller", "fiber plans", "5 Gig", "7 Gig internet",
  ],
  authors: [{ name: "Frontier® Fiber" }],
  alternates: { canonical: "/" },
  robots: DEMO_MODE
    ? { index: false, follow: false, nocache: true }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Frontier® Fiber",
    title: "Frontier® Fiber Internet — Authorized Retailer",
    description:
      "Independent authorized Frontier® fiber reseller. Symmetrical speeds up to 7 Gig, no data caps, no annual contract. Call to confirm availability and pricing for your address.",
    url: SITE + "/",
    images: [SITE + "/assets/social-card.jpg"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier® Fiber Internet — Authorized Retailer",
    description:
      "Fiber internet with symmetrical speeds, no data caps and no annual contract. Call to confirm availability at your address.",
    images: [SITE + "/assets/social-card.jpg"],
  },
  icons: {
    // Frontier's real primary red, #ff0037 (--primary-base on frontier.com).
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%23FF0037'/%3E%3Cpath d='M32 26h40v13H45v9h23v13H45v13H32z' fill='white'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF0037",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/* Structured data is generated from lib/catalog.ts and lib/business.ts — the
   same sources the visible cards render from — so the JSON-LD price sheet
   cannot drift from the on-page one (the previous build maintained two). */
function buildJsonLd() {
  const languages = ["English"];
  if (BUSINESS.spanishStaffed) languages.push("Spanish");

  const speedRange = `${PLANS[0].speedLabel} ${PLANS[0].speedUnit} up to ${
    PLANS[PLANS.length - 1].name
  }`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": SITE + "/#org",
        name: BUSINESS.tradeName,
        legalName: req("legalName"),
        url: SITE + "/",
        description: "Independently owned and operated authorized retailer of Frontier® fiber internet, TV and Home Phone services.",
        logo: SITE + "/assets/frontier-mark.svg",
        telephone: req("phone"),
        email: req("email"),
        areaServed: "US",
        address: {
          "@type": "PostalAddress",
          streetAddress: req("street"),
          addressCountry: "US",
        },
        disambiguatingDescription: `This site is operated by ${req("legalName")}, an independent authorized retailer, and is not Frontier.`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: req("phone"),
          contactType: "sales",
          availableLanguage: languages,
          areaServed: "US",
        },
      },
      {
        "@type": "WebSite",
        "@id": SITE + "/#website",
        url: SITE + "/",
        name: BUSINESS.tradeName,
        publisher: { "@id": SITE + "/#org" },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        serviceType: "Fiber-optic internet service (resale)",
        provider: { "@id": SITE + "/#org" },
        areaServed: "US",
        brand: "Frontier",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Frontier® Fiber Internet Plans",
          itemListElement: planOffers(SITE),
        },
      },
      {
        "@type": "FAQPage",
        "@id": SITE + "/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Are you the same company as Frontier?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `No. This site is operated by ${req("legalName")}, an independent authorized retailer of Frontier® services. We help you compare plans and place your order. Frontier owns the network and handles installation and billing.`,
            },
          },
          {
            "@type": "Question",
            name: "What internet speeds can I get with Frontier fiber?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Frontier fiber plans range from ${speedRange}, with matching (symmetrical) upload and download speeds on every tier. Availability depends on your address.`,
            },
          },
          {
            "@type": "Question",
            name: "Are there data caps or annual contracts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Frontier fiber plans include unlimited data with no overage charges, and Frontier advertises its fiber deals with no contract. Any term attached to a promotion is stated to you before you order.",
            },
          },
          {
            "@type": "Question",
            name: "How much does Frontier fiber cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Frontier sets pricing by address and publishes a rate online for Fiber 1 Gig only. For every other tier, we confirm the current price for your address on the call before any order is placed.",
            },
          },
          {
            "@type": "Question",
            name: "How do I find out if fiber is available at my address?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Send us your address using the callback request on this page, or call ${req("phone")}. We check which Frontier plans are serviceable at your address and quote the current price before you commit.`,
            },
          },
          {
            "@type": "Question",
            name: "Who installs the service?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Frontier schedules and performs the installation with its own technician. Frontier advertises free installation on select plans; Fiber 500 carries a $100 expert installation charge.",
            },
          },
        ],
      },
    ],
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildJsonLd();
  return (
    <html lang="en" className={`js ${grotesk.variable} ${manrope.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
        <SiteMotion />
      </body>
    </html>
  );
}
