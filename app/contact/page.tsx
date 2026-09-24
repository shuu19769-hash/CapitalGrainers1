import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQList } from "@/components/ui/FAQList";
import { contactFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Contact",
  description: "Request a free growth audit. Islamabad, Pakistan · WhatsApp +92 322 9976687.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <PageHero
        label="Contact"
        title="Start with a conversation that leads to clarity"
        subtitle="Tell us about your brand, goals, and challenges. We will respond with next steps for a growth consultation."
      />
      <section className="section-padding bg-white">
        <div className="container-tcg grid min-w-0 gap-8 sm:gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-lg font-bold text-teal">Get in touch</h2>
              <ul className="mt-4 space-y-3 text-teal/75">
                <li>
                  <a href={siteConfig.phoneHref} className="font-semibold text-copper hover:underline">
                    {siteConfig.phone}
                  </a>
                  <span className="block text-sm">WhatsApp</span>
                </li>
                <li>{siteConfig.location}</li>
              </ul>
            </div>
            <p className="text-sm leading-relaxed text-teal/70">
              We work with ecommerce and growth-stage brands worldwide. Sharing your website and
              current channels helps us prepare a more valuable first conversation.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-3 border border-sand bg-sand-light p-5 sm:p-8">
            <h2 className="text-lg font-bold text-teal">Growth consultation form</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-sand-light">
        <div className="container-tcg max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-teal">Frequently asked questions</h2>
          <div className="mt-8">
            <FAQList items={contactFaqs} />
          </div>
          <p className="mt-10 text-center text-sm text-teal/70">
            Your information is used only to respond to your inquiry. We do not share your details
            with third parties for unrelated marketing.
          </p>
        </div>
      </section>
    </>
  );
}
