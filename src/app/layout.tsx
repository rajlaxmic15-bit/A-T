import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AT Buildcon | Luxury Real Estate Developer",
  description:
    "AT Buildcon creates thoughtfully designed residential and commercial developments with superior craftsmanship and timeless architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F3F4F1] text-[#0B131F] overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
