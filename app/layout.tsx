import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://diegoadrian.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Diego Adrian Barra Paredes",
  description:
    "Diego Adrian Barra Paredes · Fullstack Developer desde La Paz, Bolivia. TypeScript, Node.js, React, Vue y Nest.js. Ingeniero, docente de postgrado y creador de add_code.",
  authors: [{ name: "Diego Adrian Barra Paredes" }],
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Diego Barra",
    "Diego Adrian Barra Paredes",
    "Fullstack Developer",
    "@add_code",
    "La Paz",
    "Bolivia",
    "TypeScript",
    "Node.js",
    "React",
    "Flutter",
    "Vue",
    "Nestjs",
    "Nextjs",
    "UX/UI",
    "AWS",
    "Terraform"
  ],
  openGraph: {
    title: "Diego Barra — Fullstack Developer",
    description:
      "Fullstack Developer desde La Paz, Bolivia. TypeScript · Node.js · React · Nest.js.· Flutter.· New Relic.· AWS· Terraform.· Vuejs.",
    type: "website",
    url: SITE_URL,
    siteName: "Diego Adrian Barra Paredes",
    locale: "es_ES",
    images: [
      {
        url: "/diego-v3.png",
        alt: "Diego Adrian Barra Paredes — Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Barra — Fullstack Developer",
    description:
      "Fullstack Developer desde La Paz, Bolivia. TypeScript · Node.js · React · Nest.js.",
    site: "@_addcode_",
    creator: "@_addcode_",
    images: ["/diego-v3.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Diego Adrian Barra Paredes",
  alternateName: "Diego Barra",
  url: SITE_URL,
  image: `${SITE_URL}/diego-v3.png`,
  jobTitle: "Fullstack Developer",
  email: "mailto:adry.dabp@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Paz",
    addressCountry: "BO",
  },
  worksFor: {
    "@type": "Organization",
    name: "Acid Labs",
  },
  sameAs: [
    "https://github.com/diego-adrian",
    "https://www.linkedin.com/in/diego-adrian-barra-paredes/",
    "https://twitter.com/_addcode_",
    "https://www.youtube.com/@add_code",
    "https://medium.com/@adry.dabp",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
