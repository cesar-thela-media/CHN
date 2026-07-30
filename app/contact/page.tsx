import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { CtaBlock } from "@/components/site/home/cta-block";
import { hasAddress, hasPhone, site } from "@/lib/site";

export const metadata: Metadata = {
 title: "Contact",
 description: `Schedule a complimentary consultation with ${site.name}. White-glove custom home guidance, at no cost for our coordination.`,
};

export default function ContactPage() {
 return (
 <>
 <section
 data-shadcn-space="contact-01"
 className="border-b border-border pt-28 md:pt-32"
 >
 <div className="container-site grid gap-10 pb-6 lg:grid-cols-12 lg:gap-8 lg:pb-0">
 <div className="lg:col-span-5 lg:py-10">
 <p className="eyebrow">Contact</p>
 <h1 className="display-lg mt-4 text-4xl text-foreground md:text-5xl">
 Let’s craft your home. Together.
 </h1>
 <p className="body-lg mt-5">
 Share a few details, we’ll schedule a private consultation. Our complimentary
 white-glove service works for you at no cost, from first conversation onward.
 </p>

 <ul className="mt-10 space-y-5">
 <li className="flex gap-3 text-sm text-muted-foreground">
 <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cream" strokeWidth={1.5} />
 <a
 href={`mailto:${site.email}`}
 className="transition-colors hover:text-foreground"
 >
 {site.email}
 </a>
 </li>
 {hasPhone() && (
 <li className="flex gap-3 text-sm text-muted-foreground">
 <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cream" strokeWidth={1.5} />
 <a
 href={`tel:${site.phone.replace(/\D/g, "")}`}
 className="transition-colors hover:text-foreground"
 >
 {site.phoneDisplay || site.phone}
 </a>
 </li>
 )}
 <li className="flex gap-3 text-sm text-muted-foreground">
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
 <li className="flex gap-3 text-sm text-muted-foreground">
 <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cream" strokeWidth={1.5} />
 <span>{site.hours}</span>
 </li>
 </ul>

 <p className="mt-10 text-sm text-stone">
 Joining as a professional?{" "}
 <Link
 href="/partners#apply"
 className="text-foreground underline underline-offset-4"
 >
 Partner application
 </Link>
 </p>
 </div>

 <div className="relative hidden min-h-[280px] overflow-hidden border border-border lg:col-span-3 lg:block">
 <Image
 src="/images/luxurypool.jpg"
 alt=""
 fill
 className="object-cover"
 sizes="25vw"
 />
 <div className="absolute inset-0 bg-ink/25" />
 </div>

 <div className="border border-border bg-card p-6 sm:p-8 lg:col-span-4 lg:my-10">
 <h2 className="font-display text-2xl tracking-tight text-foreground">
 Schedule a consultation
 </h2>
 <p className="mt-2 text-sm text-muted-foreground">
 Required fields marked *. Location and timeline optional.
 </p>
 <div className="mt-6">
 <ContactForm idPrefix="contact" />
 </div>
 </div>
 </div>
 </section>

 <CtaBlock />
 </>
 );
}
