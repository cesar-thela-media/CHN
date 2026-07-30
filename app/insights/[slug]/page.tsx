import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ArrowButton } from "@/components/site/arrow-button";
import {
 getAllInsightSlugs,
 getInsightBySlug,
 insights,
} from "@/lib/insights";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
 return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params;
 const article = getInsightBySlug(slug);
 if (!article) return { title: "Insight" };
 return {
 title: article.title,
 description: article.excerpt,
 openGraph: {
 title: `${article.title} | ${site.name}`,
 description: article.excerpt,
 images: [article.image],
 type: "article",
 publishedTime: article.date,
 },
 };
}

function formatDate(iso: string) {
 return new Date(iso).toLocaleDateString("en-US", {
 year: "numeric",
 month: "long",
 day: "numeric",
 });
}

export default async function InsightArticlePage({ params }: Props) {
 const { slug } = await params;
 const article = getInsightBySlug(slug);
 if (!article) notFound();

 const related = insights.filter((a) => a.slug !== article.slug).slice(0, 2);

 return (
 <article className="pt-28 md:pt-32">
 <header className="border-b border-border pb-12 md:pb-16">
 <div className="container-narrow">
 <Link
 href="/insights"
 className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone transition-colors hover:text-foreground"
 >
 <ArrowLeft className="h-3.5 w-3.5" />
 Insights
 </Link>
 <p className="mt-8 text-xs uppercase tracking-[0.2em] text-stone">
 {article.category} · {formatDate(article.date)} · {article.readMinutes} min read
 </p>
 <h1 className="display-lg mt-4 text-4xl text-foreground md:text-5xl lg:text-6xl">
 {article.title}
 </h1>
 <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>
 </div>
 </header>

 <div className="container-site py-10 md:py-12">
 <div className="img-frame relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden">
 <Image
 src={article.image}
 alt=""
 fill
 priority
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 960px"
 />
 </div>
 </div>

 <div className="container-narrow pb-16 md:pb-24">
 <div className="prose-chn space-y-6">
 {article.body.map((para, i) => (
 <p
 key={i}
 className="text-base leading-[1.8] text-muted-foreground md:text-[1.05rem] md:leading-[1.85]"
 >
 {para}
 </p>
 ))}
 </div>

 <aside className="mt-14 border border-border bg-elevated/30 p-6 md:p-8">
 <p className="eyebrow">Ready to build carefully?</p>
 <p className="mt-3 font-display text-2xl tracking-tight text-foreground md:text-3xl">
 Complimentary white-glove guidance, concept to keys.
 </p>
 <div className="mt-6">
 <ArrowButton href="/contact">Begin your journey</ArrowButton>
 </div>
 </aside>

 {related.length > 0 && (
 <div className="mt-16 border-t border-border pt-12">
 <p className="eyebrow">More insights</p>
 <ul className="mt-6 space-y-4">
 {related.map((r) => (
 <li key={r.slug}>
 <Link
 href={`/insights/${r.slug}`}
 className="group flex flex-col gap-1 border-b border-border pb-4 sm:flex-row sm:items-baseline sm:justify-between"
 >
 <span className="font-display text-xl text-foreground transition-colors group-hover:text-cream">
 {r.title}
 </span>
 <span className="text-xs uppercase tracking-[0.16em] text-stone">
 {r.category}
 </span>
 </Link>
 </li>
 ))}
 </ul>
 </div>
 )}
 </div>
 </article>
 );
}
