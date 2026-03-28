import type { Metadata } from "next";
import { Space_Grotesk, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
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

const headFont = Bricolage_Grotesque({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
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
      suppressHydrationWarning
      className={`${sansFont.variable} ${headFont.variable} ${monoFont.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem("substrateui-theme");var c=localStorage.getItem("substrateui-color-theme");var s=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches);d.classList.add(s?"dark":"light");if(c&&c!=="blue")d.classList.add("theme-"+c)}catch(e){}})()`,
          }}
        />
      </head>
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
