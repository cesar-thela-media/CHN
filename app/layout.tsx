import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Instrument_Sans({
 subsets: ["latin"],
 variable: "--font-sans-loaded",
 display: "swap",
});

const display = Cormorant_Garamond({
 subsets: ["latin"],
 weight: ["400", "500", "600"],
 variable: "--font-display-loaded",
 display: "swap",
});

export const metadata: Metadata = {
 metadataBase: new URL(site.url),
 title: {
 default: `${site.name} | Luxury Custom Home Builder`,
 template: `%s | ${site.name}`,
 },
 description: site.description,
 authors: [{ name: site.name }],
 creator: site.name,
 publisher: site.name,
 keywords: [
 "custom home builder",
 "luxury home construction",
 "custom home design",
 "white glove home building",
 "home building services",
 "Custom Home Network",
 ],
 openGraph: {
 type: "website",
 locale: "en_US",
 url: site.url,
 siteName: site.name,
 title: `${site.name} | Luxury Custom Home Builder`,
 description: site.description,
 images: [
 {
 url: site.assets.ogImage,
 width: 1200,
 height: 630,
 alt: `${site.name}, ${site.tagline}`,
 },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title: `${site.name} | Luxury Custom Home Builder`,
 description: site.description,
 images: [site.assets.ogImage],
 },
 robots: { index: true, follow: true },
 icons: {
 icon: "/favicon.ico",
 },
};

export const viewport: Viewport = {
 themeColor: "#080807",
 width: "device-width",
 initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en" className={`${sans.variable} ${display.variable}`}>
 <body className="min-h-dvh font-sans">
 <Header />
 <main className="min-h-[50vh]">{children}</main>
 <Footer />
 <Toaster theme="dark" position="top-center" richColors closeButton />
 </body>
 </html>
 );
}
