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

export const metadata: Metadata = {
  title: "Diego Adrian Barra Paredes",
  description:
    "Diego Adrian Barra Paredes · Fullstack Developer desde La Paz, Bolivia. TypeScript, Node.js, React, Vue y Nest.js. Ingeniero, docente de postgrado y creador de add_code.",
  authors: [{ name: "Diego Adrian Barra Paredes" }],
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
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
