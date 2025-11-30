import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageHeader from "@/components/page-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Promptpad",
  description: "Build better prompts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-16 px-16 bg-zinc-50 dark:bg-black sm:items-start">
              <PageHeader className="mb-8"/>
              {children}
          </main>
        </div>
      </body>
    </html>
  );
}
