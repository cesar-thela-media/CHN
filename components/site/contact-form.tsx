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
import { scheduleSchema } from "@/lib/form-schemas";

const schema = scheduleSchema;

type FormValues = z.infer<typeof schema>;

type Props = {
 idPrefix?: string;
 className?: string;
};

export function ContactForm({ idPrefix = "c", className }: Props) {
 const [pending, setPending] = useState(false);
 const {
 register,
 handleSubmit,
 reset,
 formState: { errors },
 } = useForm<FormValues>({
 resolver: zodResolver(schema),
 defaultValues: {
 name: "",
 email: "",
 phone: "",
 message: "",
 location: "",
 timeline: "",
 },
 });

 const onSubmit = async (data: FormValues) => {
 setPending(true);
 try {
 const payload = {
 name: data.name.trim(),
 email: data.email.trim(),
 phone: data.phone.trim(),
 message: data.message.trim(),
 ...(data.location?.trim() ? { location: data.location.trim() } : {}),
 ...(data.timeline?.trim() ? { timeline: data.timeline.trim() } : {}),
 };
 const res = await fetch("/api/submit", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({ type: "schedule", payload }),
 });
 const json = await res.json();
 if (!res.ok) throw new Error(json.error || "Submission failed");
 toast.success("Thank you, we’ll be in touch shortly.");
 reset();
 } catch (e) {
 toast.error(e instanceof Error ? e.message : "Something went wrong");
 } finally {
 setPending(false);
 }
 };

 const field =
 "h-12 rounded-sm border-border bg-background/50 focus-visible:ring-2 focus-visible:ring-ring";

 return (
 <form
 onSubmit={handleSubmit(onSubmit)}
 className={className ?? "space-y-5"}
 noValidate
 data-form="schedule"
 aria-label="Schedule consultation"
 >
 <div className="space-y-2">
 <Label htmlFor={`${idPrefix}-name`} className="text-xs uppercase tracking-[0.16em] text-stone">
 Name <span className="text-muted-foreground">*</span>
 </Label>
 <Input
 id={`${idPrefix}-name`}
 placeholder="Full name"
 autoComplete="name"
 className={field}
 aria-invalid={!!errors.name}
 aria-describedby={errors.name ? `${idPrefix}-name-err` : undefined}
 {...register("name")}
 />
 {errors.name && (
 <p id={`${idPrefix}-name-err`} className="text-xs text-red-400/90" role="alert">
 {errors.name.message}
 </p>
 )}
 </div>

 <div className="grid gap-5 sm:grid-cols-2">
 <div className="space-y-2">
 <Label htmlFor={`${idPrefix}-email`} className="text-xs uppercase tracking-[0.16em] text-stone">
 Email <span className="text-muted-foreground">*</span>
 </Label>
 <Input
 id={`${idPrefix}-email`}
 type="email"
 placeholder="you@email.com"
 autoComplete="email"
 className={field}
 aria-invalid={!!errors.email}
 {...register("email")}
 />
 {errors.email && (
 <p className="text-xs text-red-400/90" role="alert">
 {errors.email.message}
 </p>
 )}
 </div>
 <div className="space-y-2">
 <Label htmlFor={`${idPrefix}-phone`} className="text-xs uppercase tracking-[0.16em] text-stone">
 Phone <span className="text-muted-foreground">*</span>
 </Label>
 <Input
 id={`${idPrefix}-phone`}
 type="tel"
 placeholder="Phone"
 autoComplete="tel"
 className={field}
 aria-invalid={!!errors.phone}
 {...register("phone")}
 />
 {errors.phone && (
 <p className="text-xs text-red-400/90" role="alert">
 {errors.phone.message}
 </p>
 )}
 </div>
 </div>

 <div className="grid gap-5 sm:grid-cols-2">
 <div className="space-y-2">
 <Label
 htmlFor={`${idPrefix}-location`}
 className="text-xs uppercase tracking-[0.16em] text-stone"
 >
 Location <span className="font-normal normal-case tracking-normal text-muted-foreground">(optional)</span>
 </Label>
 <Input
 id={`${idPrefix}-location`}
 placeholder="City, region, or lot"
 className={field}
 {...register("location")}
 />
 </div>
 <div className="space-y-2">
 <Label
 htmlFor={`${idPrefix}-timeline`}
 className="text-xs uppercase tracking-[0.16em] text-stone"
 >
 Timeline <span className="font-normal normal-case tracking-normal text-muted-foreground">(optional)</span>
 </Label>
 <Input
 id={`${idPrefix}-timeline`}
 placeholder="e.g. 2027 build"
 className={field}
 {...register("timeline")}
 />
 </div>
 </div>

 <div className="space-y-2">
 <Label htmlFor={`${idPrefix}-message`} className="text-xs uppercase tracking-[0.16em] text-stone">
 Project notes <span className="text-muted-foreground">*</span>
 </Label>
 <Textarea
 id={`${idPrefix}-message`}
 placeholder="What you’re imagining, stage of journey, questions…"
 rows={5}
 className="rounded-sm border-border bg-background/50 focus-visible:ring-2 focus-visible:ring-ring"
 aria-invalid={!!errors.message}
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
 className="mt-1 h-12 w-full rounded-sm sm:w-auto sm:min-w-[200px]"
 disabled={pending}
 >
 {pending ? "Sending…" : "Request consultation"}
 </Button>

 <p className="text-xs leading-relaxed text-stone">
 By submitting, you agree we may contact you about your inquiry. See our{" "}
 <Link href="/privacy" className="text-muted-foreground underline underline-offset-2 hover:text-foreground">
 Privacy Policy
 </Link>{" "}
 and{" "}
 <Link href="/terms" className="text-muted-foreground underline underline-offset-2 hover:text-foreground">
 Terms
 </Link>
 .
 </p>
 </form>
 );
}
