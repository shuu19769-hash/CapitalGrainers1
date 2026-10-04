import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { TeamMemberLayout } from "@/components/pages/TeamMemberLayout";
import { getTeamMemberBySlug, teamMembers } from "@/data/team";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return {};
  return createMetadata({
    title: member.name,
    description: member.bio,
    path: `/about/team/${slug}`,
  });
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Team", href: "/about/team" },
          { name: member.name, href: `/about/team/${member.slug}` },
        ]}
      />
      <TeamMemberLayout member={member} />
    </>
  );
}
