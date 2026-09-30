import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamTabs } from "@/components/sections/TeamTabs";

export function TeamPreview() {
  return (
    <section className="section-padding w-full max-w-full overflow-x-hidden bg-sand-light">
      <div className="container-tcg">
        <SectionHeader
          label="Team"
          title="Specialists behind your growth"
          subtitle="Paid media, SEO, development, creative, and automation—working as one unit."
          align="center"
        />
        <Reveal className="mt-10 sm:mt-12" delay={0.08}>
          <TeamTabs showAboutLink />
        </Reveal>
      </div>
    </section>
  );
}
