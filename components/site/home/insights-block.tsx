"use client";

/**
 * Adapted from Shadcnspace blog-09, insights preview → real article slugs.
 */
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { insights } from "@/lib/insights";
import { chnCopy } from "@/lib/chn-copy";

export function InsightsBlock() {
 const [hero, ...rest] = insights;
 const side = rest.slice(0, 2);

 if (!hero) {
  return (
   <section id="insights" className="border-t border-border bg-elevated/15 py-16 lg:py-24">
    <div className="container-site flex flex-col gap-5">
     <h2 className="font-display text-3xl font-normal tracking-tight text-foreground md:text-5xl">
      {chnCopy.insights.title}
     </h2>
     <Link
      href="/insights"
      className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
     >
      {chnCopy.insights.cta}
      <ArrowRight className="h-4 w-4" />
     </Link>
    </div>
   </section>
  );
 }

 return (
 <section
 data-shadcn-space="blog-09"
 id="insights"
 className="border-t border-border bg-elevated/15 py-16 lg:py-24"
 >
 <div className="container-site flex flex-col gap-8">
 <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
 <h2 className="font-display text-3xl font-normal tracking-tight text-foreground md:text-5xl">
 {chnCopy.insights.cta}
 </h2>
 <Link
 href="/insights"
 className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
 >
 {chnCopy.insights.cta}
 <ArrowRight className="h-4 w-4" />
 </Link>
 </div>

 <div className="flex flex-col gap-6">
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
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 sizes="(max-width: 768px) 100vw, 58vw"
 />
 </Link>
 <div className="flex flex-1 flex-col justify-between gap-8 p-6 lg:p-8">
 <div className="flex flex-col gap-3">
 <p className="text-xs uppercase tracking-[0.18em] text-stone">
 {hero.category}
 </p>
 <Link href={`/insights/${hero.slug}`}>
 <h3 className="font-display text-2xl font-normal tracking-tight text-foreground transition-colors hover:text-cream lg:text-3xl">
 {hero.title}
 </h3>
 </Link>
 <p className="text-sm text-muted-foreground">{hero.excerpt}</p>
 </div>
 <Link
 href={`/insights/${hero.slug}`}
 className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4"
 >
 Read more
 <ArrowRight size={16} />
 </Link>
 </div>
 </CardContent>
 </Card>

 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
 {side.map((article) => (
 <Card
 key={article.slug}
 className="group overflow-hidden rounded-sm border-border p-0 shadow-none lg:min-h-[16rem]"
 >
 <CardContent className="flex h-full flex-col p-0 lg:flex-row">
 <div className="flex min-h-[12rem] flex-col justify-between p-6 lg:w-1/2 lg:p-8">
 <div className="flex flex-col gap-2">
 <p className="text-xs uppercase tracking-[0.18em] text-stone">
 {article.category}
 </p>
 <Link href={`/insights/${article.slug}`}>
 <h3 className="font-display text-xl font-normal text-foreground transition-colors hover:text-cream md:text-2xl">
 {article.title}
 </h3>
 </Link>
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
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 sizes="(max-width: 768px) 100vw, 25vw"
 />
 </Link>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
