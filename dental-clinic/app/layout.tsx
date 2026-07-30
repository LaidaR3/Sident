import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { LanguageProvider } from "@/context/LanguageContext";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sident Dental Clinic",
  description: "Modern dental clinic in Prishtina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body className={ibmPlexSans.className}>
        <LanguageProvider>
          <Navbar />

          {children}

          <Footer />
          <CookieBanner />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}