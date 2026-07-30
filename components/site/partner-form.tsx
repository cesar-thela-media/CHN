"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
 name: z.string().min(2, "Please enter your name"),
 company: z.string().min(2, "Company required"),
 role: z.string().min(2, "Role required"),
 email: z.string().email("Valid email required"),
 phone: z.string().min(7, "Phone required"),
 message: z.string().min(10, "Tell us about your practice"),
});

type FormValues = z.infer<typeof schema>;

export function PartnerForm() {
 const [pending, setPending] = useState(false);
 const {
 register,
 handleSubmit,
 reset,
 formState: { errors },
 } = useForm<FormValues>({ resolver: zodResolver(schema) });

 const onSubmit = async (data: FormValues) => {
 setPending(true);
 try {
 const res = await fetch("/api/submit", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({ type: "partner", payload: data }),
 });
 const json = await res.json();
 if (!res.ok) throw new Error(json.error || "Submission failed");
 toast.success("Application received, we’ll be in touch.");
 reset();
 } catch (e) {
 toast.error(e instanceof Error ? e.message : "Something went wrong");
 } finally {
 setPending(false);
 }
 };

 const field = "h-12 rounded-sm border-border bg-background/50";

 return (
 <form
 onSubmit={handleSubmit(onSubmit)}
 className="space-y-5"
 noValidate
 data-form="partner"
 aria-label="Partner application"
 >
 <div className="grid gap-5 sm:grid-cols-2">
 <div className="space-y-2">
 <Label htmlFor="p-name" className="text-xs uppercase tracking-[0.16em] text-stone">
 Name *
 </Label>
 <Input id="p-name" className={field} autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
 {errors.name && (
 <p className="text-xs text-red-400/90" role="alert">
 {errors.name.message}
 </p>
 )}
 </div>
 <div className="space-y-2">
 <Label htmlFor="p-company" className="text-xs uppercase tracking-[0.16em] text-stone">
 Company *
 </Label>
 <Input id="p-company" className={field} aria-invalid={!!errors.company} {...register("company")} />
 {errors.company && (
 <p className="text-xs text-red-400/90" role="alert">
 {errors.company.message}
 </p>
 )}
 </div>
 </div>
 <div className="grid gap-5 sm:grid-cols-2">
 <div className="space-y-2">
 <Label htmlFor="p-role" className="text-xs uppercase tracking-[0.16em] text-stone">
 Role *
 </Label>
 <Input
 id="p-role"
 placeholder="Realtor, Architect, Builder…"
 className={field}
 {...register("role")}
 />
 {errors.role && (
 <p className="text-xs text-red-400/90" role="alert">
 {errors.role.message}
 </p>
 )}
 </div>
 <div className="space-y-2">
 <Label htmlFor="p-phone" className="text-xs uppercase tracking-[0.16em] text-stone">
 Phone *
 </Label>
 <Input id="p-phone" type="tel" className={field} autoComplete="tel" {...register("phone")} />
 {errors.phone && (
 <p className="text-xs text-red-400/90" role="alert">
 {errors.phone.message}
 </p>
 )}
 </div>
 </div>
 <div className="space-y-2">
 <Label htmlFor="p-email" className="text-xs uppercase tracking-[0.16em] text-stone">
 Email *
 </Label>
 <Input id="p-email" type="email" className={field} autoComplete="email" {...register("email")} />
 {errors.email && (
 <p className="text-xs text-red-400/90" role="alert">
 {errors.email.message}
 </p>
 )}
 </div>
 <div className="space-y-2">
 <Label htmlFor="p-message" className="text-xs uppercase tracking-[0.16em] text-stone">
 About your practice *
 </Label>
 <Textarea
 id="p-message"
 rows={4}
 className="rounded-sm border-border bg-background/50"
 placeholder="Markets you serve, specialty, why you want to join…"
 {...register("message")}
 />
 {errors.message && (
 <p className="text-xs text-red-400/90" role="alert">
 {errors.message.message}
 </p>
 )}
 </div>
 <Button
 type="submit"
 size="lg"
 className="h-12 w-full rounded-sm sm:w-auto sm:min-w-[200px]"
 disabled={pending}
 >
 {pending ? "Sending…" : "Apply to the network"}
 </Button>
 <p className="text-xs leading-relaxed text-stone">
 By applying you agree we may contact you about network participation.{" "}
 <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
 Privacy
 </Link>{" "}
 ·{" "}
 <Link href="/terms" className="underline underline-offset-2 hover:text-foreground">
 Terms
 </Link>
 </p>
 </form>
 );
}
