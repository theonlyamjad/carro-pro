import type { Metadata } from "next";
import ContactClient from "./client"; 

// Define SEO metadata for the Contact page.
export const metadata: Metadata = {
  title: "Contact | CarroPro Liaison — L'Exigence Automobile à Agadir",
  description:
    "Contactez l'Atelier CarroPro à Agadir. Appelez-nous directement ou utilisez notre liaison WhatsApp d'urgence pour toute demande de pièces d'origine certifiées.",
  keywords:
    "contact carropro, téléphone carropro agadir, whatsapp carropro d'urgence, adresse atelier carropro, hub logistique agadir carrosserie, sourcing pièces origine agadir",
  openGraph: {
    title: "Liaison Directe | CarroPro Atelier — Agadir Hub",
    description:
      "Atelier ouvert du Lundi au Samedi. Liaison rapide Phone/WhatsApp disponible pour professionnels et particuliers à Agadir.",
  },
};

export default function ContactPage() {
  // We simply return the dynamic client component.
  return <ContactClient />;
}