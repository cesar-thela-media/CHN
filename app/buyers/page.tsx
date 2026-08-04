import type { Metadata } from "next";
import Image from "next/image";
import { ArrowButton } from "@/components/site/arrow-button";
import { chnCopy } from "@/lib/chn-copy";

export const metadata: Metadata = {
  title: "For Buyers",
  description: chnCopy.hero.body,
};

export default function BuyersPage() {
  return (
    <>
      <section className="border-b border-border pt-28 md:pt-32">
        <div className="container-site grid gap-10 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-0">
          <div className="flex flex-col justify-center lg:col-span-5 lg:py-16">
            <p className="eyebrow">For buyers</p>
            <h1 className="display-lg mt-4 text-4xl text-foreground md:text-5xl lg:text-[3.25rem]">
              {chnCopy.hero.title}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {chnCopy.hero.body}
            </p>
            <div className="mt-8">
              <ArrowButton href="/contact" size="sm">
                {chnCopy.hero.primaryCta}
              </ArrowButton>
            </div>
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

      <section className="border-b border-border py-16 md:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="img-frame relative aspect-[5/4] overflow-hidden">
            <Image
              src="/images/value-keys.jpg"
              alt="Premium custom home building value proposition"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">{chnCopy.value.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              {chnCopy.value.eyebrow}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              {chnCopy.value.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="container-site flex flex-col items-start justify-between gap-6 border border-border bg-elevated/20 p-8 md:flex-row md:items-center md:p-12">
          <div>
            <p className="eyebrow">{chnCopy.contact.eyebrow}</p>
            <h2 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
              {chnCopy.contact.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {chnCopy.contact.body}
            </p>
          </div>
          <ArrowButton href="/contact" size="sm">
            {chnCopy.contact.cta}
          </ArrowButton>
        </div>
      </section>
    </>
  );
}
