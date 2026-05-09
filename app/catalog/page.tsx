

import type { Metadata } from "next";
import CatalogClient from "./client"; 

export const metadata: Metadata = {
  title: "Catalogue | CarroPro – Pièces d'Origine Vérifiées",
  description:
    "Parcourez notre catalogue technique de pièces carrosserie d'origine certifiées à Agadir. Pare-chocs, phares, ailes, capots et accessoires pour toutes marques.",
  keywords:
    "catalogue pièces carrosserie, pièces d'origine occasion, pare-choc Agadir, phare occasion Maroc, ailes voiture, capot moteur, accessoires auto Agadir, CarroPro",
  openGraph: {
    title: "CarroPro Catalog — L'Index Technique des Pièces d'Origine",
    description:
      "Plus de 1000 références de pièces carrosserie d'origine testées et validées, disponibles immédiatement à Agadir.",
  },
};

export default function CatalogPage() {
  return <CatalogClient />;
}