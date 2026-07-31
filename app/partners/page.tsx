import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  DraftingCompass,
  Hammer,
  Landmark,
  Palette,
  Home,
} from "lucide-react";
import { PartnerForm } from "@/components/site/partner-form";
import { ArrowButton } from "@/components/site/arrow-button";

export const metadata: Metadata = {
  title: "For Partners",
  description:
    "Join Custom Home Network: Realtors, architects, builders, finance, title, and design professionals.",
};

const partnerTypes = [
  { title: "Realtors", d: "Clients ready to land or build.", icon: Home },
  { title: "Architects", d: "Owners who value process.", icon: DraftingCompass },
  { title: "Builders", d: "High-intent custom work.", icon: Hammer },
  { title: "Finance & Title", d: "Calm capital and closings.", icon: Landmark },
  { title: "Interiors", d: "Finish aligned to architecture.", icon: Palette },
  { title: "Land", d: "Sites for serious builds.", icon: Building2 },
];

const reasons = [
  { t: "Aligned clients", d: "People who intend to build carefully." },
  { t: "Clean handoffs", d: "Full context, not a cold start." },
  { t: "Shared standard", d: "Craft and clear communication." },
];

export default function PartnersPage() {
  return (
    <>
      {/* Centered manifesto hero (distinct from buyers split) */}
      <section className="border-b border-border pt-28 md:pt-36">
        <div className="container-site pb-16 text-center md:pb-20">
          <p className="eyebrow justify-center">For partners</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl tracking-tight text-foreground md:text-6xl">
            Build with clients who value craft.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground">
            A curated network for high-intent custom homes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ArrowButton href="#apply" size="sm">
              Apply to join
            </ArrowButton>
            <Link
              href="/buyers"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Buyer experience
            </Link>
          </div>
        </div>
        <div className="container-site pb-0">
          <div className="img-frame relative mx-auto aspect-[21/9] max-h-[420px] w-full overflow-hidden border border-border">
            <Image
              src="/images/page-partners.jpg"
              alt="Architecture models and materials"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why: three columns on cream-elevated */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container-site">
          <p className="eyebrow">Why join</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl text-foreground md:text-4xl">
            Serious work. Less chaos.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.t} className="border-l border-cream/40 pl-5">
                <h3 className="font-display text-xl text-foreground">{r.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles: dense icon grid */}
      <section
        data-shadcn-space="team-05"
        className="border-b border-border bg-elevated/20 py-16 md:py-24"
      >
        <div className="container-site">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              Roles we welcome
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Craft and clear communication required.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-4 border border-border bg-background/80 p-5"
              >
                <p.icon className="mt-0.5 h-6 w-6 shrink-0 text-cream" strokeWidth={1.25} />
                <div>
                  <h3 className="font-display text-lg text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How: numbered single column */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container-site max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 font-display text-3xl text-foreground">
            Introduced when the fit is real.
          </h2>
          <ol className="mt-10 space-y-0">
            {[
              "Apply with specialty, markets, and standard of work.",
              "We review quality and capacity.",
              "When a journey needs you, we introduce with full context.",
            ].map((step, i) => (
              <li
                key={step}
                className="flex gap-5 border-t border-border py-6 first:border-t-0"
              >
                <span className="font-mono text-xs text-stone">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base text-foreground/90">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Apply: form first on large screens */}
      <section
        id="apply"
        data-shadcn-space="contact-01"
        className="border-b border-border py-16 md:py-24"
      >
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="order-2 rounded-sm border border-border bg-card p-6 md:p-8 lg:order-1 lg:col-span-7">
            <PartnerForm />
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <p className="eyebrow">Application</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              Tell us who you are.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              We review carefully and respond when there is a fit.
            </p>
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden border border-border lg:block">
              <Image
                src="/images/svc-finance.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
