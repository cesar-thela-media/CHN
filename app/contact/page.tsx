import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { hasAddress, hasPhone, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Schedule a complimentary consultation with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <section
      data-shadcn-space="contact-01"
      className="min-h-[80svh] border-b border-border pt-28 md:pt-32"
    >
      <div className="container-site grid gap-0 pb-16 lg:grid-cols-12 lg:gap-0">
        {/* Left panel: dark elevated brand */}
        <div className="relative overflow-hidden border border-border bg-elevated lg:col-span-5">
          <div className="absolute inset-0">
            <Image
              src="/images/page-contact.jpg"
              alt=""
              fill
              className="object-cover opacity-40"
              sizes="40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
          </div>
          <div className="relative flex h-full flex-col justify-between p-8 md:p-10 lg:min-h-[640px]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-cream/80">Contact</p>
              <h1 className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-5xl">
                Let's begin.
              </h1>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/80">
                Complimentary consultation. Partner-funded white-glove from first conversation.
              </p>
            </div>
            <ul className="mt-12 space-y-4 text-sm text-foreground/85">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cream" strokeWidth={1.5} />
                <a href={`mailto:${site.email}`} className="hover:text-cream">
                  {site.email}
                </a>
              </li>
              {hasPhone() && (
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cream" strokeWidth={1.5} />
                  <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="hover:text-cream">
                    {site.phoneDisplay || site.phone}
                  </a>
                </li>
              )}
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cream" strokeWidth={1.5} />
                <span>
                  {hasAddress()
                    ? [
                        site.address.street,
                        site.address.locality,
                        site.address.region,
                        site.address.postalCode,
                      ]
                        .filter(Boolean)
                        .join(", ")
                    : site.serviceArea}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cream" strokeWidth={1.5} />
                <span>{site.hours}</span>
              </li>
            </ul>
            <p className="mt-10 text-xs text-stone">
              Professional?{" "}
              <Link href="/partners#apply" className="text-cream underline underline-offset-4">
                Partner application
              </Link>
            </p>
          </div>
        </div>

        {/* Right: form only */}
        <div className="border border-t-0 border-border bg-card p-8 sm:p-10 lg:col-span-7 lg:border-l-0 lg:border-t lg:p-12">
          <h2 className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
            Schedule a consultation
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Required fields marked *. Location and timeline optional.
          </p>
          <div className="mt-8">
            <ContactForm idPrefix="contact" />
          </div>
          <p className="mt-8 text-xs text-stone">
            By submitting you agree to our{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              Privacy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline underline-offset-2">
              Terms
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
