import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julian Mendonca — Full-stack Software Engineer",
  description:
    "Full-stack engineer with 7 years of experience building web products end-to-end. Node, React, Next.js, TypeScript. Based in Buenos Aires, working remote.",
  openGraph: {
    title: "Julian Mendonca — Full-stack Software Engineer",
    description:
      "Full-stack engineer with 7 years of experience building web products end-to-end.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="relative font-sans antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 noise opacity-[0.35]" />
        {children}
      </body>
    </html>
  );
}
