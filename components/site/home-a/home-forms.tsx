"use client";

/**
 * Homepage forms with the live site's fields and labels. They post to the
 * repo's existing /api/submit route and reuse its zod schemas.
 */
import { useState } from "react";
import { toast } from "sonner";
import { newsletterSchema, scheduleSchema } from "@/lib/form-schemas";
import s from "./home-a.module.css";

export function HomeContactForm({ cta }: { cta: string }) {
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const parsed = scheduleSchema.safeParse({
      name: `${v("firstName")} ${v("lastName")}`.trim(),
      email: v("email"),
      phone: v("phone"),
      message: v("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || "Please check the form");
      return;
    }
    setPending(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "schedule", payload: parsed.data }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      toast.success("Thank you, we’ll be in touch shortly.");
      e.currentTarget.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setPending(false);
    }
  };

  return (
    <form className={s.form} onSubmit={onSubmit} noValidate data-form="schedule">
      <input className={s.field} name="firstName" placeholder="First Name" aria-label="First Name" autoComplete="given-name" />
      <input className={s.field} name="lastName" placeholder="Last Name" aria-label="Last Name" autoComplete="family-name" />
      <input className={s.field} name="email" type="email" placeholder="Email" aria-label="Email Address" autoComplete="email" />
      <input className={s.field} name="phone" type="tel" placeholder="Phone" aria-label="Phone Number" autoComplete="tel" />
      <textarea
        className={`${s.field} ${s.wideField}`}
        name="message"
        placeholder="Tell us about your dream home..."
        aria-label="Project Description"
      />
      <div className={s.go}>
        <button type="submit" className={`${s.btn} ${s.btnFill}`} disabled={pending}>
          {cta}
        </button>
      </div>
    </form>
  );
}

export function HomeNewsletterForm({ cta }: { cta: string }) {
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || "Please enter a valid email");
      return;
    }
    setPending(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", payload: parsed.data }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Subscription failed");
      toast.success("You’re subscribed.");
      setEmail("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setPending(false);
    }
  };

  return (
    <form className={s.newsForm} onSubmit={onSubmit} data-form="newsletter">
      <input
        className={s.field}
        type="email"
        placeholder="Enter your email"
        aria-label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
      />
      <button type="submit" className={s.btn} disabled={pending}>
        {cta}
      </button>
    </form>
  );
}
