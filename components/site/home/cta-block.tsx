"use client";

/**
 * Adapted from Shadcnspace cta-08, conversion band → /contact.
 */
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const perks = [
 "Complimentary white-glove service",
 "Vetted professional network",
 `${site.builderBonus} builder bonus for clients`,
];

const fadeUp = {
 hidden: { opacity: 0, y: 20 },
 show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
 hidden: {},
 show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export function CtaBlock() {
 return (
 <section data-shadcn-space="cta-08" className="relative overflow-hidden py-16 lg:py-20">
 <div className="container-site">
 <div className="relative overflow-hidden rounded-sm border border-border">
 <Image
 src="/images/luxurypool.jpg"
 alt=""
 fill
 className="object-cover"
 sizes="100vw"
 aria-hidden
 />
 <div className="absolute inset-0 bg-ink/75" />
 <div className="relative flex flex-col gap-8 px-6 pb-6 pt-10 lg:gap-12 lg:px-16 lg:pb-10 lg:pt-16">
 <motion.div
 className="flex flex-col items-center gap-4 px-0 text-center lg:gap-5 lg:px-16"
 initial="hidden"
 whileInView="show"
 viewport={{ once: true, amount: 0.3 }}
 variants={stagger}
 >
 <motion.p
 variants={fadeUp}
 className="text-xs font-medium uppercase tracking-[0.24em] text-cream/80"
 >
 Ready when you are
 </motion.p>
 <motion.h2
 variants={fadeUp}
 className="max-w-2xl font-display text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
 >
 Unlocking additional value, at no cost to you.
 </motion.h2>
 <motion.div
 variants={fadeUp}
 className="flex flex-wrap items-center justify-center gap-3 sm:gap-6"
 >
 {perks.map((perk) => (
 <div key={perk} className="flex items-center gap-2">
 <Check className="size-4 shrink-0 text-cream" strokeWidth={1.5} />
 <span className="text-sm font-medium text-white/90 whitespace-nowrap">
 {perk}
 </span>
 </div>
 ))}
 </motion.div>
 </motion.div>

 <motion.div
 className="flex flex-col justify-between gap-6 border border-border bg-background p-6 sm:flex-row sm:items-end lg:p-8"
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.3 }}
 transition={{ duration: 0.5, delay: 0.15 }}
 >
 <p className="max-w-sm font-display text-2xl font-normal leading-snug tracking-tight text-foreground lg:text-3xl">
 Let’s craft your home. Together.
 </p>
 <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center">
 <Button asChild variant="outline" className="h-12 rounded-full px-6">
 <Link href="/services">Explore services</Link>
 </Button>
 <Button
 asChild
 className="h-12 rounded-full bg-foreground px-6 text-background hover:bg-foreground/90"
 >
 <Link href="/contact">{site.ctaPrimary}</Link>
 </Button>
 </div>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 );
}
