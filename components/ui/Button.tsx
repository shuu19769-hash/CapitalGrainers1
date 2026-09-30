import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
  onClick,
}: ButtonProps) {
  const base =
    "group inline-flex min-h-11 w-full max-w-full items-center justify-center gap-2 px-4 py-3 text-base font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:w-auto sm:px-6 md:text-lg";

  const variants = {
    primary:
      "bg-cta text-white shadow-sm hover:bg-cta-hover hover:shadow-md",
    secondary:
      "border border-copper bg-transparent text-copper-dark hover:border-copper-dark hover:bg-copper/5",
  };

  return (
    <Link href={href} onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </Link>
  );
}
