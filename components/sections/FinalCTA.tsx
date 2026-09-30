import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="section-padding w-full max-w-full overflow-x-hidden bg-teal-dark text-center text-cream">
      <Reveal className="container-tcg max-w-3xl">
        <p className="section-label !text-copper">Get Started</p>
        <h2 className="text-balance text-[clamp(1.5rem,4.8vw,3rem)] font-bold leading-tight">
          Ready to Turn Marketing Into{" "}
          <span className="italic text-copper">Measurable Growth</span>?
        </h2>
        <p className="mt-6 text-cream/80">
          Request a free growth audit and discover where SEO, paid media, ecommerce, and AI can
          move your business forward.
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
          <Button href="/contact" className="sm:max-w-none">Request Your Free Growth Audit</Button>
          <Button href="/case-studies" variant="secondary" className="!border-cream !text-cream hover:!border-copper hover:!text-copper sm:max-w-none">
            View Case Studies
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
