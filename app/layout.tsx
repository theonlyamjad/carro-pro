import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Instrument_Sans } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/layout/TransitionProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"


const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700", "900"], 
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
  preload: true,
});

const siteUrl = "https://carropro.ma"; 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CarroPro Atelier | Pièces Carrosserie d'Origine Vérifiées Agadir",
    template: "%s | CarroPro Atelier — Agadir Hub", 
  },
  description:
    "La référence d'Agadir pour les pièces de carrosserie d'occasion d'origine vérifiées OEM. Pare-chocs, phares, ailes, capots testés et validés pour toutes marques.",
  keywords: [
    "pièces carrosserie d'occasion Agadir", "CarroPro Atelier", "pièces d'origine vérifiées",
    "pare-choc d'occasion", "phare voiture", "aile voiture", "OEM Maroc"
  ],
  authors: [{ name: "CarroPro Atelier", url: siteUrl }],
  creator: "CarroPro Automotive Systems",
  publisher: "CarroPro Atelier",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CarroPro Atelier | L'Exigence Automobile à Agadir",
    description: "Pièces carrosserie d'occasion d'origine certifiées à Agadir.",
    url: siteUrl,
    siteName: "CarroPro Atelier",
    images: [{ url: "/carropro-og-main.png", width: 1200, height: 630, alt: "CarroPro Atelier Agadir" }],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarroPro Atelier | Pièces Carrosserie d'Origine Agadir",
    description: "Vérifiées OEM. Validées structurellement.",
    images: ["/images/carropro-og-main.jpg"], 
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", 
};

export const viewport: Viewport = {
  themeColor: "#020202",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, 
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "CarroPro Atelier Agadir",
    image: `${siteUrl}/images/carropro-og-main.jpg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: "+212635620605",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hay El Farah",
      addressLocality: "Agadir",
      postalCode: "80000",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.3959,
      longitude: -9.5578,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <html
      lang="fr"
      className={`${barlowCondensed.variable} ${instrumentSans.variable} scroll-smooth`}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased selection:bg-[#cc1f1f]/20 selection:text-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-[#cc1f1f] focus:px-4 focus:py-2 focus:text-white">
          Passer au contenu
        </a>

        <Navbar />
          <main id="main-content">
            <TransitionProvider>{children}</TransitionProvider>
          </main>
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}