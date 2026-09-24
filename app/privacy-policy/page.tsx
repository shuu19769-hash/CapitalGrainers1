import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for The Capital Gainers website and services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="How we handle information you share with us." />
      <section className="section-padding bg-white">
        <div className="container-tcg max-w-3xl space-y-6 text-teal/80 leading-relaxed">
          <p>
            The Capital Gainers respects your privacy. This policy describes how we collect, use, and
            protect information submitted through our website and consultation forms.
          </p>
          <h2 className="text-xl font-bold text-teal">Information we collect</h2>
          <p>
            When you contact us, we may collect your name, email address, business website, service
            interests, budget range, and message content. Newsletter sign-ups collect email addresses
            only when you voluntarily submit them.
          </p>
          <h2 className="text-xl font-bold text-teal">How we use information</h2>
          <p>
            We use your information to respond to inquiries, provide services you request, improve our
            website, and—where you opt in—send growth-related communications.
          </p>
          <h2 className="text-xl font-bold text-teal">Contact</h2>
          <p>
            For privacy-related questions, contact us via WhatsApp at +92 322 9976687 or through our
            contact page.
          </p>
        </div>
      </section>
    </>
  );
}
