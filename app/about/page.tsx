import type { Metadata } from "next";
import { ShieldCheck, Tag, Clock, MessageSquare, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos | CarroPro – Pièces Carrosserie d'Occasion",
  description:
    "Découvrez CarroPro, votre référence pour les pièces carrosserie d'occasion à Agadir. Qualité garantie, prix compétitifs.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Page header */}
      <div className="bg-[#0d0d0d] border-b border-[#1e1e1e] py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#e01c1c]/5" />
        <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#e01c1c]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[3px] bg-[#e01c1c]" />
            <span className="font-display text-sm tracking-[0.3em] text-[#e01c1c]">
              QUI SOMMES-NOUS
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
            À PROPOS
          </h1>
          <p className="text-[#a0a0a0] max-w-xl leading-relaxed">
            CarroPro — la référence pour vos pièces carrosserie d'occasion à Agadir.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-display text-4xl text-white mb-6">
              NOTRE <span className="text-[#e01c1c]">HISTOIRE</span>
            </h2>
            <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
              <p>
                CarroPro est né d'une passion pour l'automobile et d'un constat
                simple : trouver des pièces carrosserie de qualité à bon prix
                n'était pas toujours facile à Agadir.
              </p>
              <p>
                Nous avons créé CarroPro pour vous offrir une alternative fiable
                aux pièces neuves coûteuses — des pièces d'occasion rigoureusement
                sélectionnées, testées, et disponibles rapidement.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'être la référence locale pour
                les pièces carrosserie d'occasion, avec un stock constamment
                renouvelé pour toutes marques de véhicules.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, title: "QUALITÉ", desc: "Pièces testées et vérifiées" },
              { icon: Tag, title: "PRIX", desc: "Compétitifs pour tous" },
              { icon: Clock, title: "RAPIDITÉ", desc: "Disponible rapidement" },
              { icon: Award, title: "FIABILITÉ", desc: "Votre satisfaction en priorité" },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-[#0d0d0d] border border-[#1e1e1e] p-6 hover:border-[#e01c1c] transition-colors group"
                >
                  <Icon size={22} className="text-[#e01c1c] mb-3" />
                  <h3 className="font-display text-lg tracking-widest text-white mb-1">
                    {v.title}
                  </h3>
                  <p className="text-[#555555] text-xs">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engagement */}
        <div className="border-t border-[#1e1e1e] pt-16">
          <h2 className="font-display text-4xl text-white mb-10 text-center">
            NOS <span className="text-[#e01c1c]">ENGAGEMENTS</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1e1e1e]">
            {[
              { value: "QUALITÉ GARANTIE", desc: "Toutes les pièces sont inspectées avant la mise en vente." },
              { value: "PRIX IMBATTABLES", desc: "Les meilleurs tarifs du marché, sans compromis sur la qualité." },
              { value: "DISPONIBLE RAPIDEMENT", desc: "Stock important mis à jour en permanence pour votre besoin." },
            ].map((e) => (
              <div key={e.value} className="bg-black p-8 text-center">
                <div className="font-display text-xl text-[#e01c1c] mb-3 tracking-wide">
                  {e.value}
                </div>
                <p className="text-[#a0a0a0] text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}