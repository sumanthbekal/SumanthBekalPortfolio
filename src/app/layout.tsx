import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F3EE",
};

export const metadata: Metadata = {
  title: "Sumanth Bekal — AI Engineer & Shopify Developer",
  description:
    "Portfolio of Sumanth Bekal, an AI Engineer and Shopify Developer building intelligent systems, commerce automation, and real-world computer vision solutions.",
  keywords: [
    "Sumanth Bekal",
    "AI Engineer",
    "Shopify Developer",
    "Computer Vision",
    "YOLOv8",
    "E-commerce Developer",
    "Machine Learning",
  ],
  authors: [{ name: "Sumanth Bekal" }],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable} ${oswald.variable}`}>
      <body className="bg-[#F5F3EE] text-[#111111] antialiased selection:bg-[#C7F000] selection:text-black">
        {children}
      </body>
    </html>
  );
}
