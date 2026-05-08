import type { Metadata } from "next";
import { Barlow_Condensed, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  weight: [ "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CarroPro – Pièces Carrosserie d'Occasion | Agadir",
  description:
    "Pièces carrosserie d'occasion pour toutes marques. Pare-chocs, phares, ailes, capots — qualité garantie, prix imbattables à Agadir.",
  keywords:
    "pièces carrosserie occasion, pare-choc, phare, aile voiture, capot, Agadir, Maroc, CarroPro",
  openGraph: {
    title: "CarroPro — La Bonne Pièce. Au Bon Prix.",
    description: "Pièces carrosserie d'occasion pour toutes marques à Agadir.",
    type: "website",
    locale: "fr_MA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${barlowCondensed.variable} ${instrumentSans.variable}`}>
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}