import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Nakulan S V — Portfolio",
  description: "Personal portfolio of Nakulan S V — software engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans">
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
