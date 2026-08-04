import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NewsletterForm } from "@/components/site/newsletter-form";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Discover how to infuse your personality into every room.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function InsightsIndexPage() {
  return (
    <div className="pt-28 md:pt-32">
      {/* Magazine masthead */}
      <section className="border-b border-border pb-10 md:pb-14">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">{"Explore Our Insights"}</p>
              <h1 className="mt-3 max-w-xl font-display text-4xl tracking-tight text-foreground md:text-6xl">
                Explore Our Insights
              </h1>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground md:text-right">
              Stay updated with the latest news and insights from the custom home building industry.
            </p>
          </div>
        </div>
      </section>

      {/* Vertical editorial list (distinct from home blog-09 cards) */}
      <section data-shadcn-space="blog-09" className="py-12 md:py-16">
        <div className="container-site">
          {insights.length > 0 ? (
            <ul className="divide-y divide-border border-y border-border">
            {insights.map((article, i) => (
              <li key={article.slug}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="group grid gap-6 py-10 transition-colors hover:bg-elevated/20 md:grid-cols-12 md:items-center md:gap-8 md:py-12"
                >
                  <span className="font-mono text-xs text-stone md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative aspect-[16/10] overflow-hidden border border-border md:col-span-4 md:aspect-[5/3]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={i === 0}
                    />
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-stone">
                      {article.category} · {formatDate(article.date)} · {article.readMinutes} min
                    </p>
                    <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground group-hover:text-cream md:text-3xl">
                      {article.title}
                    </h2>
                    <p className="mt-2 max-w-lg text-sm text-muted-foreground">{article.excerpt}</p>
                  </div>
                  <span className="hidden text-cream md:col-span-1 md:inline-flex md:justify-end">
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
            </ul>
          ) : (
            <div className="border-y border-border py-12">
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                Discover how to infuse your personality into every room. Explore our insights from the custom home building industry.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter band */}
      <section className="border-t border-border bg-elevated/25 py-14 md:py-16">
        <div className="container-site grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Newsletter</p>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              Stay updated with the latest news and insights from the custom home building industry.
            </h2>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
