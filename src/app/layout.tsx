import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "100x Marketers - AI Marketing Mastery",
  description: "Transform your marketing career with AI. Master cutting-edge tools, build revenue-generating campaigns, and become the marketing wizard your company needs.",
  keywords: "AI marketing, marketing automation, artificial intelligence, digital marketing, marketing tools",
  authors: [{ name: "100x Marketers" }],
  openGraph: {
    title: "100x Marketers - AI Marketing Mastery",
    description: "Transform your marketing career with AI. Master cutting-edge tools and build revenue-generating campaigns.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "100x Marketers - AI Marketing Mastery",
    description: "Transform your marketing career with AI. Master cutting-edge tools and build revenue-generating campaigns.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-[#0A0A0A] via-[#1A1A2E] to-[#16213E] text-white antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
