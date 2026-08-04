import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="container-site max-w-3xl py-28">
      <h1 className="text-4xl text-foreground">Privacy Policy</h1>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        {site.name} respects your privacy. Information submitted through our contact and newsletter
        forms is used solely to respond to your inquiry and improve our services. We do not sell
        personal data. Contact{" "}
        <a className="text-foreground underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>{" "}
        with privacy questions. This page is a placeholder for counsel-approved legal copy.
      </p>
    </div>
  );
}
