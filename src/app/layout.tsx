import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EJOR-KORE SERVICES LTD - Premier Water Treatment & Geotechnical Experts",
  description: "Nigeria's leading water treatment and geotechnical services company. Expert solutions for residential, commercial, and industrial clients.",
  keywords: "water treatment, geotechnical services, soil testing, Nigeria, environmental assessment",
  authors: [{ name: "EJOR-KORE SERVICES LTD" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
