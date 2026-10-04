import type { Metadata } from "next";
import { siteConfig } from "./site";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const ogImage = `${siteConfig.url}/images/logo.png`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: desc,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [{ url: ogImage, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: desc,
      images: [ogImage],
    },
  };
}
