import type { Metadata } from "next";
import Image from "next/image";
import { Building2, DraftingCompass, Hammer, Landmark, Palette, Home } from "lucide-react";
import { PartnerForm } from "@/components/site/partner-form";
import { ArrowButton } from "@/components/site/arrow-button";
import { chnCopy } from "@/lib/chn-copy";

export const metadata: Metadata = {
  title: "For Partners",
  description: chnCopy.experience.paragraphs[0],
};

const partnerTypes = [
  { title: "Realtors", icon: Home },
  { title: "Architects", icon: DraftingCompass },
  { title: "Builders", icon: Hammer },
  { title: "Financial Experts", icon: Landmark },
  { title: "Design Professionals", icon: Palette },
  { title: "Land Experts", icon: Building2 },
];

export default function PartnersPage() {
  return (
    <>
      <section className="border-b border-border pt-28 md:pt-36">
        <div className="container-site pb-16 text-center md:pb-20">
          <p className="eyebrow justify-center">For partners</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl tracking-tight text-foreground md:text-6xl">
            Access to the finest professionals in the business.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground">
            Custom Home Network provides personalized service and access to a network of Realtors,
            architects, builders, and financial experts.
          </p>
          <div className="mt-8">
            <ArrowButton href="#apply" size="sm">
              Apply to join
            </ArrowButton>
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

      <section className="border-b border-border py-16 md:py-24">
        <div className="container-site">
          <p className="eyebrow">Our network</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-foreground md:text-4xl">
            A personalized custom home journey.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((partner) => (
              <div
                key={partner.title}
                className="flex items-start gap-4 border border-border bg-elevated/20 p-5"
              >
                <partner.icon className="mt-0.5 h-6 w-6 shrink-0 text-cream" strokeWidth={1.25} />
                <div>
                  <h3 className="font-display text-lg text-foreground">{partner.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Custom Home Network provides access to our network of {partner.title.toLowerCase()}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="border-b border-border py-16 md:py-24">
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
              Share your practice and how you support the custom home-building process.
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
