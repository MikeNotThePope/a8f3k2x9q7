import type { Metadata } from "next";
import { Space_Grotesk, Archivo_Black, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/Sonner";
import "./globals.css";

const sansFont = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const headFont = Archivo_Black({
  variable: "--font-head",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const monoFont = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Substrate UI — Neobrutalist React Component Library",
  description:
    "A neobrutalist React component library with 80+ components built on Radix UI primitives and styled with Tailwind CSS v4. Hard shadows, bold borders, and full accessibility.",
  openGraph: {
    title: "Substrate UI — Neobrutalist React Component Library",
    description:
      "80+ accessible React components with hard shadows, bold borders, and sharp corners. Built on Radix UI + Tailwind CSS v4.",
    siteName: "Substrate UI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Substrate UI — Neobrutalist React Component Library",
    description:
      "80+ accessible React components with hard shadows, bold borders, and sharp corners. Built on Radix UI + Tailwind CSS v4.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${headFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
