"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionHeaderProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "mx-auto min-w-0 max-w-3xl text-center" : "min-w-0 max-w-3xl"}
    >
      {label && <p className="section-label">{label}</p>}
      <h2
        className={`text-balance text-[clamp(1.5rem,4.5vw,3rem)] font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-teal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            light ? "text-sand/80" : "text-teal/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
