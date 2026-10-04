import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { audiences } from "@/data/audiences";
import { teamMembers } from "@/data/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/case-studies",
    "/ai",
    "/contact",
    "/who-we-serve",
    "/about/team",
    "/about/how-we-work",
    "/growth-audit",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...audiences.map((a) => ({
      url: `${base}/who-we-serve/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...caseStudies.map((c) => ({
      url: `${base}/case-studies/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...teamMembers.map((m) => ({
      url: `${base}/about/team/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
