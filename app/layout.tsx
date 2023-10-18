import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open360",
  description:
    "Open360 is a free and open source platform that helps yu keep track of the projects you are interested on.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={false}>
        <main className="max-w-10xl mx-auto bg-slate-200">
          <Navbar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
