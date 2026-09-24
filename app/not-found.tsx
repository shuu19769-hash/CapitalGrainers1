import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-sand-light px-4 text-center">
      <p className="section-label">404</p>
      <h1 className="text-4xl font-bold text-teal md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-teal/70">
        The page you are looking for may have moved or no longer exists. Let us help you get back on
        track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Return home</Button>
        <Link href="/contact" className="text-sm font-semibold text-copper underline">
          Contact us
        </Link>
      </div>
    </section>
  );
}
