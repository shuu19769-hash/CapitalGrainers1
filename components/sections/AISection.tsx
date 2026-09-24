import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

const points = [
  "AI automation for marketing workflows",
  "Smarter reporting and data-supported decisions",
  "Lead qualification and routing",
  "Ecommerce and support workflow optimization",
];

export function AISection() {
  return (
    <section className="section-padding bg-teal text-sand">
      <div className="container-tcg grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            label="Intelligent Growth"
            title="AI that supports execution—not hype"
            subtitle="Practical automation and insights that help your team move faster without losing control."
            light
          />
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sand/85">
                <span className="text-copper">—</span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/ai">Explore AI Solutions</Button>
            <Link href="/services/ai-automation" className="text-sm font-semibold text-copper underline-offset-4 hover:underline">
              AI Automation service
            </Link>
          </div>
        </div>
        <div className="relative aspect-square w-full max-w-[min(100%,20rem)] justify-self-center border border-copper/30 bg-teal-dark p-6 sm:max-w-md sm:p-8 lg:max-w-none">
          <svg viewBox="0 0 200 200" className="h-full w-full opacity-90" aria-hidden>
            <circle cx="100" cy="100" r="70" fill="none" stroke="#B87345" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#E8E4DC" strokeWidth="1" />
            <path d="M100 30 L100 170 M30 100 L170 100" stroke="#B87345" strokeWidth="0.5" opacity="0.5" />
            {[
              [100, 30],
              [170, 100],
              [100, 170],
              [30, 100],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="5" fill="#B87345" />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
