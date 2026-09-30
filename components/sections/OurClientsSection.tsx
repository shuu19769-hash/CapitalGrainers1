import Image from "next/image";
import { clientLogos } from "@/data/clients";

export function OurClientsSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-tcg">
        <h2 className="text-center text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase tracking-tight text-ink">
          Our clients
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-ink/75">
          We&apos;ve partnered with ambitious ecommerce, lifestyle, and service brands across multiple
          markets. From websites and SEO to paid media, social, email, CRO, and analytics, our team
          has helped organizations increase traffic, generate qualified leads, and drive revenue
          growth—with processes built for performance and scale.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex min-h-[5.5rem] items-center justify-center rounded-md border border-sand bg-white px-4 py-5 shadow-sm"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.size ?? 180}
                height={72}
                className="max-h-14 w-auto max-w-[10rem] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
