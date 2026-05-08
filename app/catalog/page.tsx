import type { Metadata } from "next";
import { Search, SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Catalogue | CarroPro – Pièces Carrosserie d'Occasion",
  description:
    "Parcourez notre catalogue de pièces carrosserie d'occasion : pare-chocs, phares, ailes, capots, accessoires pour toutes marques.",
};

const categories = [
  "Tous",
  "Pare-choc",
  "Phares",
  "Ailes",
  "Capot",
  "Accessoires",
];

const demoParts = [
  { id: 1, name: "Pare-choc Avant", brand: "Dacia Logan", year: "2015-2020", state: "Bon état", cat: "Pare-choc" },
  { id: 2, name: "Phare Gauche", brand: "Peugeot 208", year: "2012-2018", state: "Très bon état", cat: "Phares" },
  { id: 3, name: "Aile Avant Droite", brand: "Renault Clio 4", year: "2013-2019", state: "Bon état", cat: "Ailes" },
  { id: 4, name: "Capot Moteur", brand: "Volkswagen Golf 6", year: "2009-2012", state: "Excellent", cat: "Capot" },
  { id: 5, name: "Pare-choc Arrière", brand: "Toyota Yaris", year: "2016-2020", state: "Bon état", cat: "Pare-choc" },
  { id: 6, name: "Phare Droit + Gauche", brand: "Hyundai i10", year: "2014-2018", state: "Bon état", cat: "Phares" },
  { id: 7, name: "Aile Arrière Gauche", brand: "Citroën C3", year: "2017-2022", state: "Très bon état", cat: "Ailes" },
  { id: 8, name: "Rétroviseur Droit", brand: "Ford Focus", year: "2011-2015", state: "Bon état", cat: "Accessoires" },
  { id: 9, name: "Capot Coffre", brand: "Kia Picanto", year: "2018-2022", state: "Excellent", cat: "Capot" },
  { id: 10, name: "Pare-choc Avant", brand: "Mercedes Classe A", year: "2013-2018", state: "Très bon état", cat: "Pare-choc" },
  { id: 11, name: "Phare Full LED Gauche", brand: "BMW Série 3", year: "2015-2019", state: "Bon état", cat: "Phares" },
  { id: 12, name: "Poignée Porte", brand: "Fiat Punto", year: "2012-2016", state: "Bon état", cat: "Accessoires" },
];

const stateColor: Record<string, string> = {
  "Excellent": "text-green-400 border-green-400/30 bg-green-400/10",
  "Très bon état": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "Bon état": "text-[#a0a0a0] border-[#555]/30 bg-[#1e1e1e]",
};

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Page header */}
      <div className="bg-[#0d0d0d] border-b border-[#1e1e1e] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[3px] bg-[#e01c1c]" />
            <span className="font-display text-sm tracking-[0.3em] text-[#e01c1c]">
              NOS PIÈCES
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-white">
            CATALOGUE
          </h1>
          <p className="text-[#a0a0a0] mt-3">
            Pièces carrosserie d'occasion pour toutes marques — testées et garanties.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Filters bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555555]" />
            <input
              type="text"
              placeholder="Rechercher une pièce, marque..."
              className="w-full bg-[#0d0d0d] border border-[#1e1e1e] text-white placeholder-[#555555] pl-9 pr-4 py-3 text-sm focus:border-[#e01c1c] focus:outline-none transition-colors"
            />
          </div>
          {/* Category filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`font-display text-xs tracking-widest px-4 py-3 border transition-colors ${
                  cat === "Tous"
                    ? "bg-[#e01c1c] border-[#e01c1c] text-white"
                    : "border-[#1e1e1e] text-[#a0a0a0] hover:border-[#e01c1c] hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {demoParts.map((part) => (
            <div
              key={part.id}
              className="group bg-[#0d0d0d] border border-[#1e1e1e] hover:border-[#e01c1c] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-[#111] flex items-center justify-center relative overflow-hidden">
                <div className="text-5xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                  🚗
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Category badge */}
                <span className="absolute top-3 left-3 font-display text-xs tracking-widest bg-[#e01c1c] text-white px-2 py-1">
                  {part.cat.toUpperCase()}
                </span>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-display text-base tracking-wide text-white mb-1 group-hover:text-[#e01c1c] transition-colors">
                  {part.name}
                </h3>
                <p className="text-[#a0a0a0] text-sm mb-1">{part.brand}</p>
                <p className="text-[#555555] text-xs mb-3">{part.year}</p>

                <div className="flex items-center justify-between">
                  <span
                    className={`font-display text-xs tracking-widest border px-2 py-1 ${stateColor[part.state] ?? stateColor["Bon état"]}`}
                  >
                    {part.state.toUpperCase()}
                  </span>
                  <a
                    href="tel:0635620605"
                    className="font-display text-xs tracking-widest text-[#e01c1c] hover:text-white transition-colors"
                  >
                    APPELER →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border border-[#1e1e1e] p-8 text-center">
          <p className="text-[#a0a0a0] mb-4">
            Vous ne trouvez pas la pièce recherchée ? Contactez-nous directement.
          </p>
          <a
            href="tel:0635620605"
            className="inline-flex items-center gap-2 bg-[#e01c1c] hover:bg-[#b01414] text-white font-display tracking-widest px-6 py-3 transition-colors"
          >
            NOUS CONTACTER
          </a>
        </div>
      </div>
    </div>
  );
}