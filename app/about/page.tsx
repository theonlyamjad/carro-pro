import type { Metadata } from "next";
import AboutClient from "./client"; 

export const metadata: Metadata = {
  title: "À Propos | CarroPro Atelier — L'Exigence Automobile à Agadir",
  description:
    "Découvrez l'histoire, la vision et les engagements techniques de CarroPro, votre référence pour les pièces carrosserie d'origine vérifiées OEM à Agadir.",
  keywords:
    "à propos carropro, histoire carropro agadir, vision carropro, engagements techniques carropro, pièces carrosserie origine occasion maroc, OEM carropro",
  openGraph: {
    title: "À Propos | CarroPro Atelier — Qui sommes-nous ?",
    description:
      "La référence technique pour les composants automobile d'origine testés et certifiés à Agadir. Découvrez notre structure et nos piliers.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}