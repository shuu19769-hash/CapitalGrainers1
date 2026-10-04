import Image from "next/image";
import Link from "next/link";
import type { TeamMember, TeamProfileSection } from "@/data/team";
import { LandingHero } from "@/components/ui/LandingHero";
import { Button } from "@/components/ui/Button";

function initialsFromName(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ProfileSectionBlock({ section, variant }: { section: TeamProfileSection; variant: "cream" | "white" }) {
  return (
    <article
      className={
        variant === "cream"
          ? "rounded-lg border border-sand bg-cream p-6 md:p-8"
          : "rounded-lg border border-sand bg-white p-6 md:p-8"
      }
    >
      <h2 className="text-xl font-bold text-ink md:text-2xl">{section.title}</h2>

      {section.paragraphs?.map((para, i) => (
        <p key={i} className="mt-4 leading-relaxed text-ink/75 md:text-lg">
          {para}
        </p>
      ))}

      {section.industries && section.industries.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {section.industries.map((industry) => (
            <li key={industry}>
              <span className="inline-block rounded-full border border-sand bg-white px-3 py-1.5 text-sm font-medium text-ink/85">
                {industry}
              </span>
            </li>
          ))}
        </ul>
      )}

      {section.brands && section.brands.length > 0 && (
        <ul className="mt-6 space-y-4">
          {section.brands.map((brand) => (
            <li
              key={brand.name}
              className="rounded-md border border-sand/80 bg-white/80 px-4 py-3 md:px-5 md:py-4"
            >
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-copper hover:underline"
              >
                {brand.name}
              </a>
              <p className="mt-1 text-sm text-ink/65">{brand.description}</p>
              <p className="mt-1 text-xs text-ink/50">{brand.url.replace(/^https?:\/\//, "")}</p>
            </li>
          ))}
        </ul>
      )}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {section.bullets.map((item) => (
            <li key={item} className="flex gap-3 text-ink/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.quote && (
        <blockquote className="mt-6 border-l-4 border-copper pl-5 text-lg font-medium italic leading-relaxed text-ink/85">
          &ldquo;{section.quote}&rdquo;
        </blockquote>
      )}

      {section.note && <p className="mt-4 text-sm italic text-ink/60">{section.note}</p>}
    </article>
  );
}

type TeamMemberLayoutProps = {
  member: TeamMember;
};

export function TeamMemberLayout({ member }: TeamMemberLayoutProps) {
  const heroSubtitle = member.tagline ?? member.roles.join(" · ");
  const hasRichProfile = Boolean(member.profileSections?.length);

  const overview =
    member.overview ??
    `${member.bio} Full profile copy can be updated here when you share extended details.`;

  const expertise = member.expertise ?? member.roles.map((r) => r);
  const approach = member.approach ?? [
    "Collaborate closely with strategists and channel owners",
    "Communicate progress clearly and document decisions",
    "Focus on outcomes that tie back to revenue and efficiency",
  ];

  return (
    <>
      <LandingHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Team", href: "/about/team" },
          { name: member.name, href: `/about/team/${member.slug}` },
        ]}
        label="Our team"
        title={member.name}
        subtitle={heroSubtitle}
      />

      <section className="section-padding bg-white">
        <div className="container-tcg grid min-w-0 gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-14">
          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-sand bg-sand shadow-sm">
              {member.imageSrc ? (
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 20rem"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-5xl font-bold text-copper/35" aria-hidden>
                    {initialsFromName(member.name)}
                  </span>
                </div>
              )}
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {member.roles.map((role) => (
                <li key={role}>
                  <span className="inline-block rounded-md bg-cta/10 px-3 py-1.5 text-xs font-semibold text-cta sm:text-sm">
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 space-y-8">
            {hasRichProfile ? (
              member.profileSections!.map((section, index) => (
                <ProfileSectionBlock
                  key={section.title}
                  section={section}
                  variant={index === 0 ? "cream" : "white"}
                />
              ))
            ) : (
              <>
                <article className="rounded-lg border border-sand bg-cream p-6 md:p-8">
                  <h2 className="text-xl font-bold text-ink md:text-2xl">About</h2>
                  <p className="mt-4 leading-relaxed text-ink/75 md:text-lg">{member.bio}</p>
                  <p className="mt-4 leading-relaxed text-ink/75 md:text-lg">{overview}</p>
                </article>

                <article className="rounded-lg border border-sand bg-white p-6 md:p-8">
                  <h2 className="text-xl font-bold text-ink md:text-2xl">Expertise</h2>
                  <ul className="mt-4 space-y-2">
                    {expertise.map((item) => (
                      <li key={item} className="flex gap-3 text-ink/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-lg border border-sand bg-white p-6 md:p-8">
                  <h2 className="text-xl font-bold text-ink md:text-2xl">How I work with clients</h2>
                  <ul className="mt-4 space-y-2">
                    {approach.map((item) => (
                      <li key={item} className="flex gap-3 text-ink/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </>
            )}

            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Work with our team</Button>
              <Link
                href="/about/team"
                className="inline-flex min-h-11 items-center font-semibold text-copper hover:underline"
              >
                ← All team members
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
