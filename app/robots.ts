import { siteUrl } from '@/lib/business';
import type { MetadataRoute } from "next";

const SITE = siteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "PerplexityBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: SITE + "/sitemap.xml",
    host: SITE,
  };
}
