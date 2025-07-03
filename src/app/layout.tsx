import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "100x Engineers - Become a Generative-AI Wizard",
  description: "From Zero to Pro in 6 months. NOT another ChatGPT course.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <Header />
        {children}
        <Footer />
        
        {/* Floating Chat Widgets - Matching Screenshot */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          {/* Chat with us button */}
          <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200 flex items-center gap-2 hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <span className="text-gray-700 font-medium">Chat with us</span>
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:bg-[#FF5A1F] transition-colors">
              <span className="text-white text-xs">💬</span>
            </div>
          </div>
          
          {/* WhatsApp button */}
          <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-110">
            <span className="text-white text-2xl">📱</span>
          </div>
        </div>
      </body>
    </html>
  );
}
