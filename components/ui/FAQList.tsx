"use client";

import { useState } from "react";
import type { FAQ } from "@/data/faqs";

export function FAQList({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-sand border border-sand bg-white">
      {items.map((item, i) => (
        <div key={item.question}>
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-teal hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-copper"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {item.question}
            <span className="text-copper">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="px-6 pb-5 text-sm leading-relaxed text-teal/75">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
