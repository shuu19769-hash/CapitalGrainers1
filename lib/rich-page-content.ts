import type { Audience } from "@/data/audiences";
import type { Service } from "@/data/services";
import type { CaseStudy } from "@/data/case-studies";
import type { ContentSection } from "@/components/pages/RichPageLayout";
import { getPageImages } from "@/lib/page-media";
import { getAudiencePageSections } from "@/data/audience-page-content";
import { getServicePageSections } from "@/data/service-page-content";
import { getCaseStudyPageSections } from "@/data/case-study-page-content";

export function buildAudienceSections(audience: Audience): ContentSection[] {
  return getAudiencePageSections(audience);
}

export function buildServiceSections(service: Service): ContentSection[] {
  return getServicePageSections(service);
}

export function buildCaseStudySections(study: CaseStudy): ContentSection[] {
  return getCaseStudyPageSections(study);
}

export function getAudiencePageAssets(audience: Audience) {
  const { hero, gallery } = getPageImages(audience.slug, audience.title);
  return { hero, gallery };
}

export function getServicePageAssets(service: Service) {
  const { hero, gallery } = getPageImages(service.slug, service.title);
  return { hero, gallery };
}

export function getCaseStudyPageAssets(study: CaseStudy) {
  const { gallery } = getPageImages(study.slug, study.brand);
  const hero = { src: study.imageSrc, alt: `${study.brand} case study` };
  const extras = gallery.filter((g) => g.src !== study.imageSrc);
  const support: { src: string; alt: string; caption?: string }[] = [];
  for (const img of extras) {
    if (support.length >= 2) break;
    if (!support.some((s) => s.src === img.src)) support.push(img);
  }
  let i = 0;
  while (support.length < 2 && i < gallery.length) {
    const img = gallery[i];
    i += 1;
    if (img.src !== study.imageSrc && !support.some((s) => s.src === img.src)) {
      support.push(img);
    }
  }
  const galleryWithHero = [
    { src: study.imageSrc, alt: study.brand, caption: study.result },
    ...support,
  ];
  return { hero, gallery: galleryWithHero };
}
