"use client";

import { useState } from "react";
import { services } from "@/data/services";

type FormState = "idle" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const next: Record<string, string> = {};
    if (!String(form.get("name")).trim()) next.name = "Name is required";
    if (!String(form.get("email")).trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(form.get("email"))))
      next.email = "Enter a valid email";
    if (!String(form.get("message")).trim()) next.message = "Message is required";
    if (!form.get("consent")) next.consent = "Please confirm consent to be contacted";
    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      // Ready for API: POST to /api/contact with JSON body
      await new Promise((r) => setTimeout(r, 600));
      setState("success");
      e.currentTarget.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-copper/40 bg-sand-light p-8 text-teal" role="status">
        <p className="text-lg font-bold">Thank you for reaching out.</p>
        <p className="mt-2 text-teal/75">We will review your inquiry and respond as soon as possible.</p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-copper underline"
          onClick={() => setState("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {state === "error" && (
        <p className="border border-red-800/30 bg-red-50 p-3 text-sm text-red-900" role="alert">
          Something went wrong. Please try again or contact us on WhatsApp.
        </p>
      )}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-teal">Name</label>
          <input id="name" name="name" className="mt-1 w-full border border-sand bg-white px-4 py-3 text-teal focus:border-copper focus:outline-none" />
          {errors.name && <p className="mt-1 text-sm text-red-800">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-teal">Email</label>
          <input id="email" name="email" type="email" className="mt-1 w-full border border-sand bg-white px-4 py-3 text-teal focus:border-copper focus:outline-none" />
          {errors.email && <p className="mt-1 text-sm text-red-800">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="website" className="text-sm font-semibold text-teal">Business website</label>
        <input id="website" name="website" type="url" placeholder="https://" className="mt-1 w-full border border-sand bg-white px-4 py-3 text-teal focus:border-copper focus:outline-none" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="service" className="text-sm font-semibold text-teal">Service interest</label>
          <select id="service" name="service" className="mt-1 w-full border border-sand bg-white px-4 py-3 text-teal focus:border-copper focus:outline-none">
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="text-sm font-semibold text-teal">Monthly budget range</label>
          <select id="budget" name="budget" className="mt-1 w-full border border-sand bg-white px-4 py-3 text-teal focus:border-copper focus:outline-none">
            <option value="">Select range</option>
            <option value="under-2k">Under $2,000</option>
            <option value="2k-5k">$2,000 – $5,000</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-plus">$15,000+</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-teal">Message</label>
        <textarea id="message" name="message" rows={5} className="mt-1 w-full border border-sand bg-white px-4 py-3 text-teal focus:border-copper focus:outline-none" />
        {errors.message && <p className="mt-1 text-sm text-red-800">{errors.message}</p>}
      </div>
      <div className="flex items-start gap-3">
        <input id="consent" name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-copper" />
        <label htmlFor="consent" className="text-sm text-teal/80">
          I agree to be contacted about my inquiry and understand my information will be handled per the Privacy Policy.
        </label>
      </div>
      {errors.consent && <p className="text-sm text-red-800">{errors.consent}</p>}
      <button
        type="submit"
        className="w-full bg-copper px-6 py-3 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-copper-soft md:w-auto"
      >
        Request consultation
      </button>
    </form>
  );
}
