import { createMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { RichPageLayout } from "@/components/pages/RichPageLayout";
import { getPageImages } from "@/lib/page-media";
import { howWeWorkSections } from "@/data/company-page-content";

export const metadata = createMetadata({
  title: "How We Work",
  description:
    "Our values, process, and partnership model—how The Capital Gainers delivers measurable growth.",
  path: "/about/how-we-work",
});

export default function HowWeWorkPage() {
  const { hero, gallery } = getPageImages("how-we-work", "How we work");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "How We Work", href: "/about/how-we-work" },
        ]}
      />
      <RichPageLayout
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "How We Work", href: "/about/how-we-work" },
        ]}
        label="About"
        title="How we work"
        subtitle="Strategy before execution. Data before opinions. Long-term partnerships built on clarity, craft, and results you can explain to your board."
        heroImage={hero.src}
        heroImageAlt={hero.alt}
        gallery={gallery}
        sections={howWeWorkSections}
        sidebarItems={[
          { label: "Founded", value: "2019" },
          { label: "Focus", value: "Revenue & efficiency" },
          { label: "Markets", value: "27+ countries served" },
        ]}
        relatedLinks={[
          { label: "Meet the team", href: "/about/team" },
          { label: "About us", href: "/about" },
        ]}
      />
    </>
  );
}
