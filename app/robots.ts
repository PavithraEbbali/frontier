import { DEMO_MODE, siteUrl } from '@/lib/business';
import type { MetadataRoute } from "next";

const SITE = siteUrl();

export default function robots(): MetadataRoute.Robots {
  // A demo deploy wearing Frontier branding must never be indexed as a real
  // Frontier retailer.
  if (DEMO_MODE) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "PerplexityBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: SITE + "/sitemap.xml",
    host: SITE,
  };
}
