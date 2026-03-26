import type { Metadata } from "next";
import { Space_Grotesk, Archivo_Black, Space_Mono } from "next/font/google";
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
  title: "Substrate UI",
  description: "Design system built on Substrate UI",
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
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
