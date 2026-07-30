import Link from "next/link";
import { ArrowButton } from "@/components/site/arrow-button";

/** Temporary multi-page shell until P3-P7 fill content. */
export function PageStub({
 title,
 eyebrow,
 description,
}: {
 title: string;
 eyebrow: string;
 description: string;
}) {
 return (
 <div className="container-site pb-24 pt-36 md:pt-44">
 <p className="eyebrow">{eyebrow}</p>
 <h1 className="display-lg mt-5 max-w-3xl text-4xl text-foreground md:text-6xl">
 {title}
 </h1>
 <p className="body-lg mt-6 max-w-2xl">{description}</p>
 <p className="mt-4 max-w-xl text-sm text-stone">
 This page is a wired route stub. Full Shadcnspace sections land in the next build waves.
 </p>
 <div className="mt-10 flex flex-wrap gap-4">
 <ArrowButton href="/contact">Begin your journey</ArrowButton>
 <Link
 href="/"
 className="inline-flex h-12 items-center text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
 >
 Back to home
 </Link>
 </div>
 </div>
 );
}
