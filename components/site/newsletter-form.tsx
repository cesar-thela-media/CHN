"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterSchema } from "@/lib/form-schemas";

export function NewsletterForm({ submitLabel = "Subscribe" }: { submitLabel?: string }) {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);

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
        body: JSON.stringify({ type: "newsletter", payload: { email: email.trim() } }),
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
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row"
      data-form="newsletter"
      aria-label="Newsletter signup"
    >
      <Input
        type="email"
        required
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email for newsletter"
        className="h-12 flex-1 rounded-sm border-border bg-card"
        autoComplete="email"
      />
      <Button type="submit" disabled={pending} className="h-12 shrink-0 rounded-sm px-6">
        {pending ? "…" : submitLabel}
      </Button>
    </form>
  );
}
