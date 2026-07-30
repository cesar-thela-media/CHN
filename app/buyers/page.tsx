import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import AboutUs from "@/components/shadcn-space/blocks/about-us-03/about-us";
import { PageHero } from "@/components/site/page-hero";
import { ProcessBlock } from "@/components/site/home/process-block";
import { CtaBlock } from "@/components/site/home/cta-block";
import { ContactForm } from "@/components/site/contact-form";
import { FadeIn } from "@/components/site/fade-in";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
 title: "For Buyers",
 description:
 "Complimentary white-glove guidance for homeowners building a custom home, from land to keys. Partner-funded service and a 0.5% builder bonus.",
};

const buyerFaqs = [
 {
 question: "Is Custom Home Network really free for homeowners?",
 answer:
 "Yes. Our white-glove guidance is complimentary. Network partners fund our role so you receive dedicated oversight without an invoice from us.",
 },
 {
 question: "What is the 0.5% builder bonus?",
 answer:
 "We pre-negotiate an exclusive 0.5% builder bonus for clients in the network, additional value that typically isn’t available when you approach a builder alone.",
 },
 {
 question: "Who is this for?",
 answer:
 "Homeowners and relocators who want a custom home with calm coordination, land, architecture, build, finance, title, and interiors, without assembling every specialist themselves.",
 },
 {
 question: "Do I still choose my own architect or builder?",
 answer:
 "You stay in control. We introduce vetted partners aligned to your vision, budget, and timeline. You approve who you work with at every step.",
 },
 {
 question: "When should I start?",
 answer:
 "Ideally before land is under contract, but we also help mid-journey when a project needs better coordination. Start with a complimentary consultation.",
 },
];

const valueStats = [
 { count: "$0", title: "Fee for our white-glove service" },
 { count: "0.5%", title: "Builder bonus negotiated for you" },
 { count: "1", title: "Coordinated path, concept to keys" },
];

export default function BuyersPage() {
 return (
 <>
 <PageHero
 blockId="hero-02"
 eyebrow="For buyers & relocators"
 title="Your home. Our network. No fee for the journey."
 description="Complimentary white-glove guidance through a vetted network, so building feels inspiring, not like another job you manage alone."
 image="/images/pinnaclebuilding.jpeg"
 primaryCta={{ href: "#schedule", label: "Schedule consultation" }}
 secondaryCta={{ href: "/services", label: "Explore services" }}
 />

 <AboutUs
 aboutusData={valueStats}
 eyebrow="The value"
 headline="Partner-funded. Client-first."
 blurb="We orchestrate land, design, construction, and finance partners so nothing important falls between firms, while you keep the keys (and the 0.5% bonus)."
 imageSrc="/images/unlockvalue.jpg"
 />

 <section data-shadcn-space="feature-01" className="border-b border-border py-16 md:py-24">
 <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
 <FadeIn>
 <p data-fade className="eyebrow">
 How the network works
 </p>
 <h2 data-fade className="display-lg mt-4 text-3xl text-foreground md:text-5xl">
 One relationship. Every critical discipline.
 </h2>
 <p data-fade className="body-lg mt-5">
 Realtors, architects, builders, finance, title, and interiors, introduced when you need
 them, coordinated so you never rebuild the same conversation six times.
 </p>
 <ul data-fade className="mt-8 space-y-4 text-sm text-muted-foreground">
 {[
 "Dedicated oversight from first conversation through move-in",
 "Vetted specialists, craft and calm execution, not volume marketing",
 "Clear economics: our service is complimentary to you",
 ].map((line) => (
 <li key={line} className="flex gap-3 border-t border-border pt-4 first:border-0 first:pt-0">
 <span className="text-cream">, </span>
 {line}
 </li>
 ))}
 </ul>
 </FadeIn>
 <div className="img-frame relative aspect-[4/3] overflow-hidden">
 <Image
 src="/images/custombuilding.jpg"
 alt="Custom home under careful construction"
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 50vw"
 />
 </div>
 </div>
 </section>

 <section className="border-b border-border bg-elevated/20 py-16 md:py-20">
 <div className="container-site">
 <p className="eyebrow">What to expect</p>
 <h2 className="display-lg mt-4 max-w-2xl text-3xl text-foreground md:text-4xl">
 A calm sequence, not a scramble.
 </h2>
 <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 {processSteps.map((step) => (
 <div
 key={step.step}
 className="border border-border bg-card/40 p-6"
 >
 <p className="font-mono text-xs text-stone">{step.step}</p>
 <h3 className="mt-3 font-display text-2xl text-foreground">{step.title}</h3>
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
 {step.description}
 </p>
 </div>
 ))}
 </div>
 <p className="mt-8 text-sm text-muted-foreground">
 Prefer the full narrative timeline?{" "}
 <Link href="/#process" className="text-foreground underline underline-offset-4">
 See the journey on the homepage
 </Link>
 .
 </p>
 </div>
 </section>

 <ProcessBlock />

 <Faq
 items={buyerFaqs}
 eyebrow="Buyer FAQs"
 title="Clear answers before you commit a lot of energy."
 />

 <section
 id="schedule"
 data-shadcn-space="contact-01"
 className="border-t border-border bg-elevated/25 py-16 md:py-24"
 >
 <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
 <div>
 <p className="eyebrow">Schedule</p>
 <h2 className="display-lg mt-4 text-3xl text-foreground md:text-4xl">
 Start with a complimentary consultation.
 </h2>
 <p className="body-lg mt-5">
 Share where you are in the journey, we’ll respond with a private conversation, not a
 sales script. Or{" "}
 <Link href="/contact" className="text-foreground underline underline-offset-4">
 open the full contact page
 </Link>
 .
 </p>
 </div>
 <div className="rounded-sm border border-border bg-card p-6 md:p-8">
 <ContactForm />
 </div>
 </div>
 </section>

 <CtaBlock />
 </>
 );
}
