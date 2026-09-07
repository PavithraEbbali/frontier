import { siteUrl } from '@/lib/business';
import type { MetadataRoute } from "next";

const SITE = siteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "privacy", "disclaimer", "cookies", "tcpa",
    "trademarks", "marketing-policy", "service-fulfillment", "pci-dss",
  ];
  return routes.map((r) => ({
    url: `${SITE}/${r}`,
    changeFrequency: r === "" ? "weekly" : "yearly",
    priority: r === "" ? 1 : 0.5,
  }));
}
