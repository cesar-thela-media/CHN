import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { NewsletterForm } from "@/components/site/newsletter-form";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
 title: "Insights",
 description:
 "Notes on land, design, and the decisions that make a custom home feel inevitable, from Custom Home Network.",
};

function formatDate(iso: string) {
 return new Date(iso).toLocaleDateString("en-US", {
 year: "numeric",
 month: "long",
 day: "numeric",
 });
}

export default function InsightsIndexPage() {
 const [hero, ...rest] = insights;

 return (
 <div className="pt-28 md:pt-32">
 <section className="border-b border-border pb-12 md:pb-16">
 <div className="container-site">
 <p className="eyebrow">Insights</p>
 <h1 className="display-lg mt-4 max-w-2xl text-4xl text-foreground md:text-6xl">
 Personality in every room, and clarity in every decision.
 </h1>
 <p className="body-lg mt-5 max-w-xl">
 Editorial notes for people building carefully: land, design, process, and the economics
 of a partner-funded network.
 </p>
 </div>
 </section>

 {/* blog-09 style grid */}
 <section data-shadcn-space="blog-09" className="py-12 md:py-16">
 <div className="container-site flex flex-col gap-8">
 <Card className="group overflow-hidden rounded-sm border-border p-0 shadow-none">
 <CardContent className="flex flex-col p-0 md:flex-row">
 <Link
 href={`/insights/${hero.slug}`}
 className="relative h-64 w-full shrink-0 overflow-hidden md:h-auto md:w-7/12 lg:min-h-[22rem]"
 >
 <Image
 src={hero.image}
 alt={hero.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 sizes="(max-width: 768px) 100vw, 58vw"
 priority
 />
 </Link>
 <div className="flex flex-1 flex-col justify-between gap-8 p-6 lg:p-8">
 <div className="flex flex-col gap-3">
 <p className="text-xs uppercase tracking-[0.18em] text-stone">
 {hero.category} · {formatDate(hero.date)}
 </p>
 <Link href={`/insights/${hero.slug}`}>
 <h2 className="font-display text-2xl font-normal tracking-tight text-foreground transition-colors hover:text-cream lg:text-3xl">
 {hero.title}
 </h2>
 </Link>
 <p className="text-sm leading-relaxed text-muted-foreground">{hero.excerpt}</p>
 </div>
 <Link
 href={`/insights/${hero.slug}`}
 className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4"
 >
 Read article
 <ArrowRight size={16} />
 </Link>
 </div>
 </CardContent>
 </Card>

 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
 {rest.map((article) => (
 <Card
 key={article.slug}
 className="group overflow-hidden rounded-sm border-border p-0 shadow-none lg:min-h-[16rem]"
 >
 <CardContent className="flex h-full flex-col p-0 lg:flex-row">
 <div className="flex min-h-[12rem] flex-col justify-between p-6 lg:w-1/2 lg:p-8">
 <div className="flex flex-col gap-2">
 <p className="text-xs uppercase tracking-[0.18em] text-stone">
 {article.category} · {article.readMinutes} min
 </p>
 <Link href={`/insights/${article.slug}`}>
 <h2 className="font-display text-xl font-normal text-foreground transition-colors hover:text-cream md:text-2xl">
 {article.title}
 </h2>
 </Link>
 <p className="text-sm text-muted-foreground line-clamp-3">
 {article.excerpt}
 </p>
 </div>
 <Link
 href={`/insights/${article.slug}`}
 className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium underline underline-offset-4"
 >
 Read more
 <ArrowRight size={16} />
 </Link>
 </div>
 <Link
 href={`/insights/${article.slug}`}
 className="relative h-48 w-full overflow-hidden lg:h-auto lg:flex-1"
 >
 <Image
 src={article.image}
 alt={article.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 sizes="(max-width: 768px) 100vw, 25vw"
 />
 </Link>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 <section className="border-t border-border bg-elevated/20 py-14 md:py-16">
 <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
 <div className="max-w-md">
 <h2 className="font-display text-3xl tracking-tight md:text-4xl">
 Quiet notes on building well
 </h2>
 <p className="mt-3 text-sm text-muted-foreground">
 Occasional insights, no noise. Unsubscribe anytime.
 </p>
 </div>
 <div className="w-full max-w-md">
 <NewsletterForm />
 </div>
 </div>
 </section>
 </div>
 );
}
