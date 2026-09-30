"use client";

import { Children } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const easePremium = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** 0–1: how much of the element must enter the viewport */
  amount?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, amount = 0.12, y = 28 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={cn("min-w-0 max-w-full", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("min-w-0 max-w-full", className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "-48px 0px" }}
      transition={{ duration: 0.6, delay, ease: easePremium }}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easePremium },
  },
};

type RevealStaggerProps = {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
};

/** Wrap direct children; each child fades up in sequence when the group enters view. */
export function RevealStagger({ children, className, itemClassName }: RevealStaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={cn("min-w-0 max-w-full", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("min-w-0 max-w-full", className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08, margin: "-40px 0px" }}
    >
      {Children.toArray(children).map((child, i) => (
        <motion.div key={i} variants={staggerItem} className={itemClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

type RevealItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function RevealItem({ children, className }: RevealItemProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
