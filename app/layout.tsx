import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CarroPro – Pièces Carrosserie d'Occasion | Agadir",
  description:
    "CarroPro vous propose des pièces carrosserie d'occasion de qualité pour toutes marques : pare-chocs, phares, ailes, capots et accessoires auto. Prix compétitifs, service rapide à Agadir.",
  keywords:
    "pièces carrosserie occasion, pare-choc occasion, phare occasion, aile voiture, capot occasion, Agadir, Maroc, CarroPro",
  openGraph: {
    title: "CarroPro – La Référence pour Vos Pièces Carrosserie d'Occasion",
    description:
      "Qualité • Prix • Service. Pièces carrosserie d'occasion pour toutes marques de voitures.",
    type: "website",
    locale: "fr_MA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${bebas.variable} ${barlow.variable}`}>
      <body className="bg-black text-white font-barlow antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}