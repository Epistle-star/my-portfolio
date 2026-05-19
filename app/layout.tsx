import type { Metadata } from "next";
import { Space_Grotesk, Source_Serif_4 } from "next/font/google";

import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const canonicalUrl = new URL(siteUrl);

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: canonicalUrl,
  title: {
    default: "Ebube Epistle Onunwor | Backend Engineer & Technical Lead",
    template: "%s | Ebube Epistle Onunwor",
  },
  description:
    "Official portfolio of Ebube Epistle Onunwor (Epistle Onunwor), Backend Engineer and Technical Lead building scalable APIs, SaaS systems, and reliable backend architecture.",
  applicationName: "Ebube Epistle Onunwor Portfolio",
  keywords: [
    "Ebube",
    "Epistle",
    "Onunwor",
    "Ebube Epistle Onunwor",
    "Epistle Onunwor",
    "Ebube Onunwor",
    "Backend Engineer",
    "Technical Lead",
    "Node.js Developer",
    "NestJS Developer",
    "Software Engineer Port Harcourt",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ebube Epistle Onunwor Portfolio",
    title: "Ebube Epistle Onunwor | Backend Engineer & Technical Lead",
    description:
      "Official portfolio of Ebube Epistle Onunwor, Backend Engineer and Technical Lead focused on scalable backend systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebube Epistle Onunwor | Backend Engineer & Technical Lead",
    description:
      "Portfolio of Ebube Epistle Onunwor (Epistle Onunwor), Backend Engineer and Technical Lead.",
  },
  creator: "Ebube Epistle Onunwor",
  authors: [{ name: "Ebube Epistle Onunwor" }],
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ebube Epistle Onunwor",
  alternateName: [
    "Epistle Onunwor",
    "Ebube Onunwor",
    "Ebube",
    "Epistle",
    "Onunwor",
  ],
  jobTitle: "Backend Engineer & Technical Lead",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  sameAs: [
    "https://github.com/Epistle-star",
    "https://www.linkedin.com/in/ebube-onunwor-a0912a368",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sourceSerif.variable} h-full antialiased`}
      suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s==='dark'||s==='light'?s:(d?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8 md:px-10 md:py-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
