import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Anek_Telugu } from "next/font/google"
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "Ayoub Ala - Software Engineer",
  description: "Full Stack Engineer Junior specialized in Angular, Spring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(GeistSans.variable, AnekTelugu, "font-sans h-full")}
        >
        {children}
      </body>
    </html>
  );
}
