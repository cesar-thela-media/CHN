import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="container-site max-w-3xl py-28">
      <h1 className="text-4xl text-foreground">Terms of Use</h1>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        By using {site.name}'s website you agree to use it for lawful purposes only. Content is
        provided for general information about our complimentary network services. Partner
        relationships and incentives may vary; final terms are confirmed in writing. This page is a
        placeholder for counsel-approved legal copy.
      </p>
    </div>
  );
}
