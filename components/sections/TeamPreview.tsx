import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamPhoto } from "@/components/ui/TeamPhoto";
import { teamMembers } from "@/data/team";

export function TeamPreview() {
  return (
    <section className="section-padding bg-sand-light">
      <div className="container-tcg">
        <SectionHeader
          label="Team"
          title="Specialists behind your growth"
          subtitle="Paid media, SEO, development, creative, and automation—working as one unit."
          align="center"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden border border-sand bg-white transition-shadow hover:shadow-md"
            >
              <TeamPhoto src={member.imageSrc} alt={member.name} />
              <div className="p-6">
                <h3 className="text-lg font-bold text-teal">{member.name}</h3>
                <p className="mt-1 text-sm italic text-copper">{member.roles.join(" · ")}</p>
                <p className="mt-3 line-clamp-3 text-sm text-teal/70">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/about" className="font-semibold text-copper hover:underline">
            Meet the full team on our About page
          </Link>
        </p>
      </div>
    </section>
  );
}
