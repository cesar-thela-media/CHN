import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArrowButton } from "@/components/site/arrow-button";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Land, architecture, building, finance, interiors, and project management. One coordinated network.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Compact title band + masonry moments (not full hero clone) */}
      <section className="border-b border-border pt-28 md:pt-32">
        <div className="container-site pb-12 md:pb-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">Services</p>
              <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground md:text-6xl">
                Six disciplines. One path.
              </h1>
              <p className="mt-4 text-base text-muted-foreground">
                Land to finish. Coordinated. Complimentary to you.
              </p>
            </div>
            <ArrowButton href="/contact" size="sm">
              Begin Your Journey
            </ArrowButton>
          </div>
        </div>
        <div className="container-site grid gap-3 pb-16 md:grid-cols-12 md:gap-4">
          <div className="relative aspect-[16/10] overflow-hidden border border-border md:col-span-8 md:aspect-[2/1]">
            <Image
              src="/images/svc-build-exterior.jpg"
              alt="Custom residence exterior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-border md:col-span-4 md:aspect-auto md:min-h-full">
            <Image
              src="/images/svc-architecture.jpg"
              alt="Design materials"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* Editorial index only (no second interactive clone of home) */}
      <section data-shadcn-space="feature-01" className="border-b border-border py-6 md:py-10">
        <div className="container-site">
          <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-stone">
            Explore each discipline
          </p>
          <div className="border-t border-border">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                id={s.slug}
                className="group grid gap-3 border-b border-border py-8 transition-colors hover:bg-elevated/30 md:grid-cols-12 md:items-center md:gap-6 md:py-10"
              >
                <span className="font-mono text-sm text-stone tabular-nums md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative hidden h-16 w-24 overflow-hidden border border-border md:col-span-2 md:block">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    sizes="96px"
                  />
                </div>
                <h2 className="font-display text-xl tracking-tight text-foreground md:col-span-5 md:text-2xl">
                  {s.shortTitle}
                </h2>
                <p className="text-sm text-muted-foreground md:col-span-3">
                  {s.description.split(".")[0]}.
                </p>
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-stone group-hover:text-foreground md:col-span-1 md:justify-end">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quiet close */}
      <section className="py-16 md:py-20">
        <div className="container-site flex flex-col items-start justify-between gap-6 border border-border bg-elevated/20 p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-display text-2xl text-foreground md:text-3xl">
              Not sure where to begin?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Start with a conversation. We map the path.
            </p>
          </div>
          <ArrowButton href="/contact" size="sm">
            Begin Your Journey
          </ArrowButton>
        </div>
      </section>
    </>
  );
}
