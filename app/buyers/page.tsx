import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import { ArrowButton } from "@/components/site/arrow-button";

export const metadata: Metadata = {
  title: "For Buyers",
  description:
    "Complimentary white-glove guidance for homeowners. Partner-funded service and a 0.5% builder bonus.",
};

const buyerFaqs = [
  {
    question: "Is this free for homeowners?",
    answer:
      "Yes. White-glove guidance is complimentary. Network partners fund our role so you never receive an invoice from us.",
  },
  {
    question: "What is the 0.5% builder bonus?",
    answer:
      "An exclusive builder bonus pre-negotiated for network clients, typically unavailable when you approach a builder alone.",
  },
  {
    question: "Who is this for?",
    answer:
      "Homeowners and relocators who want a custom home with calm coordination across land, design, build, finance, and interiors.",
  },
  {
    question: "Do I still choose my team?",
    answer:
      "Yes. We introduce vetted partners. You approve who you work with at every step.",
  },
  {
    question: "When should I start?",
    answer:
      "Ideally before land is under contract. We also help mid-journey when a project needs better coordination.",
  },
];

const chapters = [
  { n: "01", t: "Discover", d: "Vision, lifestyle, timeline." },
  { n: "02", t: "Assemble", d: "The right partners, introduced with context." },
  { n: "03", t: "Build", d: "Craft under one calm through-line." },
  { n: "04", t: "Keys", d: "Move in. Live well." },
];

export default function BuyersPage() {
  return (
    <>
      <section
        data-shadcn-space="feature-13"
        className="border-b border-border pt-28 md:pt-32"
      >
        <div className="container-site grid gap-10 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-0">
          <div className="flex flex-col justify-center lg:col-span-5 lg:py-16">
            <p className="eyebrow">For buyers</p>
            <h1 className="display-lg mt-4 text-4xl text-foreground md:text-5xl lg:text-[3.25rem]">
              Your home. Our network.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              Complimentary white-glove. Concept to keys. Nothing owed to us.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ArrowButton href="/contact" size="sm">
                Begin Your Journey
              </ArrowButton>
              <Link
                href="/services"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Services
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {[
                { k: "$0", v: "Our fee" },
                { k: "0.5%", v: "Builder bonus" },
                { k: "6", v: "Disciplines" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl text-foreground md:text-3xl">{s.k}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-stone">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative min-h-[320px] overflow-hidden border border-border lg:col-span-7 lg:min-h-[560px]">
            <Image
              src="/images/page-buyers.jpg"
              alt="Custom home interior light"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-elevated/20 py-14 md:py-20">
        <div className="container-site">
          <p className="eyebrow">What to expect</p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
            Four calm chapters.
          </h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {chapters.map((c) => (
              <div key={c.n} className="bg-background p-6 md:p-8">
                <p className="font-mono text-xs text-stone">{c.n}</p>
                <h3 className="mt-3 font-display text-2xl text-foreground">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="img-frame relative aspect-[5/4] overflow-hidden">
            <Image
              src="/images/process-movein.jpg"
              alt="Arrival at a custom home"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">The economics</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              Partner-funded. Client-first.
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground">
              Network partners cover our work. You keep the 0.5% builder bonus and a single calm path.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[
                "One relationship across six disciplines",
                "Vetted specialists, not volume marketing",
                "You approve every partner",
              ].map((line) => (
                <li key={line} className="border-t border-border pt-3 first:border-0 first:pt-0">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq items={buyerFaqs} eyebrow="FAQs" title="Clear answers." />

      {/* Single conversion path → /contact (no embedded form) */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="container-site flex flex-col items-start justify-between gap-6 border border-border bg-elevated/20 p-8 md:flex-row md:items-center md:p-12">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
              Start with a conversation.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Schedule on the contact page. Private consultation. No sales script.
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
