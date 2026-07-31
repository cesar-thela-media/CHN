import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ArrowButton } from "@/components/site/arrow-button";
import { FadeIn } from "@/components/site/fade-in";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  services,
  site,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === service.slug);
  const prev = index > 0 ? services[index - 1] : null;
  const next = index < services.length - 1 ? services[index + 1] : null;

  return (
    <>
      <section
        data-shadcn-space="services-02"
        className="relative min-h-[55svh] overflow-hidden border-b border-border pt-28"
      >
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="gradient-veil absolute inset-0 hidden md:block" />
          <div className="gradient-veil-mobile absolute inset-0 md:hidden" />
        </div>
        <div className="container-site relative z-10 flex min-h-[calc(55svh-7rem)] flex-col justify-end pb-14 pt-16">
          <FadeIn>
            <Link
              href="/services"
              data-fade
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/80 transition-colors hover:text-cream"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All services
            </Link>
            <p data-fade className="mt-8 text-xs tabular-nums tracking-[0.28em] text-stone">
              {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </p>
            <h1
              data-fade
              className="display-xl mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl md:text-6xl"
            >
              {service.title}
            </h1>
            <p data-fade className="mt-5 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
              {service.description}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow">The challenge</p>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-foreground md:text-4xl">
              {service.problem}
            </h2>
          </div>
          <div className="space-y-10 lg:col-span-6 lg:col-start-7">
            <div>
              <p className="eyebrow">What Custom Home Network does</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.whatWeDo}
              </p>
            </div>
            <div>
              <p className="eyebrow">Who in the network</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.whoInNetwork}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        data-shadcn-space="feature-01"
        className="border-b border-border bg-elevated/20 py-16 md:py-20"
      >
        <div className="container-site">
          <p className="eyebrow">Outcomes</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl tracking-tight md:text-4xl">
            What careful coordination unlocks
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {service.outcomes.map((item, i) => (
              <li
                key={item}
                className="border border-border bg-card p-6"
              >
                <span className="font-display text-2xl text-cream">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ArrowButton href="/contact">Begin Your Journey</ArrowButton>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Back to all services
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {(prev || next) && (
        <nav className="border-b border-border py-10" aria-label="Adjacent services">
          <div className="container-site grid gap-6 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/services/${prev.slug}`}
                className="group border border-border p-6 transition-colors hover:border-foreground/25"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-stone">Previous</p>
                <p className="mt-2 font-display text-xl text-foreground group-hover:text-cream">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/services/${next.slug}`}
                className="group border border-border p-6 text-right transition-colors hover:border-foreground/25 sm:ml-auto sm:w-full"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-stone">Next</p>
                <p className="mt-2 font-display text-xl text-foreground group-hover:text-cream">
                  {next.title}
                </p>
              </Link>
            )}
          </div>
        </nav>
      )}

    </>
  );
}
