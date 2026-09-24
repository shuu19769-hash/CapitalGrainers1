import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms of service for The Capital Gainers website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" subtitle="Terms governing use of this website." />
      <section className="section-padding bg-white">
        <div className="container-tcg max-w-3xl space-y-6 text-teal/80 leading-relaxed">
          <p>
            By accessing thecapitalgainers.com, you agree to these terms. Content on this site is for
            general information about our agency and services.
          </p>
          <h2 className="text-xl font-bold text-teal">Services</h2>
          <p>
            Specific deliverables, timelines, and fees are defined in separate agreements between The
            Capital Gainers and clients. Nothing on this website constitutes a binding offer.
          </p>
          <h2 className="text-xl font-bold text-teal">Intellectual property</h2>
          <p>
            Site content, branding, and materials are owned by The Capital Gainers or used with
            permission. Client logos and portfolio materials remain the property of their respective
            owners.
          </p>
          <h2 className="text-xl font-bold text-teal">Limitation</h2>
          <p>
            We strive for accuracy but do not warrant that all information is complete or current.
            Use of the site is at your own risk to the extent permitted by law.
          </p>
        </div>
      </section>
    </>
  );
}
