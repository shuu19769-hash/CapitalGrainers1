import { createMetadata } from "@/lib/metadata";
import { TeamPhoto } from "@/components/ui/TeamPhoto";
import { PageHero } from "@/components/ui/PageHero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { teamMembers } from "@/data/team";
import { whyPillars } from "@/data/process";
import { siteConfig } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Founded in 2019, The Capital Gainers engineers profitable digital ecosystems for ecommerce and growth-stage brands worldwide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <PageHero
        label="About"
        title="Strategic growth partners since 2019"
        subtitle="We started with a single belief: most agencies optimize for the wrong things. We work with founders who care about margins, clarity, and measurable outcomes."
      />
      <section className="section-padding bg-white">
        <div className="container-tcg grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-teal">Our story</h2>
            <p className="mt-4 leading-relaxed text-teal/75">
              The Capital Gainers began in {siteConfig.founded} by working directly with ecommerce
              founders—learning their P&Ls, understanding margins, and building growth systems that
              moved the needle. We expanded from Pakistan to the UK, US, and beyond, supporting
              brands across 27+ countries.
            </p>
            <p className="mt-4 leading-relaxed text-teal/75">
              Today we deliver SEO, Google Ads, Meta Ads, Shopify development, conversion
              optimization, and AI automation as one coordinated growth function.
            </p>
          </div>
          <div className="border border-sand bg-sand-light p-8">
            <h2 className="text-xl font-bold text-teal">Mission & vision</h2>
            <p className="mt-4 text-teal/75">
              <strong className="text-teal">Mission:</strong> Engineer profitable digital ecosystems
              through performance marketing, technology, and transparent partnership.
            </p>
            <p className="mt-4 text-teal/75">
              <strong className="text-teal">Vision:</strong> Be the growth partner ambitious brands
              trust when clarity, data, and execution must align.
            </p>
          </div>
        </div>
      </section>
      <StatsSection />
      <section className="section-padding bg-sand-light">
        <div className="container-tcg">
          <SectionHeader label="Values" title="How we work" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyPillars.map((p) => (
              <div key={p.title} className="border border-sand bg-white p-6">
                <h3 className="font-bold text-teal">{p.title}</h3>
                <p className="mt-2 text-sm text-teal/70">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
      <section className="section-padding bg-white">
        <div className="container-tcg">
          <SectionHeader label="Team" title="The people behind your growth" align="center" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((m) => (
              <article key={m.name} className="border border-sand">
                <TeamPhoto src={m.imageSrc} alt={m.name} />
                <div className="p-6">
                  <h3 className="font-bold text-teal">{m.name}</h3>
                  <p className="text-sm italic text-copper">{m.roles.join(" · ")}</p>
                  <p className="mt-3 text-sm text-teal/75">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <LogoMarquee />
      <FinalCTA />
    </>
  );
}
