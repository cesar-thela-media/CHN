/**
 * Global footer adapted from Shadcnspace `footer-02`
 */
import Link from "next/link";
import { NewsletterForm } from "@/components/site/newsletter-form";
import { ArrowButton } from "@/components/site/arrow-button";
import { Separator } from "@/components/ui/separator";
import { footerNav } from "@/lib/navigation";
import { site } from "@/lib/site";
import { chnCopy } from "@/lib/chn-copy";

export function Footer() {
 return (
 <footer
 data-chn-chrome="shadcn-space-footer-02"
 className="border-t border-border bg-ink"
 >
 <div className="container-site py-14 md:py-20">
 <div className="flex flex-col gap-14 md:gap-16">
 <div className="grid gap-8 md:grid-cols-12 md:items-center">
 <div className="md:col-span-4">
 <p className="eyebrow">{chnCopy.newsletter.cta}</p>
 <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
 {chnCopy.newsletter.body}
 </p>
 </div>
 <div className="md:col-span-8">
 <NewsletterForm submitLabel={chnCopy.newsletter.cta} />
 <p className="mt-3 text-xs text-stone">
 By subscribing you agree to receive updates from {site.name}. Unsubscribe anytime.
 </p>
 </div>
 </div>

 <Separator className="bg-border" />

 <div className="grid gap-12 md:grid-cols-12">
 <div className="md:col-span-6 lg:col-span-5">
 <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
 Let’s craft your home. Together.
 </h2>
 <div className="mt-8">
 <ArrowButton href="/contact">{site.ctaPrimary}</ArrowButton>
 </div>
 </div>

 <div className="hidden md:col-span-1 md:block lg:col-span-2" />

 {footerNav.map((col) => (
 <div key={col.title} className="md:col-span-2">
 <p className="text-[11px] uppercase tracking-[0.2em] text-stone">
 {col.title}
 </p>
 <ul className="mt-4 space-y-3">
 {col.links.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}

 <div className="md:col-span-2">
 <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Connect</p>
 <a
 href={`mailto:${site.email}`}
 className="mt-4 block text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
 >
 {site.email}
 </a>
 <p className="mt-4 text-xs leading-relaxed text-stone">
 {site.serviceArea}
 </p>
 <p className="mt-2 text-xs text-stone">{site.hours}</p>
 </div>
 </div>

 <div className="flex flex-col justify-between gap-3 border-t border-border pt-8 text-xs text-stone sm:flex-row">
 <p>
 © {new Date().getFullYear()} {site.name}. All rights reserved.
 </p>
 <p className="tracking-[0.12em] uppercase">
 Est. {site.foundingYear} · {site.builderBonus} client builder bonus
 </p>
 </div>
 </div>
 </div>
 </footer>
 );
}
