"use client";

import { useState } from "react";
import Image from "next/image"; 
import { Search, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "212635620605"; 

const categories = [
  "Tous",
  "Pare-choc",
  "Phares",
  "Ailes",
  "Calandres",
  "Accessoires",
];


const demoParts = [
  { id: 1, name: "Pare-choc Avant", brand: "Dacia Logan", year: "2018+", cat: "Pare-choc", img: "/Parchoc_av_logan_2018+.png" },
  { id: 2, name: "Pare-choc Avant", brand: "Peugeot 208", year: "2019", cat: "Pare-choc",  img: "/Parchoc_p208_2019.png" },
  { id: 3, name: "Pare-choc Avant", brand: "Skoda Octavia", year: "2018+", cat: "Pare-choc",  img: "/Parchoc_octavia_2018+.png" },
  { id: 4, name: "Calandre Centrale", brand: "Peugeot 208", year: "2021+", cat: "Calandres",  img: "/Calandre_p208_2021+.png" },
  { id: 5, name: "Calandre Centrale", brand: "Dacia Sandero Stepway", year: "2018+", cat: "Calandres",  img: "/Calandre_sandero_stepway_2018+.png" },
  { id: 6, name: "Aile Avant", brand: "Dacia Logan", year: "2022+", cat: "Ailes",  img: "/Aile_av_logan_2022+.png" },
  { id: 7, name: "Grille de Phare", brand: "Dacia Logan", year: "2024+", cat: "Accessoires", img: "/Grille_phs_logan_2024+.png" },
  { id: 8, name: "Grille de Phare", brand: "Dacia Stepway", year: "2022+", cat: "Accessoires",  img: "/Grille_phs_stepway_2022+.png" },
];

export default function CatalogClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredParts = demoParts.filter((part) => {
    const matchesSearch = 
      searchTerm === "" || 
      part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = 
      activeCategory === "Tous" || 
      part.cat === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const getWhatsAppLink = (partName: string) => {
    const message = `Bonjour CarroPro, je suis intéressé par la pièce :\n*${partName}*\nEst-elle disponible ?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#020202] pt-24 md:pt-32 pb-24 overflow-hidden relative">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20 pointer-events-none" />

      <header className="max-w-7xl mx-auto px-6 relative z-10 mb-12 lg:mb-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <span className="h-0.5 w-12 bg-[#cc1f1f] shadow-[0_0_10px_#cc1f1f]" />
              <span className="font-display text-[0.6rem] md:text-[0.65rem] tracking-[0.5em] uppercase text-[#cc1f1f] font-900">
                Index Techniques
              </span>
            </div>
            <h1 className="font-display font-900 text-5xl md:text-6xl lg:text-9xl text-white tracking-tighter uppercase leading-[0.85]">
              Catalogue <br />
              <span className="italic text-white/20">Composants</span>
            </h1>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 border border-white/5 bg-[#050505] p-4 md:p-6 flex flex-col gap-6">
          <div className="relative w-full">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#cc1f1f]" />
            <label htmlFor="search-parts" className="sr-only">Rechercher une pièce</label>
            <input
              id="search-parts"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Réf / Marque / Modèle"
              className="w-full bg-white/2 border border-white/10 text-white placeholder-white/50 pl-11 pr-4 py-4 font-display text-[0.7rem] uppercase tracking-widest focus:border-[#cc1f1f] focus:outline-none transition-colors"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={cat === activeCategory}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap font-display text-[0.6rem] font-800 tracking-[0.25em] px-5 py-3 transition-all uppercase ${
                  cat === activeCategory
                    ? "bg-[#cc1f1f] text-white"
                    : "bg-white/2 border border-white/5 text-white/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredParts.map((part) => (
            <article
              key={part.id}
              className="group bg-[#080808] border border-white/5 p-6 md:p-8 flex flex-col min-h-110 transition-all relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-[0.6rem] font-900 tracking-[0.3em] text-[#cc1f1f]">
                  {part.cat.toUpperCase()}
                </span>
              </div>
              <div className="aspect-square bg-linear-to-b from-[#0a0a0a] to-[#020202] flex items-center justify-center relative border border-white/3 mb-6 overflow-hidden group/img">
                <div className="relative w-full h-full p-4">
                  {part.img ? (
                      <Image 
                        src={part.img} 
                        alt={`${part.name} ${part.brand}`} 
                        fill
                        className="object-contain transition-transform duration-700 ease-out group-hover/img:scale-125"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-white/20 text-[0.5rem] font-display uppercase tracking-widest">No Signal</span>
                      </div>
                    )}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="font-display font-800 text-xl text-white uppercase tracking-tighter mb-1">
                  {part.name}
                </h2>
                <p className="text-white/60 text-[0.6rem] tracking-[0.2em] uppercase font-light">
                  {part.brand} — {part.year}
                </p>
              </div>

              <div className="mt-auto">
                <a 
                  href={getWhatsAppLink(part.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`S'informer sur WhatsApp pour ${part.name}`}
                  className="w-full bg-white/3 hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] text-white font-display font-900 text-[0.65rem] uppercase tracking-[0.2em] py-4 flex items-center justify-center gap-3 transition-all duration-300"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>S'informer</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredParts.length === 0 && (
          <div className="text-center py-20 border border-white/5 bg-[#080808]">
             <p className="text-white/60 font-display uppercase tracking-widest text-xs">Aucune pièce trouvée</p>
          </div>
        )}
      </section>
    </div>
  );
}